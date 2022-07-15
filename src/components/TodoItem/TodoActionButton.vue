<script setup lang="ts">
import { ref } from "vue";

type ButtonProps = {
  text: string;
  onClick?: (e: MouseEvent) => void;
};
const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    class="border-4 text-indigo-400 border-white rounded-md hover:text-white hover:bg-indigo-400 px-3"
    @click="props.onClick"
  >
    {{ props.text }}
  </button>
</template>
