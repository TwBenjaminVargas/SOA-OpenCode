<template>
  <div :class="['min-h-screen font-sans transition-colors duration-300', isDark ? 'bg-[#0b0e14] text-gray-100' : 'bg-[#f3f4f6] text-gray-800']">
    <!-- Header -->
    <header :class="['border-b px-6 py-4 shadow-sm sticky top-0 z-20 transition-colors duration-300', isDark ? 'bg-[#181b1f] border-gray-800' : 'bg-white border-gray-200']">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-blue-600 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h1 :class="['text-xl font-bold tracking-tight transition-colors', isDark ? 'text-white' : 'text-gray-900']">Monitor de Calidad de Aire</h1>
            <p class="text-xs text-blue-600 uppercase tracking-widest font-bold">Sistema Móvil de Telemetría</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Switcher -->
          <button 
            @click="toggleTheme" 
            :class="['p-2 rounded-lg border transition-all duration-200', isDark ? 'bg-gray-800 border-gray-700 text-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-600']"
            title="Cambiar tema"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <div :class="['flex p-1 rounded-xl border transition-colors', isDark ? 'bg-black border-gray-800' : 'bg-gray-100 border-gray-200']">
            <button 
              @click="viewType = 'daily'"
              :class="[
                'px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                viewType === 'daily' 
                  ? (isDark ? 'bg-gray-800 text-blue-400 shadow-lg' : 'bg-white text-blue-600 shadow-sm border border-gray-200') 
                  : 'text-gray-500 hover:text-gray-400'
              ]"
            >
              Hoy
            </button>
            <button 
              @click="viewType = 'weekly'"
              :class="[
                'px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                viewType === 'weekly' 
                  ? (isDark ? 'bg-gray-800 text-blue-400 shadow-lg' : 'bg-white text-blue-600 shadow-sm border border-gray-200') 
                  : 'text-gray-500 hover:text-gray-400'
              ]"
            >
              Semana
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <h2 :class="['text-3xl font-extrabold tracking-tight transition-colors', isDark ? 'text-white' : 'text-gray-900']">
            {{ viewType === 'daily' ? 'Estado Diario' : 'Resumen Semanal' }}
          </h2>
          <p class="text-gray-500 font-medium flex items-center gap-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ currentTime }}
          </p>
        </div>
        <div :class="['flex items-center gap-2 px-4 py-2 border rounded-full w-fit transition-colors', isDark ? 'bg-green-900/20 border-green-500/30' : 'bg-green-50 border-green-200']">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span :class="['text-sm font-bold uppercase tracking-wider', isDark ? 'text-green-400' : 'text-green-700']">Telemetría Online</span>
        </div>
      </div>

      <!-- Métricas destacadas (Stats) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="panel in statPanels" :key="panel.id" :class="['p-2 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md', isDark ? 'bg-[#181b1f] border-gray-800' : 'bg-white border-gray-200']">
          <div :class="['h-[220px] rounded-xl overflow-hidden', isDark ? 'bg-black' : 'bg-gray-50']">
            <iframe
              :src="getPanelUrl(panel.id)"
              class="w-full h-full border-none"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Gráficos detallados (Full Width) -->
      <div class="space-y-8">
        <div v-for="panel in graphPanels" :key="panel.id" :class="['p-4 rounded-3xl shadow-sm border transition-all duration-300 hover:shadow-lg', isDark ? 'bg-[#181b1f] border-gray-800' : 'bg-white border-gray-200']">
          <h3 :class="['text-lg font-bold mb-4 px-2 flex items-center gap-2 transition-colors', isDark ? 'text-gray-200' : 'text-gray-800']">
            <span class="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            {{ panel.title }}
          </h3>
          <div :class="['h-[400px] w-full rounded-2xl overflow-hidden border transition-colors bg-gray-50', isDark ? 'border-gray-700 bg-black' : 'border-gray-100 bg-gray-50']">
            <iframe
              :src="getPanelUrl(panel.id)"
              class="w-full h-full border-none"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Footer Informativo -->
      <div :class="['mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8 transition-colors', isDark ? 'border-gray-800' : 'border-gray-200']">
        <div class="flex gap-4">
          <div class="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 :class="['font-bold transition-colors', isDark ? 'text-white' : 'text-gray-900']">Telemetría Robotizada</h4>
            <p :class="['text-sm mt-1 leading-relaxed transition-colors', isDark ? 'text-gray-400' : 'text-gray-600']">
              Los datos se capturan mediante rondas de medición autónomas. La vista diaria utiliza el rango preferido de 15:00 a 15:00 para análisis de ciclos completos.
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 :class="['font-bold transition-colors', isDark ? 'text-white' : 'text-gray-900']">Seguridad Ambiental</h4>
            <p :class="['text-sm mt-1 leading-relaxed transition-colors', isDark ? 'text-gray-400' : 'text-gray-600']">
              Monitorización de CO2 y PM2.5 en tiempo real. La interfaz se adapta automáticamente para resaltar picos fuera de norma.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import dashboardsConfig from './config/dashboards.json';
import { getGrafanaParams, buildGrafanaUrl } from './utils/grafana';

const viewType = ref('daily');
const currentTime = ref('');
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

const currentConfig = computed(() => dashboardsConfig[viewType.value]);

const statPanels = computed(() => 
  currentConfig.value.panels.filter(p => p.type === 'stat')
);

const graphPanels = computed(() => 
  currentConfig.value.panels.filter(p => p.type === 'graph')
);

const getPanelUrl = (panelId) => {
  const params = getGrafanaParams(viewType.value);
  const finalParams = {
    ...params,
    panelId: panelId,
    theme: isDark.value ? 'dark' : 'light',
    // Parámetro para forzar el ajuste de escala/zoom en Grafana embebido
    autoscale: 1
  };
  return buildGrafanaUrl(currentConfig.value.baseUrl, finalParams);
};

onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  updateTime();
});
</script>

<style>
/* Estilos globales */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
</style>
