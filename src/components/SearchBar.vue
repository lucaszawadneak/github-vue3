<template>
  <h1>Github Profiles :)</h1>
  <span>Just a place to study vue and search your profile!</span>
  <div class="input-holder">
    <input type="text" placeholder="@lucaszawadneak" />
    <button>
      <img src="../assets/github.png" alt="github" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #1b998b;
  font-family: 'Hammersmith One', sans-serif;
}

img {
  height: 30px;
  width: 30px;
}

.input-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 30%;
  margin: 30px;
  min-width: 280px;
}

input {
  border: 1px solid #ddd;
  padding: 10px 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  border-radius: 5px;
  width: 80%;
  transition: 300ms;
}

input:focus {
  border: 1px solid #1b998b;
}

button {
  border: 1px solid #ddd;
  background-color: #1b998b;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: 300ms;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-left: 10px;
}

button:hover {
  opacity: 0.7;
}
</style>
