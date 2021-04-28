<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.png">
  <HelloWorld mainTittle="Welcome to my Vue.js V3 App" msg="This is progress of me learning Vue3 cli... &#9829;"/>
  <toDo msg="To be done:"/>
  <Toast /> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import toDo from './components/toDo.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    toDo
  },
  mounted() {
        this.$toast.add({severity:'success', summary: 'Yeeeey', detail:'Successfully added PrimeVue', life: 6000});
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  max-height: 220px;
  max-width: 220px;
}
</style>
