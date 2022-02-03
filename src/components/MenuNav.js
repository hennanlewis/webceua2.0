import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

import menuValues from "../utils/menuValues"

export function MenuNav(props) {
	const { openMenuState, currentURL } = props
	const { getUser, signOut } = useAuth()

	return (
		<nav className="flex flex-col">
			{/* Menu de navegação em telas médias ou menores */}
			<div className={openMenuState.menuMD ? 'block' : 'hidden'}>
				<div className="flex flex-col gap-1 md:hidden p-2 bg-blue-800 border-t-2">
					{menuValues.map(item =>
						currentURL === item.path ?
							<Link href={item.path} key={item.name}>
								<a className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
									{item.name}
								</a>
							</Link>
							:
							<Link href={item.path} key={item.name}>
								<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
									{item.name}
								</a>
							</Link>
					)}
				</div>
			</div>

			{/* Menu de navegação em telas grandes */}
			<div className="hidden md:flex">
				<div className="flex flex-col gap-1 p-2 bg-blue-800 text-center">
					{menuValues.map(item =>
						currentURL === item.path ?
							<Link href={item.path} key={item.name}>
								<a className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
									{item.name}
								</a>
							</Link>
							:
							<Link href={item.path} key={item.name}>
								<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
									{item.name}
								</a>
							</Link>
					)}
				</div>
			</div>
		</nav>
	)
}