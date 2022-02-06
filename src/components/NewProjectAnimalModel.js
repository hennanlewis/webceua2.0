import { Field, useFormikContext } from "formik"
import Link from "next/link"
import { useEffect } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function NewProjectAnimalModel(props) {
	const { position } = props

	useEffect

	return (
		<div className={position === 2 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Modelo animal</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Nesta aba do formulário de submissão serão preenchidos os dados que fazem
						referência aos animais.
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
							Modelo Animal
						</span>
						<label
							htmlFor="modeloAnimalEspecie"
							className=""
						>
							<span className="">
								Espécie ou grupo taxonômico
							</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalEspecie"
								name="modeloAnimalEspecie"
								placeholder="Nome vulgar, se existir"
							/>
						</label>

						<label
							htmlFor="modeloAnimalJustificativa"
							className=""
						>
							<span className="">
								Justificativa do uso do modelo
							</span>
							<textarea
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								id="modeloAnimalJustificativa"
								name="modeloAnimalJustificativa"
							>
							</textarea>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="p-2 py-1 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Biotério
						</span>
						<ConditionalInput
							span="Procedência"
							title="Biotério do NPDM"
							name="modeloAnimalProcedenciaBioterio"
							inverse={true}
						>
							<label
								htmlFor="modeloAnimalProcedenciaBioterioNome"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaBioterioNome"
									name="modeloAnimalProcedenciaBioterioNome"
								/>
							</label>

							<label
								htmlFor="modeloAnimalProcedenciaBioterioLocalizacao"
								className=""
							>
								<span className="">Localização</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaBioterioLocalizacao"
									name="modeloAnimalProcedenciaBioterioLocalizacao"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Animal silvestre"
							name="modeloAnimalProcedenciaAnimalSilvestre"
						>
							<label
								htmlFor="modeloAnimalProcedenciaAnimal"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaAnimal"
									name="modeloAnimalProcedenciaAnimal"
								/>
							</label>

							<label
								htmlFor="modeloAnimalProcedenciaNumSolicitacao"
								className=""
							>
								<span className="">Número da solicitação ou autorização do SISBIO</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaNumSolicitacao"
									name="modeloAnimalProcedenciaNumSolicitacao"
								/>
							</label>

							<label
								htmlFor="modeloAnimalProcedenciaOutra"
								className=""
							>
								<span className="">Outra procedência?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaOutra"
									name="modeloAnimalProcedenciaOutra"
								/>
							</label>

							<label
								htmlFor="modeloAnimalProcedenciaQual"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaQual"
									name="modeloAnimalProcedenciaQual"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="O animal é geneticamente modificado?"
							name="modeloAnimalProcedenciaModificado"
						>
							<label
								htmlFor="modeloAnimalProcedenciaNumCQB"
								className=""
							>
								<span className="">Número do CQB</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="modeloAnimalProcedenciaNumCQB"
									name="modeloAnimalProcedenciaNumCQB"
								/>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Métodos de captura
						</span>
						<textarea
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="modeloAnimalMetodosCaptura"
							name="modeloAnimalMetodosCaptura"
						>
							
						</textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">Planejamento estatístico/delineamento experimental</span>
						<textarea
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="modeloAnimalPlanejamentoEstatistico"
							name="modeloAnimalPlanejamentoEstatistico"
						>
							
						</textarea>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Grau de invasividade
						</span>
						<label className="flex flex-col gap-1" htmlFor="gi1">
							<span className="flex gap-1">
								<Field
									type="radio"
									value="gi1" id="gi1" name="modeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 1</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									value="gi2" id="gi2" name="modeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 2</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									value="gi3" id="gi3" name="modeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 3</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									value="gi4" id="gi4" name="modeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 4</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									value="giN" id="giN" name="modeloAnimalInvasividade"
								/>
								<span className="mb-1">Não e aplica</span>
							</span>
						</label>

						<ConditionalInput
							title="Os materiais biológicos destes exemplares serão usados em outro(s) projeto(s)?"
							name="modeloAnimalInvasividadeUsoMaterial"
						>
							<label
								htmlFor="modeloAnimalInvasividadeMaterial"
								className=""
							>
								<span className="">Qual(is)?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									name="modeloAnimalInvasividadeMaterial"
								/>
							</label>

							<label
								htmlFor="modeloAnimalInvasividadeProtocolo"
								className=""
							>
								<span className="">Se já aprovado(s) pela CEUA, mencionar o número do protocolo</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									name="modeloAnimalInvasividadeProtocolo"
								/>
							</label>
						</ConditionalInput>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Alojamento
						</span>
						<label
							htmlFor="modeloAnimalCondicoesLocal"
							className=""
						>
							<span className="">Local onde será mantido o animal</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalCondicoesLocal"
								name="modeloAnimalCondicoesLocal"
								placeholder="Biotério, fazenda, aviário, etc"
							/>
						</label>

						<label
							htmlFor="modeloAnimalCondicoes"
							className=""
						>
							<span className="">Endereço</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalCondicoes"
								name="modeloAnimalCondicoes"
							/>
						</label>

						<label className="flex flex-col">
							<span className="">Ambiente de alojamento</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									id="modeloAnimalAlojamentoGaiola"
									name="modeloAnimalAlojamento"
									value="gaiola"
								/>
								<span className="translate-y-[-2px]">Gaiola</span>
							</span>

							<span className="flex gap-1">
								<Field
									type="radio"
									id="modeloAnimalAlojamentoJaula"
									name="modeloAnimalAlojamento"
									value="jaula"
								/>
								<span className="translate-y-[-2px]">Jaula</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									id="modeloAnimalAlojamentoBaia"
									name="modeloAnimalAlojamento"
									value="baia"
								/>
								<span className="translate-y-[-2px]">Baia</span>
							</span>
							<span className="flex gap-1">
								<Field
									type="radio"
									id="modeloAnimalAlojamentoOutros"
									name="modeloAnimalAlojamento"
									value="outros"
								/>
								<span className="translate-y-[-2px]">Outros</span>
							</span>
						</label>

						<label
							htmlFor="modeloAnimalAnimaisPorGaiola"
							className=""
						>
							<span className="">Número de animais por gaiola/galpão</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="number"
								id="modeloAnimalAnimaisPorGaiola"
								name="modeloAnimalAnimaisPorGaiola"
								min="0"
							/>
						</label>

						<label
							htmlFor="modeloAnimalAnimaisCama"
							className=""
						>
							<span className="">Tipo de cama (maravalha, estrado ou outro)</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalAnimaisCama"
								name="modeloAnimalAnimaisCama"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
							Condições de alojamento e alimentação dos animais
						</span>
						<label
							htmlFor="modeloAnimalCondicoesAlimentacao"
							className=""
						>
							<span className="">Alimentação</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalCondicoesAlimentacao"
								name="modeloAnimalCondicoesAlimentacao"
							/>

						</label>

						<label
							htmlFor="modeloAnimalCondicoesFonteAgua"
							className=""
						>
							<span className="">Fonte de água</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalCondicoesFonteAgua"
								name="modeloAnimalCondicoesFonteAgua"
							/>
						</label>

						<label
							htmlFor="modeloAnimalCondicoesLotacao"
							className=""
						>
							<span className="">Lotação (Número de animais/área)</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="modeloAnimalCondicoesLotacao"
								name="modeloAnimalCondicoesLotacao"
							/>
						</label>

						<ConditionalInput
							title="Exaustão do ar"
							name="modeloAnimalCondicoesExaustao"
						/>
					</fieldset>
				</div>
			</div>
		</div>
	)
}
