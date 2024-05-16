<script setup lang="ts">
import type { IOneDrink } from "@/models/IOneDrink";

interface DrinkProps {
  drink: IOneDrink;
}
defineEmits<{
  (e: "buy", id: number): void;
}>();

const props = defineProps<DrinkProps>();
</script>

<template>
  <article class="drinkcard">
    <h3>{{ drink.strDrink }}</h3>
    <img :src="drink.strDrinkThumb" alt="Bild på drinken" />
    <button @click="$emit('buy', drink.idDrink)">Köp</button>
  </article>
</template>

<style scoped></style>
