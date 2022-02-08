import { HiMenu, HiOutlineBell, HiX } from 'react-icons/hi'
import { useAuth } from '../contexts/AuthContext'

export function Header(props) {
	const { openNavMenuFunction, openMenuState, currentPage } = props
	const { currentUser } = useAuth()

	return (
		<header className="max-h-18 bg-blue-800 shadow-[0_0_10px_#000] p-4 sm:px-6 lg:px-8 border-b border-gray-700 border-0 z-10">
			<div className="flex justify-between text-white items-center">
				<h1 className="text-3xl font-bold">
					{currentPage}
				</h1>

				<div>
					<div className="md:hidden text-3xl">
						<button
							onClick={() => openNavMenuFunction('navMenu')}
							className="flex w-8 items-center h-8 bg-gray-800 p-1 rounded-md text-gray-400 hover:text-white
										focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-gray-800 focus:ring-white"
						>
							{openMenuState.navMenu ? <HiX /> : <HiMenu />}
						</button>
					</div>

					<div className="hidden md:block relative">
						<div className="flex text-3xl gap-2">
							<button
								className="flex w-8 h-8 items-center bg-gray-800 p-2 rounded-full text-3xl text-gray-400 hover:text-white
									focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-gray-800 focus:ring-white"
							>
								<HiOutlineBell />
							</button>

							<button
								onClick={() => openNavMenuFunction('userMenu')}
								className="flex w-8 h-8 rounded-full
									focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-gray-800 focus:ring-white"
							>
								<img className="w-8 h-8 rounded-full" src={currentUser.foto ? currentUser.foto : 'default-image-progile.jpg'} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}