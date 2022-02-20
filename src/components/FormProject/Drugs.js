import { Field, FieldArray, useFormikContext } from "formik"
import Link from "next/link"

export function NewProjectDrugs(props) {
	const { values } = useFormikContext()
	const { coord, position } = props

	const showAllCorrections = () => {
		return (
			<div className="flex flex-col text-white gap-4">
				{coord !== undefined ?? <h1 className="mt-4 -mb-4 text-white text-center font-bold">Edição sugerida</h1>}
				{showCorrectionItem("Fármacos", coord?.edicaoFarmacos)}
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

	return (
		<div className={position === 5 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Fármacos</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Preencha os campos caso seja necessário a utilização de algum fármaco.
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
					<FieldArray name="farmacos">
						{({ insert, remove, push }) => (
							<>
								{values.farmacos?.length > 0 &&
									values.farmacos.map((_, index) =>
										<PosicaoVetorFarmacos key={index} remove={remove} position={index} />)}

								<button
									className="mt-1 bg-[#005090] text-gray-300 hover:bg-[#005090]/90 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_10px_#0008] sm:text-sm border-gray-900 rounded-md"
									type="button"
									onClick={() => push({
										farmaco: "",
										nome: "",
										dose: "",
										via: "",
										frequencia: "",
										justificativa: "",
									})}
								>
									Adicionar Fármaco
								</button>
							</>
						)}
					</FieldArray>
				</div>
			</div>
		</div>
	)
}

function PosicaoVetorFarmacos(props) {
	const { position, remove } = props

	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
				Tipo e Características
			</span>

			<label className="flex flex-col-reverse">
				<Field
					as="select"
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					id="farmacos"
					name={`farmacos.${position}.farmaco`}
					htmlFor="list"
				>
					<option value="">Selecione o tipo de fármaco</option>
					<option value="anestésico">Anestésico</option>
					<option value="analgésico">Analgésico</option>
					<option value="relaxante muscular">Relaxante muscular</option>
					<option value="outro">Outro</option>
				</Field>
			</label>
			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`farmacos.${position}.nome`}
				/>
				<span>Fármaco</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`farmacos.${position}.dose`}
				/>
				<span>Dose (UI ou mg/kg)</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`farmacos.${position}.via`}
				/>
				<span>Via de administração</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`farmacos.${position}.frequencia`}
				/>
				<span>Frequência</span>
			</label>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="text"
					name={`farmacos.${position}.justificativa`}
				/>
				<span>Justificativa em caso de não uso</span>
			</label>
			<button
				className="mt-1 bg-gray-400/75 hover:bg-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
				type="button"
				onClick={() => remove(position)}
			>
				Remover fármaco
			</button>
		</fieldset>
	)
}
