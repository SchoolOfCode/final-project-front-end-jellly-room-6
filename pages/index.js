import Link from "next/link"
import Home from "./home";
export default function LandingPage() {
  return (
    <div>
      <h1>JELLLY</h1>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/leaderboard">
        <a>Leaderboard</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/question">
        <a>Question</a>
      </Link>



      
    </div>
  );
}
