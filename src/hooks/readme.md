# HOW TO USE:

<br/>

* ### At the top of the page file, add:  

```  
import useRetrieveAuth0User from "../src/hooks/useRetrieveAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
```
<br/>

* ### In the export default function PAGENAME (e.g Home, Shop etc), add username as a prop, eg: 



```
export default function Profile({username}){ ... }
```
<br/>

* ### Add these 2 hooks to fetch the info for the user and ensure the user is logged in to access this page:

```
const { user, error, isLoading } = useUser();
const userInfo = useUserInfo(username)
```

* ### We can now access all info on our user (userInfo.user_id, userInfo.beans, etc..)

<br/>

* ### It should also be safe to remove this check now:

```
if (!user) {
    window.location.href = "/";
  }
```
<br/>

* ### At the very bottom of the file, replace getServerSideProps with:

```
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return {
      props:{
        username: await useRetrieveAuth0User(ctx)
        //Add any other props here if needed for more fetching
    }}
  },
});
```

