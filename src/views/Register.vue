<template>
    <div class="body">
        <div class="container">
            <el-card>
                <div slot="header"  class="register-title">注册</div>
                <el-form
				status-icon
                    label-width="70px"
                    :rules="rules"
                    class="register-form"
                    ref="registerForm"
                    :model="user"
                >
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码一" prop="password">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>

                    <el-form-item label="密码二" prop="password2">
                        <el-input v-model="user.password2"></el-input>
                    </el-form-item>

                    <el-form-item label-width="30%">
                        <el-button type="primary" @click="register" class="register-button">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
 



export default {
    data() { 
		
        var checkUsername=(rule, value, callback)=> {
            this.$userRequest.usernameIsExist(value).then(result => {
                if (result.data === "exist") {
                    callback(new Error("用户名已存在"));
                } else {
                    callback();
                }
            });
        }
        var checkPassword = (rule, value, callback) => {
            let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            if (!regExp.test(value)) {
                callback(new Error("密码必须拥有字母和数字"));
            } else if (this.user.password2 !== "") {
                this.$refs.registerForm.validateField("password2");
                callback();
            } else {
                callback();
            }
        };

        var checkPassword2 = (rule, value, callback) => {
            let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            if (!regExp.test(value)) {
                callback(new Error("密码必须拥有字母和数字"));
                return;
            } else if (value !== this.user.password) {
                callback(new Error("确认密码必须和上个密码相同"));
                return;
            }

            callback();
        };

        return {
            user: {
                username: "",
                password: "",
                password2: ""
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
                    },
                    {
                        validator: checkUsername,
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
                    },
                    {
                        validator: checkPassword,
                        trigger: "blur"
                    }
                ],
                password2: [
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
                    },
                    {
                        validator: checkPassword2,
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        register() {
            console.log(this.user);

            this.$refs["registerForm"].validate(valid => {
                if (valid) {
                    console.log(valid);
                    this.$userRequest.register(this.user).then(result => {
                        this.$message({
                            type: "success",
                            message: "注册成功"
                        });
                        this.$router.push("/");
                    });
                } else {
                    console.log("error");
                    return false;
                }
            });
        },
        resetForm( ) {
            this.$refs['registerForm'].resetFields();
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
.register-button {
    text-indent: 30px;
    letter-spacing: 30px;
}
</style>
