import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"
import { MenuNav } from "../src/components/MenuNav"

import { useAuth } from "../src/contexts/AuthContext"

export default function Dashboard() {
	const { currentUser } = useAuth()

	useEffect(() => {
		if (!currentUser) {
			Router.push("/login")
		}
	}, [currentUser])

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div className="h-[100vh] w-[100vw]">

				<header className="bg-blue-800 shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-white">
							Dashboard
						</h1>
					</div>
					<MenuNav />
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