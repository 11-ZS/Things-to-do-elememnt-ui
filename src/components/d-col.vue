<template>
    <div ref="col" class="d-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "d-col",
    props: {
        sw: {
            type: Number
        },
        mw: {
            type: Number
        },
        lm: {
            type: Number
        },
        xlm: {
            type: Number
        },
        span: {
            type: Number
        }
    },
    data() {
        return {
            spanLimit: 24
        };
    },
    methods: {
        init() {
            // for (var key in info) {
            //     var value = info[key];
            //     // console.log(value);
			// 	var v = value/24*this.span;
            //     if (typeof value === "number") {
            //         // this.$refs.col.style[key]=info[key]/24*this.span+'px';
            //         this.$refs.col.style[key] = v + "px";
            //     } else {
            //         // this.$refs.col.style[key]=info[key]/24*this.span;
            //         this.$refs.col.style[key] = v;
            //     }
			// } 
			
			// console.log(info)
			// console.log(this.$parent.$el.offsetWidth);
			// var info = this.$parent.$el.offsetWidth;
			// var value = info/24*this.span;
			// if(typeof value ==='number'){
			// 	this.$refs.col.style['width'] = value+'px'
			// }else{
			// 	this.$refs.col.style['width'] = value;
			// }
			console.log(this.spanLimit,this.span);
				this.$refs.col.style['width'] = 100/(this.spanLimit/this.span)+'%';

			
        }
    }
};
</script>

<style>
.d-col {
    display: inline-block;
	background:#eee;
	border:1px solid #333;
	box-sizing: border-box;
}
.d-col-span-3{

}
</style>
