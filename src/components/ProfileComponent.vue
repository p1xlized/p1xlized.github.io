<template>
  <div class="profile-box" @mousemove="onMousemove" :style="{ backgroundColor: currentColor }">
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      x: 0,
      colors: ["#b4befe", "#a6e3a1", "#fab387", "#f5c2e7"],
      currentColor: "#cba6f7",
    };
  },
  methods: {
    onMousemove(e) {
      const percentage = e.clientX / window.innerWidth;
      const index = Math.floor(percentage * this.colors.length);
      this.currentColor = this.colors[index];
    },
  },
};
</script>

<style scoped>
.profile-box {
  transition: background-color 0.7s;
  border-style: solid;
  border-width: 3px;
  border-color: #1e1e2e;
  border-radius: 10px;
  max-width: 100%; /* Adjust this width as needed */
}
h5 {
  font-size: 38px;
  color: black;
  text-align: left;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
}

</style>
