<template>
    <div v-show="show" class="pane-content" >
        <slot ></slot>
    </div>
</template>

<script>
export default {
    name: "pane",
    props: {
        label: {
            type: String
        },
        flag: {
            type: [String,Number]
		},
	 
	},
	data(){
		return {
			show:true
		}
	}
};
</script>

<style>
.pane-content{
	padding:10px;
	height:100%;
	/* overflow: scroll; */
	box-sizing: border-box;
 
}
</style>

