import Link from "next/link"
import NavBar from "../src/components/NavBar";
import Home from "./home";
import Button from "react-bootstrap/Button"
import Image from "next/image";
import css from "../styles/index.module.css";

export default function LandingPage() {
  return (
    <div>
      
     
<Button className={css.login}>LogIn</Button>
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
