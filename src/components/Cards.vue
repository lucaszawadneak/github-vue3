<template>
  <transition name="slide">
    <div class="item-holder" v-show="showList">
      <div
        v-for="item in list"
        :key="item.name"
        class="item-box"
        @click="() => toggleVisible(item)"
      >
        <img :src="item.avatar_url" alt="profile" />
        <span>@{{ item.login }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import setVisible from '../hooks/modal';
import { useUsers } from '../hooks/users';

export default {
  setup() {
    const { showList, users: list } = useUsers;

    function toggleVisible(item) {
      setVisible({ visibleBool: true, item });
    }

    return { list, toggleVisible, showList };
  },
};
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
  align-self: center;
}
.item-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  transition: 300ms;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  overflow: hidden;
  z-index: 0;
}
.item-box:hover {
  opacity: 0.7;
}

.item-box:focus {
  opacity: 1;
  transition: 0ms;
}
.item-box > span {
  margin-top: 10px;
  text-align: center;
}

.item-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(40px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 500ms ease;
  transition: opacity 500ms;
}
.slide-leave-active {
  animation: slide-out 500ms ease;
  transition: opacity 500ms;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
