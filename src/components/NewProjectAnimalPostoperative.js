import { Field, useFormikContext } from "formik"
import Link from "next/link"
import { useState } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectAnimalPostoperative(props) {
	const { values, handleChange, position } = props

	return (
		<div className={position === 6 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Pós operatório</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Cuidados necessários durante o período pós operatório.
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
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Observação da recuperação
						</span>
						<ConditionalInput
							name="posOperatorioObservacao"
						>
							<label
								htmlFor="posOperatorioTempo"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioTempo"
									name="posOperatorioTempo"
								/>
								<span>Período de observação (em horas)</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Uso de analgesia
						</span>
						<ConditionalInput
							name="posOperatorioAnalgesia"
						>
							<label
								htmlFor="posOperatorioAnalgesiaFarmaco"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaFarmaco"
									name="posOperatorioAnalgesiaFarmaco"
								/>
								<span>Fármaco</span>
							</label>

							<label
								htmlFor="posOperatorioAnalgesiaDose"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaDose"
									name="posOperatorioAnalgesiaDose"
								/>
								<span>Dose(UI ou mg/kg)</span>
							</label>

							<label
								htmlFor="posOperatorioAnalgesiaVia"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaVia"
									name="posOperatorioAnalgesiaVia"
								/>
								<span>Via de administração</span>
							</label>

							<label
								htmlFor="posOperatorioAnalgesiaFrequencia"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaFrequencia"
									name="posOperatorioAnalgesiaFrequencia"
								/>
								<span>Frequência</span>
							</label>

							<label
								htmlFor="posOperatorioAnalgesiaDuracao"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaDuracao"
									name="posOperatorioAnalgesiaDuracao"
								/>
								<span>Duração</span>
							</label>
						</ConditionalInput>

						<label
							htmlFor="posOperatorioAnalgesiaJustificativa"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaJustificativa"
								name="posOperatorioAnalgesiaJustificativa"
							/>
							<span>Justificar o não uso de analgesia no pós-operatório, quando for o caso</span>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Outros cuidados pós-operatório
						</span>
						<ConditionalInput
							span="Outros cuidados pós-operatório"
							name="posOperatorioOutros"
						>
							<label
								htmlFor="posOperatorioOutrosDescricao"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioOutrosDescricao"
									name="posOperatorioOutrosDescricao"
								/>
								<span>Descrição</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Ponto final humanitário
						</span>
						<label
							htmlFor="posOperatorioPontoFinal"
							className="flex flex-col-reverse"
						>
							<textarea
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								id="posOperatorioReferencias"
								name="posOperatorioReferencias"
							>
								
							</textarea>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Exposição/Inoculação/Administração
						</span>
						<ConditionalInput
							span="Exposição/Inoculação/Administração"
							name="posOperatorioExposicao"
						>
							<label
								htmlFor="posOperatorioExposicaoFarmaco"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExposicaoFarmaco"
									name="posOperatorioExposicaoFarmaco"
								/>
								<span>Fármacos/Outros</span>
							</label>

							<label
								htmlFor="posOperatorioExposicaoDose"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExposicaoDose"
									name="posOperatorioExposicaoDose"
								/>
								<span>Dose</span>
							</label>

							<label
								htmlFor="posOperatorioExposicaoVia"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExposicaoVia"
									name="posOperatorioExposicaoVia"
								/>
								<span>Via de administração</span>
							</label>

							<label
								htmlFor="posOperatorioExposicaoFrequencia"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExposicaoFrequencia"
									name="posOperatorioExposicaoFrequencia"
								/>
								<span>Frequência</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Extração de materiais biológicos
						</span>
						<ConditionalInput
							span="Extração de materiais biológicos"
							name="posOperatorioExtracao"
						>
							<label
								htmlFor="posOperatorioExtracaoMaterial"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExtracaoMaterial"
									name="posOperatorioExtracaoMaterial"
								/>
								<span>Material biológico</span>
							</label>

							<label
								htmlFor="posOperatorioExtracaoQuantidade"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExtracaoQuantidade"
									name="posOperatorioExtracaoQuantidade"
								/>
								<span>Quantidade de amostra</span>
							</label>

							<label
								htmlFor="posOperatorioExtracaoFrequencia"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExtracaoFrequencia"
									name="posOperatorioExtracaoFrequencia"
								/>
								<span>Frequência</span>
							</label>

							<label
								htmlFor="posOperatorioExtracaoMetodo"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExtracaoMetodo"
									name="posOperatorioExtracaoMetodo"
								/>
								<span>Método de coleta</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold
					">
							Eutanásia</span>

						<label
							htmlFor="posOperatorioEutanasia"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasia"
								name="posOperatorioEutanasia"
							/>
							<span>Método</span>
						</label>

						<label
							htmlFor="posOperatorioEutanasiaDescricao"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasiaDescricao"
								name="posOperatorioEutanasiaDescricao"
							/>
							<span>Descrição</span>
						</label>

						<label
							htmlFor="posOperatorioEutanasiaSubstancia"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasiaSubstancia"
								name="posOperatorioEutanasiaSubstancia"
							/>
							<span>Substância</span>
						</label>

						<label
							htmlFor="posOperatorioEutanasiaDose"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasiaDose"
								name="posOperatorioEutanasiaDose"
							/>
							<span>Dose</span>
						</label>

						<label
							htmlFor="posOperatorioEutanasiaVia"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasiaVia"
								name="posOperatorioEutanasiaVia"
							/>
							<span>Via</span>
						</label>

						<label
							htmlFor="posOperatorioEutanasiaInfraestrutura"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasiaInfraestrutura"
								name="posOperatorioEutanasiaInfraestrutura"
							/>
							<span>Infraestrutura necessária</span>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Destino dos animais após o experimento</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioDestino"
							name="posOperatorioDestino"
						>
					
					
						</textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Forma de descarte da carcaça</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioDescarte"
							name="posOperatorioDescarte"
						>
					
					
						</textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Resumo do procedimento</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioResumo"
							name="posOperatorioResumo"
						>
					
					
						</textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Referências bibliográficas
						</span>
						<textarea
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioReferencias"
							name="posOperatorioReferencias"
						>
					
					
						</textarea>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
