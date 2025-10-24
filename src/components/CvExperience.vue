<template>
  <section class="mb-8">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
      <h3 class="text-3xl font-bold text-gray-900">Experiencia destacada</h3>
    </div>
    
    <div class="timeline">
      <div v-for="(job, index) in jobs" :key="index" class="timeline-item flex items-start mb-8 group">
        <div class="timeline-marker-container flex flex-col items-center mr-6">
          <div class="timeline-marker bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-4 h-4 ring-4 ring-blue-100 group-hover:ring-6 group-hover:scale-125 transition-all duration-300 shadow-lg"></div>
        </div>
        <div class="timeline-content flex-1 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h4 class="text-sm font-bold text-blue-600 uppercase tracking-wide">{{ job.year }}</h4>
          </div>
          <h5 class="text-xl font-bold text-gray-900 mb-2">{{ job.position }}</h5>
          <div class="flex items-center gap-2 text-gray-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p class="font-semibold">{{ job.company }}, {{ job.city }}</p>
          </div>
          <p class="text-gray-700 leading-relaxed text-justify">{{ job.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const jobs = [
  { 
    year: `2014 - ${currentYear} > Actual`, 
    position: 'Ingeniero de desarrollo', 
    company: 'Gimnasio Colombo Británico', 
    city: 'Bogotá', 
    description: `He liderado la arquitectura, desarrollo e implementación del ecosistema digital GCB Axis, una plataforma integral que centraliza los procesos académicos, administrativos y de bienestar institucional. Axis cuenta con más de 18 módulos interconectados, incluyendo el sistema de venta de libros integrado con SAP y Microsoft 365, pasarelas de pago (ePayco, Tu Compra), sistema de evaluación docente con analítica de datos y herramientas de automatización que redujeron en un 60% los tiempos operativos. La arquitectura modular permite escalabilidad, resiliencia y fácil integración de nuevas funcionalidades. He diseñado integraciones con SAP Service Layer, Graph API y Lleida Networks para soporte transaccional, gestión de usuarios y validación de firmas electrónicas, contribuyendo a la eficiencia digital y sostenibilidad del colegio.`
  },
  { 
    year: '2014 - 2015', 
    position: 'Desarrollador de aplicaciones en PHP y Java J2EE', 
    company: 'MSI S.A.S', 
    city: 'Bogotá', 
    description: `Desarrollé aplicaciones empresariales en PHP con el framework YII y Java J2EE utilizando Spring MVC. Uno de los proyectos más relevantes fue una aplicación desarrollada para la Alcaldía de Bogotá, sobre Oracle 11g y Spring MVC, que gestiona trámites de establecimientos públicos. Incluyó funcionalidades de inicio de sesión seguro, formularios dinámicos, notificaciones automáticas y seguimiento de solicitudes en línea, mejorando la interacción entre los ciudadanos y las entidades distritales, y ofreciendo trazabilidad en toda la cadena de inspección y control.`
  },
  { 
    year: '2012 - 2013', 
    position: 'Analista y Desarrollador de los módulos “Profesor SISE” e “Inspector SISE”', 
    company: 'Sistema Integrado de Salud Empresarial S.A.', 
    city: 'Bogotá', 
    description: `Lideré el análisis, diseño y desarrollo de los módulos Profesor SISE e Inspector SISE, enfocados en la gestión de la salud empresarial bajo los estándares ISO 9001 y OHSAS 18001-18002. Me encargué del modelado de base de datos, arquitectura del sistema y codificación de los módulos principales. El proyecto fue reconocido como uno de los 10 mejores desarrollos tecnológicos de Bogotá, promovido por MinTIC, Apps.co, Connect Bogotá y el CESA, por su impacto en la innovación tecnológica en entornos corporativos.`
  }
];


</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  width: 2px;
  height: calc(100% - 16px);
  background: linear-gradient(to bottom, #3b82f6, #6366f1);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
}

.timeline-marker-container {
  position: relative;
  z-index: 10;
  margin-top: 4px;
  width: 16px;
}
</style>
