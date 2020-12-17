<template>
  <div class="item-holder">
    <div v-for="item in list" :key="item.name" class="item-box" @click="() => toggleVisible(item)">
      <img :src="item.avatar_url" alt="profile" />
      <span>@{{ item.login }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import setVisible from '../hooks/modal';
import { data } from '../hooks/users';

export default {
  setup() {
    const list = data.users;

    function toggleVisible(item) {
      setVisible({ visibleBool: true, item });
    }

    return { list, toggleVisible };
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
}
.item-box:hover {
  opacity: 0.7;
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
</style>
