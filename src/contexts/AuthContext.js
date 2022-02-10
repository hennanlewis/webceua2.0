import { inMemoryPersistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth, db } from '../../services/firebase'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({})
	const [userInfo, setUserInfo] = useState({})
	const [loading, setLoading] = useState(true)

	const getUserDBInfo = async () => {
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

	const setUserDBInfo = async (values) => {
		try {
			const { uid } = auth.currentUser
			await setDoc(doc(db, "usuarios", uid), { ...userInfo, ...values })
			setUserInfo({ ...userInfo, ...values })
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
			const info = await getUserDBInfo()
			setUserInfo(info.data)
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		userInfo,
		cadastro,
		login,
		getUserDBInfo,
		setUserDBInfo,
		signOut,
		signUp,
		resetPassword
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
		userInfo,
		login,
		signOut,
		signUp,
		getUserDBInfo,
		setUserDBInfo,
		resetPassword,
		cadastro
	} = context

	return {
		currentUser,
		userInfo,
		login,
		signOut,
		signUp,
		getUserDBInfo,
		setUserDBInfo,
		resetPassword,
		cadastro
	}
}
