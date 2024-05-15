<script setup lang="ts">
import type { IOneDrink } from '@/models/IOneDrink';
import Drink from "./Drink.vue";


interface DrinkProps{
    drinks: IOneDrink[];
}

defineProps<DrinkProps>();

</script>

<template>
<section class="cart"></section>

<section class="products">
<Drink v-for="drink in drinks" :key="drink.idDrink" :drink="drink"/>
</section>
</template>

<style scoped>

</style>