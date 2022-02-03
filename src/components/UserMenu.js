import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export function UserMenu(props) {
	const { openMenuState } = props
	const { signOut } = useAuth()

	return (
		<div className={`${openMenuState.userMenu ? 'md:flex flex-col ' : 'hidden '}absolute origin-top-right right-3 mt-14
			w-48 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
		>
			<Link href="/settings">
				<a
					className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-300 hover:text-blue-800" role="menuitem" tabIndex="-1" id="user-menu-item-2"
				>
					Meus dados
				</a>
			</Link>

			<span
				onClick={signOut}
				className="px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-300 hover:text-blue-800 cursor-pointer"
			>
				Sair
			</span>
		</div>
	)
}