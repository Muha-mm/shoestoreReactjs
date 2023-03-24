import React from "react";

function CartCard(props) {
  return (
    
    <div className="cartItem">
      <div
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        className="cartItemImg"
      ></div>

      <div className="details">
        <p>{props.title}</p>
        <b>{props.price} руб.</b>
      </div>
      <img
        onClick={()=>props.onRemoveFromCart(props.id)}
        className="removeBtn"
        src="/img/btn-remove.svg"
        alt="remove-button"
      />
    </div>

  );
}

export default CartCard;
