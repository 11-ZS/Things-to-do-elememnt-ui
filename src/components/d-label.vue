<template>
  <button :class="[type?'d-label-'+type+ ' d-label':'', size?'d-label-'+size:'']" @click="router">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    go: {
      type: String
    },
    type: {
      type: String
	},
	size:{
		type:String
	}
  },
  methods: {
    router(evt) {
      if (this.go) {
        this.$router.push(this.go);
      } else {
        this.$emit("click", evt);
      }
    }
  },
  computed: {
    style() {
      var className = "";

      return "label-routine";
    }
  }
};
</script>

<style>

.d-label{
	padding:5px;
    border-radius: 5px 5px 0 0;

}
.d-label-big{
	padding:8px;
	
}
.d-label-medium{
	padding:5px;
}
.d-button-small{
	padding:2px;
}

.d-label-top-label{
	border-bottom-color: white;
} 
</style>
