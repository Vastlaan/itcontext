import React, {useEffect} from 'react';
import BoardBackground from '../img/board_background.png'
import {triggerEffectBoard} from '../functions'

function Board(){

	
	useEffect(()=>{
		window.addEventListener("scroll", triggerEffectBoard, { capture: false, passive: true});
	    return () => {
	      window.removeEventListener("scroll", triggerEffectBoard);
	    };
	},[])

	return(
		<div className='board'>
			<div className='board__background'>
				<img className='board__background--img' src={BoardBackground} alt='guy behind laptop' />
				<div className='board__background--color'></div>
			</div>
			<h1 className='board__header'>Wij creëren uw online merk</h1>
			<p className='board__para'>
				Goed ontworpen website is ook, naast scherp design, compatibel met zoekmachines en social media.
			</p>
			<p className='board__para'>
				Wij zorgen dat uw bedrijf bereikt meer potentiële klanten en uw merk wordt beter herkenbaar.
			</p>

		</div>
		)
}

export default Board;