import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useRef } from 'react'

import { useAuth } from '../src/contexts/AuthContext'

export default function Logout() {
	const { currentUser, signOut } = useAuth()
	const signOutRef = useRef(signOut)
	console.log(signOutRef)

	useEffect(() => {
		if (!currentUser) {
			Router.push("/login")
		}
	}, [currentUser])

	useEffect(() => {
		signOutRef.current()
	}, [])

	return (
		<Head><title>Logout</title></Head>
	)
}
