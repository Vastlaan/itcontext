import React from 'react';

const CookiesMessage = ({globalActions}) =>{

    return(
      <div className='cookies'>
            <p>
                Deze website maakt gebruik van cookies om jou de best mogelijke ervaring te geven op deze website. 
                <a href='/cookies'> Klik hier voor meer info</a>
            </p> 
            <button onClick={()=>{
                const cookieMessage = { agreed: true}
                localStorage.setItem('ITCcookiePolicy', JSON.stringify(cookieMessage))
                return globalActions.closeCookies()
            }}>Ok, Prima!</button>
      </div>
    )
}

  export default CookiesMessage