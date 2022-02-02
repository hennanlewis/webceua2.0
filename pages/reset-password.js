import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Formik } from 'formik'

import { useAuth } from '../src/contexts/AuthContext'
import { useEffect, useState } from 'react'

export default function ResetPassword() {
	const [messageResponse, setMessageResponse] = useState('')
	const router = useRouter()

	const { currentUser, resetPassword } = useAuth()

	useEffect(() => {
		if (currentUser) {
			router.push("/dashboard")
		}
	}, [currentUser])

	return (
		<>
			<Head>
				<title>Login - WEBCEUA</title>
			</Head>
			<div className="w-[100vw] h-[100vh] bg-blue-800 p-5">
				<div className="min-h-full sm-w-96 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
				<div className="max-w-xs w-full space-y-2">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Redefinir senha
						</h2>
					</div>
					{!!messageResponse.message &&
						<span>{messageResponse.message}</span>
					}
					{messageResponse.errorMessage &&
						<span>Desculpe, mas ocorreu um erro na solicitação.</span>
					}
					{!messageResponse &&

						<Formik
							initialValues={{ email: '' }}
							validate={values => {
								const errors = {}
								if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
									errors.email = 'Email inválido';
								}

								return errors
							}}
							onSubmit={async (values, { setSubmitting }) => {
								const message = await resetPassword(values.email)
								setMessageResponse(message)

								setSubmitting(false)
							}}
						>
							{({ values, handleChange, handleSubmit, isSubmitting }) => (

								<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
									<input type="hidden" name="remember" value="true" />
									<div className="rounded-md shadow-sm -space-y-px">
										<div>
											<label htmlFor="email-address" className="sr-only">Endereço de email</label>
											<input
												id="email-address"
												name="email"
												onChange={handleChange}
												type="email"
												autoComplete="email"
												required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
												placeholder="Endereço de email"
												value={values.email}
											/>
										</div>
									</div>

									<div className="flex flex-col gap-2">
										<button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500]">
											Enviar
										</button>
									</div>
								</form>
							)}
						</Formik>
					}
					<Link href="/login">
						<a className="relative w-full flex justify-center -mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500] cursor-pointer">
							Voltar para Login
						</a>
					</Link>
				</div>
			</div>
			</div>
		</>
	)
}
