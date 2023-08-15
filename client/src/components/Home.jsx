import React from 'react';
import Menu from './Menu';
import HomeTableInsumos from './HomeTableInsumos';
import HomeTableProds from './HomeTableProds';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Home() {
	return (
		<div className="sm:flex mb-10 sm:w-full">
			<div className="">
				<Menu />
			</div>

			<div className="max-w-full  sm:ml-80  sm:mt-20 	  ">
				<h1 className="text-black text-xl font-bold pt-20 sm:flex sm:justify-center sm:text-6xl sm:font-bold  sm:pt-10  title">
					Gestor de inventarios
				</h1>
				<div className=" ">
					<div className="pr-8">
						<div className="flex flex-col pt-10 pl-2 sm:pt-10   ">
							<h1 className="font-bold font-mono sm:text-2xl text-cyan-900 text-xl">
								Insumos
							</h1>
							<div className="">
								<HomeTableInsumos />
							</div>
						</div>
					</div>
					<div className="pr-8">
						<div className="flex flex-col pt-10 pl-2  sm:pt-10  ">
							<h1 className="font-bold font-mono sm:text-2xl text-cyan-900 text-xl  ">
								Productos
							</h1>

							<HomeTableProds />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
