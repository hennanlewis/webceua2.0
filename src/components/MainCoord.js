import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Main } from "./Main"
import { ProjectCardsCoord } from './ProjectCardsCoord'
import { ProjectsTableCoord } from './ProjectsTableCoord'

export function MainCoord() {
	const { getProjectsCoord } = useAuth()
	const [projetos, setProjetos] = useState()

	useEffect(() => {
		getProjectsCoord()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setProjetos(data)
				}
			})
	}, [getProjectsCoord])

	return (
		<Main>
			{!projetos &&
				<div className="flex flex-col m-auto">
					<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block text-center">Não há cadastros a aceitar</span>
						<span className="block text-center">ou projetos para revisão.</span>
						<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
					</h2>
				</div>
			}
			{projetos &&
				<div className="flex flex-col grow gap-2">
					<ProjectsTableCoord projetos={projetos} />
					<ProjectCardsCoord projetos={projetos} />
				</div>
			}
		</Main>
	)
}