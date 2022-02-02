import { Router } from 'next/router'
import AuthProvider from '../src/contexts/AuthContext'
import nProgress from 'nprogress'

import '../styles/globals.css'
import 'nprogress/nprogress.css'

nProgress.configure({
	showSpinner: false,
	trickleRate: 0.1,
	trickleSpeed: 300
})

Router.events.on('routeChangeStart', () => nProgress.set(0.0))
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
				<style global jsx>
					{`
					#nprogress .bar {
						background: white;
					}
					`}
				</style>
		</AuthProvider>
	)
}

export default MyApp
