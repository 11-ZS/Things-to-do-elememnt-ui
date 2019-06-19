<template>
    <div class="body">
        <div class="container">
            <el-card>
                <div slot="header" class="register-title">注册</div>
                <el-form label-width="70px" :rules="rules" class="register-form" :model="user">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码一" prop="password">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>

                    <el-form-item label="密码二" prop="checkPassword">
                        <el-input v-model="user.checkPassword"></el-input>
                    </el-form-item>

					<el-form-item label-width="30%">
						<el-button type="primary" @click="register" class="register-button"> 注册 </el-button>
					</el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>

import {register}  from '../process/request'
 
export default {
    data() {
        return {
            user: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 12,
                        message: "用户名长度在6-12之间",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 12,
                        message: "密码长度在6-12之间",
                        trigger: "blur"
                    }
				],
				checkPassword:[
					 {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 12,
                        message: "密码长度在6-12之间",
                        trigger: "blur"
                    }
				]
            }
        };
	},
	methods:{
		register(){
			register(this.user).then(result=>{
				
			})
		}
	}
};
</script>

<style >
.register-title {
    font-size: 36px;
    text-align: center;
    font-weight: 400;
}
.register-form {
    width: 400px;
    position: relative;
    margin: 0 auto;
}
.register-button{
	text-indent: 30px;
	letter-spacing: 30px;
}
</style>
