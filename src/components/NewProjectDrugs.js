import { useFormikContext } from "formik"
import { useState } from "react"

export function NewProjectDrugs(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()
	const [vetorDeFarmacos, setVetorDeFarmacos] = useState([])
	const adicionaFarmaco = (event) => {
		event.preventDefault()
		setVetorDeFarmacos(oldValue => [...oldValue, 0])
	}

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8">
				<h2 className="title-option">Fármacos</h2>
			</div>
			<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">

				{vetorDeFarmacos.map((_, index) => <PosicaoVetorFarmacos key={index} position={index} />)}

				<button
					className="mt-1 bg-blue-800 text-gray-300 hover:bg-blue-800/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
					onClick={(event) => adicionaFarmaco(event)}
				>
					Adicionar Fármaco
				</button>
			</div>
		</div>
	)
}

function PosicaoVetorFarmacos(props) {
	const [deleteOption, setDeleteOption] = useState(false)

	const removeFarmaco = (event) => {
		setDeleteOption(true)
	}

	if (deleteOption === true)
		return null
	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-blue-800/90 text-md text-white font-semibold">
				Tipo e Características
			</span>

			<label className="flex flex-col-reverse">
				<select
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					id="farmacos"
					name={`farmaco${props.position}`}
					htmlFor="list"
				>
					<option value="anestésico">Anestésico</option>
					<option value="analgésico">Analgésico</option>
					<option value="relaxante_muscular">Relaxante muscular</option>
					<option value="outro">Outro</option>
				</select>
			</label>
			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name="experienciaFarmacoNome"
				/>
				<span>Fármaco</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name="experienciaFarmacoDose"
				/>
				<span>Dose (UI ou mg/kg)</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name="experienciaFarmacoVia"
				/>
				<span>Via de administração</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name="experienciaFarmacoFrequencia"
				/>
				<span>Frequência</span>
			</label>

			<label className="flex flex-col-reverse">
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name="experienciaFarmacoJustificativa"
				/>
				<span>Justificativa em caso de não uso</span>
			</label>
			<button
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				onClick={(event) => removeFarmaco(event)}
			>
				Remover fármaco
			</button>
		</fieldset>
	)
}
