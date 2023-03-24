import CartCard from "./CartCard/CartCard";

function Drawer(props) {
  console.log(props.cartShoes)

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={props.onCloseCart}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="remove-button"
          />
        </h2>

        <div className="cartItems">
          {props.cartShoes.map((cartShoe) => (
            <CartCard
              title={cartShoe.title}
              price={cartShoe.price}
              imageUrl={cartShoe.imageUrl}
              id = {cartShoe.id}
              onRemoveFromCart = {props.onRemoveFromCart}
            />
          ))}
        </div>

        <div className="cartPrice">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
