import React, {useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Landing from "./Components/Landing"
import Header from './Components/Header'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import About from './Components/About'
import Offert from './Components/Offert'
// import Login from './Components/Login'
import Cookies from './Components/Cookies'
import Confirmation from './Components/ConfirmationContactForm'
import CookiesMessage from './Components/CookiesMessage'
import useGlobal from "./store";


function App() {

  useEffect(()=>{
    if(localStorage.getItem('ITCcookiePolicy')){
      const cookiePolicy = JSON.parse(localStorage.getItem('ITCcookiePolicy'))

      if(cookiePolicy.agreed){
        globalActions.closeCookies()
      }
    }
  }, [])

    const [globalState, globalActions] = useGlobal()

  return (
    <div className="App">
    	<Header />
		<Menu />
        <BrowserRouter>
        	  <Route path="/" exact={true} component={Landing} />
          	<Route path="/about" exact={true} component={About} />
            <Route path="/offert" exact={true} component={Offert} />
            <Route path="/cookies" exact={true} component={Cookies} />
            {/* <Route path="/manager" exact={true} component={Login} /> */}
        </BrowserRouter>
        <Footer />
        {globalState.displayContactFormConfirmation?<Confirmation message={"Succes"}/>:null}
        {globalState.cookiesMessage?<CookiesMessage globalActions={globalActions} />:null}
    </div>
  );
}

export default App;
