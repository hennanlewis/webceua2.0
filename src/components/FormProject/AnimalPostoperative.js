import { Field } from "formik"
import Link from "next/link"
import { ConditionalInput } from "../ConditionalInput"

export function NewProjectAnimalPostoperative(props) {
	const { position } = props

	return (
		<div className={position === 6 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
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
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Observação da Recuperação
						</span>
						<ConditionalInput
							name="PosOperatorioObservacao"
						>
							<label
								htmlFor="posOperatorioTempo"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioTempo"
									name="PosOperatorioTempo"
								/>
								<span>Período de observação (em horas)</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Uso de analgesia
						</span>
						<ConditionalInput
							name="PosOperatorioAnalgesia"
						>
							<label
								htmlFor="posOperatorioAnalgesiaFarmaco"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioAnalgesiaFarmaco"
									name="PosOperatorioAnalgesiaFarmaco"
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
									name="PosOperatorioAnalgesiaDose"
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
									name="PosOperatorioAnalgesiaVia"
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
									name="PosOperatorioAnalgesiaFrequencia"
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
									name="PosOperatorioAnalgesiaDuracao"
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
								name="PosOperatorioAnalgesiaJustificativa"
							/>
							<span>Justificar o não uso de analgesia no pós-operatório, quando for o caso</span>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Outros Cuidados Pós-Operatório
						</span>
						<ConditionalInput
							span="Outros cuidados pós-operatório"
							name="PosOperatorioOutros"
						>
							<label
								htmlFor="posOperatorioOutrosDescricao"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioOutrosDescricao"
									name="PosOperatorioOutrosDescricao"
								/>
								<span>Descrição</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Ponto Final Humanitário
						</span>
						<label
							htmlFor="posOperatorioPontoFinal"
							className="flex flex-col-reverse"
						>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								id="posOperatorioReferencias"
								name="PosOperatorioReferencias"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Exposição/Inoculação/Administração
						</span>
						<ConditionalInput
							span="Exposição/Inoculação/Administração"
							name="PosOperatorioExposicao"
						>
							<label
								htmlFor="posOperatorioExposicaoFarmaco"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExposicaoFarmaco"
									name="PosOperatorioExposicaoFarmaco"
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
									name="PosOperatorioExposicaoDose"
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
									name="PosOperatorioExposicaoVia"
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
									name="PosOperatorioExposicaoFrequencia"
								/>
								<span>Frequência</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Extração de Materiais Biológicos
						</span>
						<ConditionalInput
							span="Extração de materiais biológicos"
							name="PosOperatorioExtracao"
						>
							<label
								htmlFor="posOperatorioExtracaoMaterial"
								className="flex flex-col-reverse"
							>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="posOperatorioExtracaoMaterial"
									name="PosOperatorioExtracaoMaterial"
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
									name="PosOperatorioExtracaoQuantidade"
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
									name="PosOperatorioExtracaoFrequencia"
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
									name="PosOperatorioExtracaoMetodo"
								/>
								<span>Método de coleta</span>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold
					">
							Eutanásia
						</span>
						<label
							htmlFor="posOperatorioEutanasia"
							className="flex flex-col-reverse"
						>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioEutanasia"
								name="PosOperatorioEutanasia"
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
								name="PosOperatorioEutanasiaDescricao"
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
								name="PosOperatorioEutanasiaSubstancia"
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
								name="PosOperatorioEutanasiaDose"
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
								name="PosOperatorioEutanasiaVia"
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
								name="PosOperatorioEutanasiaInfraestrutura"
							/>
							<span>Infraestrutura necessária</span>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Destino dos Animais Após o Experimento</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioDestino"
							name="PosOperatorioDestino"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Forma de Descarte da Carcaça</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioDescarte"
							name="PosOperatorioDescarte"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Resumo do Procedimento</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioResumo"
							name="PosOperatorioResumo"
						/>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Referências Bibliográficas
						</span>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="posOperatorioReferencias"
							name="PosOperatorioReferencias"
						/>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
