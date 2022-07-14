<script setup lang="ts">
import TodoListVue from "@/components/TodoItem/TodoList.vue";
import Todo from "@types/Todo.ts";
import { ref, reactive } from "vue";
const todoItems = ref<Todo[]>([
  {
    content: "Change the name of the customer database",
    title: "Task 1",
    createdDate: 1,
  },
  {
    content: "Remove the hanging popovers",
    title: "Task 3",
    createdDate: 1,
  },
]);
</script>

<template>
  <div>
    <todo-list-vue :todos="todoItems"></todo-list-vue>
  </div>
</template>
