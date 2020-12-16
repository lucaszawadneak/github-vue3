<template>
  <div class="modal-background" v-show="visible" @click="() => setVisible(false)">
    <div class="modal-content">
      <img src="https://lucaszawadneak.me/static/media/profile.df0422e2.png" alt="profile" />
      <h1>Lucas Cassilha Zawadneak</h1>
      <a href="https://github.com/lucaszawadneak">@lucaszawadneak</a>
      <p>Lorem asfnkasnf trwjnlkanfalkwnf fnwalfa lfn</p>
    </div>
  </div>
</template>

<script>
import useModal from '../hooks/modal';

export default {
  setup() {
    const { visible, setVisible } = useModal;

    return {
      visible,
      setVisible,
    };
  },
};
</script>

<style scoped>
.modal-background {
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: #fff;
  padding: 15px;
  min-width: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
img {
  height: 150px;
  width: 150px;
  align-self: center;
}
p,
h1 {
  margin-top: 10px;
}

h1 {
  font-size: 21px;
}
</style>
