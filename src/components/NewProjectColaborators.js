import { useFormikContext } from "formik"
import { useState } from "react"

export function NewProjectColaborators(props) {
	const { values, handleChange } = props
	const captureFormik = useFormikContext()

		const [vetorDeColaboradores, setVetorDeColaboradores] = useState([])
		const adicionaColaborador = (event) => {
			event.preventDefault()
			setVetorDeColaboradores(oldValue => [...oldValue, 0])
		}
		return (
			<div className="aba">
				<h2 className="text-white text-center font-bold lg:text-right">Colaboradores</h2>
	
				{vetorDeColaboradores.map((_, index) => <PosicaoVetorColaboradores key={index} position={index} />)}
	
				<button onClick={(event) => adicionaColaborador(event)}>Adicionar colaborador</button>
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
	
				<Select name='id_colaborador' label='Colaborador' formik={formik}>
					<option>Selecione...</option>
					{researchs.map(research => <option key={research.id} value={research.id}>{research.nome}</option>)}
				</Select>
	
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
