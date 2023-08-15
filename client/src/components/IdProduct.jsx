import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsById, deleteProducto } from '../redux/actions';
import { useParams, Link, useHistory } from 'react-router-dom';
import Menu from './Menu';
import '../styles.css';
import swal from 'sweetalert';

export default function ProdById() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();
	const handleDelete = (e) => {
		swal({
			title: 'Eliminar',
			text: 'Esta seguro que desea eliminar el insumo? esto no puede deshacerse',
			icon: 'warning',
			buttons: ['No', 'Si']
		}).then((respuesta) => {
			if (respuesta) {
				dispatch(deleteProducto(e.target.value));
				swal({ text: 'Se ha eliminado el insumo', icon: 'success' });
				history.push('/home');
			} else {
				swal({ text: 'no se ha eliminado el insumo', icon: 'info' });
			}
		});
	};
	useEffect(() => {
		dispatch(getProdsById(id));
	}, [dispatch, id]);
	const prod = useSelector((state) => state.prodById);

	return (
		<div>
			<div className="">
				<Menu />
			</div>
			<div className="flex flex-col pt-16 sm:pl-10 justify-center">
				<Link to="/home" className="flex justify-start pt-2 pl-2">
					<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-cyan-900 rounded-lg hover:bg-cyan-900 sm:py-2 sm:px-8 sm:text-xl sm:mt-20">
						Volver
					</button>
				</Link>

				<div>
					<h1 className="text-2xl font-bold flex justify-center pt-10 sm:pt-0 underline sm:text-5xl title">
						{prod.name}
					</h1>
					<div className="flex justify-center pt-4 sm:pt-12">
						<img
							src={prod.img}
							alt=""
							className="border-2 border-cyan-900 rounded-xl w-32 h-32 sm:w-56 sm:h-56"
						/>
					</div>
					<div className="">
						<p className="pl-2 sm:flex sm:justify-center sm:text-xl">
							Descripcion del producto: {prod.details}
						</p>
					</div>
				</div>
				<div className="flex  flex-col ">
					<h1 className="flex justify-start  pl-2 pt-2 sm:justify-center sm:text-2xl		">
						Insumos necesarios:
					</h1>
					{prod.defaultInput?.map((e) => {
						return (
							<h1 className="flex justify-start  pl-2  sm:justify-center sm:text-2xl">
								{e.insumos}: {e.cantidad}
							</h1>
						);
					})}
				</div>
				<div className="flex justify-center  pt-4 sm:pt-12  ">
					<table className="hover:shadow-2xl hover:shadow-black delay-75 sm:w-[40vw] bg-cyan-900">
						<thead>
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
								Stock
							</td>
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
								Minimo
							</td>
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
								Diferencia
							</td>
						</thead>
						<tbody className=" bg-slate-300">
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
								{prod.stock}
							</td>
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
								{' '}
								{prod.min}
							</td>
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
								{prod.difference}
							</td>
						</tbody>
					</table>
				</div>
				<div className="flex justify-center py-4">
					<div>
						<Link to={`/producto/modif/${id}`}>
							<button className="text-black font-mono border-2 rounded-xl border-cyan-900 py-2 px-4 hover:bg-cyan-900 hover:text-white mr-4 ">
								Modificar
							</button>
						</Link>
					</div>
					<div>
						<button
							className="text-black font-mono border-2 title sm:font-bold rounded-xl border-red-800 py-2 px-4 hover:bg-red-800 hover:text-white  "
							onClick={handleDelete}
							value={id}
						>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
