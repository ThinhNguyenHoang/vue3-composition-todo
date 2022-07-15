<script lang="ts">
import type { Todo } from "@/types/Todo";
interface TodoListProps {
  todos: Todo[];
}
</script>
<script lang="ts" setup>
import TodoItem from "./TodoItem.vue";
import TodoActionButton from "./TodoActionButton.vue";
const props = defineProps<{
  todos: Todo[];
}>();
</script>

<template>
  <div class="flex flex-col gap-5 border-4 bg-indigo-200 px-4">
    <div class="flex flex-row justify-between items-center py-4">
      <h1
        class="px-3 text-3xl text-indigo-500 font-boldhover:text-sky-400"
      >
        Todo List here
      </h1>
      <div class="flex flex-row gap-2">
        <button
          v-tooltip="'Add new todo'"
          class="flex flex-row min-h-fit items-center px-4 py-2 border-4 rounded-sm font-bold bg-gray-800 text-white hover:bg-gray-600 active:bg-gray-700"
        >
          Add New Todo
        </button>
        <button
          class="uppercase px-3 py-1 text-indigo-500 border-4 border-indigo-400 bg-white rounded-sm hover:text-white hover:bg-indigo-700 active:bg-indigo-400 active:text-white"
        >
          bulk
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-6 last:pb-6">
      <TodoItem v-for="(item, index) in props.todos" :todo="item" :key="index">
      </TodoItem>
    </div>
  </div>
</template>
