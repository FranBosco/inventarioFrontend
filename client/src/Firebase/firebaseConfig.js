import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyACWevNJYgjeR5B1hSQ2LmZxb83Aw172_E',
	authDomain: 'inventario-88ab0.firebaseapp.com',
	projectId: 'inventario-88ab0',
	storageBucket: 'inventario-88ab0.appspot.com',
	messagingSenderId: '365952675657',
	appId: '1:365952675657:web:c08a22b32c3766eb287498',
	measurementId: 'G-SXFKXF1L51'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
