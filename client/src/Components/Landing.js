import React, {useState, useEffect} from 'react';


import Board from './Board'
import Services from './Services'
import Responsive from './Responsive'
import Packages from './Packages'
import Reviews from './Reviews'



function Landing(){

	const [landing, setLanding] = useState({})

	useEffect(()=>{
		fetch('/getLanding')
		  .then(res=>res.json())
		  .then(data => setLanding(data))
	},[])
	return(
		<section className='landing'>
			<Board/>
			<Services />
			<Responsive />
			<Packages />
			<Reviews />
		</section>
		)
}

export default Landing