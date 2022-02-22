import Head from "next/head"
import Router, { useRouter } from "next/router"
import { Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { BsPeopleFill } from "react-icons/bs"
import { TiDocumentText } from "react-icons/ti"
import { FaIdCard, FaNotesMedical } from "react-icons/fa"
import { GiSeatedMouse, GiLoveInjection } from "react-icons/gi"
import { ImAttachment } from "react-icons/im"
import nProgress from "nprogress"

import { Header } from "../src/components/Header"
import { Main } from "../src/components/Main"
import { NavMenu } from "../src/components/NavMenu"
import { NavMenuCoord } from "../src/components/NavMenuCoord"
import { useAuth } from "../src/contexts/AuthContext"
import { UserMenu } from "../src/components/UserMenu"
import { ModifyProjectMainData } from "../src/components/ModifyProject/MainData"
import { ModifyProjectColaborators } from "../src/components/ModifyProject/Colaborators"
import { ModifyProjectAnimalModel } from "../src/components/ModifyProject/AnimalModel"
import { ModifyProjectAnimalExperiment } from "../src/components/ModifyProject/AnimalExperiment"
import { ModifyProjectAnimals } from "../src/components/ModifyProject/Animals"
import { ModifyProjectDrugs } from "../src/components/ModifyProject/Drugs"
import { ModifyProjectAnimalPostoperative } from "../src/components/ModifyProject/AnimalPostoperative"
import { ModifyProjectAttachments } from "../src/components/ModifyProject/Attachments"

import initialProjectValues from '../src/utils/initialProjectValues'

export default function EditProject() {
	const { currentUser, updateProjectReviewer, getProjectsReviewer, userInfo } = useAuth()
	const [formPosition, setFormPosition] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [projeto, setProjeto] = useState()
	const [showReviwers, setShowReviwers] = useState(false)

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
		if (userInfo.atuador !== "parecerista") {
			Router.push("/dashboard")
		}
		setLoaded(true)
	}, [currentUser])

	useEffect(() => {
		getProjectsReviewer()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setProjeto(data.filter(item => item.id === id)[0])
				}
			})
	}, [getProjectsReviewer])

	const handleOpenNavMenu = (key) => {
		setOpenMenu({ ...openMenu, [key]: !openMenu[key] })
	}

	const router = useRouter()
	const {
		query: { id },
	} = router

	const handleUpdateProject = async (values) => {
		nProgress.start()
		const response = await updateProjectReviewer({
			status: projeto.status,
			correcao: {
				aba1: {
					edicaoPrazo: values.edicaoPrazo || "",
					edicaoTitulo: values.edicaoTitulo || "",
					edicaoResponsavel: values.edicaoResponsavel || "",
					edicaoResumo: values.edicaoResumo || "",
					edicaoObjetivos: values.edicaoObjetivos || "",
					edicaoJustificativa: values.edicaoJustificativa || "",
					edicaoRelevancia: values.edicaoRelevancia || ""
				},
				aba2: {
					edicaoColaboradores: values.edicaoColaboradores || ""
				},
				aba3: {
					edicaoModeloAnimal: values.edicaoModeloAnimal || "",
					edicaoBioterio: values.edicaoBioterio || "",
					edicaoMetodosCaptura: values.edicaoMetodosCaptura || "",
					edicaoPlanejamentoExperimental: values.edicaoPlanejamentoExperimental || "",
					edicaoGrauInvasividade: values.edicaoGrauInvasividade || "",
					edicaoAlojamento: values.edicaoAlojamento || "",
					edicaoCondicoesAlojamentoAlimentacao: values.edicaoCondicoesAlojamentoAlimentacao || ""
				},
				aba4: {
					edicaoAnimais: values.edicaoAnimais || ""
				},
				aba5: {
					edicaoProcedimentosExperimentais: values.edicaoProcedimentosExperimentais || "",
					edicaoEstresse: values.edicaoEstresse || "",
					edicaoImobilizacao: values.edicaoImobilizacao || "",
					edicaoCondicoesAlimentares: values.edicaoCondicoesAlimentares || "",
					edicaoCirurgia: values.edicaoCirurgia || "",
				},
				aba6: {
					edicaoFarmacos: values.edicaoFarmacos || ""
				},
				aba7: {
					edicaoObservacaoRecuperacao: values.edicaoObservacaoRecuperacao || "",
					edicaoUsoAnalgesia: values.edicaoUsoAnalgesia || "",
					edicaoOutrosCuidados: values.edicaoOutrosCuidados || "",
					edicaoPontoFinal: values.edicaoPontoFinal || "",
					edicaoExposicaoo: values.edicaoExposicaoo || "",
					edicaoExtracaoMateria: values.edicaoExtracaoMateria || "",
					edicaoEutanasia: values.edicaoEutanasia || "",
					edicaoDestinoPosExperimento: values.edicaoDestinoPosExperimento || "",
					edicaoFormaDescarte: values.edicaoFormaDescarte || "",
					edicaoResumoProcedimento: values.edicaoResumoProcedimento || "",
					edicaoReferencias: values.edicaoReferencias || ""
				},
				aba8: {
					edicaoAnexos: values.edicaoAnexos || ""
				},
			}, id
		})
		console.log(response)
		nProgress.done()
	}

	const handleRefuseProject = async () => {
		nProgress.start()
		if (projeto.status === "No parecerista") {
			const response = await updateProjectReviewer({
				id,
				correcao: {
					aba1: {},
					aba2: {},
					aba3: {},
					aba4: {},
					aba5: {},
					aba6: {},
					aba7: {},
					aba8: {}
				},
				status: "Recusado" })
			setProjeto({ ...projeto, correcao: {}, status: "Recusado" })
			console.log(response)
		}
		nProgress.done()
		Router.push("/dashboard")
	}

	const handleAcceptProject = async () => {
		nProgress.start()
		if (projeto.status === "No parecerista") {
			const response = await updateProjectReviewer({
				id,
				correcao: {
					aba1: {},
					aba2: {},
					aba3: {},
					aba4: {},
					aba5: {},
					aba6: {},
					aba7: {},
					aba8: {}
				},
				status: "Em aprovação"
			})
			setProjeto({ ...projeto, status: "Em aprovação" })
			console.log(response)
		}
		nProgress.done()
		Router.push("/dashboard")
	}

	return (loaded &&
		<>
			<Head>
				<title>Revisar Projeto</title>
			</Head>

			<div className="min-h-[100vh] w-[100vw] relative flex flex-col">
				<Header currentPage="Revisar Projeto" currentUser={currentUser} openNavMenuFunction={handleOpenNavMenu} openMenuState={openMenu} />
				<UserMenu openMenuState={openMenu} />

				<div className="grow flex flex-col justify-center md:flex-row">
					{(userInfo.atuador === "parecerista" || userInfo.atuador === "coord") &&
						<NavMenuCoord openMenuState={openMenu} currentURL="/review-project" />
					}
					{userInfo.atuador === "pesquisador" &&
						<NavMenu openMenuState={openMenu} currentURL="/review-project" />
					}

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
									parecerista: {},
									...projeto?.projeto
								}}
								onSubmit={async values => { }}
							>
								{({ values }) => (
									<Form
										className="max-w-[90vw] w-[40rem] bg-indigo-700/80 p-2 rounded-2xl max-h-[1000rem]"
									>
										<div className="bg-[#005090]/90 p-2 rounded-t-xl">
											<ModifyProjectMainData
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectColaborators
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectAnimalModel
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectAnimals
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectAnimalExperiment
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectDrugs
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectAnimalPostoperative
												projeto={projeto}
												position={formPosition}
											/>
											<ModifyProjectAttachments
												projeto={projeto}
												position={formPosition}
											/>
										</div>
										<span className="relative flex justify-end gap-2 bg-[#005090]/90 p-2 bg-[#005090] rounded-b-xl">
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="button"
												onClick={() => handleUpdateProject(values)}
											>
												Salvar sugestões
											</button>
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="button"
												onClick={() => handleRefuseProject(!showReviwers)}
											>
												Recusar projeto
											</button>
											<button
												className="block mb-4 px-4 py-2 text-sm text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
												type="button"
												onClick={() => handleAcceptProject(!showReviwers)}
											>
												Aprovar projeto
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