<template>
  <div class="bg-brand-black text-light-grey">
    <Header />
      <main>
        <NuxtPage />
      </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
