import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import '../styles.css';

import { Link } from 'react-router-dom';
import Menu from './Menu';

import AllInsumosTable from './AllInsumosTable';

export default function AllInsumos() {
	return (
		<div>
			<div>
				<Menu />
			</div>

			<div className="max-w-full  ">
				<div className="sm:flex">
					<Link
						to="/home"
						className="flex justify-start pt-6 pl-2 sm:pt-10 sm:pl-8"
					>
						<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-cyan-900 rounded-lg hover:bg-cyan-900 sm:py-2 sm:px-8 sm:text-xl mt-20 sm:mt-20">
							Volver
						</button>
					</Link>
				</div>

				<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 sm:pt-0 pb-8 sm:text-4xl underline title">
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
