<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <!-- Botón flotante -->
    <button 
      @click="downloadPDF" 
      class="fixed bottom-8 right-8 z-50 floating-button group"
      :class="{ 'hide-on-print': isExporting }"
    >
      <div class="relative">
        <!-- Círculo con gradiente y pulsación -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-ping opacity-20"></div>
        <div class="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
      <!-- Tooltip -->
      <span class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Descargar PDF
      </span>
    </button>
    
    <div class="container mx-auto max-w-7xl" id="cv-container">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-0 shadow-2xl rounded-2xl bg-white cv-grid-container" :class="{ 'exporting': isExporting }">
        <div class="col-span-4 sidebar-column bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white">
          <div class="sidebar-static p-8">
            <CvHeader />
            <CvContact :showOnlyStatic="true" :isExporting="isExporting" />
          </div>
          <div class="sidebar-sticky p-8 pt-0">
            <div class="sticky-content">
              <div class="pdf-header" v-if="isExporting">
                <CvHeader />
              </div>
              <CvContact :showOnlySticky="true" :isExporting="isExporting" />
            </div>
          </div>
        </div>
        <div class="col-span-8 bg-white p-8 md:p-10">
          <CvProfile />
          <CvExperience />
          <CvEducation />
          <div class="mb-8"></div>
          <CvSkills2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CvHeader from './components/CvHeader.vue';
import CvProfile from './components/CvProfile.vue';
import CvExperience from './components/CvExperience.vue';
import CvEducation from './components/CvEducation.vue';
import CvContact from './components/CvContact.vue';
import html2pdf from 'html2pdf.js';
import CvSkills2 from './components/CvSkills2.vue';

const isExporting = ref(false);

