import { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { useAuth } from '../context/Context';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
	const [navbar, setNavbar] = useState(false);
	const { user, logout, loading } = useAuth();
	const navigate = useHistory();

	const handleLogout = async () => {
		await logout();
		navigate.push('/login');
	};
	if (loading) return <h1>loading...</h1>;

	return (
		<nav className="w-full  bg-cyan-900 shadow-xl shadow-gray-900 fixed z-50  opacity-90 text-white">
			<div className="sm:flex sm:justify-center px-4 mx-auto lg:max-w-full md:items-center md:flex sm:mb-4  ">
				<div>
					<div className="flex justify-start sm:items-center  sm:justify-around py-3 md:py-5 md:block">
						<div className="md:hidden ">
							<button
								className="p-2 rounded-md outline-none focus:border-gray-400 focus:border "
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						} `}
					>
						<ul className="items-center sm:flex justify-center space-y-8 md:flex md:space-x-10 md:space-y-0 sm:text-2xl">
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/aprod">Produccion</a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/aventa">Venta</a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/modif">Stock </a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/cins">Agregar insumo</a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/cprod">Agregar Producto</a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/insumos">Insumos</a>
							</li>
							<li className=" hover:text-blue-600 sm:hover:scale-125">
								<a href="/productos">Productos</a>
							</li>
							<li>
								<div>
									<h1>Hola! {user.email}</h1>
									<button onClick={handleLogout}>Logout</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
