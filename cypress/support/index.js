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
// import auth0 from 'auth0-js';
// import Iron from '@hapi/iron';
import "cypress-nextjs-auth0";

// const auth = new auth0.WebAuth({
//   domain: Cypress.env('auth0Domain'),
//   clientID: Cypress.env('auth0ClientId'),
// });

// Cypress.Commands.add('getUserInfo', (accessToken) => {
//   return new Cypress.Promise((resolve, reject) => {
//     auth.client.userInfo(accessToken, (err, user) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(user);
//     });
//   });
// });

// Cypress.Commands.add('_loginTestUser', (options = {}) => {
//   return new Cypress.Promise((resolve, reject) => {
//     auth.client.loginWithDefaultDirectory({
//       username: Cypress.env('auth0Username'),
//       password: Cypress.env('auth0Password'),
//       audience: Cypress.env('auth0Audience'),
//       scope: Cypress.env('auth0Scope'),
//       client_secret: Cypress.env('auth0ClientSecret'),
//     }, (err, response) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(response);
//       }
//     });
//   });
// });

// Cypress.Commands.add('seal', (thingToEncrypt) => {
//   return new Cypress.Promise((resolve, reject) => {
//     try {
//       Iron.seal(thingToEncrypt, Cypress.env('auth0CookieSecret'), Iron.defaults).then((encryptedThing) => {
//         resolve(encryptedThing);
//       });
//     } catch(error) {
//       reject(error);
//     }
//   });
// });

// Cypress.Commands.add('login', (overrides = {}) => {
//   // cy.clearCookies(); // If needed

//   /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/login.ts#L70 */

//   cy.setCookie('a0:state', 'some-random-state');

//   cy._loginTestUser().then((response) => {
//     const {
//       accessToken,
//       expiresIn,
//       idToken,
//       scope,
//       tokenType,
//     } = response;

//     cy.getUserInfo(accessToken).then((user) => {

//       /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L44 */
//       /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L47 */
//       /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L57 */

//       const persistedSession = {
//         user,
//         idToken,
//         accessToken,
//         accessTokenScope: scope,
//         accessTokenExpiresAt: Date.now() + expiresIn,
//         createdAt: Date.now(),
//       };

//       /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L73 */

//       cy.seal(persistedSession).then((encryptedSession) => {
//         cy.setCookie('a0:session', encryptedSession);
//       });
//     });
//   });
// });
