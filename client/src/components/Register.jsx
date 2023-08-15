import { useState } from 'react';
import { useAuth } from '../context/Context';
import { Link, useHistory } from 'react-router-dom';
import '../styles.css';

export function Register() {
	const { signup } = useAuth();

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState();
	const navigate = useHistory();

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signup(user.email, user.password);
			navigate.push('/home');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="flex justify-center">
			<div className="flex flex-col">
				<h1 className="title sm:text-6xl sm:mt-10 px-16   ">Registrate</h1>
				{error && <p>{error}</p>}

				<form
					onSubmit={handleSubmit}
					className="flex flex-col sm:mt-[10vh] border-4 rounded-lg border-black sm:px-16 sm:py-12 bg-cyan-900"
				>
					<label
						htmlFor="email"
						className="title sm:text-3xl sm:mb-4 sm:font-bold"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						placeholder="  ingresá tu email"
						onChange={handleChange}
						className="rounded-lg"
					/>

					<label
						htmlFor="password"
						className="title sm:text-3xl sm:mb-4 sm:mt-4 sm:font-bold"
					>
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						placeholder="  ingresá tu contraseña"
						className="rounded-lg"
					/>

					<button className="border-2 border-black px-4 py-2 mt-4 rounded-lg hover:bg-orange-100  ">
						Register
					</button>
				</form>
				<div className="flex justify-center text-xl mt-2">
					<Link to={'/login'}>
						<buton>Si ya tenes un usuario, </buton>
						<button className="text-cyan-900 hover:text-red-600 underline underline-offset-4">
							ingresa aqui!
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
