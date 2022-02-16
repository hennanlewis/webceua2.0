import { Field, Form, Formik } from 'formik'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import Router from 'next/router'
import nProgress from 'nprogress'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { isValidImage } from '../utils/validateImage'

export function FormSettings(props) {
	const { userInfo } = props
	const { currentUser, updateUserDBInfo } = useAuth()
	const [foto, setFoto] = useState("default-image-profile.jpg")
	const [showFoto, setShowFoto] = useState(false)

	useEffect(() => {
		if (!currentUser) {
			Router.push("/signout")
		}
	}, [currentUser])

	const handleUpdateUser = async (values) => {
		await updateUserDBInfo({
			nome: values.nome,
			departamento: values.departamento,
			vinculo: values.vinculo,
			telefone: values.telefone,
			foto: showFoto ? values.fotoNova : userInfo.foto,
			instituicao: values.instituicao,
			lattes: values.lattes,
		})
	}

	const handleValidImage = async (url) => {
		const image = await isValidImage(url, userInfo.foto)
		setShowFoto(!showFoto)
		setFoto(image)
	}

	useEffect(() => {
		handleValidImage(foto)
	}, [])

	return (
		<Formik
			enableReinitialize
			initialValues={{
				nome: "",
				departamento: "",
				vinculo: "",
				telefone: "",
				fotoNova: foto,
				instituicao: "",
				lattes: "",
				...userInfo
			}}
			onSubmit={async (values) => {
				nProgress.start()
				handleValidImage(values.foto)

				setTimeout(async () => {
					await handleUpdateUser(values)
					nProgress.done()
				}, 1000)
			}}
		>
			{({ values }) => (

				<Form
					className="bg-indigo-700/80 p-2 rounded-2xl max-h-[1000rem]"
				>
					<div className="bg-[#005090]/90 flex flex-col gap-2 p-2 rounded-xl">
						<div className="max-w-[30rem] p-2 text-white text-center">
							Alguns dos dados a seguir são inseridos automaticamente
							no formulário de submissão de um novo projeto
						</div>
						<div className="flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">

							<fieldset className="flex flex-col gap-4">
								<span className="flex flex-col p-2 py-1 -ml-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
									Meus dados
								</span>

								<div className="flex flex-col items-center h-40 mt-2 mx-2 rounded-md">
									<img className="w-40 object-cover rounded-lg" src={showFoto ? foto : userInfo.foto} />
								</div>

								<label
									className="flex gap-2"
									htmlFor="fotoNova"
								>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="fotoNova"
										name="fotoNova"
										placeholder="Link para nova foto"
									/>
									<button
										className="w-28 p-2 text-sm ml-auto text-white bg-[#005090] rounded-md hover:bg-gray-300 hover:text-[#005090] shadow-[0_1px_5px_#0006]"
										type="button"
										onClick={() => handleValidImage(values.fotoNova)}
									>
										{!showFoto ? "Visualizar" : "Foto padrão"}
									</button>
								</label>

								<label
									className="flex flex-col"
									htmlFor="Nome"
								>
									<span className="flex flex-col">Nome</span>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="Nome"
										name="nome"
										placeholder="Digite seu nome completo"
									/>
								</label>

								<label
									className="flex flex-col max-w-[15rem]"
									htmlFor="Telefone"
								>
									<span className="flex flex-col">Telefone</span>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="tel"
										id="Telefone"
										name="telefone"
									/>
								</label>

								<label
									className="flex flex-col"
									htmlFor="Instituicao"
								>
									<span className="flex flex-col">Instituição/Unidade</span>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="Instituicao"
										name="instituicao"
									/>
								</label>

								<label
									className="flex flex-col"
									htmlFor="Departamento"
								>
									<span className="flex flex-col">Departamento/Disciplina</span>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="Departamento"
										name="departamento"
									/>
								</label>

								<label
									className="flex flex-col"
									htmlFor="Lattes"
								>
									<span className="flex flex-col">Link do currículo lattes</span>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="Lattes"
										name="lattes"
									/>
								</label>

								<span className="flex flex-col">
									<span className="">Vínculo com a instituição</span>
									<label htmlFor="VinculoDocente">
										<span className="flex gap-1">
											<Field
												type="radio" value="docente"
												id="VinculoDocente"
												name="vinculo"
											/>
											<span className="translate-y-[-2px]">
												Docente/Pesquisador</span>
										</span>
									</label>
									<label htmlFor="VinculoTecnico" className="flex gap-1">
										<Field
											type="radio" value="técnico"
											id="VinculoTecnico"
											name="vinculo"
										/>
										<span className="translate-y-[-2px]">
											Técnico Nível Superior</span>
									</label>
									<label htmlFor="VinculoJovem" className="flex gap-1">
										<Field
											type="radio" value="jovem_pes"
											id="VinculoJovem"
											name="vinculo"
										/>
										<span className="translate-y-[-2px]">
											Jovem Pes./Pes. Visitante</span>
									</label>
								</span>
							</fieldset>
						</div>

						<div className="flex justify-end gap-2">
							<span>
								<button
									className="p-2 text-sm ml-auto text-gray-700 bg-white rounded-md hover:bg-gray-300 hover:text-[#005090]"
									type="submit"
								>
									Salvar alterações
								</button>
							</span>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}