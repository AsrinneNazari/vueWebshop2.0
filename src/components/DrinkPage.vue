<script setup lang="ts">
import Drinks from "./Drinks.vue";
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

const handleBuy = (id: number) => {
  const index = drinkState.value.cart.findIndex(
    (cartItem) => cartItem.product.idDrink === id
  );
  if (index >= 0) drinkState.value.cart[index].amount++;
  else {
    const productToAdd = drinkState.value.drinks.find(
      (product) => product.idDrink === id
    );
    if (productToAdd)
      drinkState.value.cart.push({ product: productToAdd, amount: 1 });
  }
};
</script>

<template>
  <Drinks
    @buy="handleBuy"
    :drinks="drinkState.drinks"
    :cart="drinkState.cart"
  />
</template>

<style scoped></style>
