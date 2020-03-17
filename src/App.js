import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notmatch from './components/Notmatch/Notmatch';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path = "/shop">
            <Shop></Shop>
          </Route>
          <Route path = "/review">
            <Review></Review>
          </Route>
          <Route path = "/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path = "/">
            <Shop></Shop>
          </Route>
          <Route path = "/product/:product_key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path = "*">
            <Notmatch></Notmatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
