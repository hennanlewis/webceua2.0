import { inMemoryPersistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth, db } from '../../services/firebase'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({})
	const [persistencia, setPersistencia] = useState(false)
	const [loading, setLoading] = useState(true)

	const getUserInfo = async () => {
		const user = auth.currentUser
		try {
			const data = await getDoc(doc(db, "usuarios", user.uid))

			if (data.exists()) {
				return { res: true, data: data.data() }
			}
		} catch (erro) {
			return { res: false, erro }
		}
	}

	const setUserInfo = async (values) => {
		try {
			const { uid } = auth.currentUser
			setCurrentUser({ ...currentUser, ...values })
			await setDoc(doc(db, "usuarios", uid), { ...currentUser, ...values })
			return { res: true }
		} catch (erro) {
			return { res: false, erro }
		}
	}

	const cadastro = (values) => {
		return addDoc(collection(db, "cadastros"), values)
	}

	const login = async (email, password, remember) => {
		if (!remember) {
			setPersistence(auth, inMemoryPersistence)
				.then(() =>
					signInWithEmailAndPassword(auth, email, password)
				)
		}
		signInWithEmailAndPassword(auth, email, password)
	}

	const signOut = () => {
		return auth.signOut()
	}

	const signUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	const resetPassword = async (email) => {
		try {
			const data = await sendPasswordResetEmail(auth, email)
			return { res: true, data }
		} catch (erro) {
			return { res: false, erro }
		}
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
		getUserInfo,
		setUserInfo,
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
		getUserInfo,
		setUserInfo,
		resetPassword,
		cadastro
	} = context

	return {
		currentUser,
		login,
		signOut,
		signUp,
		getUserInfo,
		setUserInfo,
		resetPassword,
		cadastro
	}
}
