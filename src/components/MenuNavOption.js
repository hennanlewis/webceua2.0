import Link from 'next/link'

export function MenuNavOptions(props) {
	const { selected, pathName, name } = props

	return (
		<>
			{selected ?
				<Link href={pathName}>
					<a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
						{name}
					</a>
				</Link>
				:
				<Link href={pathName}>
					<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
						{name}
					</a>
				</Link>
			}
		</>
	)
}