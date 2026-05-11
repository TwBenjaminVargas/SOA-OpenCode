# Plan de Desarrollo: Dashboard Selector Adaptativo (Vue + Grafana)

Este plan detalla la creación de una aplicación web responsive con Vue 3 diseñada para integrar y visualizar datos de un sistema externo de sensores IoT (calidad de aire) mediante dashboards de Grafana, mejorando la presentación y accesibilidad de la información.

## Objetivo
Mostrar los dashboards de forma prolija, agradable y óptima, adaptándose a la fecha actual del usuario. La aplicación deberá cargar dinámicamente las visualizaciones (diarias o semanales) según la temporalidad de los datos del sensor IoT. Se realizarán commits al finalizar cada fase previa consulta con el usuario, y se preparará el proyecto para ser publicado en GitHub Pages, proporcionando las instrucciones necesarias.

## Fases del Proyecto

### Fase 1: Inicialización y Estructura (Scaffolding)
- [x] **Configuración de Vue:** Inicializar el proyecto usando Vite con Vue 3.
- [x] **Instalación de CSS:** Integrar Tailwind CSS para el diseño responsive y estético.
- [x] **Visualización Local:** Configurar el servidor de desarrollo y proporcionar instrucciones para visualizar los avances en `localhost` desde la primera fase.
- [x] **Configuración de Dashboards:** Crear `src/config/dashboards.json` con las siguientes URLs base y sus parámetros:
    - **Vista Semanal:** `https://grafana-fabriziobiondi.duckdns.org/d/fa98846/aire-semana` (Incluye: Promedios diarios, Mejor/Peor día, Alarmas semanales y duración promedio).
    - **Vista Diaria:** `https://grafana-fabriziobiondi.duckdns.org/d/fagfnz4/aire-detalle-dia` (Incluye: Calidad del aire en tiempo real, Última medición, Promedio por hora y Alarmas abiertas).

### Fase 2: Componentes y Lógica de Visualización
- [x] **Lógica de Parámetros Dinámicos:** Utilidad para cálculo de timestamps y variables de Grafana.
- [x] **Layout Multitarea:** Separación de métricas de estado (cuadrícula) y gráficos (lista vertical).
- [x] **Selector de Temas:** Implementación de modo Oscuro/Claro que sincroniza automáticamente con los dashboards de Grafana.
- [x] **Contexto del Robot:** Actualización de identidad visual a "Sistema Móvil de Telemetría".

### Fase 3: Interfaz de Usuario (UI/UX) y Navegación
- [x] **Refinamiento de Gráficos:** Intercambio de paneles (Calidad vs Alarmas) para optimizar tamaños.
- [x] **Consolidación Semanal:** Paneles de alarmas y conteos movidos a la sección de métricas rápidas superiores.
- [x] **Ajuste de Paneles Críticos:** Reclasificación de "Alarmas de Calidad" y "Conteo de Alarmas" como métricas pequeñas (stat) para una lectura rápida.
- [x] **Corrección de Lógica Temporal:** Ajuste de parámetros `from`/`to` para mostrar el día completo (00:00 - 23:59) y evitar recortes extraños en el dashboard diario.
- [x] **Optimización de Zoom:** Implementación de parámetros de auto-escala para mejorar la visibilidad de los gráficos embebidos.
- [ ] **Fase Final:** Preparación para despliegue en GitHub Pages.

### Fase 4: Despliegue en GitHub Pages
- [x] **Configuración de Deployment:** Ajustar `vite.config.js` y crear el workflow necesario para GitHub Actions.
- [x] **Instrucciones al Desarrollador:** Explicar cómo configurar los secretos de GitHub y habilitar Pages en el repositorio.
- [x] **Verificación Final:** Comprobar el funcionamiento de la app en la URL pública.

---

## Cómo ejecutar este plan con Planotator
1. **Aprobación:** Confirma este plan respondiendo "Procede con el plan".
2. **Seguimiento:** El agente marcará las tareas como completadas a medida que genere el código.
3. **Personalización:** Puedes solicitar cambios en cualquier fase antes o durante su ejecución.
