<template>
  <div v-if="product">
    <h1>Товар с id: {{ $route.params.id }}</h1>
    <p>Его цвет: {{ $route.params.color }}</p>
    <img v-for="image in product.images" :key="image" :src="image" alt="">
    <h2>{{ product.title }}</h2>
    <p>{{ product.price }}</p>
  </div>
</template>

<style scoped>
img {
  width: 50%;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()



const product = ref(null)

onMounted(() => {
  fetch(`https://dummyjson.com/products/${route.params.id}`)
    .then((resp) => resp.json())
    .then((json) => product.value = json)
})

</script>
