import { useState } from 'react'

export function ConditionalInput(props) {
	const [hiddenOptions, setHiddenoptions] = useState(true)
	const checkedFunction = (event) => {
		if (props.inverse === true && event.target.value === 'nao') {
			setHiddenoptions(() => false)
			return
		}
		if (event.target.value === 'sim') {
			setHiddenoptions(() => false)
			return
		}
		setHiddenoptions(() => true)
	}

	return (
		<div>
			{props.legend && <span>{props.legend}</span>}
			<div className="radio">
				{props.title &&
					<span className="">{props.title}</span>
				}

				<span className="flex gap-10">
					<label
						className="SimNao flex gap-1"
						htmlFor={`${props.name}Sim`}
					>
						<input
							type="radio"
							id={`${props.name}Sim`}
							name={props.name}
							onChange={(event) => checkedFunction(event)}
							value="sim"
						/>
						<span className="translate-y-[-2px]">Sim</span>
					</label>

					<label
						className="SimNao flex gap-1"
						htmlFor={`${props.name}Nao`}
					>
						<input
							type="radio"
							id={`${props.name}Nao`}
							name={props.name}
							onChange={(event) => checkedFunction(event)}
							value="não"
						/>
						<span className="translate-y-[-2px]">Não</span>
					</label>
				</span>
			</div>

			<div className={`${hiddenOptions ? 'max-h-[0] opacity-0 pointer-events-none' : 'max-h-[1000rem] opacity-100'} duration-500`}>
				{props.children}
			</div>
		</div>
	)
}