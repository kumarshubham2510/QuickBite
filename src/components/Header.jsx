import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const cartValue = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const LOGO_PATH = "../assets/logo.jpg";
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Quick Bite logo " />
        <h1 id="title">QuickBite</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartValue})</Button>
      </nav>
    </header>
  );
}
