<template>
    <div class="body">
        <div class="container">
            <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="事情" name="thing">
                    <el-row :gutter="20">
                        <el-col :span="5" v-for="(el,index) in things" :key="index" >
                            <el-popover
                                placement="top-start"
                                :title="el.name"
                                width="200"
                                trigger="hover"
                                :content="el.description"
                            >
                                <div slot="reference" class="thing" @click="handle">
                                    <div>{{el.name}}</div>
                                    <div>{{getTime(el.startTime)}}</div>
                                </div>
                            </el-popover>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="已完成" name="daily"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "thing",
            things: [
                {
                    name: "练习Vue",
                    description: "tabs and pane  ",
                    startTime: new Date(),
                    endTime: new Date(),
                    isOver: false
                },
                {
                    name: "练习Vue",
                    description: "tabs and pane",
                    startTime: new Date(),
                    endTime: new Date(),
                    isOver: false
                }
            ]
        };
    },
    methods: {
        getTime(time) {
            return (
                time.getFullYear() +
                "-" +
                (time.getMonth() + 1) +
                "-" +
                time.getDate() +
                " " +
                time.getHours() +
                ":" +
                time.getMinutes() +
                ":" +
                time.getSeconds()
            );
        },
        handle() {
            console.log("a");
        }
    }
};
</script>
 
<style >
body,
html {
    height: 100%;
}
.body {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    box-sizing: border-box;
}
.container {
    position: absolute;
    width: 950px;
    height: 65%;
    margin: 0px auto;
    top: 50%;
    left: 50%;
    border: 1px solid red;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 10px;
}

.thing {
    border: 1px solid rgb(187, 187, 187);
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;

    webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.thing:hover {
    background: rgb(213, 243, 255);
    border-color: rgb(119, 203, 206);
}
</style>
