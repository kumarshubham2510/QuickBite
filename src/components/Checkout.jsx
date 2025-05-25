import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Modal from "./Modal";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttps from "../hooks/useHttps";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const { data, error, sendRequest, clearData } = useHttps(
    "http://localhost:3000/orders",
    requestConfig
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinishCart() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      {" "}
      <Button type="button" textOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  async function handleSubmit(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());

    const response = await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  const [formState, formActions, isSending] = useActionState(
    handleSubmit,
    null
  );
  if (isSending) {
    actions = <span>Sending Order</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinishCart}
      >
        <h2> Success! </h2>
        <p> Your order was submitted successfullt </p>
        <p> We will get back to you within the next few minutes</p>
        <p className="modal-actions">
          <Button onClick={handleFinishCart}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form action={formActions}>
        <h2>Checkout </h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" id="name" />
        <Input label="Email Address" id="email" type="email" />
        <Input label="Street Address" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
