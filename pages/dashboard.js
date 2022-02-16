import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"
import { FaQuestion } from "react-icons/fa"

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
				if (response.data) {
					setProjetos(response.data)
				}
			})
	}, [])

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
						{!projetos &&
							<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								<span className="block text-center">Não há projetos para revisar</span>
								<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
							</h2>
						}
						<div className="flex flex-wrap">

							{projetos &&
								<div className="flex flex-col lg:flex-row bg-[#005090] rounded-2xl gap-4 p-4 max-h-[1000rem] shadow-[0_1px_5px_#000]">
									<div className="flex flex-col m-auto lg:w-60">
										<h3 className="text-2xl text-center lg:text-right font-extrabold tracking-tight text-white sm:text-3xl">Projetos</h3>
										<div className="text-sm text-white text-center lg:text-right">
											Para visualizar os dados de cada projeto, clique no título do respectivo projeto desejado.

											<div className="flex flex-col gap-2 bg-white rounded-lg font-bold mt-10 p-2 max-h-8 hover:max-h-[1000rem] overflow-hidden duration-500">
												<span className="text-center m-auto text-[#005090]"><FaQuestion /></span>
												<span className="text-center m-auto text-[#005090]">
													Projetos submetidos não são possíveis de serem editados até sair o resultado das sugestões
													de correção dos coordenadores ou pareceristas.
												</span>
											</div>
										</div>
									</div>
									<table className="overflow-hidden rounded-lg">
										<thead className="bg-gray-50">
											<tr className="bg-black">
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
												<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pesquisadores</th>
												<th scope="col" className="relative px-6 py-3">
													<span className="sr-only">Edit</span>
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{projetos.filter(item => item.status === "Salvo").map(item =>
												<tr>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="ml-4">
																<div className="text-sm font-medium text-gray-900">{item.projeto.DadosProjetoTitulo || "Projeto sem título"}</div>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="ml-4">
																<div className="text-sm font-medium text-gray-900">
																	<img className="w-8 h-8 rounded-full" src={userInfo.foto} />
																</div>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
														<a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
													</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>
							}
						</div>
					</Main>

				</div >
			</div >
		</>
	)
}
