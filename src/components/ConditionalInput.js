import { useState } from 'react'

export function ConditionalInput(props) {
	const [hiddenOptions, setHiddenoptions] = useState('hiddenOptions')
	const checkedFunction = (event) => {
		if (props.inverse === true && event.target.value === 'nao') {
			setHiddenoptions(() => 'showOptions')
			return
		}
		if (event.target.value === 'sim') {
			setHiddenoptions(() => 'showOptions')
			return
		}
		setHiddenoptions(() => 'hiddenOptions')
	}

	return (
		<>
			{props.legend && <legend>{props.legend}</legend>}
			<div className="radio">
				{props.title && <span>{props.title}</span>}

				<span>
					<label className="SimNao" htmlFor={`${props.name}Sim`}>
						<input type="radio" value="sim"
							id={`${props.name}Sim`} name={props.name}
							onChange={(event) => checkedFunction(event)}
						/>
						Sim
					</label>

					<label className="SimNao" htmlFor={`${props.name}Nao`}>
						<input type="radio" value="nao"
							id={`${props.name}Nao`} name={props.name}
							onChange={(event) => checkedFunction(event)}
						/>
						Não
					</label>
				</span>
			</div>

			<div className="containerCondicional">
				<div className={`${hiddenOptions}`}>{props.children}</div>
			</div>

		</>
	)
}