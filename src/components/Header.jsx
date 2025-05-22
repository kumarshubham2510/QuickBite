import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  const LOGO_PATH = "../assets/logo.jpg";
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Quick Bite logo " />
        <h1 id="title">QuickBite</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
