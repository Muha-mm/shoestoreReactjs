import React from "react";
import Card from "../Card/Card";
import FavoriteCard from "./FavoriteCard";
// import FavoriteCard from "./components/FavoritePage/FavoriteCard";


const FavoritePage = (props) => {
  console.log(props)
  return (
    <div className="content">
      <div className="contentHeader">
        <h1>Избранное</h1>
        <div className="search">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="cards">
        {props.favoriteShoes.map((favoriteShoe) => (
          <Card
            title={favoriteShoe.title}
            price={favoriteShoe.price}
            imageUrl={favoriteShoe.imageUrl}
            onRemoveFromFavorite={() => {
              props.onRemoveFromFavoriteItem(favoriteShoe);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
