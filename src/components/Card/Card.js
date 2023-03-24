import React, { useState }  from "react";
import styles from "./Card.module.scss"

function Card(props) {

  const [isAddedToCart, setAddedToCart] = React.useState(false);

  const [isAddedToFavorite, setAddedToFavorite] = React.useState(false);

  const onFavoriteClick = () =>{
    props.onAddToFavorite();
    isAddedToFavorite&&props.onRemoveFromFavorite()
    setAddedToFavorite(!isAddedToFavorite)
  }

  const onPlusClick = () =>{
    props.onAddToCart()
    isAddedToCart&&props.onRemoveFromCart()
    setAddedToCart(!isAddedToCart)
  };
  return (
    <div className={styles.card}>
            <div>
              <img
              onClick={onFavoriteClick} 
              src={isAddedToFavorite?"/img/liked.svg":"/img/unliked.svg"} alt="favorite" />
            </div>
            <img
              width={133}
              height={112}
              src={props.imageUrl}
              alt="Sneakers"
            />
            
            <h5>{props.title}</h5>
            <div className={styles.cardDetails}>
              <div className={styles.price}>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <button onClick={onPlusClick} className={styles.button}>
                <img width={30} height={30} src={isAddedToCart?"/img/btn-checked.svg":"/img/btn-plus.svg"} alt="Plus" />
              </button>
            </div>
          </div>
  );
}

export default Card;
