import { useUser } from '@auth0/nextjs-auth0';
import NavBar from "../src/components/NavBar";

export default function Shop(){
    const { user, error, isLoading } = useUser();
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user){
      window.location.href = "/"
    }

    return user && (<div>
    <NavBar/>
    Shop</div>)
}