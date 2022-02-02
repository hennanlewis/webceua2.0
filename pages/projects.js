import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useAuth } from "../src/contexts/AuthContext"

export default function Projects() {
	const { signOut, currentUser } = useAuth()
	const [showMenu, setShowMenu] = useState(false)
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (!currentUser) {
			router.push("/login")
		}
	}, [currentUser])

	const handleLogout = () => {
		signOut()
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<>
			<Head>
				<title>Projetos</title>
			</Head>

			<div className="h-[100vh] w-[100vw]">
				<nav className="bg-blue-800">
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center">
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										<Link href="/dashboard">
											<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												Dashboard
											</a>
										</Link>
										<Link href="/projects">
											<a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
												Projetos
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									<button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span className="sr-only">View notifications</span>
										<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
										</svg>
									</button>

									<div className="ml-3 relative">
										<div>
											<button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
												<span className="sr-only">Menu de usuário</span>
												<img
													onClick={() => setShowMenu(!showMenu)}
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</button>
										</div>

										<div className={`${!showMenu && 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
											<Link href="/settings">
												<a
													className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-2"
												>
													Configurações
												</a>
											</Link>
											<span
												onClick={handleLogout}
												className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-2"
											>Deslogar</span>
										</div>
									</div>
								</div>
							</div>
							<div className="-mr-2 flex md:hidden">
								<button
									type="button"
									onClick={() => setShowMobileMenu(!showMobileMenu)}
									className={`bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span className="sr-only">Abrir menu</span>
									<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
									</svg>
									<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className={`${!showMobileMenu && 'hidden'} md:hidden`} id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<Link href="/dashboard">
								<a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
							</Link>
							<Link href="/projects">
								<a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Projetos</a>
							</Link>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-700">
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</div>
								<div className="ml-3">
									<div className="text-base font-medium leading-none text-white">Tom Cook</div>
									<div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
								</div>
								<button type="button" className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									<span className="sr-only">View notifications</span>
									<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
									</svg>
								</button>
							</div>
							<div className="mt-3 px-2 space-y-1">
								<span
									onClick={handleLogout}
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
								>Deslogar</span>
							</div>
						</div>
					</div>
				</nav>

				<header className="bg-blue-800 shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-white">
							Projetos
						</h1>
					</div>
				</header>
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white">
						<div className="px-4 py-6 sm:px-0">
							<div className="border-4 border-dashed border-gray-400 rounded-lg p-2 h-96">
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}