import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumoId, deleteInsumo } from '../redux/actions';
import { useParams, Link } from 'react-router-dom';
import Menu from './Menu';
import '../styles.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

export default function ProdById() {
	const ins = useSelector((state) => state.insumoById);
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
				dispatch(deleteInsumo(e.target.value));
				swal({ text: 'Se ha eliminado el insumo', icon: 'success' });
				history.push('/home');
			} else {
				swal({ text: 'no se ha eliminado el insumo', icon: 'info' });
			}
		});
	};
	useEffect(() => {
		dispatch(getInsumoId(id));
	}, [dispatch, id]);

	return (
		<div>
			<div className="">
				<Menu />
			</div>
			<div className="flex flex-col pt-16  sm:pl-10 justify-center">
				<Link to="/home" className="flex justify-start pt-2 pl-2">
					<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-cyan-900 rounded-lg hover:bg-cyan-900 sm:py-2 sm:px-8 sm:text-xl">
						Volver
					</button>
				</Link>

				<div>
					<h1 className="text-2xl font-bold flex justify-center pt-10 sm:pt-0 underline sm:text-5xl title">
						{ins.name}
					</h1>
					<div className="flex justify-center pt-4 sm:pt-12">
						<img
							src={ins.img}
							alt=""
							className="border-2 border-cyan-900 rounded-xl w-32 h-32 sm:w-56 sm:h-56"
						/>
					</div>
					<p className="flex justify-center pt-2 sm:pt-10 sm:text-xl">
						Descripcion del insumo: {ins.details}
					</p>
				</div>
				<div className="flex justify-center  pt-4 sm:pt-12   ">
					<table className="hover:shadow-2xl hover:shadow-black delay-75 sm:w-[40vw] bg-cyan-900">
						<thead className="">
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl ">
								Stock
							</td>
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl ">
								Minimo
							</td>
							<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl ">
								Diferencia
							</td>
						</thead>
						<tbody className=" bg-slate-300">
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl">
								{ins.stock}
							</td>
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl ">
								{' '}
								{ins.min}
							</td>
							<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl ">
								{ins.difference}
							</td>
						</tbody>
					</table>
				</div>
				<div className="flex justify-center py-4">
					<div>
						<Link to={`/insumo/modif/${id}`}>
							<button className="text-black font-mono border-2 rounded-xl title sm:font-bold border-cyan-900 py-2 px-4 hover:bg-cyan-900 hover:text-white mr-4  ">
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
