function Drawer() {
  return (
    <div  className="overlay">
        <div className="drawer">
          <h2>Корзина <img className="removeBtn"
                src="/img/btn-remove.svg"alt="remove-button"/></h2>

          <div className="cartItems">
            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="details">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove-button"
              />
            </div>

            <div className="cartItem">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="details">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove-button"
              />
            </div>
          </div>

          <div className="cartPrice">
            <ul>
              <li className="cartPriceTotal">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>

              <li className="cartPriceTax">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
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
