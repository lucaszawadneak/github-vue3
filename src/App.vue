<template>
  <div class="center-stuff">
    <search-bar />
    <cards />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import Cards from './components/Cards.vue';

export default {
  components: {
    SearchBar,
    Cards,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html,
body,
#root {
  height: 100%;
}
body {
  -webkit-font-smoothing-: antialiased;
}
body,
input,
h1,
strong,
button {
  font-size: 16px, 'Roboto', sans-serif;
}
span {
  font-style: italic;
  font-weight: 100;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button,
a {
  cursor: pointer;
}
.center-stuff {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
</style>
