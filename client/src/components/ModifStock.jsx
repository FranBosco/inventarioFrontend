import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import ProdsTableModif from './ProdsTableModif';
import InsTableModif from './InsTableModif';
import '../styles.css';

export default function ModifStock() {
	const [BtnClicked, setBtnClicked] = useState('unclicked');
	const [NextState, setNextState] = useState('hidden');
	const [isClicked, setIsClicked] = useState(false);

	const [BtnClickedI, setBtnClickedI] = useState('unclicked');
	const [NextStateI, setNextStateI] = useState('hidden');
	const [isClickedI, setIsClickedI] = useState(false);

	const updateStateProd = () => {
		if (!isClicked) {
			setBtnClicked('clicked');
			setNextState('visible');
		} else {
			setBtnClicked('unclicked');
			setNextState('hidden');
		}
		setIsClicked(!isClicked);
	};

	const updateStateIns = () => {
		if (!isClickedI) {
			setBtnClickedI('clicked');
			setNextStateI('visible');
		} else {
			setBtnClickedI('unclicked');
			setNextStateI('hidden');
		}
		setIsClickedI(!isClickedI);
	};

	return (
		<div>
			<div>
				<Menu />
			</div>

			<div className=" max-w-full ">
				<Link
					to="/home"
					className="flex justify-start pt-2 pl-2 pb-2 sm:pt-10 sm:pl-8 "
				>
					<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-cyan-900 rounded-lg hover:bg-cyan-900 sm:py-2 sm:px-8 sm:text-xl mt-20 sm:mt-20 ">
						Volver
					</button>
				</Link>

				<h1 className=" flex justify-center text-black text-2xl sm:text-3xl underline font-bold pb-4 title">
					Modificar Stock
				</h1>
				<p className="flex justify-center ml-4 mr-4 pb-4">
					Modifique manualmente los stocks de productos e insumos
				</p>

				<div className="sm:flex sm:justify-center">
					<div className="">
						<ProdsTableModif />
					</div>
				</div>

				<div className="sm:flex sm:justify-center">
					<div className="">
						<InsTableModif />
					</div>
				</div>
			</div>
		</div>
	);
}
