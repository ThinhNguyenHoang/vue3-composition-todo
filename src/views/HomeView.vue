<script setup lang="ts">
// TODO: 
/**
 * We can try to implement some special interaction like: 
 *  + Scroll down to about => Auto focus the button on the header 
 *  + Click the "About" button on the header => Scroll to focus the about section 
 */
import TheWelcome from "@/components/TheWelcome.vue";

</script>
<template>
  <main class="flex flex-row items-center align-center">
    <section>
      <h2 class="font-bold text-5xl">
        Solely designed for Markdown to improve your dev workflow
      </h2>
      <p>
        Get a low-friction personal note-taking workflow and accomplish more.
        With your notes well-organized effortlessly, you can stay focused on
        doing your best work.
      </p>
    </section>
    <section class="trusted-companies flex flex-col">
      <div>Trusted BY OVER 1K+ Companies</div>
      <div class="flex flex-row gap-4 px-10">
        <!-- render list of company here -->
      </div>
    </section> 
    <section>
<!-- Deal section here -->
    </section>
    <div class="font-extrabold text-6xl">HOME</div>

  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
