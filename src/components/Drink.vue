<script setup lang="ts">
import type { IOneDrink } from "@/models/IOneDrink";

interface DrinkProps {
  drink: IOneDrink;
}

defineProps<DrinkProps>();
</script>

<template>
  <article class="drinkcard">
    <h3>{{ drink.strDrink }}</h3>
    <img :src="drink.strDrinkThumb" alt="Bild på drinken" />
    
  </article>
</template>

<style scoped></style>
