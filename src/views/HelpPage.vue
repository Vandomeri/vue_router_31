<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>

  <h2>Помощь по сайту</h2>


  <nav>
    <RouterLink to="/help/delivery">Доставка</RouterLink>
    <RouterLink to="/help/guarantee">Гарантия</RouterLink>
    <RouterLink to="/help/service">Обслуживание</RouterLink>
  </nav>

  <div>
    <RouterView />
  </div>

</template>
