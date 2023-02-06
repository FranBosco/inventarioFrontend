import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import ProdsTableModif from './ProdsTableModif';
import InsTableModif from './InsTableModif';
import SideBar from './SideBar';

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
		<div className="sm:flex mb-10">
			<div>
				<div className={` sm:h-full bg-sky-900 border-4 border-sky-800   `}>
					<SideBar />
				</div>
			</div>
			<div className=" max-w-full  ">
				<Link
					to="/home"
					className="flex justify-start pt-2 pl-2 pb-2 sm:pt-8 sm:pl-8 "
				>
					<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
						Volver
					</button>
				</Link>

				<h1 className=" flex justify-center text-black text-2xl sm:text-3xl underline font-bold pb-4 sm:-mt-8">
					Modificar Stock
				</h1>
				<p className="flex justify-center ml-4 mr-4 pb-4">
					Modifique manualmente los stocks de productos e insumos
				</p>

				<div className="">
					<div className="">
						<ProdsTableModif />
					</div>
				</div>

				<div className="">
					<div className="">
						<InsTableModif />
					</div>
				</div>
			</div>
		</div>
	);
}
