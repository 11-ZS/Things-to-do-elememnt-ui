import axios from 'axios'
 
import path from 'path'

console.log(path)

axios.defaults.baseURL = 'http://localHost:3000'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Request {
	constructor(path) {
		this.request = axios.create({
			baseURL: 'http://localHost:3000/' + path
		})
	}
	send(path, method = 'get', data = {}) {
		return new Promise((resolve, reject) => {

			var options = {
				url:path,
				method,
			}
			if(method.toLowerCase()==='get'){
				options.params=data;
			}else{
				options.data = data;
			}

			this.request( options).then(result => {
				resolve(result)
			}).catch(error => {
				reject(error);
			});
			// this.require()
		})

	}
}

// axios.defaults.withCredentials = true;

// function request(url,type='GET',data={}){
// 	return new Promise((resolve,reject)=>{
// 		let option = {
// 			url,
// 			method:type
// 		}
// 		if(type.toLowerCase()==='get'){
// 			option.params = data;
// 		}else{
// 			option.data = data
// 		}

// 		axios(option).then(res =>{
// 			console.log(res);
// 			resolve(res)
// 		}).catch(err=>{
// 			console.log('errrrrr')
// 		})

// 	})
// }


// function register(data){
// 	// console.log(data);
// 	return request('/user/','post',data);
// }

export default Request