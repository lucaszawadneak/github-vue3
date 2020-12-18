<template>
  <transition name="fade">
    <div class="modal-background" v-show="loading">
      <div class="modal-content">
        <h1>Loading</h1>
      </div>
    </div>
  </transition>
</template>

<script>
import { useUsers } from '../hooks/users';

export default {
  setup() {
    const { loading } = useUsers;

    return {
      loading,
    };
  },
};
</script>

<style scoped>
.modal-background {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  color: #1b998b;
  font-family: 'Hammersmith One', sans-serif;
  font-size: 21px;
}

img {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  align-self: center;
}
p,
h1 {
  margin-top: 10px;
}

a {
  margin-top: 10px;
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
