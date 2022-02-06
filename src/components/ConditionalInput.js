import { Field, useFormikContext } from 'formik'
import { useState } from 'react'

export function ConditionalInput(props) {
	const { children, inverse, legend, name, title } = props
	const { values, setFieldValue, handleChange } = useFormikContext()
	const [hiddenOptions, setHiddenoptions] = useState(true)
	const checkedFunction = (event) => {
		handleChange(event)
		if (inverse === true && event.target.value === 'nao') {
			setHiddenoptions(false)
			return
		}
		if (event.target.value === 'sim') {
			setHiddenoptions(false)
			return
		}
		setHiddenoptions(true)
	}

	return (
		<div>
			{legend && <span>{legend}</span>}
			<div className="radio">
				{title &&
					<span className="">{title}</span>
				}
				<span className="flex gap-10">
					<label
						className="flex gap-1"
						htmlFor={`${name}Sim`}
					>
						<Field
							type="radio"
							id={`${name}Sim`}
							name={`${name}SN`}
							onChange={(event) => checkedFunction(event)}
							value="sim"
						/>
						<span className="translate-y-[-2px]">Sim</span>
					</label>

					<label
						className="flex gap-1"
						htmlFor={`${name}Nao`}
					>
						<Field
							type="radio"
							id={`${name}Nao`}
							name={`${name}SN`}
							onChange={(event) => checkedFunction(event)}
							value="não"
						/>
						<span className="translate-y-[-2px]">Não</span>
					</label>
				</span>
			</div>

			<div className={`${hiddenOptions ? 'max-h-[0] opacity-0 pointer-events-none' : 'max-h-[1000rem] opacity-100'} duration-500`}>
				{children}
			</div>
		</div>
	)
}