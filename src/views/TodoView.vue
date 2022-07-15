<script setup lang="ts">
import TodoListVue from "@/components/TodoItem/TodoList.vue";
import { ref, reactive } from "vue";
const todoItems = ref<Todo[]>([
  {
    content: "Change the name of the customer database",
    title: "Task 1",
    createdDate: 1,
    tags: ["Work", "Study", "Relax"],
    status: "doing",
  },
  {
    content: "Remove the hanging popovers",
    title: "Task 3",
    createdDate: 1,
    tags: ["Work", "Fun", "Reading"],
    status: "completed",
  },
  {
    content: "Reading the vue best practices",
    title: "Task 2",
    createdDate: 1,
    tags: [],
    status: "completed",
  },
]);
</script>

<template>
  <div>
    <todo-list-vue :todos="todoItems"></todo-list-vue>
  </div>
</template>
