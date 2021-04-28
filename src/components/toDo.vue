<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="did in todo" v-bind:key="did.id">{{ did.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "toDo",
  data() {
    return {
      todo: [
        { id: 1, text: "Setup initial UI ✓"},
        { id: 2, text: "Setup some Vue 3 compatible component library" },
        { id: 3, text: "Prevent Heroku app from spleep" },
        { id: 4, text: "Setup to do list ✓" },
        { id: 5, text: "Setup menu" },
        { id: 6, text: "Setup DB Cloud Firestore connectivity" },
        { id: 7, text: "Research Vue routing" },
        { id: 8, text: "Create info section about every to do item" },
        { id: 9, text: "Create log in system using Firebase Authentication" },
        { id: 10, text: "Create simple websocket chat for logged in guests"},
        { id: 11, text: "..."}
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
  list-style-type:square;
  padding: 5px;
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
