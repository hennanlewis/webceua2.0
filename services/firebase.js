// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const db = getFirestore(app)

export const Login = (email, password) => {
	const a = signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user
			return user
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			return error
		})
	return a
}

export const Logout = () => {
	const a = signOut(auth).then(() => {
		// Sign-out successful.
		return("Deslogou")
	}).catch((error) => {
		// An error happened.
		return ("Erro ao deslogar")
	})
	return a
}