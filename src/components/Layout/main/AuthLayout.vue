<script setup lang="ts">
import { usePageStore } from '@/stores/page';
import { storeToRefs } from 'pinia';

const pageStore = storeToRefs(usePageStore());

</script>
<template>
  <Sidebar />
  <div class="lg:ml-52 ml-16 transition-[margin]">
    <TopNavBar />
    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">{{ pageStore.pageTitle }}</h1>
      </div>
      <slot />
    </main>
  </div>
</template>
