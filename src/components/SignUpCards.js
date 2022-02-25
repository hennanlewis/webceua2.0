import { useAuth } from "../contexts/AuthContext"

export function SignUpCards(props) {
	const { registros } = props
	const { createSignUp, signUp } = useAuth()

	const handleAddResearcher = (index) => {
		try {
			createSignUp("email@teste.com", "12341234")
				.then(response => {
					console.log(response)
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleAddReviewer = (index) => {
		try {

		} catch (error) {

		}
	}

	const handleRemove = (index) => {
		try {

		} catch (error) {

		}
	}


	return (
		<div className="hidden xs:flex xs:flex-col grow gap-4 max-h-[1000rem]">
			<div className="xxs:flex xxs:flex-col">
				<div className="mb-2 px-4 py-2 bg-[#005090] text-center font-medium text-white uppercase hover:brightness-125 rounded-md">
					Solitações de cadastro
				</div>
				<div className="xxs:flex xxs:flex-col xs:grid xs:grid-cols-2 gap-4">
					{registros.length && registros
						.map((item, index) => (
							<div className="overflow-hidden bg-white rounded-2xl shadow-md border-[3px] border-[#005090]" key={item.id}>
								<div className="flex flex-col xxs:px-2 px-6 mt-4 whitespace-nowrap">
									<span className="text-sm font-medium text-gray-900">Nome</span>
									<span className="text-lg font-medium text-gray-900">{item.name}</span>
								</div>

								<div className="flex flex-col xxs:px-2 px-6 mt-4 whitespace-nowrap">
									<span className="text-sm font-medium text-gray-900 break-all">Email</span>
									<span className="text-lg font-medium text-gray-900 break-all">{item.email}</span>
								</div>

								<div className="flex flex-col justify-center p-2 gap-1 whitespace-nowrap text-right text-sm font-medium">
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
								</div>
							</div>
						)
						)}
				</div>
			</div>
		</div>
	)
}