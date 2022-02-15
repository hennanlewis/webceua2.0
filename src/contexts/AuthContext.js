import { inMemoryPersistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, runTransaction, setDoc } from 'firebase/firestore'
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

	const setProjects = async (values) => {
		try {
			const { uid } = auth.currentUser
			await setDoc(doc(collection(db, "usuarios", uid, "projetos")), values)
			return { res: true }
		} catch (erro) {
			return { res: false, erro }
		}
	}

	const updateUserDBInfo = async (values) => {

		try {
			const { uid } = auth.currentUser
			const userDocRef = doc(db, "usuarios", uid)
			await runTransaction(db, async (transaction) => {
				const userDoc = await transaction.get(userDocRef)
				if (!userDoc.exists()) {
					return { res: false, erro: "Usuário não existe" }
				}

				transaction.update(userDocRef, values)
				return { res: true, data: "Valores atualizados com sucesso" }
			})

		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const cadastro = (values) => {
		return addDoc(collection(db, "cadastros"), values)
	}

	const login = async (email, password, remember) => {
		let erro = {}
		if (!remember) {
			erro = setPersistence(auth, inMemoryPersistence)
				.then(() => {
					return signInWithEmailAndPassword(auth, email, password)
						.then(response => {

						})
						.catch(err => {
							return { erro: "Não foi possível fazer login. Confira sua senha e seu email." }
						})
				})
			return erro
		}
		erro = signInWithEmailAndPassword(auth, email, password)
			.catch(err => {
				return { erro: "Não foi possível fazer login" }
			})
		return erro
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
		setProjects,
		updateUserDBInfo,
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
		setProjects,
		updateUserDBInfo,
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
		setProjects,
		updateUserDBInfo,
		resetPassword,
		cadastro
	}
}
