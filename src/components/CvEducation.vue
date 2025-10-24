<template>
  <section class="education mb-8">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
      <h3 class="text-3xl font-bold text-gray-900">Formación Académica</h3>
    </div>
    
    <ul class="space-y-4">
      <li v-for="degree in degrees" :key="degree.year" class="degree group">
        <div class="relative bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 transform origin-top scale-y-100 group-hover:scale-y-110 transition-transform duration-300"></div>
          <div class="ml-4">
            <div class="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <h4 class="text-sm font-bold text-blue-600 uppercase tracking-wide">{{ degree.year }}</h4>
            </div>
            <p class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {{ degree.title }}
            </p>
            <p class="text-sm text-gray-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ degree.institution }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const degrees = [
  { year: '2025 - Actualidad', title: 'Maestría en Inteligencia Artificial', institution: 'Universidad Internacional de La Rioja (UNIR) - Online' },
  { year: '2015 - 2020', title: 'Profesional en Ingeniería de Sistemas', institution: 'Universidad de Cundinamarca, Chía - Cundinamarca' },
  { year: '2012 - 2014', title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información', institution: 'SENA, Chía - Cundinamarca' },
  { year: '2022', title: 'DS4A / Colombia Fundamentos en Analítica de Datos', institution: 'Correlation One - Online' }
];

</script>

<style scoped>
.education {
  margin: 0 auto;
}
</style>