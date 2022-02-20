import Head from "next/head"
import Router, { useRouter } from "next/router"
import { Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { BsPeopleFill } from "react-icons/bs"
import { TiDocumentText } from "react-icons/ti"
import { FaIdCard, FaNotesMedical } from "react-icons/fa"
import { GiSeatedMouse, GiLoveInjection } from "react-icons/gi"
import { ImAttachment } from "react-icons/im"

import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { useAuth } from "../src/contexts/AuthContext"
import { UserMenu } from "../src/components/UserMenu"
import { NewProjectMainData } from "../src/components/FormProject/MainData"
import { NewProjectColaborators } from "../src/components/FormProject/Colaborators"
import { NewProjectAnimalModel } from "../src/components/FormProject/AnimalModel"
import { NewProjectAnimalExperiment } from "../src/components/FormProject/AnimalExperiment"
import { NewProjectAnimals } from "../src/components/FormProject/Animals"
import { NewProjectDrugs } from "../src/components/FormProject/Drugs"
import { NewProjectAnimalPostoperative } from "../src/components/FormProject/AnimalPostoperative"
import { NewProjectAttachments } from "../src/components/FormProject/Attachments"

import initialProjectValues from '../src/utils/initialProjectValues'
import nProgress from "nprogress"

export default function EditProject() {
	const { currentUser, updateProject, getProjects, userInfo } = useAuth()
	const [formPosition, setFormPosition] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [projeto, setProjeto] = useState()

	const [openMenu, setOpenMenu] = useState(
		{ navMenu: false },
		{ userMenu: false }
	)

	const translateIndicator = [
		'translate-x-[0rem]',
		'translate-x-[2.5rem]',
		'translate-x-[5rem]',
		'translate-x-[7.5rem]',
		'translate-x-[10rem]',
		'translate-x-[12.5rem]',
		'translate-x-[15rem]',
		'translate-x-[17.5rem]',
	]

	const icons = [
		<FaIdCard key="FaIdCard" />,
		<BsPeopleFill key="BsPeopleFill" />,
		<GiSeatedMouse key="GiSeatedMouse" />,
		<GiSeatedMouse key="GiSeatedMouse2" />,
		<TiDocumentText key="TiDocumentText" />,
		<FaNotesMedical key="FaNotesMedical" />,
		<GiLoveInjection key="GiLoveInjection" />,
		<ImAttachment key="ImAttachment" />
	]

	useEffect(() => {
		if (!currentUser) {
			Router.push("/signout")
		}
		if (userInfo.atuador !== "pesquisador" || projeto?.status === "Submetido") {
			Router.push("/dashboard")
		}
		setLoaded(true)
	}, [currentUser])

	useEffect(() => {
		getProjects()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setProjeto(data.filter(item => item.id === id)[0])
				}
			})
	}, [getProjects])

	const handleOpenNavMenu = (key) => {
		setOpenMenu({ ...openMenu, [key]: !openMenu[key] })
	}

	const router = useRouter()
	const {
		query: { id },
	} = router

	const handleUpdateProject = async (values) => {
		nProgress.start()
		const response = await updateProject({ status: "Salvo", projeto: values, id })
		console.log(response)
		nProgress.done()
		Router.push("/dashboard")
	}

	const handleSubmitProject = async (values) => {
		nProgress.start()
		if (projeto.status === "Salvo") {
			const response = await updateProject({ status: "Submetido", projeto: values, id })
			setProjeto({ ...projeto, status: "Submetido"})
			console.log(response)
		}
		
		if (projeto.status === "Em correção") {
			const response = await updateProject({ status: "Corrigido", projeto: values, id })
			setProjeto({ ...projeto, status: "Corrigido"})
			console.log(response)
		}
		nProgress.done()
		Router.push("/dashboard")
	}

	return (loaded &&
		<>
			<Head>
				<title>Editar Projeto</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Editar Projeto" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/edit-project" />

					<Main center>
						<div className="flex flex-col items-center gap-10">
							<div className="grow-0 relative flex px-4 py-2 text-2xl rounded-xl bg-white shadow-[0_2px_5px_#0008] xs:scale-90">
								<span className={`absolute w-12 -ml-1 h-12 rounded-full bg-[#005090] shadow-[0_2px_10px_#000] translate-x- ring-white ring-4 ${translateIndicator[formPosition]} -translate-y-6 duration-200`}></span>
								{
									icons.map((_, index) =>
										index === formPosition ?
											<span
												className="flex justify-center items-center w-10 h-10 rounded-full text-white z-10 -translate-y-5 duration-200"
												key={icons[index].key}
												onClick={() => console.log(index)}
											>{icons[index]}</span>
											:
											<span
												className="flex justify-center items-center w-10 h-10 text-black z-10 duration-200"
												key={icons[index].key}
												onClick={() => setFormPosition(index)}
											>{icons[index]}</span>)
								}
							</div>

							<Formik
								enableReinitialize
								initialValues={{
									...initialProjectValues,
									...projeto?.projeto
								}}
								onSubmit={values => {
									handleSubmitProject(values)
								}}
							>
								{({ values }) => (
									<Form
										className="max-w-[90vw] w-[40rem] bg-indigo-700/80 p-2 rounded-2xl max-h-[1000rem]"
									>
										<div className="bg-[#005090]/90 p-2 rounded-t-xl">
											<NewProjectMainData coord={projeto?.coord?.aba1} position={formPosition} />
											<NewProjectColaborators coord={projeto?.coord?.aba2} position={formPosition} />
											<NewProjectAnimalModel coord={projeto?.coord?.aba3} position={formPosition} />
											<NewProjectAnimals coord={projeto?.coord?.aba4} position={formPosition} />
											<NewProjectAnimalExperiment coord={projeto?.coord?.aba5} position={formPosition} />
											<NewProjectDrugs coord={projeto?.coord?.aba6} position={formPosition} />
											<NewProjectAnimalPostoperative coord={projeto?.coord?.aba7} position={formPosition} />
											<NewProjectAttachments coord={projeto?.coord?.aba8} position={formPosition} />
										</div>
										<span className="relative flex justify-end gap-2 bg-[#005090]/90 p-2 bg-[#005090] rounded-b-xl">
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="button"
												onClick={() => handleUpdateProject(values)}
											>
												Alterar dados
											</button>
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="submit"
											>
												{ projeto?.status === "Salvo" && "Submeter projeto" }
												{ projeto?.status === "Em correção" && "Corrigir projeto" }
											</button>
										</span>
									</Form>
								)}
							</Formik>
						</div>
					</Main>
				</div>
			</div>
		</>
	)
}