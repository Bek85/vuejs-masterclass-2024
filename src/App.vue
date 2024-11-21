<script setup lang="ts">
import TopNavBar from '@/components/Layout/TopNavBar.vue';
import Sidebar from '@/components/Layout/Sidebar.vue';
</script>
<template>
  <Sidebar />
  <div class="lg:ml-52 ml-16 transition-[margin]">
    <TopNavBar />
    <main class="p-4 lg:p-8">
      <RouterView />
    </main>
  </div>
</template>
