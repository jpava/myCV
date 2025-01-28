<template>
  <section class="education">
    <h3 class="text-2xl font-semibold border-b-2 border-teal-600 mb-4 pb-2">Formación Académica</h3>
    <ul class="space-y-4">
      <li v-for="degree in degrees" :key="degree.year" class="degree p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h4 class="text-sm font-medium text-teal-600">{{ degree.year }}</h4>
        <p class="text-lg font-semibold text-gray-800">{{ degree.title }}</p>
        <p class="text-sm text-gray-600">{{ degree.institution }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const degrees = [
  { year: '2015-2020', title: 'Profesional en Ingeniería de Sistemas', institution: 'Universidad de Cundinamarca, Chía - Cundinamarca' },
  { year: '2012-2014', title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información', institution: 'SENA, Chía - Cundinamarca' },
  { year: '2022', title: 'DS4A / Colombia Fundamentos en Analítica de Datos', institution: 'Correlation One - Online' }
];
</script>

<style scoped>
/* Estilos adicionales para mejorar la apariencia */
.education {
  margin: 0 auto;
  padding: 20px;
}

.degree {
  border-left: 4px solid teal;
  padding-left: 12px;
}

.degree:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>