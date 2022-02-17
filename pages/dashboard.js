import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"
import { FaQuestion } from "react-icons/fa"
import { ProjectCards } from "../src/components/ProjectCards"
import { ProjectsTable } from "../src/components/ProjectsTable"

import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { UserMenu } from "../src/components/UserMenu"
import { useAuth } from "../src/contexts/AuthContext"

export default function Dashboard() {
	const { currentUser, getProjects, userInfo } = useAuth()
	const [projetos, setProjetos] = useState()
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

	useEffect(() => {
		getProjects()
			.then((response) => {
				if (response.data.length) {
					setProjetos(response.data)
				}
			})
	}, [getProjects])

	return (currentUser &&
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Dashboard" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col justify-center md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/dashboard" />

					<Main>
						{!projetos &&
							<h2 className="flex flex-col grow-0 items-center m-auto text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
								<span className="block text-center">Você não possui projetos.</span>
								<span className="block text-center text-indigo-600">Adicione um agora mesmo!</span>
							</h2>
						}
						<div className="flex flex-col grow gap-2">
							{projetos && <ProjectsTable projetos={projetos} />}
							{projetos && <ProjectCards projetos={projetos} />}
						</div>
					</Main>

				</div >
			</div >
		</>
	)
}
