<template>
  <transition name="fade">
    <div
      class="modal-background"
      v-show="visible"
      @click="() => setVisible({ visibleBool: false })"
    >
      <div class="modal-content" v-if="visible" @click.stop="">
        <img :src="userInfo.avatar_url" alt="profile" />
        <h1>@{{ userInfo.login }}</h1>
        <a :href="userInfo.html_url">Click here to open profile</a>
      </div>
    </div>
  </transition>
</template>

<script>
import setVisible, { useModal } from '../hooks/modal';

export default {
  setup() {
    const { visible, userInfo } = useModal;

    return {
      visible,
      setVisible,
      userInfo,
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
  z-index: 1;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
