import { Field, FieldArray, useFormikContext } from "formik"
import Link from "next/link"
import { useEffect, useState } from "react"

export function NewProjectAnimals(props) {
	const { values, setFieldValue } = useFormikContext()
	const { coord, position } = props

	const showAllCorrections = () => {
		return (
			<div className="flex flex-col text-white gap-4">
				{coord !== undefined ?? <h1 className="mt-4 -mb-4 text-white text-center font-bold">Edição sugerida</h1>}
				{showCorrectionItem("Animais", coord?.edicaoAnimais)}
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

	useEffect(() => {
		const soma = values.animais?.reduce((sum, item) => {
			return sum + item.quantidadeFemea + item.quantidadeMacho
		}, 0)
		setFieldValue('animaisTotais', soma)
	}, [values, setFieldValue])

	return (
		<div className={position === 3 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Animais</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Preencha os campos com os animais correspondentes ao projeto.
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
					<FieldArray name="animais">
						{({ insert, remove, push }) => (
							<>
								{values.animais?.length > 0 &&
									values.animais?.map((_, index) =>
										<PosicaoVetorAnimais key={index} remove={remove} position={index} />
									)}

								<button
									className="mt-1 bg-[#005090] text-gray-300 hover:bg-[#005090]/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
									type="button"
									onClick={() => push({
										animal: "",
										outro: "",
										linhagem: "",
										idade: "",
										peso: "",
										quantidadeFemea: 0,
										quantidadeMacho: 0,
										subtotal: 0,
									})}
								>
									Adicionar animal
								</button>
							</>
						)}
					</FieldArray>

					<fieldset>
						<span>Total de animais</span>
						<Field
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
							type="number"
							name="animaisTotais"
							min="0"
							value={values.animaisTotais}
						/>
					</fieldset>
				</div>
			</div>
		</div>
	)
}

function PosicaoVetorAnimais(props) {
	const { position, remove } = props
	const { values, setFieldValue } = useFormikContext()
	const [hiddenOptions, setHiddenOptions] = useState(true)

	useEffect(() => {
		setFieldValue(`animais.${position}.subtotal`,
			values.animais[position].quantidadeFemea + values.animais[position].quantidadeMacho)
	}, [values, setFieldValue, position])

	const handleShowHide = (event) => {
		event.target.value === 'outro' ?
			setHiddenOptions(() => false)
			:
			setHiddenOptions(() => true)
		setFieldValue(event.target.name, event.target.value)
	}

	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
				Tipo e Características
			</span>

			<label className="flex flex-col">
				<Field
					as="select"
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					name={`animais.${position}.animal`}
					onChange={handleShowHide}
				>
					<option value="">Selecione o animal</option>
					<option value="anfibio">Anfíbio</option>
					<option value="ave">Ave</option>
					<option value="bovino">Bovino</option>
					<option value="bubalino">Bubalino</option>
					<option value="cão">Cão</option>
					<option value="camundongo heterogênico">Camundongo heterogênico</option>
					<option value="camundongo isogênico">Camundongo isogênico</option>
					<option value="camundongo Knockout">Camundongo Knockout</option>
					<option value="camundongo transgênico">Camundongo transgênico</option>
					<option value="caprino">Caprino</option>
					<option value="chinchila">Chinchila</option>
					<option value="cobaia">Cobaia</option>
					<option value="coelhos">Coelhos</option>
					<option value="equídeo">Equídeo</option>
					<option value="espécie silvestre brasileira">Espécie silvestre brasileira</option>
					<option value="espécie silvestre não-brasileira">Espécie silvestre não-brasileira</option>
					<option value="gato">Gato</option>
					<option value="gerbil">Gerbil</option>
					<option value="hamster">Hamster</option>
					<option value="ovino">Ovino</option>
					<option value="peixe">Peixe</option>
					<option value="primata não-humano">Primata não-humano</option>
					<option value="rato heterogênico">Rato heterogênico</option>
					<option value="rato isogênico">Rato isogênico</option>
					<option value="rato Knockout">Rato Knockout</option>
					<option value="rato transgênico">Rato transgênico</option>
					<option value="réptil">Réptil</option>
					<option value="suíno">Suíno</option>
					<option value="outro">Outro</option>
				</Field>
			</label>

			<label className={`${hiddenOptions ? 'max-h-[0] opacity-0 pointer-events-none' : 'max-h-[100%] opacity-100'} duration-500`}>
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animais.${position}.outro`}
					placeholder="Espécie ou grupo taxonômico"
				/>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animais.${position}.linhagem`}
				/>
				<span>Linhagem</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animais.${position}.idade`}
				/>
				<span>Idade</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animais.${position}.peso`}
				/>
				<span>Peso aproximado</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="number"
					name={`animais.${position}.quantidadeFemea`}
					min="0"
				/>
				<span>Quantidade fêmea(s)</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="number"
					name={`animais.${position}.quantidadeMacho`}
					min="0"
				/>
				<span>Quantidade macho(s)</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animais.${position}.subtotal`}
				/>
				<span>Subtotal (M+F)</span>
			</label>

			<button
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				type="button"
				onClick={() => remove(position)}
			>
				Remover animal
			</button>
		</fieldset>
	)
}
