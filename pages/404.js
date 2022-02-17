import Head from "next/head"
export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 - Página não encontrada</title>
			</Head>

			<div className="flex justify-center items-center w-[100vw] h-[100vh]">
				<h1>404 - Página não encontrada</h1>
			</div>
		</>
	)
}