import { useAuth } from "../contexts/AuthContext"

export function ProjectsTable(props) {
	const { userInfo } = useAuth()
	const { projetos } = props

	return (
		<div className="overflow-hidden flex flex-col xs:hidden lg:flex-row grow bg-[#005090] rounded-2xl gap-4 border-[3px] border-[#005090] max-h-[1000rem] shadow-md">
			<table className="w-full">
				<thead>
					<tr className="bg-[#005090]">
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Título</th>
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Pesquisadores</th>
						<th scope="col" className="relative px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody className="bg-gray-50 ">
					{projetos.filter(item => item.status === "Salvo").map(item =>
						<tr className="border-b-[1px] hover:bg-gray-200" key={item.id}>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="text-sm font-medium text-gray-900">{item.projeto.DadosProjetoTitulo || "Projeto sem título"}</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
										<img className="w-8 h-8 rounded-full" src={userInfo.foto} />
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
								<a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}