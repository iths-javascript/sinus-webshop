<template>
  <div id="product" @click="modalStatus = !modalStatus">
    <h3>{{ title }}</h3>
    <p>price: {{ price }}</p>
    <img :src="getImgUrl(img)" alt="product image" height="240px" />
    <button>Add to cart</button>
    <ProductDescription
      v-if="modalStatus"
      :img="img"
      :price="price"
      :title="title"
      :longDesc="longDesc"
    />
  </div>
</template>

<script>
import ProductDescription from "@/components/ProductDescription.vue";

export default {
  data() {
    return {
      modalStatus: false,
    };
  },
  components: {
    ProductDescription,
  },
  props: {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    img: {
      type: String,
    },
    longDesc: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
#product {
  border: 1px black solid;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}
</style>