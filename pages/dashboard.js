import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"

import { Header } from "../src/components/Header"
import { NavMenu } from "../src/components/NavMenu"
import { NavMenuCoord } from "../src/components/NavMenuCoord"
import { UserMenu } from "../src/components/UserMenu"
import { useAuth } from "../src/contexts/AuthContext"
import { MainRechearcher } from "../src/components/MainRechearcher"
import { MainCoord } from "../src/components/MainCoord"
import { MainReviewer } from "../src/components/MainReviewer"

export default function Dashboard() {
	const { currentUser, userInfo } = useAuth()
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
				<Header
					currentPage="Dashboard"
					currentUser={currentUser}
					openMenuState={openMenu}
					openNavMenuFunction={handleOpenNavMenu}
				/>
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col justify-center md:flex-row">
					{(userInfo.atuador === "parecerista" || userInfo.atuador === "coord") &&
						<NavMenuCoord openMenuState={openMenu} currentURL="/dashboard" />
					}
					{userInfo.atuador === "pesquisador" &&
						<NavMenu openMenuState={openMenu} currentURL="/dashboard" />
					}

					{userInfo.atuador === "coord" && <MainCoord />}
					{userInfo.atuador === "pesquisador" && <MainRechearcher />}
					{userInfo.atuador === "parecerista" && <MainReviewer />}

				</div >
			</div >
		</>
	)
}
