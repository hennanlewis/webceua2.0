import axios from "axios"

export async function isValidImage(urlCheck, defaultUrl) {
	try {
		const response = await axios.get(urlCheck)
		if (response.headers["content-type"].match(/^image/g)[0].length) {
			return urlCheck
		}
		return defaultUrl
	} catch (erro) {
		return defaultUrl
	}
}