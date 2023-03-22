function Header() {
  return (
    <header className="header">
        <div className="logo">
          <img width={47} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">Shoe Hotbed</h3>
            <p className="opacity-5">poizon, move over</p>
          </div>
        </div>
        <ul className="rightHeader">
          <li className="cartIcon">
            <img width={18} height={18} src="/img/cart.svg" alt="svg" />
            <span>1205 руб.</span>
          </li>
          <li className="profileIcon">
            <img width={18} height={18} src="/img/user.svg" alt="svg" />
          </li>
        </ul>
      </header>
  );
}

export default Header;
