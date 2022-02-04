import { useFormikContext } from "formik"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectMainData(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()

	return (
		<div className="aba">

			<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8">
					<h2 className="title-option">Dados iniciais</h2>
				</div>
				<div className="col-span-5 grid grid-cols-6 xs:col-span-8 gap-12 bg-indigo-50 rounded-lg p-4">
					<fieldset className="col-span-6 grid grid-cols-6 gap-3">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Prazo
						</span>
						<label
							htmlFor="dadosPrazoInicio"
							className="col-span-3 -mt-2"
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
							className="col-span-3 -mt-2"
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
					</fieldset>

					<fieldset className="col-span-6 grid grid-cols-6 gap-3">
						<span className="col-span-6 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Título do Projeto
						</span>
						<label
							className="col-span-6 -mt-3"
							htmlFor="dadosProjetoTitulo"
						>
							<span className="col-span-6">Título em português</span>
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
							className="col-span-6"
							htmlFor="dadosProjetoTituloEN"
						>
							<span className="col-span-6">Título em inglês</span>
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
							className="col-span-6"
							htmlFor="dadosProjetoArea"
						>
							<span className="col-span-6">Área de conhecimento</span>
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

					<fieldset className="col-span-6 grid grid-cols-6 gap-3">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Responsável
						</span>
						<label
							className="col-span-6 -mt-3"
							htmlFor="dadosResponsavelNome"
						>
							<span className="col-span-6">Nome completo</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelInstituicao"
						>
							<span className="col-span-6">Instituição/Unidade</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelDepartamento"
						>
							<span className="col-span-6">Departamento/Disciplina</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelLattes"
						>
							<span className="col-span-6">Link do currículo lattes</span>
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
								className="col-span-6"
								htmlFor=""
							>
								<span className="col-span-6">Tempo</span>
								<input
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
								className="col-span-6"
								htmlFor="dadosResponsavelTempoTreinamento"
							>
								<span className="col-span-6">Tempo</span>
								<input
									type="text"
									id="dadosResponsavelTempoTreinamento"
									name="dadosResponsavelTempoTreinamento"
									onChange={handleChange}
									value={values.dadosResponsavelTempoTreinamento}
								/>
							</label>
						</ConditionalInput>

						<label className="radio" htmlFor="exper">
							<span className="col-span-6">Vínculo com a instituição</span>
							<span className="col-span-6">
								<input
									type="radio" value="docente"
									id="dadosResponsavelVinculo"
									name="dadosResponsavelVinculo"
									onChange={handleChange}
								/>
								Docente/Pesquisador
							</span>
							<span className="col-span-6">
								<input
									type="radio" value="tecnico"
									id="dadosResponsavelVinculo"
									name="dadosResponsavelVinculo"
									onChange={handleChange}
								/>
								Técnico Nível Superior
							</span>
							<span className="col-span-6">
								<input
									type="radio" value="jovem_pes"
									id="dadosResponsavelVinculo"
									name="dadosResponsavelVinculo"
									onChange={handleChange}
								/>
								Jovem Pes./Pes. Visitante
							</span>
						</label>

						<label
							className="col-span-6"
							htmlFor="dadosResponsavelTelefone"
						>
							<span className="col-span-6">Telefone</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelLocal"
						>
							<span className="col-span-6">Localização</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelEmail"
						>
							<span className="col-span-6">E-mail</span>
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
							className="col-span-6"
							htmlFor="dadosResponsavelLocalexperimentos"
						>
							<span className="col-span-6">Local de execução dos experimentos</span>
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

					<fieldset className="col-span-6 grid grid-cols-6 gap-1">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
						>

							Resumo do Projeto
						</span>
						<textarea
							className="col-span-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosResumo"
							name="dadosResumo"
							onChange={handleChange}
						>{values.dadosResumo}</textarea>
					</fieldset>

					<fieldset className="col-span-6 grid grid-cols-6 gap-1">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
						>

							Objetivos
						</span>
						<textarea
							className="col-span-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosObjetivos"
							name="dadosObjetivos"
							onChange={handleChange}
						>{values.dadosObjetivos}</textarea>
					</fieldset>

					<fieldset className="col-span-6 grid grid-cols-6 gap-1">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
						>

							Justificativa
						</span>
						<textarea
							className="col-span-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosJustificativa"
							name="dadosJustificativa"
							onChange={handleChange}
						>{values.dadosJustificativa}</textarea>
					</fieldset>

					<fieldset className="col-span-6 grid grid-cols-6 gap-1">
						<span className="col-span-6 -mx-1 p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold"
						>

							Relevância
						</span>
						<textarea
							className="col-span-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosRelevancia"
							name="dadosRelevancia"
							onChange={handleChange}
						>{values.dadosRelevancia}</textarea>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
