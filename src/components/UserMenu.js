import Link from "next/link"

import userMenuValues from '../utils/userMenuValues'

export function UserMenu(props) {
	const { openMenuState } = props

	return (
		<div className={`${openMenuState.userMenu ? 'md:flex flex-col' : 'hidden'} absolute origin-top-right right-3 mt-14
			w-48 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
		>
			{userMenuValues.map(item =>
				<Link key={item.name} href={item.path}>
					<a
						className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-300 hover:text-[#005090]" role="menuitem" tabIndex="-1" id="user-menu-item-2"
					>
						{item.name}
					</a>
				</Link>
			)}
		</div>
	)
}
