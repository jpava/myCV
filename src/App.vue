<template>
  <div class="container mx-auto p-4" id="exportJP" :class="{ 'exporting': isExporting }">
    <div id="cv-content" class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div class="col-span-4 bg-teal-900 text-white p-4">
        <CvHeader />
        <CvContact />
      </div>
      <div class="col-span-8 bg-white p-4">
        <CvProfile />
        <CvExperience />
        <CvEducation />
        <CvSkills2 />
      </div>
    </div>
  </div>
  <div class="text-right mb-4">
    <button @click="downloadPDF" class="bg-blue-900 text-white px-4 py-2 rounded">
      Descargar PDF
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CvHeader from './components/CvHeader.vue';
import CvProfile from './components/CvProfile.vue';
import CvExperience from './components/CvExperience.vue';
import CvEducation from './components/CvEducation.vue';
import CvContact from './components/CvContact.vue';
import html2pdf from 'html2pdf.js';
import CvSkills2 from './components/CvSkills2.vue';

const isExporting = ref(false);

const downloadPDF = () => {
  isExporting.value = true;

  setTimeout(() => {
    const element = document.querySelector('.container');
    const opt = {
      margin: 0,
      filename: 'JuanCarlosPavaMoreno.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .finally(() => {
        isExporting.value = false;
      });
  }, 1000);
};
</script>

<style scoped>
/* Estilo para reducir el tamaño de la fuente durante la exportación */
.exporting {
  font-size: 12px; /* Ajusta este valor según tus necesidades */
}

/* Asegúrate de que los elementos internos también hereden el tamaño de fuente */
.exporting * {
  font-size: inherit;
}
</style>