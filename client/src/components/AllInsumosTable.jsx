import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import { RiEdit2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import SearchBarInsumos from './SearchBarInsumos';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function AllProdsTable() {
	const insumos = useSelector((state) => state.allInsumos);
	const dispatch = useDispatch();

	const [property, setProperty] = useState('name');
	const [order, setOrder] = useState('ASC');

	function handleRefresh() {
		setProperty('name');
		setOrder('ASC');
		dispatch(getInsumos(property, order));
	}

	const handleOrderNameASC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('ASC');
	};
	const handleOrderNameDESC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('DESC');
	};

	const handleOrderStockASC = (e) => {
		e.preventDefault();
		setProperty('stock');
		setOrder('ASC');
	};
	const handleOrderStockDESC = (e) => {
		e.preventDefault();
		setProperty('stock');
		setOrder('DESC');
	};

	const handleOrderDifferenceASC = (e) => {
		e.preventDefault();
		setProperty('difference');
		setOrder('ASC');
	};

	const handleOrderDifferenceDESC = (e) => {
		e.preventDefault();
		setProperty('difference');
		setOrder('DESC');
	};
	useEffect(() => {
		dispatch(getInsumos(property, order));
	}, [dispatch, property, order]);
	return (
		<div className="flex flex-col ">
			<div className="sm:flex sm:flex-col sm:justify-center pl-2 pt-2 pb-2 sm:pl-20 ">
				<SearchBarInsumos className="" />
				<button
					onClick={handleRefresh}
					className=" border-2 border-cyan-900 mt-2 rounded-xl hover:bg-cyan-900 hover:text-white sm:w-48 	"
				>
					Volver a cargar
				</button>
			</div>
			<div className="overflow-x-auto overflow-y-auto h-96 sm:h-96 sm:flex sm:flex-col">
				<table className="table-fixed mr-2 ml-2 sm:mr-20 sm:ml-20 hover:shadow-2xl hover:shadow-black delay-75  bg-slate-300">
					<thead>
						<tr className="text-black border-2 border-black sm:text-xl">
							<th className="px-2 py-2 border-4 border-black sm:px-12  ">
								Insumos
								<div className="flex space-x-4 justify-center ">
									<button onClick={(e) => handleOrderNameDESC(e)}>
										<FaArrowDown />
									</button>
									<button onClick={(e) => handleOrderNameASC(e)}>
										<FaArrowUp />
									</button>
								</div>
							</th>
							<th className="px-2 border-4 border-black sm:px-12">
								Stock{' '}
								<div className="flex space-x-4 justify-center ">
									<button onClick={(e) => handleOrderStockDESC(e)}>
										<FaArrowDown />
									</button>
									<button onClick={(e) => handleOrderStockASC(e)}>
										<FaArrowUp />
									</button>
								</div>
							</th>
							<th className="px-2 border-4 border-black sm:px-12">Deseado</th>
							<th className="px-2 border-4 border-black sm:px-12">
								Diferencia{' '}
								<div className="flex space-x-4 justify-center ">
									<button
										value="DESC"
										onClick={(e) => handleOrderDifferenceDESC(e)}
									>
										<FaArrowDown />
									</button>
									<button
										value="ASC"
										onClick={(e) => handleOrderDifferenceASC(e)}
									>
										<FaArrowUp />
									</button>
								</div>
							</th>
							<th className="px-2 border-4 border-black sm:px-12">
								Editar/Borrar
							</th>
						</tr>
					</thead>
					<tbody>
						{insumos?.map((i) => {
							return (
								<tr className="text-black border-2 border-black " key={i.id}>
									<td className="px-2 border-2 border-black">{i.name}</td>
									<td className="px-2 border-2 border-black">{i.stock}</td>
									<td className="px-2 border-2 border-black">{i.min}</td>
									{i.difference > 0 ? (
										<td className="px-2 border-2 border-black">
											{i.difference}
										</td>
									) : (
										<td className="px-2 border-2 border-black bg-red-500">
											{i.difference}
										</td>
									)}

									<td className="px-2  flex justify-center">
										<div>
											<Link
												to={`/insumo/${i.id}`}
												className="flex justify-center"
											>
												<RiEdit2Line />
												<RiDeleteBin5Line className="text-red-800 font-bold ml-3" />
											</Link>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
