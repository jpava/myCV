<template>
  <div class="mt-8 space-y-6">
    <div v-if="isExporting || !showOnlySticky" class="section-block">
      <h3 class="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Información Personal
      </h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-birthday-cake text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Nacimiento</span>
            <span class="text-slate-200">22 de septiembre de 1987</span>
          </div>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-flag text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Nacionalidad</span>
            <span class="text-slate-200">Colombiana</span>
          </div>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-heart text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Estado Civil</span>
            <span class="text-slate-200">Unión libre</span>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="isExporting || !showOnlyStatic" class="section-block">
      <h3 class="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contacto
      </h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-phone text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Teléfono</span>
            <span class="text-slate-200">+57 313 852 7585</span>
          </div>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-envelope text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Email</span>
            <a href="mailto:pavamorenojuancarlos@gmail.com" class="text-slate-200 hover:text-blue-400 transition-colors break-all">
              pavamorenojuancarlos@gmail.com
            </a>
          </div>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fas fa-map-marker-alt text-blue-400 mt-0.5 w-4"></i>
          <div>
            <span class="text-slate-400 block text-xs">Dirección</span>
            <span class="text-slate-200">Chía, Cundinamarca</span>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="isExporting || !showOnlyStatic" class="section-block">
      <h3 class="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Redes Sociales
      </h3>
      <ul class="space-y-3">
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fab fa-linkedin text-blue-400 mt-0.5 w-4"></i>
          <a href="https://www.linkedin.com/in/juan-carlos-pava-moreno" class="text-slate-200 hover:text-blue-400 transition-colors text-xs">
            @juan-carlos-pava-moreno
          </a>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fa-brands fa-github text-blue-400 mt-0.5 w-4"></i>
          <a href="https://github.com/jpava" class="text-slate-200 hover:text-blue-400 transition-colors text-xs">
            @jpava
          </a>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fa-brands fa-gitlab text-blue-400 mt-0.5 w-4"></i>
          <a href="https://gitlab.com/pavamorenojuancarlos" class="text-slate-200 hover:text-blue-400 transition-colors text-xs">
            @pavamorenojuancarlos
          </a>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fab fa-instagram text-blue-400 mt-0.5 w-4"></i>
          <a href="https://www.instagram.com/juan.10gs" class="text-slate-200 hover:text-blue-400 transition-colors text-xs">
            @juan.10gs
          </a>
        </li>
        <li class="flex items-start gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
          <i class="fa-solid fa-earth-americas text-blue-400 mt-0.5 w-4"></i>
          <a href="https://juan-pava-cv.netlify.app" class="text-slate-200 hover:text-blue-400 transition-colors break-all text-xs">
            juan-pava-cv.netlify.app
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  showOnlyStatic: {
    type: Boolean,
    default: false
  },
  showOnlySticky: {
    type: Boolean,
    default: false
  },
  isExporting: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.section-block {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.3);
}

.section-block:last-child {
  border-bottom: none;
}
</style>
