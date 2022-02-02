import Head from 'next/head'
import Link from 'next/link'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Cadastro } from '../services/firebase'
import { useAuth } from '../src/contexts/AuthContext'

export default function Home() {
	const router = useRouter()
	const { currentUser } = useAuth()

	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		if (currentUser) {
			router.push("/dashboard")
		}
	}, [currentUser])

	return (
		<>
			<Head>
				<title>Cadastro - WEBCEUA</title>
			</Head>
			<div className="w-[100vw] h-[100vh] bg-blue-800 p-5">
				<div className="min-h-full sm-w-96 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
					<div className="max-w-xs w-full space-y-8">
						<div>
							<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
								Solicitação de cadastro
							</h2>
						</div>

						<Formik
							initialValues={{ name: '', email: '', cpf: '', password: '', confirmPassword: '' }}
							validate={values => {
								const errors = {}
								if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
									errors.email = 'Email inválido';
								}
								if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
									errors.confirmPassword = 'Senhas não correspondem'
								}

								return errors
							}}
							onSubmit={async (values, { setSubmitting, resetForm }) => {
								if (!values.name || !values.email || !values.cpf || !values.password || !values.confirmPassword) {
									setErrorMessage('Todos os campos são obrigatórios')
								}
								else setErrorMessage('')

								Cadastro(values)
									.then(response => {
										console.log(response)
										resetForm()
									})
									.error(error => {
										console.log(error)
									})

								setTimeout(() => {
									setSubmitting(false)
								}, 400)

							}}
						>
							{({ values, errors, handleChange, handleSubmit, isSubmitting }) => (

								<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
									<input type="hidden" name="remember" value="true" />
									<div className="rounded-md shadow-sm -space-y-px">
										<div>
											<label htmlFor="name" className="sr-only">Nome</label>
											<input
												id="name"
												name="name"
												onChange={handleChange}
												type="text"
												autoComplete="name"
												required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
												placeholder="Nome"
												value={values.name}
											/>
										</div>
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
										<div>
											<label htmlFor="cpf" className="sr-only">CPF</label>
											<input
												id="cpf"
												name="cpf"
												onChange={handleChange}
												type="text"
												autoComplete="cpf"
												required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
												placeholder="CPF"
												value={values.cpf}
											/>
										</div>
										<div>
											<label htmlFor="password" className="sr-only">Senha</label>
											<input
												id="password"
												name="password"
												onChange={handleChange}
												type="password"
												autoComplete="current-password"
												required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
												placeholder="Senha"
												value={values.password}
											/>

										</div>
										<div>
											<label htmlFor="confirmPassword" className="sr-only">Confirmar senha</label>
											<input
												id="confirmPassword"
												name="confirmPassword"
												onChange={handleChange}
												type="password"
												required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
												placeholder="Confirmar senha"
												value={values.confirmPassword}
											/>
										</div>
									</div>
									{errorMessage || errors.email || errors.confirmPassword &&
										< div className="flex flex-col">
											{errorMessage && <span>{errorMessage}</span>}
											{errors.email && <span>{errors.email}</span>}
											{errors.confirmPassword && <span>{errors.confirmPassword}</span>}
										</div>
									}
									<div className="flex flex-col gap-2">
										<button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500]">
											Cadastrar
										</button>
										<Link href="/login">
											<a className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500] cursor-pointer">
												Fazer Login
											</a>
										</Link>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div >
			</div >
		</>
	)
}
