import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Formik } from 'formik'

import { Login } from '../services/firebase'

export default function LoginPage() {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>Login - WEBCEUA</title>
			</Head>
			<div className="min-h-full sm-w-96 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-xs w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Entre com sua conta
						</h2>
					</div>

					<Formik
						initialValues={{ email: '', password: '' }}
						validate={values => {
							const errors = {}
							if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Email inválido';
							}

							return errors
						}}
						onSubmit={(values, { setSubmitting }) => {
							Login(values.email, values.password)
								.then(response => {
									router.push('/dashboard')
								})

							setTimeout(() => {
								setSubmitting(false)
							}, 4000)
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
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-[indigo-500] border-gray-300 rounded" />
										<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
											Lembrar-me
										</label>
									</div>

									<div className="text-sm">
										<a href="#" className="font-medium text-blue-800 hover:text-[indigo-500]">
											Esqueceu sua senha?
										</a>
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500]">
										<span className="absolute left-0 inset-y-0 flex items-center pl-3">
											<svg className="h-5 w-5 text-[indigo-500] group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
												<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
											</svg>
										</span>
										Entrar
									</button>
									<Link href="/cadastro">
										<a className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[indigo-500] cursor-pointer">
											Não possui cadastro?
										</a>
									</Link>
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}
