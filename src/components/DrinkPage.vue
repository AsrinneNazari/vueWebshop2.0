<script setup lang="ts">
import Drinks from "./Drinks.vue";
//import Cart from "./Cart.vue";
import { ref, onMounted } from "vue";
import { getDrinks } from "@/services/drinkservice";
import type { IDrinkalot } from "@/models/IDrinkalot";

const drinkState = ref<IDrinkalot>({
  drinks: [],
  cart: [],
  showCheckout: false,
});

onMounted(async () => {
  drinkState.value.drinks = await getDrinks();
  console.log(drinkState.value.drinks);
});
</script>

<template>
  <!-- <Cart /> -->
  <Drinks :drinks="drinkState.drinks" />
</template>

<style scoped></style>
