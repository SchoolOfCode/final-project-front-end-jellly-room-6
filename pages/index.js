import Link from "next/link"
import NavBar from "../src/components/NavBar";
import Home from "./home";
import Button from "react-bootstrap/Button"
import Image from "next/image";
export default function LandingPage() {
  return (
    <div>
      
     
<Button>LogIn</Button>
<h1>JELLLY</h1>
<Image src="/logoJelly.png" alt="me" width="64" height="64" />
<h2>The fun, free way to learn maths and improve financial literacy</h2>
<Button>Get Started</Button>
<Image src="/threeJellies.png" alt="me" width="64" height="64"/>


      
    </div>
  );
}
