import Head from 'next/head'
import Router from 'next/router'

import { useAuth } from '../src/contexts/AuthContext'
import { useEffect } from 'react'
import { LoginForm } from '../src/components/LoginForm'

export default function LoginPage() {
	const { currentUser } = useAuth()

	useEffect(() => {
		if (currentUser) {
			Router.push("/dashboard")
		}
	}, [currentUser])

	return (
		<>
			<Head>
				<title>Login - WEBCEUA</title>
			</Head>
			<div className="w-[100vw] h-[100vh] bg-[#005090] p-5">
				<div className="min-h-full sm-w-96 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
					<div className="max-w-xs w-full space-y-8">
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	)
}