// Detectar scroll para animaciones
onMounted(() => {
  const handleScroll = () => {
    const sidebarSticky = document.querySelector('.sidebar-sticky');
    if (sidebarSticky && window.scrollY > 50) {
      sidebarSticky.classList.add('scrolled');
    } else if (sidebarSticky) {
      sidebarSticky.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

const downloadPDF = () => {
  isExporting.value = true;

  setTimeout(() => {
    const element = document.getElementById('cv-container');
    const opt = {
      margin: 0,
      filename: 'JuanCarlosPavaMoreno.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2.2,
        useCORS: true, 
        logging: false,
        letterRendering: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        windowHeight: 1550
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait',
        compress: true
      },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .finally(() => {
        setTimeout(() => {
          isExporting.value = false;
        }, 500);
      });
  }, 2000);
};
</script>

<style scoped>
/* Ocultar el botón durante la exportación */
.hide-on-print {
  display: none !important;
}

/* Botón flotante con animaciones */
.floating-button {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating-button:hover {
  animation-play-state: paused;
}

/* Animación suave para el contenedor */
#cv-container > div {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sombra extra para hover */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}

/* Efecto sticky para la sidebar - Solo Web */
.cv-grid-container {
  overflow: visible !important;
}

.sidebar-column {
  overflow: visible !important;
  border-radius: 1rem 0 0 1rem;
  position: relative;
}

.sidebar-static {
  animation: slideInLeft 0.6s ease-out;
}

.sidebar-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s ease,
              background-color 0.3s ease;
  will-change: transform;
}

.sidebar-sticky .sticky-content {
  padding-top: 1rem;
  border-top: 1px solid rgba(71, 85, 105, 0.3);
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Efecto de elevación al hacer scroll */
.sidebar-sticky.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

<style>
/* Estilos globales para la exportación del PDF */
.exporting {
  font-size: 10px !important;
  max-width: 100% !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  background-color: white !important;
  opacity: 1 !important;
  line-height: 1.3 !important;
}

.exporting *,
.exporting *::before,
.exporting *::after {
  box-shadow: none !important;
  opacity: 1 !important;
}

/* Reducir espaciados solo en PDF */
.exporting .mb-8 {
  margin-bottom: 0.4rem !important;
}

.exporting .mb-6 {
  margin-bottom: 0.35rem !important;
}

.exporting .mb-4 {
  margin-bottom: 0.3rem !important;
}

.exporting .mt-8 {
  margin-top: 0.4rem !important;
}

.exporting .p-8 {
  padding: 0.6rem !important;
}

.exporting .p-6 {
  padding: 0.5rem !important;
}

.exporting .p-4 {
  padding: 0.4rem !important;
}

.exporting .py-8,
.exporting .pb-8 {
  padding-bottom: 0.4rem !important;
  padding-top: 0.4rem !important;
}

.exporting .space-y-6 > * + * {
  margin-top: 0.35rem !important;
}

.exporting .space-y-4 > * + *,
.exporting .space-y-3 > * + * {
  margin-top: 0.25rem !important;
}

/* Desactivar sticky en PDF y mostrar todo el contenido */
.exporting .cv-grid-container {
  overflow: hidden !important;
}

.exporting .sidebar-static {
  display: none !important;
}

.exporting .sidebar-sticky {
  position: static !important;
  height: auto !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0.4rem !important;
  padding-top: 0.4rem !important;
}

.exporting .sidebar-sticky .sticky-content {
  border-top: none !important;
  padding-top: 0 !important;
}

.exporting .sidebar-column {
  border-radius: 0 !important;
}

.exporting .sidebar-static {
  display: none !important;
}

/* En PDF, mostrar el header dentro de la parte sticky */
.exporting .sidebar-sticky {
  padding-top: 0.4rem !important;
}

.exporting .pdf-header {
  display: block !important;
  margin-bottom: 0.4rem !important;
}

.exporting .col-span-4 {
  padding-left: 0.4rem !important;
  padding-right: 0.4rem !important;
}

/* Mostrar todas las secciones en el PDF */
.exporting .section-block {
  display: block !important;
}

/* Reducir tamaño de títulos en PDF */
.exporting h1 {
  font-size: 1.7em !important;
  margin-bottom: 0.25rem !important;
}

.exporting h2 {
  font-size: 1.4em !important;
  margin-bottom: 0.25rem !important;
}

.exporting h3 {
  font-size: 1.3em !important;
  margin-bottom: 0.25rem !important;
}

.exporting h4 {
  font-size: 1.15em !important;
  margin-bottom: 0.2rem !important;
}

.exporting h5 {
  font-size: 1.1em !important;
  margin-bottom: 0.2rem !important;
}

.exporting p {
  margin-bottom: 0.25rem !important;
}

/* Reducir espaciado de la foto */
.exporting img {
  width: 90px !important;
  height: 90px !important;
  margin-bottom: 0.3rem !important;
}

/* Ajustar tamaño de letra en la sidebar para legibilidad */
.exporting .col-span-4 {
  font-size: 10px !important;
  line-height: 1.4 !important;
}

.exporting .col-span-4 h1 {
  font-size: 1.6em !important;
}

.exporting .col-span-4 h2 {
  font-size: 1.3em !important;
}

.exporting .col-span-4 h3 {
  font-size: 1.1em !important;
}

.exporting .col-span-4 .text-sm,
.exporting .col-span-4 .text-xs {
  font-size: 1em !important;
}

/* Arreglar alineación de iconos en la sidebar */
.exporting .col-span-4 i,
.exporting .col-span-4 svg {
  flex-shrink: 0 !important;
  width: 12px !important;
  height: 12px !important;
  margin-top: 2px !important;
}

.exporting .col-span-4 .flex.items-start {
  align-items: flex-start !important;
}

.exporting .col-span-4 .gap-3,
.exporting .col-span-4 .gap-2 {
  gap: 0.25rem !important;
}

/* Reducir espaciados en la sidebar */
.exporting .col-span-4 .space-y-6 > * + * {
  margin-top: 0.35rem !important;
}

.exporting .col-span-4 .space-y-3 > * + * {
  margin-top: 0.2rem !important;
}

.exporting .col-span-4 .mb-4 {
  margin-bottom: 0.3rem !important;
}

.exporting .col-span-4 .mt-8 {
  margin-top: 0.4rem !important;
}

/* Reducir gap en grid */
.exporting .gap-6,
.exporting .gap-4,
.exporting .gap-3,
.exporting .gap-2 {
  gap: 0.3rem !important;
}

.exporting .shadow-2xl,
.exporting .shadow-xl,
.exporting .shadow-lg,
.exporting .shadow-md,
.exporting .shadow-sm {
  box-shadow: none !important;
}

.exporting .rounded-2xl,
.exporting .rounded-xl,
.exporting .rounded-full {
  border-radius: 0 !important;
}

/* FIX CRÍTICO: Hacer visible el texto con gradiente en el PDF */
.exporting .bg-clip-text {
  background-clip: unset !important;
  -webkit-background-clip: unset !important;
  color: white !important;
  -webkit-text-fill-color: white !important;
}

/* FIX: Colores del lado izquierdo (oscuro) más visibles */
.exporting .text-slate-200,
.exporting .text-slate-300,
.exporting .text-slate-400 {
  color: white !important;
  opacity: 1 !important;
}

.exporting .text-blue-400 {
  color: #60a5fa !important;
  opacity: 1 !important;
}

/* FIX: Remover efectos blur y transparencia */
.exporting .blur-md,
.exporting .blur {
  filter: none !important;
  opacity: 1 !important;
}

.exporting .opacity-75,
.exporting .opacity-50,
.exporting .opacity-25 {
  opacity: 1 !important;
}

/* Asegurar que todo el texto se vea en el PDF */
.exporting h1,
.exporting h2,
.exporting h3,
.exporting h4,
.exporting h5,
.exporting p,
.exporting span,
.exporting li,
.exporting a,
.exporting div,
.exporting strong {
  opacity: 1 !important;
}

/* Asegurar fondo oscuro del lado izquierdo */
.exporting .bg-gradient-to-b {
  background: #1e293b !important;
  opacity: 1 !important;
}

/* Extender la columna izquierda en toda la altura del PDF */
.exporting .grid.md\:grid-cols-12 {
  position: relative !important;
}

.exporting .col-span-4 {
  position: relative !important;
}

.exporting .col-span-4::after {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: -1000px !important;
  background: #1e293b !important;
  z-index: -1 !important;
}

/* Asegurar fondo blanco del lado derecho */
.exporting .bg-white {
  background-color: #ffffff !important;
  opacity: 1 !important;
}

.exporting .bg-gray-50 {
  background-color: #f9fafb !important;
  opacity: 1 !important;
}

.exporting .bg-gray-100 {
  background-color: #f3f4f6 !important;
  opacity: 1 !important;
}

/* Asegurar que los badges se vean */
.exporting .bg-blue-100 {
  background-color: #dbeafe !important;
  opacity: 1 !important;
}

.exporting .bg-indigo-100 {
  background-color: #e0e7ff !important;
  opacity: 1 !important;
}

.exporting .bg-yellow-100 {
  background-color: #fef3c7 !important;
  opacity: 1 !important;
}

.exporting .bg-red-100 {
  background-color: #fee2e2 !important;
  opacity: 1 !important;
}

.exporting .bg-green-100 {
  background-color: #dcfce7 !important;
  opacity: 1 !important;
}

.exporting .bg-sky-100 {
  background-color: #e0f2fe !important;
  opacity: 1 !important;
}

/* Asegurar colores de texto oscuros sean visibles */
.exporting .text-gray-900,
.exporting .text-gray-800,
.exporting .text-gray-700 {
  opacity: 1 !important;
}
</style>