<template>
  <h3 class="text-2xl font-semibold border-b-2 border-teal-600 mb-4 pb-2">Experiencia destacada</h3>
  <div class="timeline">
    <div v-for="(job, index) in jobs" :key="index" class="timeline-item flex items-start mb-6">
      <div class="timeline-marker bg-teal-600 rounded-full w-4 h-4 mt-1"></div>
      <div class="timeline-content ml-4">
        <h4 class="text-lg font-semibold text-teal-600">{{ job.year }}</h4>
        <h5 class="font-bold">{{ job.position }}</h5>
        <p>{{ job.company }}, {{ job.city }}</p>
        <p>{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const jobs = [
  { year: `2014 - ${currentYear} > Actual`, position: 'Ingeniero de desarrollo', company: 'Gimnasio Colombo Británico', city: 'Bogotá', description: `He liderado el desarrollo a medida de soluciones tecnológicas personalizadas, adaptadas a las necesidades específicas del cliente. Entre mis logros destacan la creación de sitios web y aplicaciones institucionales integradas con SAP y Microsoft 365, donde he implementado pasarelas de pagos externas y sistemas de administración de notas para optimizar procesos administrativos. Además, he diseñado e implementado módulos a medida para automatizar y mejorar diversos procesos escolares, aumentando la eficiencia operativa y reduciendo tiempos de ejecución, siempre con un enfoque en la escalabilidad y la experiencia del usuario.` },
  { year: '2014-2015', position: 'Desarrollo de aplicaciones en PHP y Java J2EE', company: 'MSI S.A.S', city: 'Bogotá', description: `He desarrollado aplicaciones utilizando PHP con el framework YII y Java J2EE con Spring MVC. Un proyecto destacado fue una aplicación para la Alcaldía de Bogotá, diseñada con Spring MVC y Oracle 11g, que permite a los ciudadanos gestionar trámites relacionados con establecimientos públicos, solicitar visitas técnicas a entidades distritales (Salud, Ambiente, Gobierno y Bomberos), y realizar seguimiento a sus solicitudes. La aplicación incluye funcionalidades como login, formularios dinámicos, envío automático de correos y consulta de estados, optimizando la comunicación entre ciudadanos y entidades. Además, la subdirección de Inspección, Vigilancia y Control (IVC) supervisa todo el proceso desde la plataforma.` },
  { year: '2012-2013', position: 'Análisis y Desarrollo de los módulos "Profesor SISE" e "Inspector SISE"', company: 'Sistema Integrado de Salud Empresarial S.A', city: 'Ciudad', description: `Lideré el diseño y desarrollo de esta plataforma virtual enfocada en la salud empresarial, dirigida a empresas con responsabilidad social que buscan o mantienen certificaciones en las normas ISO 90001 y OHSAS 18001-18002. Mi rol incluyó el análisis, diseño y construcción de la base de datos, así como la implementación de los módulos. Este proyecto fue reconocido como uno de los 10 mejores proyectos tecnológicos de Bogotá, contando con el apoyo y asesoría de MinTIC, Apps.co, Connect Bogotá y el CESA.` },
];
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #319795;
  /* Color teal */
}

.timeline-item {
  position: relative;
}

.timeline-marker {
  position: relative;
  z-index: 10;
}
</style>
