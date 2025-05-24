import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  function handleCart() {
    userProgressCtx.showCart();
  }

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
        <Button textOnly onClick={handleCart}>
          Cart ({cartValue})
        </Button>
      </nav>
    </header>
  );
}
