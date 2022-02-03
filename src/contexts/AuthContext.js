import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth, db } from '../../services/firebase'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState('')
	const [loading, setLoading] = useState(true)

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

	const getUser = () => {
		const user = auth.currentUser
		return user
	}

	const resetPassword = (email) => {
		const info = sendPasswordResetEmail(auth, email)
			.then(() => {
				return { message: "Enviamos o link de reset para seu email" }
			})
			.catch((error) => {
				return { errorMessage: error.message}
			})
		return info
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			console.log(user)
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
		resetPassword,
		cadastro
	} = context

	return {
		currentUser,
		login,
		signOut,
		signUp,
		getUser,
		resetPassword,
		cadastro
	}
}
