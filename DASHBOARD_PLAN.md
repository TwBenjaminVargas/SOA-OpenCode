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
- [ ] **Lógica de Parámetros Dinámicos:** Implementar una utilidad que calcule los rangos de tiempo (`from`, `to`) y variables (`var-dia`) requeridos por Grafana basándose en la fecha actual del usuario.
- [ ] **Componente `GrafanaDashboard.vue`:**
    - Renderizado de dashboards mediante `<iframe>` con URLs dinámicas.
    - Interfaz agradable con estados de carga específicos para cada tipo de gráfico.
- [ ] **Diseño Adaptativo (Mobile-First):** Asegurar que las métricas clave (como "Última medición" o "Calidad del aire") sean legibles en móviles.

### Fase 3: Interfaz de Usuario (UI/UX) y Navegación
- [ ] **Dashboard Layout:** Crear una interfaz limpia que resalte las mediciones de calidad de aire.
- [ ] **Selector de Temporalidad:** Control visual para que el usuario alterne manualmente entre vista de "Hoy" y "Semanal".
- [ ] **Estética IoT:** Aplicar un tema visual moderno acorde a sistemas de monitoreo.

### Fase 4: Despliegue en GitHub Pages
- [ ] **Configuración de Deployment:** Ajustar `vite.config.js` y crear el workflow necesario para GitHub Actions.
- [ ] **Instrucciones al Desarrollador:** Explicar cómo configurar los secretos de GitHub y habilitar Pages en el repositorio.
- [ ] **Verificación Final:** Comprobar el funcionamiento de la app en la URL pública.

---

## Cómo ejecutar este plan con Planotator
1. **Aprobación:** Confirma este plan respondiendo "Procede con el plan".
2. **Seguimiento:** El agente marcará las tareas como completadas a medida que genere el código.
3. **Personalización:** Puedes solicitar cambios en cualquier fase antes o durante su ejecución.
