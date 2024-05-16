<script setup lang="ts">
import type { ICartItem } from "@/models/ICartItem";

interface DrinkProps {
  cart: ICartItem[];
}

defineProps<DrinkProps>();
</script>

<template>
  <p>{{ cart.length }}</p>
  <button>Gå till kassan</button>
</template>

<style scoped></style>
