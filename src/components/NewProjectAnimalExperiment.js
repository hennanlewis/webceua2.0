import { Field, useFormikContext } from "formik"
import Link from "next/link"
import { useState } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectAnimalExperiment(props) {
	const { values, handleChange, position } = props
	const [hiddenOptions, setHiddenOptions] = useState(true)

	const checkedFunction = (event) => {
		event.target.checked ?
			setHiddenOptions(() => false)
			:
			setHiddenOptions(() => true)
	}

	return (
		<div className={position === 4 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Procedimentos experimentais</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Nesta aba do formulário de submissão, serão preenchidos os dados
						que fazem referência a experiências feitas aos animais
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
							Procedimentos Experimentais
						</span>
						<ConditionalInput
							legend="Procedimentos experimentais do projeto"
							name="experienciaProcedimento"
						>
							<label className="flex flex-col">
								<span>Duração:</span>
								<span className="flex gap-1">
									<Field
										type="radio"
										value="curto"
										id="experienciaProcedimentoTipo"
										name="experienciaProcedimentoTipo"
									/>
									<span className="translate-y-[-2px]">Curto</span>
								</span>
								<span className="flex gap-1">
									<Field
										type="radio"
										value="longo"
										id="experienciaProcedimentoTipo"
										name="experienciaProcedimentoTipo"
									/>
									<span className="translate-y-[-2px]">Longo</span>
								</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Estresse
						</span>
						<ConditionalInput
							title="Realização de procedimento de estresse?"
							name="experienciaProcedimentoEstresse"
						>
							<div className="flex flex-col">
								<span>Tipo:</span>

								<label htmlFor="experienciaProcedimentoEstresseTipo">
									<span className="flex gap-1">
										<Field
											type="checkbox"
											value="estresse"
											id="estressevalor1"
											name="experienciaProcedimentoEstresseTipo"
										/>
										<span className="translate-y-[-2px]">Estresse</span>
									</span>
								</label>

								<label htmlFor="estressevalor2">
									<span className="flex gap-1">
										<Field
											type="checkbox"
											value="dores"
											id="estressevalor2"
											name="experienciaProcedimentoEstresseTipo"
										/>
										<span className="translate-y-[-2px]">Dor</span>
									</span>
								</label>

								<label htmlFor="estressevalor3">
									<span className="flex gap-1">
										<Field
											type="checkbox"
											value="outros"
											id="estressevalor3"
											name="experienciaProcedimentoEstresseTipo"
											onChange={event => checkedFunction(event)}
										/>
										<span className="translate-y-[-2px]">Outro</span>
									</span>
								</label>
							</div>

							<div className="containerCondicional">
								<label
									htmlFor="experienciaEstresse"
									className={`${hiddenOptions ? 'max-h-[0] opacity-0 pointer-events-none' : 'max-h-[100%] opacity-100'} flex flex-col-reverse duration-500`}
								>
									<Field
										className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
										type="text"
										id="experienciaEstresse"
										name="experienciaEstresse"
									/>
									<span className="translate-y-[-2px]">Tipo de estresse</span>
								</label>
							</div>

							<label
								htmlFor="experienciaEstresseJustificativa"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaEstresseJustificativa"
									name="experienciaEstresseJustificativa"
								/>
								<span>Justificativa</span>
							</label>
						</ConditionalInput>

					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Imobilização
						</span>
						<ConditionalInput
							legend="Imobilização do animal"
							name="experienciaImobilizacao"
						>
							<label
								htmlFor="experienciaImobilizacaoTipo"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaImobilizacaoTipo"
									name="experienciaImobilizacaoTipo"
								/>
								<span>Tipo</span>
							</label>

							<label
								htmlFor="experienciaImobilizacaoTempo"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaImobilizacaoTempo"
									name="experienciaImobilizacaoTempo"
								/>
								<span>Tempo</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Condições alimentares
						</span>
						<ConditionalInput
							title="Jejum"
							name="experienciaAlimentar"
						>
							<label
								htmlFor="experienciaAlimentarDuracao"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaAlimentarDuracao"
									name="experienciaAlimentarDuracao"
								/>
								<span>Duração em horas</span>
							</label>

							<label
								htmlFor="experienciaAlimentarJustificativa"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaAlimentarJustificativa"
									name="experienciaAlimentarJustificativa"
								/>
								<span>Justificativa</span>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Restrição hídrica"
							name="experienciaRestricao"
						>
							<label
								htmlFor="experienciaRestricaoDuracao"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaRestricaoDuracao"
									name="experienciaRestricaoDuracao"
								/>
								<span>Duração em horas</span>
							</label>

							<label
								htmlFor="experienciaRestricaoJustificativa"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaRestricaoJustificativa"
									name="experienciaRestricaoJustificativa"
								/>
								<span>Justificativa</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">

						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Cirurgia
						</span>
						<ConditionalInput
							legend="Realização de cirurgia"
							name="experienciaCirurgia"
						>
							<label
								className="flex flex-col"
								htmlFor="si"
							>
								<span>Tipo:</span>
								<span className="flex gap-1">
									<Field
										type="radio"
										value="unica"
										name="experienciaCirurgiaTipo"
									/>
									<span>Única</span>
								</span>
								<span className="flex gap-1">
									<Field
										type="radio"
										value="multipla"
										name="experienciaCirurgiaTipo"
									/>
									<span>Múltipla</span>
								</span>
							</label>

							<label
								htmlFor="experienciaCirurgiaMesmoAto"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaCirurgiaMesmoAto"
									name="experienciaCirurgiaMesmoAto"
								/>
								<span>No mesmo ato cirúrgico ou em atos diferentes?</span>
							</label>

							<label
								htmlFor="experienciaCirurgiaNome" className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaCirurgiaNome"
									name="experienciaCirurgiaNome"
								/>
								<span>Qual?</span>
							</label>
						</ConditionalInput>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
