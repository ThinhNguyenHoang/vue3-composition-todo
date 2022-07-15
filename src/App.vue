<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconDocumentation from "./components/icons/IconDocumentation.vue";
import IconEcosystem from "./components/icons/IconEcosystem.vue";
</script>

<template>
  <div class="flex flex-col w-full min-h-screen mt-0">
    <header
      class="flex flex-row w-full px-3 py-2 items-center border-2 border-b-indigo-700"
    >
      <div class="flex flex-row items-center gap-3 w-12 h-12 whitespace-nowrap">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <span class="font-bold text-lg text-orange-500"> Best todo app </span>
      </div>
      <div class="wrapper mx-auto">
        <nav class="flex flex-row gap-3">
          <RouterLink
            class="text-2xl text-indigo-600 hover:text-white px-2 py-1 hover:bg-indigo-500 rounded-md"
            to="/"
            >Home</RouterLink
          >
          <RouterLink
            class="text-2xl text-indigo-600 hover:text-white px-2 py-1 hover:bg-indigo-500 rounded-md"
            to="/about"
            >About</RouterLink
          >
          <RouterLink
            class="text-2xl text-indigo-600 hover:text-white px-2 py-1 hover:bg-indigo-500 rounded-md"
            to="/todos"
          >
            Todo</RouterLink
          >
          <RouterLink
            class="text-2xl text-indigo-600 hover:text-white px-2 py-1 hover:bg-indigo-500 rounded-md"
            to="/workspace"
          >
            Workspace
          </RouterLink>
        </nav>
      </div>
      <div
        class="flex flex-row items-center gap-3 px-3 py-1 border-2 border-black rounded-md"
      >
        <div class="w-10 pr-3" v-tooltip="'Thinh\'s Avatar'">
          <img src="chrome://branding/content/about-logo.png" />
        </div>
        <span class="font-bold text-sm text-indigo-500"> Thịnh Nguyễn </span>
        <IconDocumentation 
          v-tooltip="'More info about this account'"
        ></IconDocumentation>
        <IconEcosystem v-tooltip="'additional-actions'"></IconEcosystem>
      </div>
    </header>
    <RouterView />
  </div>
</template>
<style>
#app {
  min-width: 100%;
}

#app > div {
  min-width: 100%;
  margin: auto auto; 
}
</style>
