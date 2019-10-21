import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';

import Landing from "./Components/Landing"
import Header from './Components/Header'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import About from './Components/About'
import Offert from './Components/Offert'
import Clients from './Components/Clients'
import Manager from './Components/Manager'


function App() {
  return (
    <div className="App">
    	<Header />
		<Menu />
        <BrowserRouter>
        	<Route path="/" exact={true} component={Landing} />
        	<Route path="/about" exact={true} component={About} />
            <Route path="/offert" exact={true} component={Offert} />
            <Route path="/clients" exact={true} component={Clients} />
            <Route path="/manager" exact={true} component={Manager} />
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
