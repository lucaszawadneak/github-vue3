<template>
  <div class="item-holder">
    <div v-for="item in list" :key="item.name" class="item-box">
      <img :src="item.picture" alt="profile" />
      <strong>{{ item.name }}</strong>
      <span>{{ item.id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Lucas',
          id: '@lucaszawafasfasfdneak',
          picture: 'https://lucaszawadneak.me/static/media/profile.df0422e2.png',
        },
        {
          name: 'Ronaldo',
          id: '@ronaldo',
          picture: 'https://lucaszawadneak.me/static/media/profile.df0422e2.png',
        },
        {
          name: 'Berbes',
          id: '@berbes',
          picture: 'https://lucaszawadneak.me/static/media/profile.df0422e2.png',
        },
      ],
    };
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
.item-box > strong {
  margin-top: 5px;
}

.item-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
