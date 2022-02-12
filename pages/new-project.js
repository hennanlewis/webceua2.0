import Head from "next/head"
import Router from "next/router"
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
import { NewProjectMainData } from "../src/components/NewProjectMainData"
import { NewProjectColaborators } from "../src/components/NewProjectColaborators"
import { NewProjectAnimalModel } from "../src/components/NewProjectAnimalModel"
import { NewProjectAnimalExperiment } from "../src/components/NewProjectAnimalExperiment"
import { NewProjectAnimals } from "../src/components/NewProjectAnimals"
import { NewProjectDrugs } from "../src/components/NewProjectDrugs"
import { NewProjectAnimalPostoperative } from "../src/components/NewProjectAnimalPostoperative"
import { NewProjectAttachments } from "../src/components/NewProjectAttachments"

import initialProjectValues from '../src/utils/initialProjectValues'

export default function NewProject() {
	const { currentUser, userInfo } = useAuth()
	const [formPosition, setFormPosition] = useState(0)

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
	}, [currentUser])

	const handleOpenNavMenu = (key) => {
		setOpenMenu({ ...openMenu, [key]: !openMenu[key] })
	}

	return (currentUser &&
		<>
			<Head>
				<title>Novo Projeto</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Novo Projeto" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/new-project" />

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
								initialValues={{
									...initialProjectValues,
									ResponsavelNome: userInfo.nome || "",
									ResponsavelInstituicao: userInfo.instituicao || "",
									ResponsavelDepartamento: userInfo.departartamento || "",
									ResponsavelLattes: userInfo.lattes || "",
									ResponsavelVinculo: userInfo.vinculo || "",
									ResponsavelTelefone: userInfo.telefone || "",
									ResponsavelEmail: userInfo.ResponsavelEmail || "",
								}}
								onSubmit={values => {
									console.log(values)
								}}
							>
								{({ values }) => (
									<Form
										className="max-w-[90vw] w-[40rem] bg-indigo-700/80 p-2 rounded-2xl max-h-[1000rem]"
									>
										<div className="bg-[#005090]/90 p-2 rounded-t-xl">
											<NewProjectMainData position={formPosition} />
											<NewProjectColaborators position={formPosition} />
											<NewProjectAnimalModel position={formPosition} />
											<NewProjectAnimals position={formPosition} />
											<NewProjectAnimalExperiment position={formPosition} />
											<NewProjectDrugs position={formPosition} />
											<NewProjectAnimalPostoperative position={formPosition} />
											<NewProjectAttachments position={formPosition} />
										</div>
										<span className="relative flex justify-end gap-2 bg-[#005090]/90 p-2 bg-[#005090] rounded-b-xl">
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="submit"
											>
												Salvar projeto
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