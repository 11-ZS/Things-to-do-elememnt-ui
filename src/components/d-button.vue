<template>
  <button :class="[type?'d-button-'+type+ ' d-button':'', size?'d-button-'+size:'']" @click="router">
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

      return "button-routine";
    }
  }
};
</script>

<style>

.d-button{
	padding:5px;
    border-radius: 5px 5px 0 0;

}
.d-button-big{
	padding:8px;
	
}
.d-button-medium{
	padding:5px;
}
.d-button-small{
	padding:2px;
}

.d-button-top-label{
	border-bottom-color: white;
}
/* .button-routine-{
  padding: 6px;
  border-radius: 5px 5px 0 0;
  margin-left: -1px;
  border-bottom-color: white;
  margin-right: 3px;
}
.buttons {
  margin-top: 10px;
  margin-left: 10px;
}
.current-button-routine {
  z-index: 0;
} */
</style>
