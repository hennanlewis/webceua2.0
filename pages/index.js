import LoginPage from './login'

export async function getServerSideProps(context) {
	

	return {
		props: {}
	}
}

export default function Home() {
	return (<LoginPage />)
}
