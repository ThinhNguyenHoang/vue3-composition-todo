<script setup lang="ts">
import type { Todo } from "@/types/Todo";
import { onMounted } from "vue";

const props = defineProps<{
  todo: Todo;
}>();
onMounted(() => {
  console.log("Props are: ", props);
});
</script>

<template>
  <div class="bg-white flex rounded-md">
    <div class="border-r-8 border-red-500 pr-3 py-2">
      <img
        class="rounded-full w-min border-4 border-indigo-700 border-w"
        src="../../assets/default_avatar.png"
        alt="User image"
      />
    </div>
    <div class="px-4">
      <h3 class="text-indigo-700 text-lg font-extrabold">
        {{ props.todo.title }}
      </h3>
      <p class="text-indigo-400 text-md">
        {{ props.todo.content }}
      </p>
    </div>
  </div>
</template>
