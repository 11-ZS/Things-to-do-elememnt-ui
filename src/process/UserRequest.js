import Request from './Request'

class UserRequest extends Request{
	constructor(path){
		super(path);
	}
	register(data){
		return this.send('/','post',data);
	}
	usernameIsExist(username){
		let data={
			username
		}
		return this.send('/','get',data);
	}
	login(data){
		return this.send('/login','post',data);
	}
	signout(){
		return this.send('/signout','post');
	}
}



export default  new UserRequest('user');
