import LoginPage from './login'

import { useAuth } from '../src/contexts/AuthContext'

export default function Home() {
	const {getUser} = useAuth()

	getUser()

	return (<LoginPage />)
}
