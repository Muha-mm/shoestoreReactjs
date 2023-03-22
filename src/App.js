import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      
	  {/* <Drawer/> */}
      <Header/>

      <div className="content">
        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
