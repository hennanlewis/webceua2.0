import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export function UserMenuOptions() {
	const { signOut } = useAuth()

	return (
		<span
			onClick={signOut}
			className="px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-300 hover:text-[#005090] cursor-pointer"
		>
			Sair
		</span>
	)
}