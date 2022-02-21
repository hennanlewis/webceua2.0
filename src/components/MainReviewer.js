import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Main } from "./Main"
import { ProjectCardsReviewer } from './ProjectCardsReviewer'
import { ProjectsTableReviewer } from './ProjectsTableReviewer'

export function MainReviewer() {
	const { getProjectsReviewer, userInfo } = useAuth()
	const [projetos, setProjetos] = useState()

	useEffect(() => {
		getProjectsReviewer()
			.then((response) => {
				const data = response.data
				if (data?.length > 0) {
					setProjetos(data)
				}
			})
	}, [getProjectsReviewer])

	return (
		<Main>
			{!projetos &&
				<div className="flex flex-col m-auto">
					<h2 className="flex flex-col items-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block text-center">Não há projetos para revisão.</span>
						<span className="block text-center text-indigo-600">Você fez um bom trabalho!</span>
					</h2>
				</div>
			}
			{projetos &&
				<div className="flex flex-col grow gap-2">
					<ProjectsTableReviewer projetos={projetos} />
					<ProjectCardsReviewer projetos={projetos} />
				</div>
			}
		</Main>
	)
}