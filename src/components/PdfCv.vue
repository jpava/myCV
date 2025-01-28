<!-- PdfCv.vue -->
<template>
  <div class="pdf-container">
    <div class="pdf-header">
      <CvHeader />
      <CvContact />
    </div>
    <div class="pdf-body">
      <CvProfile />
      <CvExperience />
      <CvEducation />
      <CvSkills2 />
    </div>
  </div>
</template>

<script setup>
import CvHeader from './CvHeader.vue';
import CvProfile from './CvProfile.vue';
import CvExperience from './CvExperience.vue';
import CvEducation from './CvEducation.vue';
import CvContact from './CvContact.vue';
import CvSkills2 from './CvSkills2.vue';
</script>

<style scoped>
.pdf-container {
  padding: 1in;
  font-size: 8px;
  /* Ajusta el tamaño del texto */
}

.pdf-header,
.pdf-body {
  margin-bottom: 1in;
}

.pdf-header {
  /* Ajusta estilos para cabecera si es necesario */
}

.pdf-body {
  /* Ajusta estilos para el cuerpo del CV */
}

.apexcharts-canvas {
  width: 100% !important;
  /* Asegúrate de que los gráficos se ajusten */
  height: auto !important;
}
</style>