import React from 'react'

export function Main({children}) {

	return (
		<main className="grow bg-neutral-100 -z-10">
			<div className="mx-auto p-4 md:px-6 md:py-5 lg:px-8 lg-py-6">
				<div className="border-4 border-dashed border-gray-300 rounded-lg p-2 h-96">
					{children}
				</div>
			</div>
		</main>
	)
}