import { useFormikContext } from "formik"
import { useState } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectAnimalExperiment(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()
	const [hiddenOptions, setHiddenOptions] = useState(true)

	const checkedFunction = (event) => {
		event.target.checked ?
			setHiddenOptions(() => false)
			:
			setHiddenOptions(() => true)
	}

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8">
				<h2 className="title-option">Procedimentos experimentais</h2>
			</div>
			<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">
				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
						Procedimentos Experimentais
					</span>
					<ConditionalInput
						legend="Procedimentos experimentais do projeto"
						name="experienciaProcedimento"
					>
						<label className="flex flex-col">
							<span>Duração:</span>
							<span className="flex gap-1">
								<input
									type="radio"
									value="curto"
									id="experienciaProcedimentoTipo"
									name="experienciaProcedimentoTipo"
									onChange={handleChange}
								/>
								<span className="translate-y-[-2px]">Curto</span>
							</span>
							<span className="flex gap-1">
								<input
									type="radio"
									value="longo"
									id="experienciaProcedimentoTipo"
									name="experienciaProcedimentoTipo"
									onChange={handleChange}
								/>
								<span className="translate-y-[-2px]">Longo</span>
							</span>
						</label>
					</ConditionalInput>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
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
									<input
										type="checkbox"
										value="estresse"
										id="estressevalor1"
										name="experienciaProcedimentoEstresseTipo"
										onChange={handleChange}
									/>
									<span className="translate-y-[-2px]">Estresse</span>
								</span>
							</label>

							<label htmlFor="estressevalor2">
								<span className="flex gap-1">
									<input
										type="checkbox"
										value="dores"
										id="estressevalor2"
										name="experienciaProcedimentoEstresseTipo"
										onChange={handleChange}
									/>
									<span className="translate-y-[-2px]">Dor</span>
								</span>
							</label>

							<label htmlFor="estressevalor3">
								<span className="flex gap-1">
									<input
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
								<input
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="experienciaEstresse"
									name="experienciaEstresse"
									onChange={handleChange}
									value={values.experienciaEstresse}
								/>
								<span className="translate-y-[-2px]">Tipo de estresse</span>
							</label>
						</div>

						<label
							htmlFor="experienciaEstresseJustificativa"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaEstresseJustificativa"
								name="experienciaEstresseJustificativa"
								onChange={handleChange}
								value={values.experienciaEstresseJustificativa}
							/>
							<span>Justificativa</span>
						</label>
					</ConditionalInput>

				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaImobilizacaoTipo"
								name="experienciaImobilizacaoTipo"
								onChange={handleChange}
								value={values.experienciaImobilizacaoTipo}
							/>
							<span>Tipo</span>
						</label>

						<label
							htmlFor="experienciaImobilizacaoTempo"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaImobilizacaoTempo"
								name="experienciaImobilizacaoTempo"
								onChange={handleChange}
								value={values.experienciaImobilizacaoTempo}
							/>
							<span>Tempo</span>
						</label>
					</ConditionalInput>
				</fieldset>

				<fieldset className="flex flex-col gap-2">
					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaAlimentarDuracao"
								name="experienciaAlimentarDuracao"
								onChange={handleChange}
								value={values.experienciaAlimentarDuracao}
							/>
							<span>Duração em horas</span>
						</label>

						<label
							htmlFor="experienciaAlimentarJustificativa"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaAlimentarJustificativa"
								name="experienciaAlimentarJustificativa"
								onChange={handleChange}
								value={values.experienciaAlimentarJustificativa}
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaRestricaoDuracao"
								name="experienciaRestricaoDuracao"
								onChange={handleChange}
								value={values.experienciaRestricaoDuracao}
							/>
							<span>Duração em horas</span>
						</label>

						<label
							htmlFor="experienciaRestricaoJustificativa"
							className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaRestricaoJustificativa"
								name="experienciaRestricaoJustificativa"
								onChange={handleChange}
								value={values.experienciaRestricaoJustificativa}
							/>
							<span>Justificativa</span>
						</label>
					</ConditionalInput>
				</fieldset>

				<fieldset className="flex flex-col gap-2">

					<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
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
								<input
									type="radio"
									value="unica"
									name="experienciaCirurgiaTipo"
								/>
								<span>Única</span>
							</span>
							<span className="flex gap-1">
								<input
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
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaCirurgiaMesmoAto"
								name="experienciaCirurgiaMesmoAto"
								onChange={handleChange}
								value={values.experienciaCirurgiaMesmoAto}
							/>
							<span>No mesmo ato cirúrgico ou em atos diferentes?</span>
						</label>

						<label
							htmlFor="experienciaCirurgiaNome" className="flex flex-col-reverse"
						>
							<input
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="experienciaCirurgiaNome"
								name="experienciaCirurgiaNome"
								onChange={handleChange}
								value={values.experienciaCirurgiaNome}
							/>
							<span>Qual?</span>
						</label>
					</ConditionalInput>
				</fieldset>
			</div>
		</div>
	)
}
