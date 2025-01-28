<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <apexchart v-for="(skill, index) in skills" :key="index" type="radialBar" 
      :options="getOptions(skill.name, skill.color)" 
      :series="[skill.level]"   />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  { name: 'Responsabilidad', level: 100, color: '#1E3A8A' }, // Azul oscuro
  { name: 'Creatividad e Innovación', level: 100, color: '#3B82F6' }, // Azul intermedio
  { name: 'Trabajo en Equipo', level: 100, color: '#60A5FA' } // Azul claro
]);

const getOptions = (label, color) => ({
  chart: {
    width: calculateChartWidth(), // Función para calcular el ancho
    height: 'auto', // Ajusta la altura automáticamente
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: color, // Aplica el color a la etiqueta
          offsetY: 90
        },
        value: {
          offsetY: -10,
          fontSize: '22px',
          color: color, // Aplica el color al valor
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
      colorStops: [
        {
          offset: 0,
          color: color, // Aplica el color al inicio del gradiente
          opacity: 1
        },
        {
          offset: 100,
          color: color, // Aplica el color al final del gradiente
          opacity: 0.7
        }
      ]
    }
  },
  stroke: {
    dashArray: 4
  },
  labels: [label],
});

const calculateChartWidth = () => {
  const gridContainer = document.getElementById('exportJP');
  if (gridContainer) {
    const gridWidth = gridContainer.clientWidth - 20; // Ajusta por márgenes
    const numColumns = 3;
    const chartWidth = Math.max(200, gridWidth / numColumns); // Mínimo 200px
    return chartWidth;
  } else {
    console.error('Elemento no encontrado');
    return 0; // O un valor por defecto
  }
};
</script>

<style scoped>
@media print {
    .grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    .apexcharts-container {
        margin: 0;
        padding: 0;
        display: none;
    }
}
</style>
