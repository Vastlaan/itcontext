import React, {useEffect} from 'react';
import { MdDevices } from "react-icons/md";
import { FaSearchengin, FaGlobe } from "react-icons/fa";
import {showServices} from '../functions'

function Services() {

	useEffect(()=>{
		
		showServices()
		window.addEventListener("scroll", showServices, { capture: false, passive: true})
		return ()=>window.removeEventListener("scroll", showServices);
	},[])
	return(
		<div className='services'>
			<div className='services__web services__section'>
				<div className='services__section--icon'>
					<MdDevices className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>Web Design</h1>
				<p className='services__section--para'>
					Met een ervaren team van strategie-, ontwerp- en ontwikkelingsexperts leveren wij digitale oplossingen die uw publiek verrassen en verrukken.
				</p>
				<a className='services__section--btn' href='/offert#starter'>Meer</a>
			</div>
			<div className='services__seo services__section'>
				<div className='services__section--icon'>
					<FaSearchengin className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>SEO</h1>
				<p className='services__section--para'>
					SEO is een verzameling van technieken. Deze technieken zijn gericht op het verbeteren van je website voor de vindbaarheid in zoekmachines zoals Google. 
					Onze specialisten zorgen op soepel uitvoering zoekmachineoptimalisatie.	
				</p>
				<a className='services__section--btn' href='/offert#pro'>Meer</a>
			</div>
			<div className='services__marketing services__section'>
				<div className='services__section--icon'>
					<FaGlobe className='services__section--icon-i' />
				</div>
				<h1 className='services__section--header'>Online Marketing</h1>
				<p className='services__section--para'>
					We leveren klantgerichte, hoog converterende websites die meer nadruk leggen op het vertellen van verhalen via digitale communicatiestrategie.
				</p>
				<a className='services__section--btn' href='/offert#advanced'>Meer</a>
			</div>
		</div>
		)
}

export default Services