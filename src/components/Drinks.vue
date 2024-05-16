<script setup lang="ts">
import type { IOneDrink } from "@/models/IOneDrink";
import Drink from "./Drink.vue";
import type { ICartItem } from "@/models/ICartItem";
import Cart from "./Cart.vue";

interface DrinkProps {
  drinks: IOneDrink[];
  cart: ICartItem[];
}

defineEmits<{
  (e: "buy", id: number): void;
}>();

defineProps<DrinkProps>();
</script>

<template>
  <section class="cart">
    <Cart :cart="cart" />
  </section>

  <section class="products">
    <Drink v-for="drink in drinks" @buy="(id: number) => { $emit('buy', id) }" :key="drink.idDrink" :drink="drink" />
  </section>
</template>

<style scoped></style>
