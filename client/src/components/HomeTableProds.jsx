import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsHome } from '../redux/actions';
import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function HomeTableProds() {
	const homeProducts = useSelector((state) => state.prodsHome);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProdsHome());
	}, [dispatch]);

	return (
		<div className="sm:w-max">
			<table className="hover:shadow-2xl hover:shadow-black delay-75 sm:w-[60vw]  bg-slate-300">
				<thead>
					<tr className="text-black border-2 border-black">
						<th className="px-2 border-2 border-black sm:w-56">Producto</th>
						<th className="px-2 border-2 border-black sm:w-28">Stock </th>
						<th className="px-2 border-2 border-black sm:w-28">Min</th>
						<th className="px-2 border-2 border-black sm:w-28">Diferencia</th>
						<th className="px-2 border-2 border-black sm:w-28">
							Editar/Borrar
						</th>
					</tr>
				</thead>
				<tbody>
					{homeProducts?.map((p) => {
						return (
							<tr className="text-black border-2 border-black " key={p.id}>
								<td className="px-2 border-2 border-black">{p.name}</td>
								<td className="px-2 border-2 border-black">{p.stock}</td>
								<td className="px-2 border-2 border-black">{p.min}</td>
								{p.stock - p.min > 0 ? (
									<td className="px-2 border-2 border-black">
										{p.stock - p.min}
									</td>
								) : (
									<td className="px-2 border-2 border-black bg-red-500">
										{p.stock - p.min}
									</td>
								)}
								<td className="px-2  flex justify-center">
									<div>
										<Link
											to={`/producto/${p.id}`}
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
	);
}
