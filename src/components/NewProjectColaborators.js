import { useFormikContext } from "formik"
import Link from "next/link"
import { useState } from "react"

export function NewProjectColaborators(props) {
	const { values, handleChange, position } = props

	const [vetorDeColaboradores, setVetorDeColaboradores] = useState([])
	const adicionaColaborador = (event) => {
		event.preventDefault()
		setVetorDeColaboradores(oldValue => [...oldValue, 0])
	}
	const hiddenShowClass = position === 1 ?
		'max-h-[1000rem] opacity-100 duration-500'
		:
		'max-h-[0] opacity-0 pointer-events-none overflow-hidden duration-500'

	return (
		<div className={position === 0 ? 'flex' : 'hidden'}>
			<div className={hiddenShowClass}>
				<div className="relative grid grid-cols-8 bg-blue-800/90 p-2 rounded-t-xl">
					<div className="col-span-3 xs:col-span-8 p-2 pb-4 md:text-justify lg:px-4">
						<h2 className="text-white text-right font-bold xs:text-center">Colaboradores</h2>
						<div className="text-sm text-white text-justify lg:text-right">
							Preencha os campos caso seja necessário a adição de algum colaborador.
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
					<div>

						{vetorDeColaboradores.map((_, index) => <PosicaoVetorColaboradores key={index} position={index} />)}

						<button onClick={(event) => adicionaColaborador(event)}>Adicionar colaborador</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function PosicaoVetorColaboradores(props) {

	const [researchs, setResearchs] = useState([])
	const [deleteOption, setDeleteOption] = useState(false)

	useEffect(() => {
		(async () => {
			handleResearchs()
				.then(response => setResearchs(response || []))
				.catch(error => console.log(error))
		})()
	}, [])

	const formik = useFormik({
		initialValues: { id_colaborador: 0 },
	})

	const removeColaborador = (event) => {
		setDeleteOption(true)
	}

	if (deleteOption === true)
		return null

	return (
		<fieldset>
			<legend>Colaboradores</legend>

			<select name='id_colaborador' label='Colaborador'>
				<option>Selecione...</option>
				{researchs?.map(research => <option key={research.id} value={research.id}>{research.nome}</option>)}
			</select>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresInstituicao${props.position}`} />
				<span>Intituição</span>
			</label>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresNivelAcademico${props.position}`} />
				<span>Nível Acadêmico</span>
			</label>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresExperiencia${props.position}`} />
				<span>Experiência prévia (anos)</span>
			</label>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresTreinamento${props.position}`} />
				<span>Treinamento (especificar)</span>
			</label>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresTelefone${props.position}`} />
				<span>Telefone</span>
			</label>

			<label htmlFor="temp">
				<input type="text" name={`colaboradoresEmail${props.position}`} />
				<span>E-mail</span>
			</label>

			<button onClick={(event) => removeColaborador(event)}>Remover colaborador</button>
		</fieldset>
	)
}
