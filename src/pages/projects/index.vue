<script setup lang="ts">

</script>
<template>
  <h1>Projects Page</h1>
  <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink :to="{ name: '/projects/[id]', params: { id: '1' } }">Go to Project 1</RouterLink>
</template>
<style scoped></style>
