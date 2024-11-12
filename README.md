# CO2 Monitor

## Descripción

**CO2 Monitor** es una aplicación web progresiva (PWA) que permite monitorear en tiempo real los niveles de dióxido de carbono (CO₂) en un entorno determinado. Esta herramienta interactiva ofrece gráficos detallados para la visualización y análisis de los datos de CO₂, con un diseño responsivo y moderno que se adapta a dispositivos móviles, tablets y computadoras.

## Características

- **Monitoreo en tiempo real**: Actualizaciones constantes sobre los niveles de CO₂ en el entorno.
- **Gráficas interactivas**: Visualización de los datos mediante gráficos utilizando `chart.js` y `react-chartjs-2`.
- **Aplicación PWA**: Permite la instalación en dispositivos móviles y su uso en modo offline.
- **Interfaz responsiva**: Se adapta a diferentes tamaños de pantalla, asegurando una experiencia de usuario óptima en cualquier dispositivo.
- **Consumo de API**: El sistema consume datos en tiempo real sobre los niveles de CO₂ a través de la API de Node.js disponible en [https://co2-api.vercel.app/api/co2](https://co2-api.vercel.app/api/co2).

## Instalación

### Prerrequisitos

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema.

### Pasos de instalación

### 1. Clona el repositorio en tu máquina local:

   git clone https://github.com/OsmelMdz/sistema-de-co2.git
   cd sistema-de-co2

### 2. Instala las dependencias necesarias para ejecutar el proyecto:

   npm install chart.js react-chartjs-2

### 3. Inicia la aplicación:

   npm start

### Tecnologías utilizadas

**React.js:** Librería de JavaScript para construir interfaces de usuario interactivas.
**Chart.js:** Biblioteca de JavaScript para la creación de gráficos interactivos.
**React Chart.js 2:** Envoltorio para usar Chart.js con React.
**Node.js:** Entorno de ejecución de JavaScript para el backend.

### Autor:
**Copyright (c) 2024 Ing. Hector Osmel Mendez Lopez**
**Página Web:** [https://osmel-dev.vercel.app/](https://osmel-dev.vercel.app/).