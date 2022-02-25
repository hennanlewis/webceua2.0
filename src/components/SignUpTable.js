
export function SignUpTable(props) {
	const { registros } = props

	const handleAddResearcher = (index) => {
		
	}

	const handleAddReviewer = (index) => {

	}

	const handleRemove = (index) => {

	}

	return (
		<div className="overflow-hidden flex flex-col xs:hidden grow bg-[#005090] rounded-2xl gap-4 border-[3px] border-[#005090] max-h-[1000rem] shadow-md">
			<div className="px-4 pt-2 bg-[#005090] text-center font-bold text-white uppercase rounded-md">
				Solitações de cadastro
			</div>
			<table className="w-full">
				<thead>
					<tr className="bg-[#005090]">
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
						<th scope="col" className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Nome</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-bold text-white uppercase tracking-wider">Ação</th>
					</tr>
				</thead>
				<tbody className="bg-gray-50 ">
					{registros.length > 0 && registros
						.sort((a, b) => a.email > b.email)
						.map((item, index) =>
							<tr className="border-b-[1px] hover:bg-gray-200" key={item.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="text-sm font-medium text-gray-900">{item.email}</div>
									</div>
								</td>

								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="text-sm font-medium text-gray-900">{item.name}</div>
									</div>
								</td>

								<td className="flex justify-center pt-2 pr-2 gap-1 whitespace-nowrap text-right text-sm font-medium">
									<button
										onClick={() => handleAddResearcher(index)}
										className="px-4 py-2 bg-[#005090] text-center font-medium text-white  hover:brightness-125 rounded-md"
									>
										Pesquisador
									</button>
									<button
										onClick={() => handleAddReviewer(index)}
										className="px-4 py-2 bg-[#005090] text-center font-medium text-white  hover:brightness-125 rounded-md"
									>
										Parecerista
									</button>
									<button
										onClick={() => handleRemove(index)}
										className="px-4 py-2 bg-[#005090] text-center font-medium text-white  hover:brightness-125 rounded-md"
									>
										Recusar
									</button>
								</td>
							</tr>
						)}
				</tbody>
			</table>
		</div>
	)
}