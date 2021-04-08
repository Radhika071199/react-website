import React from 'react';
// import { NavLink } from 'react-router-dom';
// import React from 'react';

// import Navbar from './Components/Navbar';

import Navbar from './components/Navbar';
// import {BrowswerRouter as Router, Switch, Route} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom' ;
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home}/>
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>

    </BrowserRouter>
      
    </>
  );
}

export default App;
