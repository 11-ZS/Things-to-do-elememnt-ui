import axios from 'axios'

import {Message} from 'element-ui'

axios.defaults.baseURL = 'http://localHost:3000'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.withCredentials = true;

function request(url,type='GET',data={}){
	return new Promise((resolve,reject)=>{
		let option = {
			url,
			method:type
		}
		if(type.toLowerCase()==='get'){
			option.params = data;
		}else{
			option.data = data
		}

		axios(option).then(res =>{
			console.log(res);
			resolve(res)
		}).catch(err=>{
			console.log('errrrrr')
		})

	})
}


function register(data){
	// console.log(data);
	return request('/user/','post',data);
}

export {
	register
}