<template>
    <div ref="row" class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            body: {}
        };
    },
    methods: {
        getCols() {
            // console.log("start get");
            return this.$children.filter(item => {
                if (item.$options.name === "d-col") {
                    return item;
                }
            });
        },
        initCols() {
			this.body = this.$refs.row;
            var cols = this.getCols();
            var set = {
                width: this.body.offsetWidth,
                height: this.body.offsetHeight,
            };
				// console.log(document.querySelector('.row').offsetWidth+"++"+this.$refs.row.offsetWidth)
				// console.log(set)

            cols.forEach(col => {
				
                col.init();
            });
        }
    },
    mounted() {
        this.body = this.$refs.row;
        // console.dir(this.body);
        // console.log(this.body.style.height="100px")
        // console.log(this.body)
        this.initCols();
        window.onresize = () => {

            this.initCols();
        };
    },
    watch: {
        body() {
            // console.log("set");
        }
    }
};
</script>

<style>
.row {
    height: 100%;
    /* display: inline-block; */
    position: relative;
    width: 100%;
}
</style>
