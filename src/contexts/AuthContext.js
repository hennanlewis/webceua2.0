import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth, db } from '../../services/firebase'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({})
	const [loading, setLoading] = useState(true)

	const getUser = async () => {
		const user = auth.currentUser
		try {
			const data = await getDoc(doc(db, "usuarios", user.uid))

			if (data.exists()) {
				return data.data()
			}
		} catch (erro) {
			return {}
		}
	}

	const setUser = async (values) => {
		const { uid } = auth.currentUser
		setCurrentUser({ ...currentUser, ...values })
		await setDoc(doc(db, "usuarios", uid), { ...currentUser, ...values })
	}

	const cadastro = (values) => {
		return addDoc(collection(db, "cadastros"), values)
	}

	const login = (email, password) => {
		const info = signInWithEmailAndPassword(auth, email, password)
			.then(response => {

			})
			.catch(error => {
				return error.code, error.message
			})
		return info
	}

	const signOut = () => {
		return auth.signOut()
	}

	const signUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	const resetPassword = (email) => {
		const info = sendPasswordResetEmail(auth, email)
			.then(() => {
				return { message: "Enviamos o link de reset para seu email" }
			})
			.catch((error) => {
				return { errorMessage: error.message }
			})
		return info
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		login,
		signOut,
		signUp,
		getUser,
		setUser,
		resetPassword,
		cadastro
	}

	return (
		<AuthContext.Provider
			value={value}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	const {
		currentUser,
		login,
		signOut,
		signUp,
		getUser,
		setUser,
		resetPassword,
		cadastro
	} = context

	return {
		currentUser,
		login,
		signOut,
		signUp,
		getUser,
		setUser,
		resetPassword,
		cadastro
	}
}
