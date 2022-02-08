import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"

import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { UserMenu } from "../src/components/UserMenu"
import { useAuth } from "../src/contexts/AuthContext"

export default function Dashboard() {
	const { currentUser } = useAuth()
	const [openMenu, setOpenMenu] = useState(
		{ navMenu: false },
		{ userMenu: false }
	)

	useEffect(() => {
		if (!currentUser) {
			Router.push("/signout")
		}
	}, [currentUser])

	const handleOpenNavMenu = (key) => {
		setOpenMenu({ ...openMenu, [key]: !openMenu[key] })
	}

	return (currentUser &&
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Dashboard" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/dashboard" />

						<Main center>
							<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								<span className="block text-center">Não há projetos para revisar</span>
								<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
							</h2>
						</Main>

				</div>
			</div>
		</>
	)
}
