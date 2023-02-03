import React from 'react';
import { useState } from 'react';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { IoHammerSharp } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { BsTable } from 'react-icons/bs';
import { SiAddthis } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function SideBar() {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={`${
				open ? 'sm:w-72 w-full sm:h-screen h-fit h-96' : 'w-full sm:w-32 '
			} duration-300`}
		>
			<div className="flex justify-end sm:justify-end  pr-1 sm:pt-4">
				<TfiArrowCircleRight
					className={`sm:w-10 sm:h-10 w-6 h-6 sm:rotate-0  text-aliceblue-400 ${
						open && 'sm:rotate-180 rotate-90'
					}`}
					onClick={() => setOpen(!open)}
				/>
			</div>
			<div
				className={`sm:ml-2 sm:py-4 flex flex-wrap sm:flex-col  space-y-4 space-x-5 sm:space-y-6 ${
					open && 'flex-col'
				}`}
			>
				<div className="flex flex-x-gap-4 items-center mt- sm:mt-6  ml-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/aprod">
								<IoHammerSharp className="sm:w-6 sm:h-6 w-6 h-6" />
							</Link>
							<Link to="/aprod" className="ml-4 sm:text-xl font-bold">
								Agregar Produccion
							</Link>
						</div>
					) : (
						<Link to="/aprod" className="sm:mt-0 mt-4">
							<IoHammerSharp className="sm:w-6 sm:h-6 " />
						</Link>
					)}
				</div>
				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/aventa">
								<MdAttachMoney className="sm:w-8 sm:h-8" />
							</Link>
							<Link to="/aventa" className="ml-4 sm:text-xl font-bold">
								Agregar Ventas
							</Link>
						</div>
					) : (
						<Link to="/aventa">
							<MdAttachMoney className="sm:w-6 sm:h-6" />
						</Link>
					)}
				</div>
				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/modif">
								<RiArrowUpDownLine className="sm:w-8 sm:h-8" />
							</Link>
							<Link to="/modif" className="ml-4 sm:text-xl font-bold">
								Modificar Stock
							</Link>
						</div>
					) : (
						<Link to="/modif">
							<RiArrowUpDownLine className="sm:w-6 sm:h-6" />
						</Link>
					)}
				</div>
				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/cins" className="flex">
								<SiAddthis className="sm:w-8 sm:h-8" />
							</Link>
							<Link to="/cins" className="ml-4 sm:text-xl font-bold">
								Agregar Insumo
							</Link>
						</div>
					) : (
						<Link to="/cins" className="flex">
							<SiAddthis className="sm:w-6 sm:h-6" />
							<p className="sm:ml-2 sm:text-xl font-bold">i</p>
						</Link>
					)}
				</div>

				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/cprod" className="flex">
								<SiAddthis className="sm:w-8 sm:h-8" />
							</Link>
							<Link to="/cprod" className="ml-4 sm:text-xl font-bold">
								Agregar Producto
							</Link>
						</div>
					) : (
						<Link to="/cprod" className="flex">
							<SiAddthis className="sm:w-6 sm:h-6" />
							<p className="sm:ml-2 sm:text-xl font-bold">p</p>
						</Link>
					)}
				</div>
				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<div>
								<Link to="/insumos" className="flex flex-row">
									<BsTable className="sm:w-8 sm:h-8" />
								</Link>
							</div>
							<Link to="/insumos" className="ml-4 sm:text-xl font-bold">
								Lista de Insumos
							</Link>
						</div>
					) : (
						<Link to="/insumos" className="flex flex-row">
							<BsTable className="sm:w-6 sm:h-6" />
							<p className="sm:ml-2 sm:text-xl font-bold">i</p>
						</Link>
					)}
				</div>

				<div className="flex flex-x-gap-4 items-center sm:mt-6	">
					{open === true ? (
						<div className="flex sm:mb-6 ">
							<Link to="/productos" className="flex">
								<BsTable className="sm:w-8 sm:h-8" />
							</Link>
							<Link to="/productos" className="ml-4 sm:text-xl font-bold">
								Lista de Productos
							</Link>
						</div>
					) : (
						<Link to="/productos" className="flex">
							<BsTable className="sm:w-6 sm:h-6" />
							<p className="sm:ml-2 sm:text-xl font-bold">p</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
