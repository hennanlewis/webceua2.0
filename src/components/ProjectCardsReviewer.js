import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export function ProjectCardsReviewer(props) {
	const { projetos } = props

	return (
		<div className="hidden xs:flex xs:flex-col grow gap-4 max-h-[1000rem]">
		<div className="xxs:flex xxs:flex-col xs:grid xs:grid-cols-2 gap-4">
				{projetos
					.map(item => (
						<div className="overflow-hidden bg-white rounded-2xl shadow-md border-[3px] border-[#005090]" key={item.id}>
							<div className="flex flex-col px-6 py-4 whitespace-nowrap">
								<span className="text-lg font-medium text-center text-gray-900">{item.projeto.DadosProjetoTitulo || "Projeto sem título"}</span>
							</div>

							<div className="flex justify-between px-6 whitespace-nowrap">
								<span className="text-sm">Status:</span>
								<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{item.status}</span>
							</div>

							<div className="flex gap-1 px-6 py-4 whitespace-nowrap">
								<span className="text-sm">Pesquisadores:</span>
								<div className="text-sm font-medium text-gray-900">{item.projeto.DadosResponsavelNome}</div>
							</div>

							{
								<div className="flex p-2 text-sm font-medium">
									<Link href={{
										pathname: "/review-project",
										query: { id: item.id },
									}}>
										<a className="grow p-2 bg-[#005090] text-center font-medium text-white hover:text-gray-200 rounded-md">Analisar</a>
									</Link>
								</div>
							}
						</div>
					)
					)}
			</div>
		</div>
	)
}