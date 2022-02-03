import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export function UserMenuOptions() {
	const { signOut } = useAuth()

	return (
		<>
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
		</>
	)
}