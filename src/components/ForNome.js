import { Field, useFormikContext } from 'formik'
import React from 'react'

export function Nome(props) {
	const { values, handleChange } = props
	const formikContext = useFormikContext()

	return (
		<span>
			Nome
			<Field
				className="border-2 border-violet-400"
				type="text"
				name="nome"
			/>
		</span>
	)
}

export function Email(props) {
	const { values, handleChange } = props
	const formikContext = useFormikContext()

	return (
		<span>
			Email
			<Field
				className="border-2 border-violet-400"
				type="email"
				name="email"
			/>
		</span>
	)
}

export function Texto(props) {
	const { values, handleChange } = props
	const formikContext = useFormikContext()

	return (
		<span>
			Texto
			<Field
				className="border-2 border-violet-400"
				type="text"
				name="texto"
			/>
		</span>
	)
}

export function Checkbox(props) {
	const { values, handleChange } = props
	const formikContext = useFormikContext()

	return (
		<label htmlFor="">
			<span>
				<Field
					className="border-2 border-violet-400"
					type="checkbox"
					name="checkbox"
					value="1"
				/>
				1
			</span>
			<span>
				<Field
					className="border-2 border-violet-400"
					type="checkbox"
					name="checkbox"
					value="2"
				/>
				2
			</span>
		</label>
	)
}
