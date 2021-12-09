import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import '../pages/styles/main.scss';

import NavigationBar from '../pages/components/navigation.bar';
import MainPage from '../pages/main.page';
import SausePage from '../pages/sauce.page';
import PizzaPage from '../pages/pizza.page';
import OrderPage from '../pages/order.page';
import Banner from '../pages/components/banner';

export const App = () => {
  return (
    <div>
      <Router>
      <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div>
          <Switch>
            <Route path="/mainPage" component={MainPage}/>
            <Route path="/pizza" component={PizzaPage}/>
            <Route path="/order" component={OrderPage}/>
            <Route path="/sauces" component={SausePage}/>
            <Route path="*" component={MainPage}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
