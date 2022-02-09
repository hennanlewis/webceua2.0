import Head from "next/head"
import Router from "next/router"
import { useEffect, useRef, useState } from "react"
import { FormSettings } from "../src/components/FormSettings"

import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { UserMenu } from "../src/components/UserMenu"
import { useAuth } from "../src/contexts/AuthContext"

export default function Settings() {
	const { currentUser, getUserInfo } = useAuth()
	const [userInfo, setUserInfo] = useState({})
	const [openMenu, setOpenMenu] = useState(
		{ navMenu: false },
		{ userMenu: false }
	)

	const userInfoRef = useRef(getUserInfo)

	useEffect(() => {
		(async () => {
			const data = await userInfoRef.current()
			console.log(data)
			setUserInfo(data)
		})()
	}, [])

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
				<title>Configurações</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Meus dados" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/settings" />

					<Main center>
						<FormSettings userInfo={userInfo.data} />
					</Main>
				</div>
			</div >
		</>
	)
}