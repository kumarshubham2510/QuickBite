import logo from "../assets/logo.jpg";

export default function Header() {
  const LOGO_PATH = "../assets/logo.jpg";
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Quick Bite logo " />
        <h1 id="title">QuickBite</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
