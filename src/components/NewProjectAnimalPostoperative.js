import { useFormikContext } from "formik"
import { useState } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectAnimalPostoperative(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8">
				<h2 className="title-option">Pós-Operatório</h2>
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioTempo"
								name="posOperatorioTempo"
								onChange={handleChange}
								value={values.posOperatorioTempo}
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaFarmaco"
								name="posOperatorioAnalgesiaFarmaco"
								onChange={handleChange}
								value={values.posOperatorioAnalgesiaFarmaco}
							/>
							<span>Fármaco</span>
						</label>

						<label
							htmlFor="posOperatorioAnalgesiaDose"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaDose"
								name="posOperatorioAnalgesiaDose"
								onChange={handleChange}
								value={values.posOperatorioAnalgesiaDose}
							/>
							<span>Dose(UI ou mg/kg)</span>
						</label>

						<label
							htmlFor="posOperatorioAnalgesiaVia"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaVia"
								name="posOperatorioAnalgesiaVia"
								onChange={handleChange}
								value={values.posOperatorioAnalgesiaVia}
							/>
							<span>Via de administração</span>
						</label>

						<label
							htmlFor="posOperatorioAnalgesiaFrequencia"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaFrequencia"
								name="posOperatorioAnalgesiaFrequencia"
								onChange={handleChange}
								value={values.posOperatorioAnalgesiaFrequencia}
							/>
							<span>Frequência</span>
						</label>

						<label
							htmlFor="posOperatorioAnalgesiaDuracao"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioAnalgesiaDuracao"
								name="posOperatorioAnalgesiaDuracao"
								onChange={handleChange}
								value={values.posOperatorioAnalgesiaDuracao}
							/>
							<span>Duração</span>
						</label>
					</ConditionalInput>

					<label
						htmlFor="posOperatorioAnalgesiaJustificativa"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioAnalgesiaJustificativa"
							name="posOperatorioAnalgesiaJustificativa"
							onChange={handleChange}
							value={values.posOperatorioAnalgesiaJustificativa}
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioOutrosDescricao"
								name="posOperatorioOutrosDescricao"
								onChange={handleChange}
								value={values.posOperatorioOutrosDescricao}
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
							onChange={handleChange}
						>

							{values.posOperatorioReferencias}
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExposicaoFarmaco"
								name="posOperatorioExposicaoFarmaco"
								onChange={handleChange}
								value={values.posOperatorioExposicaoFarmaco}
							/>
							<span>Fármacos/Outros</span>
						</label>

						<label
							htmlFor="posOperatorioExposicaoDose"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExposicaoDose"
								name="posOperatorioExposicaoDose"
								onChange={handleChange}
								value={values.posOperatorioExposicaoDose}
							/>
							<span>Dose</span>
						</label>

						<label
							htmlFor="posOperatorioExposicaoVia"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExposicaoVia"
								name="posOperatorioExposicaoVia"
								onChange={handleChange}
								value={values.posOperatorioExposicaoVia}
							/>
							<span>Via de administração</span>
						</label>

						<label
							htmlFor="posOperatorioExposicaoFrequencia"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExposicaoFrequencia"
								name="posOperatorioExposicaoFrequencia"
								onChange={handleChange}
								value={values.posOperatorioExposicaoFrequencia}
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExtracaoMaterial"
								name="posOperatorioExtracaoMaterial"
								onChange={handleChange}
								value={values.posOperatorioExtracaoMaterial}
							/>
							<span>Material biológico</span>
						</label>

						<label
							htmlFor="posOperatorioExtracaoQuantidade"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExtracaoQuantidade"
								name="posOperatorioExtracaoQuantidade"
								onChange={handleChange}
								value={values.posOperatorioExtracaoQuantidade}
							/>
							<span>Quantidade de amostra</span>
						</label>

						<label
							htmlFor="posOperatorioExtracaoFrequencia"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExtracaoFrequencia"
								name="posOperatorioExtracaoFrequencia"
								onChange={handleChange}
								value={values.posOperatorioExtracaoFrequencia}
							/>
							<span>Frequência</span>
						</label>

						<label
							htmlFor="posOperatorioExtracaoMetodo"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="posOperatorioExtracaoMetodo"
								name="posOperatorioExtracaoMetodo"
								onChange={handleChange}
								value={values.posOperatorioExtracaoMetodo}
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
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasia"
							name="posOperatorioEutanasia"
							onChange={handleChange}
							value={values.posOperatorioEutanasia}
						/>
						<span>Método</span>
					</label>

					<label
						htmlFor="posOperatorioEutanasiaDescricao"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasiaDescricao"
							name="posOperatorioEutanasiaDescricao"
							onChange={handleChange}
							value={values.posOperatorioEutanasiaDescricao}
						/>
						<span>Descrição</span>
					</label>

					<label
						htmlFor="posOperatorioEutanasiaSubstancia"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasiaSubstancia"
							name="posOperatorioEutanasiaSubstancia"
							onChange={handleChange}
							value={values.posOperatorioEutanasiaSubstancia}
						/>
						<span>Substância</span>
					</label>

					<label
						htmlFor="posOperatorioEutanasiaDose"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasiaDose"
							name="posOperatorioEutanasiaDose"
							onChange={handleChange}
							value={values.posOperatorioEutanasiaDose}
						/>
						<span>Dose</span>
					</label>

					<label
						htmlFor="posOperatorioEutanasiaVia"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasiaVia"
							name="posOperatorioEutanasiaVia"
							onChange={handleChange}
							value={values.posOperatorioEutanasiaVia}
						/>
						<span>Via</span>
					</label>

					<label
						htmlFor="posOperatorioEutanasiaInfraestrutura"
						className="flex flex-col-reverse"
					>
						<input
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							type="text"
							id="posOperatorioEutanasiaInfraestrutura"
							name="posOperatorioEutanasiaInfraestrutura"
							onChange={handleChange}
							value={values.posOperatorioEutanasiaInfraestrutura}
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
						onChange={handleChange}
					>
						{values.posOperatorioDestino}
					</textarea>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Forma de descarte da carcaça</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="posOperatorioDescarte"
						name="posOperatorioDescarte"
						onChange={handleChange}
					>
						{values.posOperatorioDescarte}
					</textarea>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Resumo do procedimento</span>
					<textarea
						className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
						id="posOperatorioResumo"
						name="posOperatorioResumo"
						onChange={handleChange}
					>
						{values.posOperatorioResumo}
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
						onChange={handleChange}
					>
						{values.posOperatorioReferencias}
					</textarea>
				</fieldset>
			</div>
		</div>
	)
}
