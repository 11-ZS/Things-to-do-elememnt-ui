<template>
    <div class="body">
        <div class="container">
            <d-tabs defaultOpen="1" ref="tabs">
                <d-pane label="综合" flag="1">
                    <d-row>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>
                        <d-col :span="3">ds</d-col>

                    </d-row>
                </d-pane>
                <d-pane label="其他" flag="2">2</d-pane>
                <button slot="other" @click="addThingsToDo" class="label">
                    +
                </button>


                <d-pane label="其他" flag="3">3</d-pane>
            </d-tabs>
        </div>
    </div>
</template>

<script>
import dTabs from "../components/d-tabs.vue";
import dPane from "../components/d-pane.vue";
import dRow from "../components/d-row.vue";
import dCol from "../components/d-col.vue";

export default {
    name: "HelloWorld",
    components: {
        dTabs,
        dPane,
        dRow,
        dCol
    },
    props: {
        msg: String
    },
    data() {
        return {
            tabs: {}
        };
    },
    methods: {
        clickk() {
            console.log("click....");
        },
        addThingsToDo() {
            console.log(this.tabs.currentFocus);
            this.tabs.labelList.push({ label: "new", flag: 6 });
        }
    },
    mounted() {
        this.tabs = this.$refs.tabs;
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
}
.container {
    position: absolute;
    width: 100%;
    margin: 0px auto;
    top: 50%;
    left: 50%;
    border: 1px solid red;
    transform: translate(-50%, -50%);
}

.content {
    height: 70vh;
}
.labels {
    margin-top: 10px;
    margin-left: 10px;
}
.addButton {
    position: relative;
    padding: 0;
    width: 30px;
    border: 0px solid #d7dde4;
    border-radius: 3px;
    margin-top: 0px;
    cursor: pointer;
}
</style>
