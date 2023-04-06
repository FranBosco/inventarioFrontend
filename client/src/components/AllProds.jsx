import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import AllProdsTable from './AllProdsTable';
import '../styles.css';

export default function Allproductos() {
	return (
		<div>
			<div>
				<Menu />
			</div>
			<div className="max-w-full ">
				<div className="sm:flex">
					<Link
						to="/home"
						className="flex justify-start pt-6 pl-2 sm:pt-10 sm:pl-8"
					>
						<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-cyan-900 rounded-lg hover:bg-cyan-900 sm:py-2 sm:px-8 sm:text-xl mt-20 sm:mt-8">
							Volver
						</button>
					</Link>
				</div>

				<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 sm:pt-0 pb-8 sm:text-4xl underline title  ">
					Productos
				</h1>
				<p className="flex justify-center ml-4 mr-4 pb-4">
					Listado de todos los productos
				</p>
				<AllProdsTable />
			</div>
		</div>
	);
}
