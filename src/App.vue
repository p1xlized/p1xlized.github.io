<template>
  <nav>
    <div class="nav-buttons-container">
      <v-btn
        icon="mdi-github"
        variant="text"
        size="small"
        href="https://github.com/p1xlized/Simple-Resume-Web-App"
      />
    </div>
  </nav>

  <router-view />
  <footer class="d-flex flex-column">
    <div style="padding: 5px; margin-top: 0">
      <div class="pt-0">
        <strong> Made with these amazing tools!</strong>
      </div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
    <div style="margin-bottom: 15px">
      {{ new Date().getFullYear() }} — <strong>Alex Paduret</strong>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      icons: ["mdi-vuejs", "mdi-vuetify", "mdi-cat"],
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  background-color: #181825;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cdd6f4;
}

.child {
  margin: auto;
  padding: auto;
  width: auto;

  height: auto;
}
nav {
  background-color: #1e1e2e;
  background-color: transparent; /* Set the background color to transparent */
  position: fixed; /* Keep the navbar fixed at the top of the page */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer {
  margin-top: 0%;
  background-color: #1e1e2e;
  padding: 0px;
}
.nav-link {
  font-weight: bold;
  color: #a6adc8;
  text-decoration: none;
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.nav-buttons-container {
  display: flex;
  margin-left: auto;
  margin-right: 5px;
}

.active-link {
  color: #f38ba8;
}

.nav-link:hover {
  color: #cba6f7;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
