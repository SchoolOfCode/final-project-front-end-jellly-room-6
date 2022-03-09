
import { getSession } from "@auth0/nextjs-auth0";

export default async function getAuth0User(ctx){
        // Gives you the basic user info from Auth0
        const session = getSession(ctx.req, ctx.res);

        const getUsername = async () => {
          const domain = "jelllyapp.eu.auth0.com";
    
          // Try/Catch -> Try some functions and if it fails then Catch errors and log them
          try {
            // URL to fetch from (Auth0 API which gives detailed user info inc. username)
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${session.user.sub}`;
    
            // Fetching the user information stored in the Auth0 database for the user with id user.sub
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            });
    
            const data = await metadataResponse.json();
            return data;
          } catch (e) {
            console.log(e.message);
          }
        };
        // Storing username
        const username = await getUsername();
        
    
        // Send username prop into the component as 'authenticatedUser'
        return username || "No user" ;
      }