import React, {useEffect, useState} from 'react'
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {triggerEffectAbout} from '../functions'
import About1 from '../img/about-1.jpg'

function About(){

	useEffect(()=>{

		window.addEventListener("scroll", triggerEffectAbout, { capture: false, passive: true});
	    return () => {
	      window.removeEventListener("scroll", triggerEffectAbout);
	    };
	},[])

	return(
		<div className='about'>
			<div className='about__mission'>
				<h1 className='about__mission--header'>Wij zijn IT Context</h1>
				<p className='about__mission--para'>
					Ervaren Webdevelopers en Online Marketeers
				</p>
			</div>

			<div className='about__quote'>

				<p className='about__quote--left'><FaQuoteLeft/></p>	
				<h1>We don't just make websites,</h1>
				<h1>we make websites that sell.</h1>
				<p className='about__quote--right'><FaQuoteRight/></p>

			</div>

			<div className='about__image'>
				<div className='about__image--box'>
					<img src={About1} alt=""/>
				</div>
				<div className='about__image--decription'>
					<p>
						Vang de aandacht van uw doelgroep en creëer directe verkoopkansen met tijdige campagnes op basis van wat er gebeurt en wat trending is. Laat het internet praten. 
						Publiceer deelbare content die zich als een lopend vuurtje verspreidt naar een gericht, aangepast publiek, en brand uw merk in de hoofden van een nieuw publiek, en overtuig hen om hun zuurverdiende geld bij u uit te geven.</p>
				</div>
			</div>


			<div className='about__services'>

				<ul className='about__services--list about__services--list-1'>
					<li className='about__services--list-item about__services--list-item-2'>
						<FaCheckCircle className='about__services--list-item-i'/> Google Bedrijfsprofiel
					</li>
				</ul>
				<p className='about__services--para'>
					Het is heel belangrijk dat uw bedrijf door Google erkend is. 
					Dankzij dit kunnen uw toekomstige klanten u vinden in de grootste zoekmachine ter wereld.
				</p>

				<p className='about__services--para'>
					Wij zorgen dat uw bedrijf online zichtbaar is. 
					Niet alleen Google maar ook andere zoemachines zoals Bing of Yahoo gaan uw website hoog voorschijnen.
				</p>
				<ul className='about__services--list about__services--list-2'>
					<li className='about__services--list-item about__services--list-item-1'>
						<FaCheckCircle className='about__services--list-item-i'/> Zoekmachine Optimisatie
					</li>
				</ul>

				<ul className='about__services--list about__services--list-3'>
					<li className='about__services--list-item about__services--list-item-3'>
						<FaCheckCircle className='about__services--list-item-i'/> Social Media
					</li>
				</ul>	
				<p className='about__services--para'>
					Wij helpen u starten social media campagnes.
				</p>
			</div>	

		</div>
		)
}

export default About