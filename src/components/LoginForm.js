import React from 'react'
import Link from 'next/link'
import { Field, Form, Formik } from 'formik'

import { useAuth } from '../contexts/AuthContext'

export function LoginForm() {
	const { login } = useAuth()

	return (
		<>
			<h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
				Entre com sua conta
			</h2>

			<Formik
				initialValues={{ email: '', password: '', "remember-me": false }}
				validate={values => {
					const errors = {}
					if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Email inválido';
					}

					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					login(values.email, values.password, values["remember-me"])
					setSubmitting(false)
				}}
			>
				{({}) => (

					<Form className="mt-8 space-y-6">
						<input type="hidden" name="remember" value="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">Endereço de email</label>
								<Field
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
									placeholder="Endereço de email"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">Senha</label>
								<Field
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[indigo-500] focus:border-[indigo-500] focus:z-10 sm:text-sm"
									placeholder="Senha"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<Field id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#005090] focus:ring-[indigo-500] border-gray-300 rounded" />
								<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
									Lembrar-me
								</label>
							</div>

							<div className="text-sm">
								<Link href="/reset-password">
									<a className="font-medium text-[#005090] hover:text-[indigo-500]">
										Esqueceu sua senha?
									</a>
								</Link>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#005090] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500]">
								Entrar
							</button>
							<Link href="/signup">
								<a className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#005090] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500] cursor-pointer">
									Não possui cadastro?
								</a>
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}
