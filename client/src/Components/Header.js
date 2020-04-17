import React from 'react';
import { MdAccessTime, MdPhone, MdMailOutline } from "react-icons/md";
import {ReactComponent as Logo} from '../img/imperumLogoCatch.svg'


function Header(){

	return(
		<header className='header'>
			{/*<div className='header__background'>
				<Birds className='header__background--birds'/>
			</div>*/}
			<div className='header__logo' onClick={()=>window.location.href='/'}>
				
				<div className='header__logo--name'>
					<h1 className='header__logo--main'>IT Context</h1>
					<h3 className='header__logo--sub'>Future of Web Desing</h3>
				</div>
				
			</div>

			
			<ul className='header__services'>
				<li className='header__services--each'>Web Design |</li>
				<li className='header__services--each'>Zoekmachine Optimalisatie |</li>
				<li className='header__services--each'>Online Marketing</li>
			</ul>

			<ul className='header__contact'>
				<a href='tel:06852307051' className='header__contact--each'><MdPhone className='header__contact--each-icon'/> 06 82 30 70 51</a>
				<a href='mailTo:info@michalantczak.com' className='header__contact--each'><MdMailOutline className='header__contact--each-icon'/> Mail Ons</a>
				<li className='header__contact--each' onClick={()=>document.querySelector('.footer').scrollIntoView({behavior:'smooth'})}><MdAccessTime className='header__contact--each-icon'/> Ma - Vr:  08:30 - 17:00</li>
			</ul>
		</header>
		)
}

export default Header