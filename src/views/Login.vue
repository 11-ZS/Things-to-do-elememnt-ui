<template>
    <div class="body">
        <div class="container">
            <el-card>
                <div slot="header" class="register-title">登录</div>
                <el-form
                    status-icon
                    label-width="70px"
                    :rules="rules"
                    class="login-form"
                    ref="loginForm"
                    :model="user"
                >
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>

                    <el-form-item label-width="30%">
                        <el-button type="primary" @click="register" class="register-button">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
 

export default {
    data() {
        return {
            user: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        register() {
            this.$refs["registerForm"].validate(valid => {
                if (valid) {
                    userRequest.login(this.user).then(result => {
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
        }
    }
};
</script>

<style>
.login-title {
    font-size: 36px;
    text-align: center;
    font-weight: 400;
}
.login-form {
    width: 400px;
    position: relative;
    margin: 0 auto;
}
.login-button {
    text-indent: 30px;
    letter-spacing: 30px;
}
</style>