import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"

import { Header } from "../src/components/Header"
import { MenuNav } from "../src/components/MenuNav"
import { useAuth } from "../src/contexts/AuthContext"

export default function Dashboard() {
	const { currentUser } = useAuth()
	const [openMenu, setOpenMenu] = useState(
		{ menuMD: false }
	)

	useEffect(() => {
		if (!currentUser) {
			Router.push("/login")
		}
	}, [currentUser])

	const handleOpenMenuMD = (key) => {
		setOpenMenu({ ...openMenu, [key]: !openMenu[key] })
	}

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] flex flex-col">
				<Header currentUser={currentUser} openMenuMDFunction={handleOpenMenuMD} openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<MenuNav openMenuState={openMenu} currentURL="/dashboard" />

					<main className="grow">
						<div className="mx-auto p-4">
							<div className="border-4 border-dashed border-gray-400 rounded-lg p-2 h-96">
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
