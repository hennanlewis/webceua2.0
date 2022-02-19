import { Field, useFormikContext } from "formik"
import Link from "next/link"

import { ConditionalInput } from "../ConditionalInput"

export function ModifyProjectMainData(props) {
	const { position, projeto } = props
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
									name="DadosPrazoInicio"
									readOnly
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
									readOnly
								/>
							</label>
						</div>

						<label>
							Sugestão de edição em <b>Prazo</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoPrazo"
							/>
						</label>
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
								readOnly
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
								readOnly
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
								readOnly
							/>
						</label>

						<label>
							Sugestão de edição em <b>Título do Projeto</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoTitulo"
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
								readOnly
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
								readOnly
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
								readOnly
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
								readOnly
							/>
						</label>

						<ConditionalInput
							title="Experiência prévia"
							name="DadosResponsavelExperiencia"
							readOnly
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
									readOnly
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Treinamento"
							name="DadosResponsavelTreinamento"
							readOnly
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
									readOnly
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
										readOnly
									/>
									<span className="translate-y-[-2px]">
										Docente/Pesquisador</span>
								</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoTecnico" className="flex gap-1">
								<Field
									type="radio" value="técnico"
									id="dadosResponsavelVinculoTecnico"
									name="Dadosvinculo"
									readOnly
								/>
								<span className="translate-y-[-2px]">
									Técnico Nível Superior</span>
							</label>
							<label htmlFor="dadosResponsavelVinculoJovem" className="flex gap-1">
								<Field
									type="radio" value="jovem_pes"
									id="dadosResponsavelVinculoJovem"
									name="Dadosvinculo"
									readOnly
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
								readOnly
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
								readOnly
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
								readOnly
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
								readOnly
							/>
						</label>

						<label>
							Sugestão de edição em <b>Responsável</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoResponsavel"
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
							readOnly
						/>

						<label>
							Sugestão de edição em <b>Resumo</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoResumo"
							/>
						</label>
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
							readOnly
						/>

						<label>
							Sugestão de edição em <b>Objetivos</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoObjetivos"
							/>
						</label>
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
							readOnly
						/>

						<label>
							Sugestão de edição em <b>Justificativa</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoJustificativa"
							/>
						</label>
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
							readOnly
						/>

						<label>
							Sugestão de edição em <b>Relevância</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoRelevancia"
							/>
						</label>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
