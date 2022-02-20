import { Field, useFormikContext } from "formik"
import Link from "next/link"

import { ConditionalInput } from "../ConditionalInput"

export function NewProjectMainData(props) {
	const { coord, position } = props
	const { values } = useFormikContext()

	const showAllCorrections = () => {
		return (
			<div className="flex flex-col text-white gap-4">
				{coord !== undefined ?? <h1 className="mt-4 -mb-4 text-white text-center font-bold">Edição sugerida</h1>}
				{showCorrectionItem("Prazo", coord?.edicaoPrazo)}
				{showCorrectionItem("Título do Projeto", coord?.edicaoTitulo)}
				{showCorrectionItem("Responsável", coord?.edicaoResponsavel)}
				{showCorrectionItem("Resumo do Projeto", coord?.edicaoResumo)}
				{showCorrectionItem("Objetivos", coord?.edicaoObjetivos)}
				{showCorrectionItem("Justificativa", coord?.edicaoJustificativa)}
				{showCorrectionItem("Relevância", coord?.edicaoRelevancia)}
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
		<div className={position === 0 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Dados iniciais</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Nesta aba do formulário de submissão, serão preenchidos alguns
						dados sobre a área acadêmica e alguns outros para contato
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
					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Prazo
						</span>
						<div className="flex gap-3">
							<label
								htmlFor="dadosPrazoInicio"
								className="grow"
							>
								<span className="">Início</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
									type="date"
									id="dadosPrazoInicio"
									name="DadosPrazoInicio"
								/>
							</label>

							<label
								htmlFor="dadosPrazoTermino"
								className="grow"
							>
								<span className="">Término</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="date"
									id="dadosPrazoTermino"
									name="DadosPrazoTermino"
								/>
							</label>
						</div>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Título do Projeto
						</span>
						<label
							className="flex flex-col"
							htmlFor="dadosProjetoTitulo"
						>
							<span className="flex flex-col">Título em português</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosProjetoTitulo"
								name="DadosProjetoTitulo"
								placeholder="O modelo animal deve estar descrito no título"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosProjetoTituloEN"
						>
							<span className="flex flex-col">Título em inglês</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosProjetoTituloEN"
								name="DadosProjetoTituloEN"
								placeholder="O modelo animal deve estar descrito no título"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosProjetoArea"
						>
							<span className="flex flex-col">Área de conhecimento</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosProjetoArea"
								name="DadosProjetoArea"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Responsável
						</span>
						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelNome"
						>
							<span className="flex flex-col">Nome completo</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelNome"
								name="DadosResponsavelNome"
								placeholder="Digite seu nome completo"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelInstituicao"
						>
							<span className="flex flex-col">Instituição/Unidade</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelInstituicao"
								name="DadosResponsavelInstituicao"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelDepartamento"
						>
							<span className="flex flex-col">Departamento/Disciplina</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelDepartamento"
								name="DadosResponsavelDepartamento"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelLattes"
						>
							<span className="flex flex-col">Link do currículo lattes</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelLattes"
								name="DadosResponsavelLattes"
							/>
						</label>

						<ConditionalInput
							title="Experiência prévia"
							name="DadosResponsavelExperiencia"
						>
							<label
								className="flex flex-col"
								htmlFor="dadosResponsavelTempoExperiencia"
							>
								<span className="">Tempo</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="dadosResponsavelTempoExperiencia"
									name="DadosResponsavelTempoExperiencia"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Treinamento"
							name="DadosResponsavelTreinamento"
						>
							<label
								className="flex flex-col"
								htmlFor="dadosResponsavelTempoTreinamento"
							>
								<span className="flex flex-col">Tempo</span>
								<Field
									className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="dadosResponsavelTempoTreinamento"
									name="DadosResponsavelTempoTreinamento"
								/>
							</label>
						</ConditionalInput>

						<span className="flex flex-col">
							<span className="">Vínculo com a instituição</span>
							<label htmlFor="dadosResponsavelVinculoDocente">
								<span className="flex gap-1">
									<Field
										type="radio" value="docente"
										id="dadosResponsavelVinculoDocente"
										name="DadosResponsavelVinculo"
									/>
									<span className="translate-y-[-2px]">
										Docente/Pesquisador</span>
								</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoTecnico" className="flex gap-1">
								<Field
									type="radio" value="técnico"
									id="dadosResponsavelVinculoTecnico"
									name="DadosVinculo"
								/>
								<span className="translate-y-[-2px]">
									Técnico Nível Superior</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoJovem" className="flex gap-1">
								<Field
									type="radio" value="jovem_pes"
									id="dadosResponsavelVinculoJovem"
									name="DadosVinculo"
								/>
								<span className="translate-y-[-2px]">
									Jovem Pes./Pes. Visitante</span>
							</label>
						</span>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelTelefone"
						>
							<span className="flex flex-col">Telefone</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="tel"
								id="dadosResponsavelTelefone"
								name="DadosResponsavelTelefone"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelLocal"
						>
							<span className="flex flex-col">Localização</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelLocal"
								name="DadosResponsavelLocal"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelEmail"
						>
							<span className="flex flex-col">E-mail</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="email"
								id="dadosResponsavelEmail"
								name="DadosResponsavelEmail"
							/>
						</label>

						<label
							className="flex flex-col"
							htmlFor="dadosResponsavelLocalexperimentos"
						>
							<span className="flex flex-col">Local de execução dos experimentos</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="dadosResponsavelLocalexperimentos"
								name="DadosResponsavelLocalexperimentos"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Resumo do Projeto
						</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosResumo"
							name="DadosResumo"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Objetivos
						</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosObjetivos"
							name="DadosObjetivos"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Justificativa
						</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosJustificativa"
							name="DadosJustificativa"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Relevância
						</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosRelevancia"
							name="DadosRelevancia"
						/>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
