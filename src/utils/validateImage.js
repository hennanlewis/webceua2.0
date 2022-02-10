import axios from "axios"

export async function isValidImage(urlCheck, defauldUrl) {
	try {
		const response = await axios.get(urlCheck)
		if (response.headers["content-type"].match(/^image/g)[0].length) {
			return urlCheck
		}
		return defauldUrl
	} catch (erro) {
		console.log(erro)
		return defauldUrl
	}
}