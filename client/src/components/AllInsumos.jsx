import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import SideBar from './SideBar';

import { Link } from 'react-router-dom';
import Menu from './Menu';

import AllInsumosTable from './AllInsumosTable';

export default function AllInsumos() {
	return (
		<div className="sm:flex mb-10">
			<div>
				<div
					className={` sm:h-full bg-sky-900/75 border-4 border-sky-800 sm:fixed   `}
				>
					<SideBar />
				</div>
			</div>
			<div className="max-w-full sm:ml-48 ">
				<div className="sm:flex">
					<Link
						to="/home"
						className="flex justify-start pt-6 pl-2 sm:pt-8 sm:pl-8"
					>
						<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
							Volver
						</button>
					</Link>
				</div>

				<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 sm:pt-0 pb-8 sm:text-4xl underline text-blue-800  ">
					Insumos
				</h1>
				<p className="flex justify-center ml-4 mr-4 pb-4">
					Listado de todos los insumos
				</p>
				<AllInsumosTable />
			</div>
		</div>
	);
}
