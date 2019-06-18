<template>
    <div>
        <div class="label-group">
		 
            <div
                :class="getClass(item.flag)"
                v-for="(item,index) in labelList"
                :key="index"
                @click="selectLabel(item.flag)"
            >{{item.label}}</div>
            <slot name="other"></slot>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabs",
    props: {
        defaultOpen: {
            type: [String, Number]
        }
    },
    data() {
        return { labelList: [], currentFocus: this.defaultOpen };
    },
    methods: {
        getClass(key) {
     
            return [
                "label",
                {
                    "label-active": key === this.currentFocus
                }
            ];
        },
        getPaneList() {
            return this.$children.filter(item => {
                if (item.$options.name === "pane") {
                    return item;
                }
            });
        },
        updatePaneList() {
            this.labelList = [];

            this.getPaneList().forEach(item => {
                this.labelList.push({
                    label: item.label,
                    flag: item.flag
                });
            });
        },
        selectLabel(flag) {
            this.currentFocus = flag;
        },
        updatePaneState() {
            var pane = this.getPaneList();
            pane.forEach(item => {
                item.show = this.currentFocus === item.flag;
            });
        }
    },
    mounted() {
        this.updatePaneList();
        this.updatePaneState();
    },
    watch: {
        currentFocus() {
            this.updatePaneState();
        }
    }
};
</script>

<style>
.label-group {
    margin: 5px 5px 0px 10px;
}
.label {
    display: inline-block;
    padding: 4px 16px;
    margin-right: 6px;
    background: #fff;
    border: 1px solid #d7dde4;
    border-radius: 3px 3px 0 0;
    cursor: pointer;
    position: relative;
}
.label-group{
	  margin-bottom: -1px;
}
.label-group:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px; 
    margin-top: -1px;
}
.label-active:before {
    content: "";
    display: block;
    height: 1px;
    background: rgb(255, 123, 0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.label-active{
	border-bottom-width: 2px;
	border-bottom-color: rgb(255, 255, 255);
	margin-bottom:-1px;
}
.content{
	border:1px solid #d7dde4;
}
</style>
