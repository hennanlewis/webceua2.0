import { useFormikContext } from "formik"
import Link from "next/link"
import { useState } from "react"

export function NewProjectAttachments(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()
	const [vetorDeAnexos, setVetorAnexos] = useState([])
	const adicionaAnexo = (event) => {
		event.preventDefault()
		setVetorAnexos(oldValue => [...oldValue, 0])
	}

	return (
		<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
			<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
				<h2 className="text-white text-right font-bold xs:text-center">Anexos</h2>
				<div className="text-white text-justify lg:text-right">
					Esta aba é dedicada a casos que sejam necessário o envio de anexos.
				</div>
				<div className="mt-6 text-right">
					<Link href="/dashboard">
						<a
							className="flex flex-col xs:text-center text-white hover:text-gray-200 font-bold"
						>
							Clique aqui para voltar a página inicial
						</a>
					</Link>
				</div>
			</div>
			<div className="col-span-5 xs:col-span-8 flex flex-col gap-10 bg-indigo-50 rounded-lg p-4">

				{vetorDeAnexos.map((_, index) => <PosicaoVetorAnexos key={index} position={index} />)}

				<button
					className="mt-1 bg-blue-800 text-gray-300 hover:bg-blue-800/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
					onClick={(event) => adicionaAnexo(event)}
				>
					Adicionar Anexo
				</button>
			</div>
		</div>
	)
}

function PosicaoVetorAnexos(props) {
	const [deleteOption, setDeleteOption] = useState(false)

	const removeAnexo = (event) => {
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
				<input
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="file"
					name="anexo"
				/>
				<span>Procurar arquivo</span>
			</label>
			<button
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				onClick={(event) => removeAnexo(event)}
			>
				Remover anexo
			</button>
		</fieldset>

	)
}
