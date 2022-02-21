import NavBar from "../src/components/NavBar";
import Button from "react-bootstrap/Button"
import Image from "next/image";
import css from "../styles/index.module.css";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if(user){
    window.location.href = "/home"
  }

  return (
    
    <div>
      <NavBar/>
      <hr/>
      <Link href="/api/auth/login">
      <a><Button className={css.login}>LogIn</Button></a>
      </Link>

      <div className={css.wording}>  
      <h1 className={css.title}>JELLLY</h1>
      </div>
      <Image src="/logoJelly.png" alt="me" width="64" height="64" />
      <h2 className={css.text}>The fun, free way to learn maths and improve financial literacy</h2>
      <Button className={css.start}>Get Started</Button>
      <Image src="/threeJellies.png" alt="me" width="64" height="64"/>


      
    </div>
    
  );
}
