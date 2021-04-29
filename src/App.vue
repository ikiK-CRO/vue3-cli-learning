<template>
  <div class="manuBar">
    <Menubar
      :model="menuItems"
      v-tooltip.bottom="'Chose theme'"
      class="menuBarMenu"
    />
    <Menubar class="menuBarTheme">
      <template #end>
        <Button
          icon="pi pi-user"
          class="p-button-rounded p-button-info p-button-outlined"
          @click="login"
        />
      </template>
    </Menubar>
  </div>
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

const themes = [
  { dark: "themes/bootstrap4-dark-blue/theme.css" },
  { light: "themes/bootstrap4-light-blue/theme.css" },
];

const changeTheme = (theme) => {
  document.querySelector("#theme-link").setAttribute("href", theme);
};
const loadTheme = () => {
  window.matchMedia("(prefers-color-scheme: dark)")
    ? changeTheme(themes[0].dark)
    : changeTheme(themes[1].light);
};

export default {
  name: "App",
  components: {
    HelloWorld,
    toDo,
  },
  data() {
    return {
      menuItems: [
        {
          icon: "pi pi-fw pi-sun",
          title: "Light theme",
          command: () => {
            changeTheme(themes[1].light);
            localStorage.setItem("theme", themes[1].light);
          },
        },
        {
          icon: "pi pi-fw pi-moon",
          title: "Dark theme",
          command: () => {
            changeTheme(themes[0].dark);
            localStorage.setItem("theme", themes[0].dark);
          },
        },
        {
          icon: "pi pi-fw pi-desktop",
          title: "System theme",
          command: () => {
            localStorage.removeItem("theme");
            loadTheme();
          },
        },
      ],
    };
  },

  mounted() {
    localStorage.getItem("theme") == null
      ? loadTheme()
      : changeTheme(localStorage.getItem("theme"));
    this.$toast.add({
      severity: "success",
      summary: "Welcome",
      detail: "You pretty thing! Have a good day!",
      life: 6000,
    });
  },
  methods: {
    login() {
      this.$toast.add({
        severity: "error",
        summary: "OH!",
        detail: "No, no you wont!",
        life: 6000,
      });
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
  margin-top: 0px;
}
.logo {
  max-height: 220px;
  max-width: 220px;
  border-radius: 50%;
}
.manuBar {
  margin-bottom: 20px;
  display: flex;
}

.menuBarTheme {
  margin-left: auto;
}
.menuBarMenu {
  /* min-width: 90% !important; */
}
.p-toast {
  margin-top: 75px;
}
</style>
