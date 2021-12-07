import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import '../pages/styles/main.scss';

import NavigationBar from '../pages/components/navigation.bar';
import MainPage from '../pages/main.page';
import PizzaPage from '../pages/pizza_sauce.page';
import OrderPage from '../pages/order.page';
import Banner from '../pages/components/banner';

export const App = () => {
  return (
    <div>
      <Router>
      <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div>
          <Route path="/mainPage" component={MainPage}/>
          <Route path="/pizza" component={PizzaPage}/>
          <Route path="/order" component={OrderPage}/>
          <Route path="/sauces" component={PizzaPage}/>
          <Route path="**" component={MainPage}/>
        </div>
      </Router>
    </div>
  );
};

export default App;
