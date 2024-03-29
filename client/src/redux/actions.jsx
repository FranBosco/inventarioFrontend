import axios from 'axios';
export const GET_ALL_INSUMOS = 'GET_ALL_INSUMOS';
export const GET_INSUMOS_BY_NAME = 'GET_INSUMOS_BY_NAME';
export const GET_ALL_PRODUCTOS = 'GET_ALL_PRODUCTOS';
export const GET_PRODUCTOS_BY_NAME = 'GET_PRODUCTOS_BY_NAME';
export const GET_PRODS_HOME = 'GET_PRODS_HOME';
export const GET_PRODS_BY_ID = 'GET_PRODS_BY_ID';
export const GET_INSUMOS_HOME = 'GET_INSUMOS_HOME';
export const GET_INSUMO_BY_ID = 'GET_INSUMO_BY_ID';
export const CREATE_PROD = 'CREATE_PROD';
export const CREATE_INS = 'CREATE_INS';
export const MODIF_INS = 'MODIF_INS';
export const MODIF_PROD = 'MODIF_PROD';
export const ADD_STOCK_INSUMOS = 'ADD_STOCK_INSUMOS';
export const ADD_VENTA = 'ADD_VENTA';
export const ADD_STOCK_PRODUCTOS = 'ADD_STOCK_PRODUCTOS';
export const ADD_PRODUCCION = 'ADD_PRODUCCION';
export const DELETE_INSUMO = 'DELETE_INSUMO';
export const DELETE_PRODUCTO = 'DELETE_PRODUCTO';

//Traer todos los insumos--- - https://inventariobackend-production-3ab0.up.railway.app
//Traer todos los insumos--- -
export function getInsumos(property, order) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`insumos?property=${property}&order=${order}`
			);
			return dispatch({
				type: GET_ALL_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {
		console.log(error);
	}
}

// Buscar por nombre los insumos
export function searchByNameI(name) {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				`insumos?name=${name}`
			);

			return dispatch({
				type: GET_INSUMOS_BY_NAME,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Traer los insumos que se van a ver en la homepage
export function getInsumosHome() {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				'insumosHome'
			);
			return dispatch({
				type: GET_INSUMOS_HOME,
				payload: info.data
			});
		};
	} catch (error) {}
}

// Traer un insumo en particular
export function getInsumoId(id) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`insumos/${id}`
			);
			return dispatch({
				type: GET_INSUMO_BY_ID,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Crear un insumo
export function createInsumo(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(
				'insumos',
				payload
			);
			return dispatch({
				type: CREATE_INS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Editar un insumo
export const modifyInsumo = (
	id,
	name,
	img,
	details,
	stock,
	unidadDeMedida,
	min
) => {
	return async function (dispatch) {
		try {
			const info = await axios.put(
				`insumos/${id}`,
				{
					name,
					img,
					details,
					stock,
					min,
					unidadDeMedida
				}
			);

			return dispatch({
				type: MODIF_INS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

//Agregar stock a un insumo
export function addStockInsumo(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`insumos/add/`,
				payload
			);
			console.log(payload, 'payloadaddins');
			return dispatch({
				type: ADD_STOCK_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Traer todos los inmsumos
export function getProductos(property, order) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`productos
				?property=${property}&order=${order}`
			);
			return dispatch({
				type: GET_ALL_PRODUCTOS,
				payload: info.data
			});
		};
	} catch (error) {
		console.log(error);
	}
}

//Busqueda de productos por nombre
export function searchByNameP(name) {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				`productos?name=${name}`
			);

			return dispatch({
				type: GET_PRODUCTOS_BY_NAME,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Traer los productos para la tabla del home
export function getProdsHome() {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				'productosHome'
			);
			return dispatch({
				type: GET_PRODS_HOME,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Traer un producto en particular
export function getProdsById(id) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`productos/${id}`
			);
			return dispatch({
				type: GET_PRODS_BY_ID,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Crear un producto
export function createProd(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(
				'productos',
				payload
			);
			return dispatch({
				type: CREATE_PROD,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Editar un producto
export const modifyProd = (
	id,
	name,
	img,
	details,
	stock,
	min,
	defaultInput,
	difference
) => {
	return async function (dispatch) {
		try {
			const info = await axios.put(
				`productos/${id}`,
				{
					name,
					img,
					details,
					stock,
					min,
					defaultInput,
					difference
				}
			);
			return dispatch({
				type: MODIF_PROD,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

//Agregar venta (resta del stock la cantidad vendida)

export function addVenta(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`ventas`,
				payload
			);

			return dispatch({
				type: ADD_VENTA,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Modifica stock de productos
export function addStockProducto(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`productos/add/`,
				payload
			);
			return dispatch({
				type: ADD_STOCK_PRODUCTOS,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Agrega produccion, sumando al stock el producto fabricado y restando los insumos utilizados

export function addProduccion(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`produccion`,
				payload
			);
			return dispatch({
				type: ADD_PRODUCCION,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Eliminar un insumo
export function deleteInsumo(id) {
	return async (dispatch) => {
		try {
			const info = await axios.delete(
				`insumos/${id}`
			);
			dispatch({
				type: DELETE_INSUMO,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}
//Eliminar un producto
export function deleteProducto(id) {
	return async (dispatch) => {
		try {
			const info = await axios.delete(
				`productos/${id}`
			);
			dispatch({
				type: DELETE_PRODUCTO,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}
