<script lang="ts">
import type { Todo } from "@/types/Todo";
interface TodoListProps {
  todos: Todo[];
}
</script>
<script lang="ts" setup>
import TodoItem from "./TodoItem.vue";
const props = defineProps<{
  todos: Todo[];
}>();
</script>

<template>
  <div class="flex flex-col gap-5 border-4 border-red-800 bg-indigo-200 px-4">
    <h1
      class="px-3 pt-2 text-3xl text-indigo-500 font-bold underline hover:text-sky-400"
    >
      Todo List here
    </h1>
    <div class="flex flex-col gap-4 last:pb-6">
      <TodoItem v-for="(item, index) in props.todos" :todo="item" :key="index">
      </TodoItem>
    </div>
  </div>
</template>
