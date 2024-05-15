<script setup lang="ts">
import type { IOneDrink } from '@/models/IOneDrink';


interface drinkProps{
    drink: IOneDrink[];
}

defineProps<drinkProps>();
</script>

<template>
    <button> Varukorg</button>
</template>

<style scoped>

</style>