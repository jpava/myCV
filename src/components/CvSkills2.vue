<template>
  <section class="skills mt-16">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
      <h3 class="text-3xl font-bold text-gray-900">Habilidades</h3>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="skill in skills" :key="skill.name" class="skill group">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-900 font-semibold text-sm">{{ skill.name }}</span>
          <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{{ skill.level }}%</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-2 overflow-hidden shadow-inner">
          <div
            class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            :style="{ width: skill.level + '%' }"
          >
            <div class="absolute inset-0 bg-white/20 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Adaptabilidad', level: 95 },
  { name: 'Administración por objetivos', level: 80 },
  { name: 'Arquitectura de Software', level: 95 },
  { name: 'Bases de Datos', level: 90 },
  { name: 'Cloud Computing', level: 90 },
  { name: 'Creatividad e Innovación', level: 95 },
  { name: 'Desarrollo Full-Stack', level: 100 },
  { name: 'Integración de APIs', level: 95 },
  { name: 'Inteligencia Artificial', level: 85 },
  { name: 'Liderazgo Técnico', level: 90 },
  { name: 'Pensamiento estratégico', level: 90 },
  { name: 'Resolución de Problemas', level: 100 },
  { name: 'Trabajo en Equipo', level: 100 },
  { name: 'Inglés', level: 60 }
];
</script>

<style scoped>
.skills {
  margin: 0 auto;
}

.skill {
  transition: transform 0.2s ease;
}

.skill:hover {
  transform: translateY(-2px);
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>