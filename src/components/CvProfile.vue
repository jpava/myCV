<template>
  <section class="profile mb-8">
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
      <h3 class="text-3xl font-bold text-gray-900">Mi Perfil</h3>
    </div>
    
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="text-justify">
        <strong class="text-gray-900 font-semibold">Arquitecto de Soluciones Full-Stack Senior</strong> con más de 11 años transformando ideas en ecosistemas tecnológicos que generan impacto real en las organizaciones.
      </p>

      <div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">ESPECIALIDADES CLAVE:</h4>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Arquitectura de software modular y escalable</li>
          <li>Integración de sistemas empresariales (SAP Service Layer, Microsoft 365)</li>
          <li>Desarrollo de plataformas integrales (Laravel, Angular, Vue.js, Flutter)</li>
          <li>APIs REST y automatización de procesos críticos</li>
          <li>Análisis de datos e implementación de IA</li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">LOGROS DESTACADOS:</h4>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Diseñé y desarrollé GCB Axis: plataforma integral con 18+ módulos que centraliza procesos académicos y administrativos, impactando +2,500 usuarios</li>
          <li>Lideré integración compleja SAP ↔ Microsoft 365 ↔ Sistemas de pago, reduciendo tiempos operativos en 60%</li>
          <li>Creé sistema de evaluación docente con IA para análisis automático de retroalimentación</li>
          <li>Proyecto reconocido entre los 10 mejores tecnológicos de Bogotá (avalado por MinTIC)</li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">STACK TÉCNICO:</h4>
        <div class="grid grid-cols-1 gap-2 text-gray-700">
          <p><strong class="text-gray-900">Backend:</strong> PHP, Laravel, Java J2EE, Spring MVC</p>
          <p><strong class="text-gray-900">Frontend:</strong> JavaScript, Angular, Vue.js, Flutter</p>
          <p><strong class="text-gray-900">Integraciones:</strong> SAP Service Layer, Microsoft Graph API, ePayco, Lleida</p>
          <p><strong class="text-gray-900">Bases de Datos:</strong> MySQL, SQL Server, Oracle</p>
          <p><strong class="text-gray-900">Cloud:</strong> Arquitecturas escalables, microservicios</p>
        </div>
      </div>

      <p class="text-justify italic text-gray-800">
        Mi pasión es convertir desafíos complejos en soluciones elegantes que impulsan la transformación digital y generan valor medible para las organizaciones.
      </p>
    </div>

    <!-- <CvSkills />!-->
  </section>
</template>

<script setup>
//import CvSkills from '../components/CvSkills.vue';

</script>

<style scoped>
.profile p {
  line-height: 1.8;
}
</style>
