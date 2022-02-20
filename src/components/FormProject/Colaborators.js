import Link from "next/link"
import { useEffect, useState } from "react"
import { Field, FieldArray, useFormikContext } from "formik"

import { useAuth } from "../../contexts/AuthContext"

export function NewProjectColaborators(props) {
	const { values } = useFormikContext()
	const { coord, position } = props

	const showAllCorrections = () => {
		return (
			<div className="flex flex-col text-white gap-4">
				{coord !== undefined ?? <h1 className="mt-4 -mb-4 text-white text-center font-bold">Edição sugerida</h1>}
				{showCorrectionItem("Colaboradores", coord?.edicaoColaboradores)}
			</div>
		)
	}

	const showCorrectionItem = (attributeName, value) => {
		if (value) {
			return (
				<div className="flex flex-col text-sm text-white text-justify lg:text-right">
					<span>Edição sugerida em <b>{attributeName}</b>:</span>
					<span>{value}</span>
				</div>
			)
		}
	}

	return (
		<div className={position === 1 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Colaboradores</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Preencha os campos caso seja necessário a adição de algum colaborador.
					</div>
					<div className="mt-6 text-right">
						<Link href="/dashboard">
							<a
								className="flex flex-col items-end text-white hover:text-gray-200 font-bold underline"
							>
								Página inicial
							</a>
						</Link>
					</div>
					{showAllCorrections()}
				</div>
				<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">

					<FieldArray name="colaboradores">
						{({ insert, remove, push }) => (
							<>
								{values.colaboradores?.length > 0 &&
									values.colaboradores.map((_, index) =>
										<PosicaoVetorColaboradores key={index} remove={remove} position={index} />)}

								<button
									type="button"
									className="mt-1 bg-[#005090] text-gray-300 hover:bg-[#005090]/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
									onClick={() => push({
										email: "",
										nome: "",
										departamento: "",
										vinculo: "",
										telefone: "",
										instituicao: "",
										lattes: "",
									})}
								>
									Adicionar Colaborador
								</button>
							</>
						)}
					</FieldArray>
				</div>
			</div>
		</div>
	)
}

function PosicaoVetorColaboradores(props) {
	const { position, remove } = props
	const { currentUser, getUsersDBInfo } = useAuth()
	const [opcoes, setOpcoes] = useState()
	const [dados, setDados] = useState([])
	const { values, setFieldValue } = useFormikContext()

	useEffect(() => {
		getUsersDBInfo()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setOpcoes(data.map(item =>
						<option key={item.email} value={item.email}>{item.email}</option>
					))
					setDados(data)
				}
			})
	}, [])

	useEffect(() => {
		const opcaoSelecionada = dados.filter(item => item.email === values.colaboradores[`${position}`].email)[0]
		if (opcaoSelecionada !== undefined) {
			setFieldValue(`colaboradores.${position}.nome`, opcaoSelecionada?.nome || "")
			setFieldValue(`colaboradores.${position}.telefone`, opcaoSelecionada?.telefone || "")
			setFieldValue(`colaboradores.${position}.instituicao`, opcaoSelecionada?.instituicao || "")
			setFieldValue(`colaboradores.${position}.departamento`, opcaoSelecionada?.departamento || "")
			setFieldValue(`colaboradores.${position}.lattes`, opcaoSelecionada?.lattes || "")
			setFieldValue(`colaboradores.${position}.vinculo`, opcaoSelecionada?.vinculo || "")
		}
	}, [values.colaboradores])

	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
				Colaboradores
			</span>

			<label
				className="flex flex-col-reverse"
				htmlFor="list"
			>
				<Field
					as="select"
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					id="colaboradores"
					name={`colaboradores.${position}.email`}
				>
					<option value="">Selecione o usuário pelo email</option>
					{opcoes}
				</Field>
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
					name={`colaboradores.${position}.nome`}
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
					name={`colaboradores.${position}.telefone`}
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
					name={`colaboradores.${position}.instituicao`}
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
					name={`colaboradores.${position}.departamento`}
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
					name={`colaboradores.${position}.lattes`}
				/>
			</label>

			<span className="flex flex-col">
				<span className="">Vínculo com a instituição</span>
				<label htmlFor="VinculoDocente" className="flex gap-1">
					<Field
						type="radio" value="docente"
						id="VinculoDocente"
						name={`colaboradores.${position}.vinculo`}
					/>
					<span className="translate-y-[-2px]">
						Docente/Pesquisador</span>
				</label>
				<label htmlFor="VinculoTecnico" className="flex gap-1">
					<Field
						type="radio" value="técnico"
						id="VinculoTecnico"
						name={`colaboradores.${position}.vinculo`}
					/>
					<span className="translate-y-[-2px]">
						Técnico Nível Superior</span>
				</label>
				<label htmlFor="VinculoJovem" className="flex gap-1">
					<Field
						type="radio" value="jovem_pes"
						id="VinculoJovem"
						name={`colaboradores.${position}.vinculo`}
					/>
					<span className="translate-y-[-2px]">
						Jovem Pes./Pes. Visitante</span>
				</label>
			</span>
			<button
				type="button"
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				onClick={() => remove(position)}
			>
				Remover Colaborador
			</button>
		</fieldset>

	)
}
