import axios from "axios";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import FavoritePage from "./components/FavoritePage/FavoritePage";
import Header from "./components/Header";

function App() {
  const [allShoes, setAllShoes] = React.useState([]);
  const [cartShoes, setCartShoes] = React.useState([]);
  const [favoriteShoes, setFavoriteShoes] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [openCart, setOpenCart] = useState(false);

  React.useEffect(() => {
    axios.get("https://641caad4b556e431a87420bb.mockapi.io/shoehotbed").then((res)=>{setAllShoes(res.data)})
    axios.get("https://641caad4b556e431a87420bb.mockapi.io/cartshoes").then((res)=>{setCartShoes(res.data)})
  },[]);

  const onOpenCart = () => {
    setOpenCart(true);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };

  const onAddToCartItem = (shoe) => {
    axios.post('https://641caad4b556e431a87420bb.mockapi.io/cartshoes', shoe);
      setCartShoes((prev) => [...prev, shoe]);
  };

  const onRemoveFromCartItem = (shoeId) => {
    console.log(shoeId);
    axios.delete(`https://641caad4b556e431a87420bb.mockapi.io/cartshoes/${shoeId}`);
    setCartShoes((prev)=>prev.filter((item) => item.id !== shoeId));
  };

  const onAddToFavoriteItem = (shoe) => {
    setFavoriteShoes((prev) => [...prev, shoe]);
  };
  const onRemoveFromFavoriteItem = (shoe) => {
    setFavoriteShoes(favoriteShoes.filter((item) => item !== shoe));
  };

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="wrapper">
      <Router>
        {openCart && <Drawer onCloseCart={onCloseCart} cartShoes={cartShoes} onRemoveFromCart = {onRemoveFromCartItem}/>}

        <Header onOpenCart={onOpenCart} />

        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <div className="contentHeader">
                  <h1 className="title">
                    {inputValue === ""
                      ? "Все кроссовки"
                      : `Поиск по:  "${inputValue}"`}
                  </h1>
                  <div className="search">
                    <img src="/img/search.svg" alt="Search" />
                    <input
                      onChange={onChangeInputValue}
                      value={inputValue}
                      maxLength="25"
                      placeholder="Поиск..."
                    />
                    {inputValue && (
                      <img
                        onClick={() => setInputValue("")}
                        className="clearInput"
                        src="/img/btn-remove.svg"
                        alt="Search"
                      />
                    )}
                  </div>
                </div>

                {/* проверка на пустой инпут и вывод информации о поиске*/}

                {inputValue.toLowerCase().trim().length === 0 ||
                allShoes.filter((shoe) =>
                  shoe.title.toLowerCase().includes(inputValue.toLowerCase())
                ).length !== 0 ?
                  <div className="cards">
                    {allShoes
                      .filter((shoe) =>
                        shoe.title
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      )
                      .map((shoe) => (
                        <Card
                          title={shoe.title}
                          price={shoe.price}
                          imageUrl={shoe.imageUrl}
                          onAddToCart={() => {
                            onAddToCartItem(shoe);
                          }}
                          // onRemoveFromCart={() => {
                          //   onRemoveFromCartItem(shoe.id);
                          // }}
                          onAddToFavorite={() => {
                            onAddToFavoriteItem(shoe);
                          }}
                          onRemoveFromFavorite={() => {
                            onRemoveFromFavoriteItem(shoe);
                          }}
                        />
                      ))}
                  </div> : <h1 className="searchResult">Ничего не найдено</h1>
                }
              </div>
            }
          />
          <Route
            path="/favorite"
            element={
              <FavoritePage
                favoriteShoes={favoriteShoes}
                cartShoes={cartShoes}
                //  onRemoveFromFavorite={(shoe) => {onRemoveFromFavoriteItem(shoe);}}
              />
            }
          />
        </Routes>
        {/* <FavoritePage/> */}
      </Router>
    </div>
  );
}

export default App;
