<template>
  <div class="modal-background" v-show="loading">
    <div class="modal-content">
      <lottie-animation path="../assets/loading.json" :autoPlay="true" :height="200" :width="200" />
    </div>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation';
import { useUsers } from '../hooks/users';

export default {
  components: {
    LottieAnimation,
  },
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
.modal-content {
  padding: 15px;
  z-index: 1;
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
h1 {
  font-size: 21px;
}
</style>
