import { Field, useFormikContext } from "formik"
import Link from "next/link"
import { useEffect } from "react"
import { ConditionalInput } from "./ConditionalInput"

export function ModifyProjectAnimalModel(props) {
	const { position } = props

	useEffect

	return (
		<div className={position === 2 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
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
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Modelo Animal
						</span>
						<label
							htmlFor="ModeloAnimalEspecie"
							className=""
						>
							<span className="">
								Espécie ou grupo taxonômico
							</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="ModeloAnimalEspecie"
								name="ModeloAnimalEspecie"
								placeholder="Nome vulgar, se existir"
							/>
						</label>

						<label
							htmlFor="ModeloAnimalJustificativa"
							className=""
						>
							<span className="">
								Justificativa do uso do modelo
							</span>
							<Field
								as="textarea"
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								id="ModeloAnimalJustificativa"
								name="ModeloAnimalJustificativa"
							/>
						</label>

						<label>
							Sugestão de edição em <b>Modelo Animal</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoModeloAnimal"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="p-2 py-1 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Biotério
						</span>
						<ConditionalInput
							span="Procedência"
							title="Biotério do NPDM"
							name="ModeloAnimalProcedenciaBioterio"
							inverse={true}
						>
							<label
								htmlFor="ModeloAnimalProcedenciaBioterioNome"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalProcedenciaBioterioNome"
									name="ModeloAnimalProcedenciaBioterioNome"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalProcedenciaBioterioLocalizacao"
								className=""
							>
								<span className="">Localização</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalProcedenciaBioterioLocalizacao"
									name="ModeloAnimalProcedenciaBioterioLocalizacao"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="Animal silvestre"
							name="ModeloAnimalSilvestre"
						>
							<label
								htmlFor="ModeloAnimalSilvestreAnimal"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalSilvestreAnimal"
									name="ModeloAnimalSilvestreAnimal"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalSilvestreNumSolicitacao"
								className=""
							>
								<span className="">Número da solicitação ou autorização do SISBIO</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalSilvestreNumSolicitacao"
									name="ModeloAnimalSilvestreNumSolicitacao"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalSilvestreOutra"
								className=""
							>
								<span className="">Outra procedência?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalSilvestreOutra"
									name="ModeloAnimalSilvestreOutra"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalSilvestreQual"
								className=""
							>
								<span className="">Qual?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalSilvestreQual"
									name="ModeloAnimalSilvestreQual"
								/>
							</label>
						</ConditionalInput>

						<ConditionalInput
							title="O animal é geneticamente modificado?"
							name="ModeloAnimalProcedenciaModificado"
						>
							<label
								htmlFor="ModeloAnimalProcedenciaNumCQB"
								className=""
							>
								<span className="">Número do CQB</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalProcedenciaNumCQB"
									name="ModeloAnimalProcedenciaNumCQB"
								/>
							</label>
						</ConditionalInput>

						<label>
							Sugestão de edição em <b>Biotério</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoBioterio"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Métodos de Captura
						</span>
						<Field
							as="textarea"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="ModeloAnimalMetodosCaptura"
							name="ModeloAnimalMetodosCaptura"
						/>

						<label>
							Sugestão de edição em <b>Métodos de Captura</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoMetodosCaptura"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Planejamento Estatístico/Delineamento Experimental
						</span>
						<Field
							as="textarea"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							id="ModeloAnimalPlanejamentoEstatistico"
							name="ModeloAnimalPlanejamentoEstatistico"
						/>

						<label>
							Sugestão de edição em <b>Planejamento Estatístico/Delineamento Experimental</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoPlanejamentoExperimental"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Grau de Invasividade
						</span>
						<span className="flex flex-col gap-1">
							<label
								htmlFor="gi1"
								className="flex gap-1"
							>
								<Field
									type="radio"
									value="GI 1" id="gi1" name="ModeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 1</span>
							</label>
							<label
								htmlFor="gi2"
								className="flex gap-1"
							>
								<Field
									type="radio"
									value="GI 2" id="gi2" name="ModeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 2</span>
							</label>
							<label
								htmlFor="gi3"
								className="flex gap-1"
							>
								<Field
									type="radio"
									value="GI 3" id="gi3" name="ModeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 3</span>
							</label>
							<label
								htmlFor="gi4"
								className="flex gap-1"
							>
								<Field
									type="radio"
									value="GI 4" id="gi4" name="ModeloAnimalInvasividade"
								/>
								<span className="mb-1">GI 4</span>
							</label>
							<label
								htmlFor="giN"
								className="flex gap-1"
							>
								<Field
									type="radio"
									value="Não se aplica" id="giN" name="ModeloAnimalInvasividade"
								/>
								<span className="mb-1">Não e aplica</span>
							</label>
						</span>

						<ConditionalInput
							title="Os materiais biológicos destes exemplares serão usados em outro(s) projeto(s)?"
							name="ModeloAnimalUsoMaterial"
						>
							<label
								htmlFor="ModeloAnimalUsoMaterial"
								className=""
							>
								<span className="">Qual(is)?</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									name="ModeloAnimalUsoMaterial"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalUsoMaterialProtocolo"
								className=""
							>
								<span className="">Se já aprovado(s) pela CEUA, mencionar o número do protocolo</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									name="ModeloAnimalUsoMaterialProtocolo"
								/>
							</label>
						</ConditionalInput>

						<label>
							Sugestão de edição em <b>Grau de Invasividade</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoGrauInvasividade"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Alojamento
						</span>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="ModeloAnimalCondicoesLocal"
								className=""
							>
								<span className="">Local onde será mantido o animal</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalCondicoesLocal"
									name="ModeloAnimalCondicoesLocal"
									placeholder="Biotério, fazenda, aviário, etc"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalCondicoes"
								className=""
							>
								<span className="">Endereço</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalCondicoes"
									name="ModeloAnimalCondicoes"
								/>
							</label>

							<div className="flex flex-col">
								<span className="">Ambiente de alojamento</span>
								<label
									htmlFor="ModeloAnimalAlojamentoGaiola"
									className="flex gap-1"
								>
									<Field
										type="radio"
										id="ModeloAnimalAlojamentoGaiola"
										name="ModeloAnimalAlojamento"
										value="gaiola"
									/>
									<span className="translate-y-[-2px]">Gaiola</span>
								</label>

								<label
									htmlFor="ModeloAnimalAlojamentoJaula"
									className="flex gap-1"
								>
									<Field
										type="radio"
										id="ModeloAnimalAlojamentoJaula"
										name="ModeloAnimalAlojamento"
										value="jaula"
									/>
									<span className="translate-y-[-2px]">Jaula</span>
								</label>

								<label
									htmlFor="ModeloAnimalAlojamentoBaia"
									className="flex gap-1"
								>
									<Field
										type="radio"
										id="ModeloAnimalAlojamentoBaia"
										name="ModeloAnimalAlojamento"
										value="baia"
									/>
									<span className="translate-y-[-2px]">Baia</span>
								</label>

								<label
									htmlFor="ModeloAnimalAlojamentoOutros"
									className="flex gap-1"
								>
									<Field
										type="radio"
										id="ModeloAnimalAlojamentoOutros"
										name="ModeloAnimalAlojamento"
										value="outros"
									/>
									<span className="translate-y-[-2px]">Outros</span>
								</label>
							</div>

							<label
								htmlFor="ModeloAnimalAnimaisPorGaiola"
								className=""
							>
								<span className="">Número de animais por gaiola/galpão</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="number"
									id="ModeloAnimalAnimaisPorGaiola"
									name="ModeloAnimalAnimaisPorGaiola"
									min="0"
								/>
							</label>

							<label
								htmlFor="ModeloAnimalAnimaisCama"
								className=""
							>
								<span className="">Tipo de cama (maravalha, estrado ou outro)</span>
								<Field
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
									type="text"
									id="ModeloAnimalAnimaisCama"
									name="ModeloAnimalAnimaisCama"
								/>
							</label>
						</div>

						<label>
							Sugestão de edição em <b>Alojamento</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoAlojamento"
							/>
						</label>
					</fieldset>

					<fieldset className="flex flex-col gap-2">
						<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
							Condições de Alojamento e Alimentação dos Animais
						</span>
						<label
							htmlFor="ModeloAnimalCondicoesAlimentacao"
							className=""
						>
							<span className="">Alimentação</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="ModeloAnimalCondicoesAlimentacao"
								name="ModeloAnimalCondicoesAlimentacao"
							/>

						</label>

						<label
							htmlFor="ModeloAnimalCondicoesFonteAgua"
							className=""
						>
							<span className="">Fonte de água</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="ModeloAnimalCondicoesFonteAgua"
								name="ModeloAnimalCondicoesFonteAgua"
							/>
						</label>

						<label
							htmlFor="ModeloAnimalCondicoesLotacao"
							className=""
						>
							<span className="">Lotação (Número de animais/área)</span>
							<Field
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								type="text"
								id="ModeloAnimalCondicoesLotacao"
								name="ModeloAnimalCondicoesLotacao"
							/>
						</label>

						<ConditionalInput
							title="Exaustão do ar"
							name="ModeloAnimalCondicoesExaustao"
						/>

						<label>
							Sugestão de edição em <b>Condições de Alojamento e Alimentação dos Animais</b>
							<Field
								as="textarea"
								className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
								name="edicaoCondicoesAlojamentoAlimentacao"
							/>
						</label>
					</fieldset>
				</div>
			</div>
		</div >
	)
}
