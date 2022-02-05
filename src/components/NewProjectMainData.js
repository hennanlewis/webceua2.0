import { useFormikContext } from "formik"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectMainData(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8">
				<h2 className="title-option">Dados iniciais</h2>
			</div>
			<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">
				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Prazo
					</span>
					<div className="flex gap-3">
						<label
							htmlFor="dadosPrazoInicio"
							className="grow"
						>
							<span className="text-sm font-medium text-gray-700">Início</span>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
								type="date"
								id="dadosPrazoInicio"
								name="dadosPrazoInicio"
								onChange={handleChange}
								value={values.dadosPrazoInicio}
							/>
						</label>

						<label
							htmlFor="dadosPrazoTermino"
							className="grow"
						>
							<span className="text-sm font-medium text-gray-700">Término</span>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="date"
								id="dadosPrazoTermino"
								name="dadosPrazoTermino"
								onChange={handleChange}
								value={values.dadosPrazoTermino}
							/>
						</label>
					</div>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Título do Projeto
					</span>
					<label
						className="flex flex-col"
						htmlFor="dadosProjetoTitulo"
					>
						<span className="flex flex-col">Título em português</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosProjetoTitulo"
							name="dadosProjetoTitulo"
							onChange={handleChange}
							value={values.dadosProjetoTitulo}
							placeholder="O modelo animal deve estar descrito no título"
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosProjetoTituloEN"
					>
						<span className="flex flex-col">Título em inglês</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosProjetoTituloEN"
							name="dadosProjetoTituloEN"
							onChange={handleChange}
							value={values.dadosProjetoTituloEN}
							placeholder="O modelo animal deve estar descrito no título"
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosProjetoArea"
					>
						<span className="flex flex-col">Área de conhecimento</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosProjetoArea"
							name="dadosProjetoArea"
							onChange={handleChange}
							value={values.dadosProjetoArea}
						/>
					</label>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Responsável
					</span>
					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelNome"
					>
						<span className="flex flex-col">Nome completo</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelNome"
							name="dadosResponsavelNome"
							onChange={handleChange}
							value={values.dadosResponsavelNome}
							placeholder="Digite seu nome completo"
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelInstituicao"
					>
						<span className="flex flex-col">Instituição/Unidade</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelInstituicao"
							name="dadosResponsavelInstituicao"
							onChange={handleChange}
							value={values.dadosResponsavelInstituicao}
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelDepartamento"
					>
						<span className="flex flex-col">Departamento/Disciplina</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelDepartamento"
							name="dadosResponsavelDepartamento"
							onChange={handleChange}
							value={values.dadosResponsavelDepartamento}
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelLattes"
					>
						<span className="flex flex-col">Link do currículo lattes</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelLattes"
							name="dadosResponsavelLattes"
							onChange={handleChange}
							value={values.dadosResponsavelLattes}
						/>
					</label>

					<ConditionalInput
						title="Experiência prévia"
						name="dadosResponsavelExperiencia"
					>
						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelTempoExperiencia"
						>
							<span className="">Tempo</span>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelTempoExperiencia"
								name="dadosResponsavelTempoExperiencia"
								onChange={handleChange}
								value={values.dadosResponsavelTempoExperiencia}
							/>
						</label>
					</ConditionalInput>

					<ConditionalInput
						title="Treinamento"
						name="dadosResponsavelTreinamento"
					>
						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelTempoTreinamento"
						>
							<span className="flex flex-col">Tempo</span>
							<input
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelTempoTreinamento"
								name="dadosResponsavelTempoTreinamento"
								onChange={handleChange}
								value={values.dadosResponsavelTempoTreinamento}
							/>
						</label>
					</ConditionalInput>

					<label className="flex flex-col">
						<span className="">Vínculo com a instituição</span>
						<span className="flex gap-1">
							<input
								type="radio" value="docente"
								id="dadosResponsavelVinculo"
								name="dadosResponsavelVinculo"
								onChange={handleChange}
							/>
							<span className="translate-y-[-2px]">Docente/Pesquisador</span>
						</span>
						<div className="flex gap-1">
							<input
								type="radio" value="tecnico"
								id="dadosResponsavelVinculo"
								name="dadosResponsavelVinculo"
								onChange={handleChange}
							/>
							<span className="translate-y-[-2px]">Técnico Nível Superior</span>
						</div>
						<div className="flex gap-1">
							<input
								type="radio" value="jovem_pes"
								id="dadosResponsavelVinculo"
								name="dadosResponsavelVinculo"
								onChange={handleChange}
							/>
							<span className="translate-y-[-2px]">Jovem Pes./Pes. Visitante</span>
						</div>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelTelefone"
					>
						<span className="flex flex-col">Telefone</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="tel"
							id="dadosResponsavelTelefone"
							name="dadosResponsavelTelefone"
							onChange={handleChange}
							value={values.dadosResponsavelTelefone}
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelLocal"
					>
						<span className="flex flex-col">Localização</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelLocal"
							name="dadosResponsavelLocal"
							onChange={handleChange}
							value={values.dadosResponsavelLocal}
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelEmail"
					>
						<span className="flex flex-col">E-mail</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="email"
							id="dadosResponsavelEmail"
							name="dadosResponsavelEmail"
							onChange={handleChange}
							value={values.dadosResponsavelEmail}
						/>
					</label>

					<label
						className="flex flex-col"
						htmlFor="dadosResponsavelLocalexperimentos"
					>
						<span className="flex flex-col">Local de execução dos experimentos</span>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="dadosResponsavelLocalexperimentos"
							name="dadosResponsavelLocalexperimentos"
							onChange={handleChange}
							value={values.dadosResponsavelLocalexperimentos}
						/>
					</label>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
					>
						Resumo do Projeto
					</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="dadosResumo"
						name="dadosResumo"
						onChange={handleChange}
					>{values.dadosResumo}</textarea>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
					>
						Objetivos
					</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="dadosObjetivos"
						name="dadosObjetivos"
						onChange={handleChange}
					>{values.dadosObjetivos}</textarea>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
					>
						Justificativa
					</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="dadosJustificativa"
						name="dadosJustificativa"
						onChange={handleChange}
					>{values.dadosJustificativa}</textarea>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
					>
						Relevância
					</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="dadosRelevancia"
						name="dadosRelevancia"
						onChange={handleChange}
					>{values.dadosRelevancia}</textarea>
				</fieldset>
			</div>
		</div>
	)
}
