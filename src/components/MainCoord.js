import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Main } from "./Main"
import { ProjectCards } from './ProjectCards'
import { ProjectsTable } from './ProjectsTable'

export function MainCoord() {
	const { getProjectsCoord } = useAuth()
	const [projetos, setProjetos] = useState()

	useEffect(() => {
		getProjectsCoord()
			.then((response) => {
				if (response.data.length) {
					setProjetos(response.data)
				}
			})
	}, [getProjectsCoord])

	return (
		<div className="flex flex-col m-auto">
			{
				<div className="flex flex-col m-auto">
					<Main>
						<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block text-center">Não há cadastros a aceitar</span>
							<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
						</h2>
					</Main>
					{!projetos &&
						<Main>
							<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								<span className="block text-center">Não há projetos para revisão</span>
								<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
							</h2>
						</Main>
					}
					{projetos &&
						<div className="flex flex-col grow gap-2">
							<ProjectsTable projetos={projetos} />
							<ProjectCards projetos={projetos} />
						</div>
					}
				</div>
			}
		</div>
	)
}