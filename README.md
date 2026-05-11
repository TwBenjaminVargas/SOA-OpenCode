# Monitor de Calidad de Aire - Telemetría Robotizada

Este proyecto es una aplicación web responsive desarrollada para visualizar datos de sensores de calidad de aire capturados por un sistema de telemetría móvil (robot).

## 🚀 Propósito del Proyecto
Esta aplicación fue creada íntegramente como una prueba de concepto para demostrar las capacidades de **OpenCode** utilizando el plugin **Planotator**. El desarrollo se realizó siguiendo un flujo de trabajo estructurado por fases, donde la inteligencia artificial actuó como el desarrollador principal bajo la supervisión y guía del usuario mediante anotaciones en un plan de desarrollo (`DASHBOARD_PLAN.md`).

## 🌐 Demo en Vivo
Puedes ver la aplicación funcionando aquí:
[https://twbenjaminvargas.github.io/SOA-OpenCode/](https://twbenjaminvargas.github.io/SOA-OpenCode/)

## ✨ Características Principales
- **Visualización Inteligente:** Integración de dashboards de Grafana optimizados para embeber paneles individuales.
- **Lógica Temporal Dinámica:** Ajuste automático de parámetros de tiempo para mostrar datos del día actual (00:00 - 23:59) o resumen semanal de los últimos 7 días.
- **Modo Oscuro/Claro:** Selector de tema que sincroniza la interfaz de la aplicación con el estilo visual de los dashboards de Grafana.
- **Diseño Adaptativo:** Interfaz construida con Vue 3 y Tailwind CSS, optimizada para dispositivos móviles y escritorio.
- **Despliegue Automatizado:** Configuración de CI/CD mediante GitHub Actions para despliegue continuo en GitHub Pages.

## 🛠️ Tecnologías Utilizadas
- **Vue 3 (Vite):** Framework principal.
- **Tailwind CSS:** Estilizado y diseño responsive.
- **Grafana (Embedded):** Visualización de datos IoT.
- **GitHub Actions:** Automatización de despliegue.

## 🤖 Desarrollo con Planotator
El proceso de desarrollo se dividió en 4 fases principales:
1. **Scaffolding:** Inicialización del proyecto y configuración estética base.
2. **Lógica de Visualización:** Implementación de utilidades dinámicas para URLs de Grafana.
3. **Refinamiento UI/UX:** Optimización de la distribución de paneles (stats vs gráficos) y modo oscuro.
4. **Despliegue:** Configuración del entorno para producción en GitHub Pages.

---
Desarrollado con ❤️ usando **OpenCode** y **Planotator**.
