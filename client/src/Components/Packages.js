import React from 'react';
import { FaChevronCircleRight } from "react-icons/fa";

function Packages(){

	return(
		<div className='packages'>
			<h1 className='packages__header'>Website pakkets & prijzen</h1>
			<div className='packages__offert'>
				<div className='packages__offert--starter packages__offert--card'>
					<h3 className='packages__offert--starter-header packages__offert--card-header'>Starter</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> 29 <sub>per maand*</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--starter-list'>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> 1 jaar contract</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> Domein naam</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> Hosting</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> tot 3 Paginas</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> 1 email adress</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> Static Inhoud</li>
						<li><FaChevronCircleRight className='packages__offert--starter-list-icon'/> Support Standard</li>
					</ul>
					<a href='/offert#starter' className='packages__offert--card-btn packages__offert--starter-btn'>Kiezen</a>
					<p className='packages__offert--card-sub'>*Prijzen vanaf. Prijzen kunnen verschillen per project.</p>
				</div>
				<div className='packages__offert--pro packages__offert--card'>
					<h3 className='packages__offert--pro-header packages__offert--card-header'>Pro</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> 59 <sub>per maand*</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--pro-list'>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> 1 jaar contract</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> Domein naam & Hosting</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> tot 6 Paginas</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> tot 5 email adressen</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> Veranderlijk Inhoud</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> Basis Funcionaliteit</li>
						<li><FaChevronCircleRight className='packages__offert--pro-list-icon'/> Support Pro</li>
					</ul>
					<a href='/offert#pro' className='packages__offert--card-btn packages__offert--pro-btn'>Kiezen</a>
					<p className='packages__offert--card-sub'>*Prijzen vanaf. Prijzen kunnen verschillen per project.</p>
				</div>
				<div className='packages__offert--advanced packages__offert--card'>
					<h3 className='packages__offert--advanced-header packages__offert--card-header'>Advanced</h3>
					<div className='packages__offert--card-price'>
						<h6><sup>&euro;</sup> 99 <sub>per maand*</sub></h6>
					</div>
					<ul className='packages__offert--card-list packages__offert--advanced-list'>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> 1 jaar contract</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> Domein naam & Hosting</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> tot 10 Paginas</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> Dynamic Inhoud</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> Geavanceerde Functionaliteit</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> tot 20 email adressen</li>
						<li><FaChevronCircleRight className='packages__offert--advanced-list-icon'/> Support Pro</li>
					</ul>
					<a href='/offert#advanced' className='packages__offert--card-btn packages__offert--advanced-btn'>Kiezen</a>
					<p className='packages__offert--card-sub'>*Prijzen vanaf. Prijzen kunnen verschillen per project.</p>
				</div>
			</div>
		</div>
		)
}

export default Packages