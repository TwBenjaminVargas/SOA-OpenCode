<template>
  <div class="relative w-full h-[80vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
    <!-- Overlay de carga -->
    <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
      <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-blue-400 font-medium animate-pulse">Cargando mediciones...</p>
    </div>

    <!-- Error state -->
    <div v-if="error" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
      <div class="text-red-500 text-5xl mb-4">⚠️</div>
      <h3 class="text-xl font-bold text-white mb-2">Error al cargar el dashboard</h3>
      <p class="text-gray-400 mb-4">{{ error }}</p>
      <button @click="reload" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
        Reintentar
      </button>
    </div>

    <!-- Iframe de Grafana -->
    <iframe
      v-show="!loading && !error"
      :src="url"
      class="w-full h-full border-none"
      @load="onLoad"
      @error="onError"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  }
});

const loading = ref(true);
const error = ref(null);

const onLoad = () => {
  loading.value = false;
};

const onError = () => {
  loading.value = false;
  error.value = "No se pudo conectar con el servidor de Grafana.";
};

const reload = () => {
  loading.value = true;
  error.value = null;
  // Forzar recarga del iframe si es necesario
};

// Reiniciar estado de carga si la URL cambia
watch(() => props.url, () => {
  loading.value = true;
  error.value = null;
});
</script>

<style scoped>
/* Eliminar barras de scroll innecesarias del iframe */
iframe {
  color-scheme: dark;
}
</style>
