import "./App.css";
import whiteShirt from "./img/white-shirt.jpg";
import white from "./img/white.jpg";
import pink from "./img/pink.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Cart } from "./Cart";
import NavbarItem from "./NavbarItem";
import { Homepage } from "./Homepage";

function App() {

  const [array, setArray] = useState([])

  const [count, setCount] = useState(0);

  const data = [
    {
      name: "White Shirt",
      price: 56,
      img: whiteShirt,
      id:1,
      count:1
    },
    {
      name: "Pink t-shirt",
      price: 46,
      img: pink,
      id:2,
      count:1
    },
    {
      name: "White t-shirt",
      price: 66,
      img: white,
      id:3,
      count:1
    },
    {
      name: "White t-shirt 2",
      price: 76,
      img: white,
      id:4,
      count:1
    },
    {
      name: "White shirt 2",
      price: 76,
      img: whiteShirt,
      id:5,
      count:1
    },
    {
      name: "Pink t-shirt 2",
      price: 76,
      img: pink,
      id:6,
      count:1
    }
  ];

  const AddProduct = (id) => {

    if(array.some(item => item.id == id)){
      array.filter(item => item.id == id).map(item => {
        return (
          item.count++
        )
      })
    } else {
      const newItem = data.filter(item => item.id == id)
      setArray((oldArray) => [...oldArray, newItem[0]])
      setCount(count+1);
    }
  };

  const DeleteProduct = (id) => {
    setArray(array.filter(item => item.id !== id))
    setCount(count-1)
  }

  return (
    <Router>
      <div className="App">
        <NavbarItem count={count}/>
        <Switch>
          <Route path="/" exact>
            <Homepage data={data} AddProduct={AddProduct}/>
          </Route>
          <Route path="/cart">
            <Cart array={array} DeleteProduct={DeleteProduct}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
