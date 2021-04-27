<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to my Vue.js V3 App"/>
  <toDo msg="To be done:"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import toDo from './components/toDo.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    toDo
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
  max-height: 250px;
  max-width: 250px;
}
</style>
