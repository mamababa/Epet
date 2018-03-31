import fetchJsonp from 'fetch-jsonp'
export default{
	fetch(config) {
		fetch(config.url,config.options) 
		.then((response)=> {
			return response.json()
		})
		.then((response)=> {
			config.success(response)
		})
		.catch((error)=> {
			console.log(error)
		})
	},
	fetchJsonp(config) {
		fetch(config.url,config.options) 
		.then((response)=> {
			return response.json()
		})
		.then((response)=> {
			config.success(response)
		})
		.catch((error)=> {
			console.log(error)
		})
	}
}
