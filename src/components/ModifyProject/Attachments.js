import { Field, FieldArray, useFormikContext } from "formik"
import Link from "next/link"

export function ModifyProjectAttachments(props) {
	const { position } = props
	const { values } = useFormikContext()

	return (
		<div className={position === 7 ? 'max-h-[1000rem] opacity-100 duration-500' : 'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-200'}>
			<div className="relative grid grid-cols-8 bg-[#005090]/90 p-2 rounded-t-xl">
				<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
					<h2 className="text-white text-right font-bold xs:text-center">Anexos</h2>
					<div className="text-sm text-white text-justify lg:text-right">
						Preencha os campos caso seja necessário a adição de algum anexo.
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

					<FieldArray name="anexos">
						{({ insert, remove, push }) => (
							<>
								{values.anexos?.length > 0 &&
									values.anexos.map((_, index) =>
										<PosicaoVetorAnexos key={index} remove={remove} position={index} />)}

							</>
						)}
					</FieldArray>

					<label>
						Sugestão de edição em <b>Anexos</b>
						<Field
							as="textarea"
							className="flex flex-col mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-300 rounded-md"
							name="edicaoAnexos"
						/>
					</label>
				</div>
			</div>
		</div>
	)
}

function PosicaoVetorAnexos(props) {
	const { position, remove } = props

	return (
		<fieldset className="flex flex-col gap-2">
			<span className="flex flex-col p-2 py-1 -mb-1 -mx-2 rounded-lg bg-[#005090]/90 text-md text-white font-semibold">
				Tipo e Características
			</span>

			<label className="flex flex-col-reverse">
				<Field
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 py-2 shadow-[0_1px_5px_#0006] sm:text-sm border-gray-900 rounded-md"
					type="file"
					name={`anexos.${position}.anexo`}
				/>
				<span>Procurar arquivo</span>
			</label>
		</fieldset>

	)
}
