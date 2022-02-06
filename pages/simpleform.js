import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"
import { BsPeopleFill } from "react-icons/bs"
import { TiDocumentText } from "react-icons/ti"
import { FaIdCard, FaNotesMedical } from "react-icons/fa"
import { GiSeatedMouse, GiLoveInjection } from "react-icons/gi"
import { ImAttachment } from "react-icons/im"

import { useAuth } from "../src/contexts/AuthContext"
import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { UserMenu } from "../src/components/UserMenu"
import { NewProjectMainData } from "../src/components/NewProjectMainData"
import { NewProjectColaborators } from "../src/components/NewProjectColaborators"
import { NewProjectAnimalModel } from "../src/components/NewProjectAnimalModel"
import { NewProjectAnimalExperiment } from "../src/components/NewProjectAnimalExperiment"
import { NewProjectAnimals } from "../src/components/NewProjectAnimals"
import { NewProjectDrugs } from "../src/components/NewProjectDrugs"
import { NewProjectAnimalPostoperative } from "../src/components/NewProjectAnimalPostoperative"
import { NewProjectAttachments } from "../src/components/NewProjectAttachments"
import { Form, Formik } from "formik"
import { Nome, Email, Texto, Checkbox } from "../src/components/ForNome"

export default function NewProject() {
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
				<title>Novo Projeto</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Novo Projeto" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col md:flex-row">
					<NavMenu openMenuState={openMenu} currentURL="/new-project" />

					<Main>
						<Formik
							initialValues={{ nome: '', email: '', texto: '', checkbox:'' }}
							onSubmit={(values, { setSubmitting }) => {
								console.log(values)
							}}
						>
							{({ values }) => (
								<Form className="flex flex-col">
									<Nome />
									<Email />
									<Texto />
									<Checkbox />
									<button type="submit">Enviar</button>
								</Form>
							)}
						</Formik>
					</Main>
				</div>
			</div>
		</>
	)
}