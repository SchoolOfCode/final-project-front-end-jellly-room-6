// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import auth0 from "auth0-js";
import Iron from "@hapi/iron";

const auth = new auth0.WebAuth({
  domain: Cypress.env("auth0Domain"),
  clientID: Cypress.env("auth0ClientId"),
});

const sessionCookieName = Cypress.env("sessionCookieName");
const stateCookieName = Cypress.env("stateCookieName");

/* 1. We've move our login() code to _login() */

Cypress.Commands.add("_login", (credentials) => {
  const { username, password } = credentials;

  return new Cypress.Promise((resolve, reject) => {
    auth.client.loginWithDefaultDirectory(
      {
        username,
        password,
        audience: Cypress.env("auth0Audience"),
        scope: Cypress.env("auth0Scope"),
        client_secret: Cypress.env("auth0ClientSecret"),
      },
      (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
});

/* 2. We've added a login() helper */

Cypress.Commands.add("login", () => {
  /* 2. We retrieve our username and password from cypress.env.json */

  const credentials = {
    username: Cypress.env("auth0Username"),
    password: Cypress.env("auth0Password"),
  };

  /* 3. We set the state cookie to a random value */

  cy.setCookie(stateCookieName, "some-random-state");

  cy._login(credentials).then((response) => {
    const { accessToken, expiresIn, idToken, scope } = response;

    /* 4. We use the access token from _login() to get the user's info */

    cy.getUserInfo(accessToken).then((user) => {
      /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L44 */
      /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L47 */
      /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L57 */

      const persistedSession = {
        user,
        idToken,
        accessToken,
        accessTokenScope: scope,
        accessTokenExpiresAt: Date.now() + expiresIn,
        createdAt: Date.now(),
      };

      /* 5. We encrypt the user info */

      /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L73 */

      cy.seal(persistedSession).then((encryptedSession) => {
        /* 6. We store the encrypted session in the session cookie */

        cy.setCookie(sessionCookieName, encryptedSession);
      });
    });
  });
});

/* 8. We create a getUserInfo() helper to query Auth0 for user info, given an Auth0 access token */

Cypress.Commands.add("getUserInfo", (accessToken) => {
  return new Cypress.Promise((resolve, reject) => {
    auth.client.userInfo(accessToken, (err, user) => {
      if (err) {
        reject(err);
      }

      resolve(user);
    });
  });
});

Cypress.Commands.add("seal", (thingToEncrypt) => {
  return new Cypress.Promise((resolve, reject) => {
    try {
      /* 8. We use the Auth0 cookie secret to encrypt the session */

      Iron.seal(
        thingToEncrypt,
        Cypress.env("auth0CookieSecret"),
        Iron.defaults
      ).then((encryptedThing) => {
        resolve(encryptedThing);
      });
    } catch (error) {
      reject(error);
    }
  });
});
