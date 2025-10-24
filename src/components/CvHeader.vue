<template>
  <div class="text-center pb-8 border-b border-slate-700/50">
    <div class="relative inline-block mb-6">
      <img 
        :src="photo" 
        alt="Profile Picture" 
        class="relative rounded-full w-40 h-40 mx-auto border-4 border-white shadow-xl object-cover"
      >
    </div>
    <h1 class="text-4xl md:text-5xl font-bold mb-3 text-white">
      {{ name }}
    </h1>
    <h2 class="text-2xl md:text-3xl text-slate-300 font-light tracking-wide">{{ title }}</h2>
  </div>
</template>
  
  <script setup>
  const name = 'Juan Carlos Pava Moreno';
  const title = 'Senior Integration Engineer';
  const photo = require('@/assets/images.jpg');
  </script>
  
  <style scoped>

  </style>
  