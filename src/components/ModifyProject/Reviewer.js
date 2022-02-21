import { Field, useFormikContext } from "formik"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"

export function ModifyReviewer(props) {
	const { getReviewers } = useAuth()
	const [opcoes, setOpcoes] = useState()
	const [dados, setDados] = useState([])
	const { values, setFieldValue } = useFormikContext()

	useEffect(() => {
		getReviewers()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setOpcoes(data.map(item =>
						<option key={item.id} value={item.email}>{item.email}</option>
					))
					setDados(data)
				}
			})
	}, [getReviewers])

	useEffect(() => {
		const opcaoSelecionada = dados.filter(item => item.email === values.parecerista.email)[0]
		if (opcaoSelecionada !== undefined) {
			setFieldValue("parecerista", opcaoSelecionada)
		}
	}, [values.parecerista, dados, setFieldValue])

	return (
		<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">

			<fieldset className="flex flex-col gap-2">
				<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
					Colaboradores
				</span>

				<label
					className="flex flex-col-reverse"
				>
					<Field
						as="select"
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
						name="parecerista.email"
					>
						<option value="">Selecione o usuário pelo email</option>
						{opcoes}
					</Field>
				</label>

				<label
					className="flex flex-col"
				>
					<span className="flex flex-col">Nome</span>
					<Field
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						type="text"
						name="parecerista.nome"
					/>
				</label>

				<label
					className="flex flex-col max-w-[15rem]"
				>
					<span className="flex flex-col">Telefone</span>
					<Field
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						type="tel"
						name="parecerista.telefone"
					/>
				</label>

				<label
					className="flex flex-col"
				>
					<span className="flex flex-col">Instituição/Unidade</span>
					<Field
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						type="text"
						name="parecerista.instituicao"
					/>
				</label>

				<label
					className="flex flex-col"
				>
					<span className="flex flex-col">Departamento/Disciplina</span>
					<Field
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						type="text"
						name="parecerista.departamento"
					/>
				</label>

				<label
					className="flex flex-col"
				>
					<span className="flex flex-col">Link do currículo lattes</span>
					<Field
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						type="text"
						name="parecerista.lattes"
					/>
				</label>

				<span className="flex flex-col">
					<span className="">Vínculo com a instituição</span>
					<label htmlFor="VinculoDocente" className="flex gap-1">
						<Field
							type="radio" value="docente"
							id="VinculoDocente"
							name="parecerista.vinculo"
						/>
						<span className="translate-y-[-2px]">
							Docente/Pesquisador</span>
					</label>
					<label htmlFor="VinculoTecnico" className="flex gap-1">
						<Field
							type="radio" value="técnico"
							id="VinculoTecnico"
							name="parecerista.vinculo"
						/>
						<span className="translate-y-[-2px]">
							Técnico Nível Superior</span>
					</label>
					<label className="flex gap-1">
						<Field
							type="radio" value="jovem_pes"
							id="VinculoJovem"
							name="parecerista.vinculo"
						/>
						<span className="translate-y-[-2px]">
							Jovem Pes./Pes. Visitante</span>
					</label>
				</span>
			</fieldset>
		</div>
	)
}
