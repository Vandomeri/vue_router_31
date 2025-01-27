<template>

  <div class="grid">
    <RouterLink :to="{ name: 'discountCollection', params: { id: product.id } }" v-for="product in products"
      :key="product.id">
      <img :src="product.images[0]" alt="">
      <p>{{ product.title }}</p>
    </RouterLink>
  </div>

</template>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}

.grid img {
  width: 100%;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';


const products = ref([])


onMounted(() => {
  fetch('https://dummyjson.com/products')
    .then((resp) => resp.json())
    .then((json) => products.value = json.products)
})


</script>
