import Link from "next/link"

export function ProjectsTable(props) {
	const { projetos } = props

	return (
		<div className="overflow-hidden flex flex-col xs:hidden lg:flex-row grow bg-[#005090] rounded-2xl gap-4 border-[3px] border-[#005090] max-h-[1000rem] shadow-md">
			<table className="w-full">
				<thead>
					<tr className="bg-[#005090]">
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Título</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-bold text-white uppercase tracking-wider">Status</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-bold text-white uppercase tracking-wider">Pesquisador</th>
						<th scope="col" className="relative px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody className="bg-gray-50 ">
					{projetos
						.sort((a, b) => a.projeto.DadosProjetoTitulo > b.projeto.DadosProjetoTitulo)
						.map(item =>
							<tr className="border-b-[1px] hover:bg-gray-200" key={item.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="text-sm font-medium text-gray-900">{item.projeto.DadosProjetoTitulo || "Projeto sem título"}</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-center">
									{(item.status === "Salvo" || item.status === "Corrigido") &&
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">{item.status}</span>
									}
									{(item.status === "Submetido" || item.status === "Em correção" || item.status === "No parecerista") &&
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">{item.status}</span>
									}
									{item.status === "Recusado" &&
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{item.status}</span>
									}
									{(item.status === "Em aprovação" || item.status === "Na coordenação" || item.status === "Aprovado") &&
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>
									}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="self-center text-center">{item.projeto.DadosResponsavelNome}</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									{(item.status === "Salvo" || item.status === "Em correção") &&
										<Link href={{
											pathname: "/edit-project",
											query: { id: item.id },
										}}>
											<a className="px-4 py-2 bg-[#005090] text-center font-medium text-white  hover:brightness-125 rounded-md">Editar</a>
										</Link>
									}
								</td>
							</tr>
						)}
				</tbody>
			</table>
		</div>
	)
}