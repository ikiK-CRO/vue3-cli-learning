<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{todoDidTitle}}</h2>
    <ul>
      <li v-for="did in todoDid" v-bind:key="did.id">{{ did.text }} &#10003;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      todoDidTitle: "Allready did:",
      todoDid: [
        { id: 1, text: "Setup initial local node js server and run first hello world app using Vue3 cli"},
        { id: 2, text: "Connect it to github" },
        { id: 3, text: "Create first Vue build for publishing" },
        { id: 4, text: "Create Heroku node js server and app" },
        { id: 5, text: "Connect Github and Heroku app" },
        { id: 6, text: "Publish builds automatically to Heroku app using push of main branch of Github repo"}
      ]
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: upper-roman;
  padding: 0;
}
li {
  margin: 0 10px;
}
li::marker {
  font-weight: bold;
}
a {
  color: #42b983;
}
</style>
