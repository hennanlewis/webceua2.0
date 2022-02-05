import { useFormikContext } from "formik"
import { useState } from "react"

export function NewProjectAnimals(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()
	const [vetorDeAnimais, setVetorDeAnimais] = useState([])
	const adicionaAnimal = (event) => {
		event.preventDefault()
		setVetorDeAnimais(oldValue => [...oldValue, 0])
	}

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8">
				<h2 className="title-option">Animais</h2>
			</div>
			<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">
				{vetorDeAnimais.map((_, index) => <PosicaoVetorAnimais key={index} position={index} />)}

				<button
					className="mt-1 bg-blue-800 text-gray-300 hover:bg-blue-800/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
					onClick={(event) => adicionaAnimal(event)}
				>
					Adicionar animal
				</button>

				<fieldset>
					<span>Total de animais</span>
					<input
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
						type="text"
						value="0"
					/>
				</fieldset>
			</div>
		</div>
	)
}

function PosicaoVetorAnimais(props) {
	const [hiddenOptions, setHiddenOptions] = useState(true)
	const [deleteOption, setDeleteOption] = useState(false)
	const [quantidade, setQuantidade] = useState([0, 0])

	const checkedFunction = (event) => {
		event.target.value === 'outro' ?
			setHiddenOptions(() => false)
			:
			setHiddenOptions(() => true)
	}

	const removeAnimal = (event) => {
		setDeleteOption(true)
	}

	const mudaQuantidadeFemea = (event) => {
		setQuantidade(() => [event.target.value, quantidade[1]])
	}

	const mudaQuantidadeMacho = (event) => {
		setQuantidade(() => [quantidade[0], event.target.value])
	}

	if (deleteOption === true)
		return null

	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
				Tipo e Características
			</span>

			<label className="flex flex-col">
				<select
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					id="animais"
					name={`animais${props.position}`}
					htmlFor="list"
					onChange={event => checkedFunction(event)}
				>
					<option value="anfibio">Anfíbio</option>
					<option value="ave">Ave</option>
					<option value="bovino">Bovino</option>
					<option value="bubalino">Bubalino</option>
					<option value="cão">Cão</option>
					<option value="camundongo_he">Camundongo heterogênico</option>
					<option value="camundongo_iso">Camundongo isogênico</option>
					<option value="camundongo_kno">Camundongo Knockout</option>
					<option value="camundongo_tr">Camundongo transgênico</option>
					<option value="caprino">Caprino</option>
					<option value="chinchila">Chinchila</option>
					<option value="cobaia">Cobaia</option>
					<option value="coelhos">Coelhos</option>
					<option value="equídeo">Equídeo</option>
					<option value="especie_s_b">Espécie silvestre brasileira</option>
					<option value="especie_s_n_b">Espécie silvestre não-brasileira</option>
					<option value="gato">Gato</option>
					<option value="gerbil">Gerbil</option>
					<option value="hamster">Hamster</option>
					<option value="ovino">Ovino</option>
					<option value="peixe">Peixe</option>
					<option value="primata_n_hu">Primata não-humano</option>
					<option value="rato_he">Rato heterogênico</option>
					<option value="rato_iso">Rato isogênico</option>
					<option value="rato_kno">Rato Knockout</option>
					<option value="rato_tr">Rato transgênico</option>
					<option value="reptil">Réptil</option>
					<option value="suino">Suíno</option>
					<option value="outro">Outro</option>
				</select>
			</label>

			<label className={`${hiddenOptions ? 'max-h-[0] opacity-0 pointer-events-none' : 'max-h-[100%] opacity-100'} duration-500`}>
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animaisOutro${props.position}`}
					placeholder="Espécie ou grupo taxonômico"
				/>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animaisLinhagem${props.position}`}
				/>
				<span>Linhagem</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animaisIdade${props.position}`}
				/>
				<span>Idade</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animaisPeso${props.position}`}
				/>
				<span>Peso aproximado</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="number"
					name={`animaisQuantidadeFemea${props.position}`}
					value={quantidade[0]}
					min="0"
					onChange={event => mudaQuantidadeFemea(event)}
				/>
				<span>Quantidade fêmea(s)</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="number"
					name={`animaisQuantidadeMacho${props.position}`}
					value={quantidade[1]}
					min="0"
					onChange={event => mudaQuantidadeMacho(event)}
				/>
				<span>Quantidade macho(s)</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`animaisSubtotal${props.position}`}
					value={parseInt(quantidade[0]) + parseInt(quantidade[1])}
				/>
				<span>Subtotal (M+F)</span>
			</label>
			<button
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				onClick={(event) => removeAnimal(event)}
			>
				Remover animal
			</button>
		</fieldset>
	)
}
