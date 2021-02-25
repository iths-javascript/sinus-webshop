<template>
  <div>
    <div class="recommendations">
      <div class="recommendations-left">
        <img class="" src="" />
      </div>
      <div class="recommendations-right">
        <button class="fetch-data" @click="fetchImages">fetch</button>
        <img class="t-shirts" src="../assets/t-shirt.jpg" />
      </div>
    </div>
    <div class="mid-nav">
      <img src="" />
    </div>
    <div class="mid-nav2"></div>
    <div class="mid-nav3"></div>
  </div>
</template>

<script>
import * as API from "../api/api";

export default {
  methods: {
    async fetchImages() {
      const data = await API.getProducts();
      console.log(data);
    },
  },
};
</script>

<style scoped>
.fetch-data {
  width: 50px;
  height: 30px;
}

.t-shirts {
  position: absolute;
  width: 499px;
  height: 319px;
  left: 17px;
}

.recommendations {
  display: flex;
  background-color: #cbe9ef;
  width: 100%;
  height: 782px;
}

.recommendations-left {
  width: 50%;
  background-color: #cbe9ef;
  height: 782px;
}

.recommendations-right {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 50%;
  background-color: #cbe9ef;
  /* height: 782px; */
}

.mid-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #ffebd3;
  width: 100%;
  height: 533px;
}

.mid-nav2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: white;
  width: 100%;
  height: 533px;
}

.mid-nav3 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #ffd2d2;
  width: 100%;
  height: 533px;
}
</style>
