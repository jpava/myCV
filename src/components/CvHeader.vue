<template>
  <div class="text-center">
    <img :src="photo" alt="Profile Picture" class="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-white">
    <h1 class="text-3xl font-bold">{{ name }}</h1>
    <h2 class="text-xl">{{ title }}</h2>
  </div>
</template>
  
  <script setup>
  const name = 'Juan Carlos Pava Moreno';
  const title = 'Develop full stack';
  const photo = require('@/assets/images.jpg');
  </script>
  
  <style scoped>

  </style>
  