<script setup>
import { RouterLink, useRouter } from "vue-router";

// import { useHome } from '../views/Home'
// import { useAbout } from '../views/About'
// import { useContact } from '../views/Contact'

</script>

<template>

    <RouterLink to="/">Home | </RouterLink>
    <RouterLink to="/product">Product | </RouterLink>
    <RouterLink to="/order">Order | </RouterLink>
    <RouterLink to="/basket">Basket | </RouterLink>

</template>