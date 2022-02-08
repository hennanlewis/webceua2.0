import React from 'react'

export function Main(props) {
	const { center, children, title  } = props

	return (
		<section className="w-auto grow flex justify-center items-center bg-neutral-100">
			<div className="mx-auto p-4 md:px-6 md:py-5 lg:px-8 lg-py-6">
				{title && <h2 className="text-2xl font-bold my-6">{title}</h2>}
				<div className="flex border-4 border-dotted border-gray-300 rounded-lg p-2 min-h-96">
					{center ? <div className="m-auto">{props.children}</div> : props.children}
				</div>
			</div>
		</section>
	)
}