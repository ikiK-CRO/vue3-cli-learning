<template>
  <i @click="theme" class="pi pi-palette" style="fontsize: 2rem"></i>
  <img alt="Vue logo" class="logo" src="./assets/logo.png" />
  <HelloWorld
    mainTittle="Welcome to my Vue.js V3 App"
    msg="This is progress of me learning Vue3 cli... &#9829;"
  />
  <toDo msg="To be done:" />
  <Toast />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import toDo from "./components/toDo.vue";
//import 'primevue/resources/themes/arya-orange/theme.css';

(async () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    await import("primevue/resources/themes/arya-orange/theme.css");
  } else {
    await import("primevue/resources/themes/saga-blue/theme.css");
  }
})();

export default {
  name: "App",
  components: {
    HelloWorld,
    toDo,
  },
  mounted() {
    //window.matchMedia('(prefers-color-scheme: dark)').matches
    this.$toast.add({
      severity: "success",
      summary: "Yeeeey",
      detail: "Successfully added PrimeVue",
      life: 6000,
    });
  },
  methods: {
    theme() {
      (async () => {
        await import("primevue/resources/themes/saga-blue/theme.css");
      })();
    },
  },
};
</script>

<style>
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.logo {
  max-height: 220px;
  max-width: 220px;
  border-radius: 50%;
}
</style>
