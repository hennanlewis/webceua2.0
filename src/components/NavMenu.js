import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

import navMenuValues from "../utils/navMenuValues"
import userMenuValues from "../utils/userMenuValues"

export function NavMenu(props) {
	const { openMenuState, currentURL } = props
	const { signOut, currentUser } = useAuth()

	return (
		<nav className="flex flex-col">
			{/* Menu de navegação em telas médias ou menores */}
			<div className={openMenuState.navMenu ? 'block' : 'hidden'}>
				<div className="md:hidden flex flex-col gap-1 p-2 bg-blue-800">
					{navMenuValues.map(item =>
						currentURL === item.path ?
							<Link href={item.path} key={item.name}>
								<a className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
									{item.name}
								</a>
							</Link>
							:
							<Link href={item.path} key={item.name}>
								<a className="px-4 py-2 text-sm text-white rounded-md hover:bg-gray-300 hover:text-blue-800 cursor-pointer">
									{item.name}
								</a>
							</Link>
					)}

					<div className="flex items-center gap-2 mx-4 my-2 px-3 py-2 rounded-full bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-gray-800 focus:ring-white">
						<img className="w-12 h-12 rounded-full" src={currentUser?.photoURL ? currentUser.photoURL : 'default-image-progile.jpg'} />
						<div className="flex flex-col">
							<span className="text-white">{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>
							<span className="text-gray-300">{currentUser.email}</span>
						</div>
					</div>

					{userMenuValues.map(item =>
						<Link key={item.name} href={item.path}>
							<a
								className="block px-4 py-2 text-sm text-white rounded-md hover:bg-gray-300 hover:text-blue-800"
							>
								{item.name}
							</a>
						</Link>
					)}
				</div>
			</div>

			{/* Menu de navegação em telas grandes */}
			{/* <div className="hidden md:flex md:flex-col md:grow gap-1 p-2 bg-blue-800 text-center">
				{navMenuValues.map(item =>
					currentURL === item.path ?
						<Link href={item.path} key={item.name}>
							<a className="bg-gray-900 text-white px-14 py-2 rounded-md text-sm font-medium">
								{item.name}
							</a>
						</Link>
						:
						<Link href={item.path} key={item.name}>
							<a className="text-gray-300 hover:bg-gray-700 px-14 hover:text-white py-2 rounded-md text-sm font-medium">
								{item.name}
							</a>
						</Link>
				)}
			</div> */}
		</nav>
	)
}