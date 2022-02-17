import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ProjectCards } from './ProjectCards'
import { ProjectsTable } from './ProjectsTable'
import { Main } from "./Main"

export function MainRechearcher(props) {
	const { getProjects } = useAuth()
	const [projetos, setProjetos] = useState()

	useEffect(() => {
		getProjects()
			.then((response) => {
				if (response.data.length) {
					setProjetos(response.data)
				}
			})
	}, [getProjects])

	return (
		<Main>
			{!projetos &&
				<h2 className="flex flex-col grow-0 justify-center items-center m-auto text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
					<span className="block text-center">Você não possui projetos.</span>
					<span className="block text-center text-indigo-600">Adicione um agora mesmo!</span>
				</h2>
			}
			{projetos &&
				<div className="flex flex-col grow gap-2">
					<ProjectsTable projetos={projetos} />
					<ProjectCards projetos={projetos} />
				</div>
			}
		</Main>
	)
}