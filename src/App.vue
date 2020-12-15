<template>
  <user-modal :visible="visible" :setVisible="setVisible" />
  <div class="center-stuff">
    <search-bar />
    <cards :setVisible="setVisible" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import UserModal from './components/UserModal';
import useModal from './hooks/modal';

export default {
  components: {
    SearchBar,
    Cards,
    UserModal,
  },
  setup() {
    const { setVisible, visible } = useModal();

    return {
      visible,
      setVisible,
    };
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
p,
button {
  font-size: 16px, 'Roboto', sans-serif;
}
span,
a {
  font-style: italic;
  font-weight: 100;
  color: #000;
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
