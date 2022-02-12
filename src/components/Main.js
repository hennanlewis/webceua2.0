import React from 'react'

export function Main(props) {
	const { center, children, title  } = props

	return (
		<section className="max-w-[100%] w-auto grow flex justify-center items-center bg-neutral-100">
			<div className="mx-auto p-4 md:px-6 md:py-5 lg:px-8 lg-py-6">
				{title && <h2 className="text-2xl font-bold my-6">{title}</h2>}
				<div className="flex border-4 border-dotted border-gray-300 rounded-lg py-6 px-6 md:p-4 lg:px-8 xs:px-2 min-h-96">
					{center ? <div className="m-auto">{children}</div> : children}
				</div>
			</div>
		</section>
	)
}