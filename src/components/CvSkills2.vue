<template>
  <section class="skills">
    <h3 class="text-2xl font-semibold border-b-2 border-teal-600 mb-0 pb-2">Habilidades</h3>
    <div v-for="skill in skills" :key="skill.name" class="skill mb-4">
      <div class="flex justify-between items-center mb-1">
        <span class="text-gray-800 font-medium">{{ skill.name }}</span>
        <span class="text-sm text-gray-600">{{ skill.level }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div
          class="bg-teal-600 h-2.5 rounded-full"
          :style="{ width: skill.level + '%' }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Adaptabilidad', level: 95 },
  { name: 'Administración por objetivos', level: 80 },
  { name: 'Bases de Datos', level: 90 },
  { name: 'Cloud Computing', level: 90 },
  { name: 'Desarrollo Full-Stack', level: 100 },
  { name: 'Inglés', level: 60 },
  { name: 'Integración de APIs', level: 95 },
  { name: 'Matemáticas', level: 85 },
  { name: 'Pensamiento estratégico', level: 90 },
  { name: 'Resolución de Problemas', level: 100 },
  { name: 'Trabajo en Equipo', level: 100 }
];
</script>

<style scoped>
.skills {
  margin: 20px auto;
}

.skill {
  width: 100%;
}
</style>