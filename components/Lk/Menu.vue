<template>
  <div class="menu_lk" v-if="userStore.user" style="margin: 0 auto;">
    <h1 class="logo_menu_lk">Menu LK!</h1>
    <NuxtLink class="button_menu" to="/lk/edit">Товары</NuxtLink>
    <NuxtLink class="button_menu" to="/lk/order">Заказы</NuxtLink>
    <button class="button_menu" @click="userStore.logOut">logout</button>
  </div>   
  <div v-else>
    Go home
  </div>
</template>
<script setup lang="ts">
const userStore = useUsers()
</script>