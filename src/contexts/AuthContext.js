import { inMemoryPersistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getDocs, query, runTransaction, setDoc, where } from 'firebase/firestore'
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
			return { res: false, data: "Sem usuário" }
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

	const updateUserDBInfo = async (values) => {
		try {
			const { uid } = auth.currentUser
			const userDocRef = doc(db, "usuarios", uid)
			return await runTransaction(db, async (transaction) => {
				const userDoc = await transaction.get(userDocRef)
				if (!userDoc.exists()) {
					return { res: false, erro: "Usuário não existe" }
				}

				transaction.update(userDocRef, values)
				setUserInfo({ ...userInfo, ...values })
				return { res: true, data: "Valores atualizados com sucesso" }
			})

		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const getProjectsCoord = async () => {
		try {
			const data = await getDocs(query(collection(db, "projetos"), where("status", "in", ["Submetido", "Coordenação", "Em aprovação"])))

			const dataArray = []
			data.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				dataArray = [ ...dataArray, {...doc.data(), id: doc.id} ]
			})
			return { res: true, data: dataArray }
		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const updateProjectCoord = async (values) => {
		try {
			const noEmptyValues = Object.fromEntries(Object
				.entries(values.coord)
				.filter(([_, value]) => value != ""))
			const userDocRef = doc(db, "projetos", values.id)

			return await runTransaction(db, async (transaction) => {
				const userDoc = await transaction.get(userDocRef)
				if (!userDoc.exists()) {
					return { res: false, erro: "Projeto não existe" }
				}

				transaction.update(userDocRef, { status: values.status, coord: noEmptyValues })
				return { res: true, data: "Valores atualizados com sucesso" }
			})

		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const getProjects = async () => {
		try {
			const { uid } = auth.currentUser
			const data = await getDocs(query(collection(db, "projetos"), where("uid", "==", uid)))

			const dataArray = []
			data.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				dataArray = [ ...dataArray, {...doc.data(), id: doc.id} ]
			})
			return { res: true, data: dataArray }
		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const updateProject = async (values) => {
		try {
			const noEmptyValues = Object.fromEntries(Object
				.entries(values.projeto)
				.filter(([_, value]) => value != ""))
			const userDocRef = doc(db, "projetos", values.id)
			return await runTransaction(db, async (transaction) => {
				const userDoc = await transaction.get(userDocRef)
				console.log(transaction)
				if (!userDoc.exists()) {
					return { res: false, erro: "Projeto não existe" }
				}

				transaction.update(userDocRef, { status: values.status, projeto: noEmptyValues })
				return { res: true, data: "Valores atualizados com sucesso" }
			})

		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const setProject = async (values) => {
		try {
			const { uid } = auth.currentUser
			const noEmptyValues = Object.fromEntries(Object
				.entries(values)
				.filter(([_, value]) => value != ""))
			await setDoc(doc(collection(db, "projetos")),
				{
					uid,
					projeto: noEmptyValues,
					status: "Salvo"
				})
			return { res: true }
		} catch (erro) {
			console.error(erro)
			return { res: false, erro }
		}
	}

	const signUp = (values) => {
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

	const createSignUp = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password)
	}

	const resetPassword = async (email) => {
		try {
			const data = await sendPasswordResetEmail(auth, email)
			return { res: true, data }
		} catch (erro) {
			console.error(erro)
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
		signUp,
		login,
		getUserDBInfo,
		setUserDBInfo,
		getProjectsCoord,
		updateProjectCoord,
		getProjects,
		updateProject,
		setProject,
		updateUserDBInfo,
		signOut,
		createSignUp,
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
		signUp,
		login,
		getUserDBInfo,
		setUserDBInfo,
		getProjectsCoord,
		updateProjectCoord,
		getProjects,
		updateProject,
		setProject,
		updateUserDBInfo,
		signOut,
		createSignUp,
		resetPassword
	} = context

	return {
		currentUser,
		userInfo,
		signUp,
		login,
		getUserDBInfo,
		setUserDBInfo,
		getProjectsCoord,
		updateProjectCoord,
		getProjects,
		updateProject,
		setProject,
		updateUserDBInfo,
		signOut,
		createSignUp,
		resetPassword
	}
}
