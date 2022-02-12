import { Field, useFormikContext } from "formik"
import Link from "next/link"

import { ConditionalInput } from "./ConditionalInput"

export function NewProjectMainData(props) {
	const { position } = props
	const { errors } = useFormikContext()

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
									name="PrazoInicio"
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
									name="PrazoTermino"
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
								name="ProjetoTitulo"
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
								name="ProjetoTituloEN"
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
								name="ProjetoArea"
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
								name="ResponsavelNome"
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
								name="ResponsavelInstituicao"
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
								name="ResponsavelDepartamento"
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
								name="ResponsavelLattes"
							/>
						</label>

						<ConditionalInput
							title="Experiência prévia"
							name="ResponsavelExperiencia"
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
									name="ResponsavelTempoExperiencia"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Treinamento"
							name="ResponsavelTreinamento"
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
									name="ResponsavelTempoTreinamento"
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
										name="ResponsavelVinculo"
									/>
									<span className="translate-y-[-2px]">
										Docente/Pesquisador</span>
								</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoTecnico" className="flex gap-1">
								<Field
									type="radio" value="técnico"
									id="dadosResponsavelVinculoTecnico"
									name="vinculo"
								/>
								<span className="translate-y-[-2px]">
									Técnico Nível Superior</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoJovem" className="flex gap-1">
								<Field
									type="radio" value="jovem_pes"
									id="dadosResponsavelVinculoJovem"
									name="vinculo"
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
								name="ResponsavelTelefone"
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
								name="ResponsavelLocal"
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
								name="ResponsavelEmail"
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
								name="ResponsavelLocalexperimentos"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Resumo do Projeto
						</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosResumo"
							name="Resumo"
						></textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Objetivos
						</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosObjetivos"
							name="Objetivos"
						></textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Justificativa
						</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosJustificativa"
							name="Justificativa"
						></textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold"
						>
							Relevância
						</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="dadosRelevancia"
							name="Relevancia"
						></textarea>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
