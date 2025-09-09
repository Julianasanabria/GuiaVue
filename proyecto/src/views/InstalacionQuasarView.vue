
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <!-- Título e Introducción -->
            <q-card-section>
                <div class="text-h4 text-primary">Instalación y Configuración de Quasar</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    La guía definitiva para iniciar tu proyecto, desde cero o en una app existente.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Quasar es un framework de UI sobre Vue.js que te permite construir rápidamente interfaces de alta calidad. Su poder reside en su ecosistema integrado. Aquí te mostraremos las dos formas principales de instalarlo, para que elijas la que mejor se adapte a tus necesidades.
                </p>
            </q-card-section>

            <!-- Opción 1: Proyecto Nuevo -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Opción 1: Crear un Proyecto Nuevo con Quasar <q-badge color="positive" label="Recomendado" /></div>
                <p>Esta es la forma <b>más sencilla y potente</b> de usar Quasar. El CLI (Command Line Interface) de Quasar no solo crea el proyecto, sino que también te proporciona herramientas para gestionarlo, compilarlo y desplegarlo en múltiples plataformas (web, móvil, escritorio).</p>
                <div class="text-h6 q-mt-lg">Paso a Paso</div>
                <q-list bordered separator class="rounded-borders">
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_one" color="primary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Ejecuta el comando de creación</q-item-label>
                            <q-item-label caption>Este comando iniciará un asistente interactivo en tu terminal.</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block">npm init quasar</code></q-banner>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="question_answer" color="primary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Sigue el asistente interactivo</q-item-label>
                            <q-item-label caption>Quasar te preguntará sobre tu proyecto: nombre, pre-procesador CSS (Sass/SCSS), si quieres incluir ESLint, Pinia, Axios, etc. ¡Puedes configurar casi todo desde el inicio!</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_3" color="primary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Navega y arranca el servidor de desarrollo</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block"># Reemplaza "mi-app-quasar" con el nombre que elegiste
cd mi-app-quasar
quasar dev</code></q-banner>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="text-h6 q-mt-lg">¿Qué obtienes con este método?</div>
                <q-list dense>
                    <q-item><q-item-section avatar><q-icon name="check_circle" color="positive" /></q-item-section><q-item-section><b>Integración perfecta:</b> Todo (Vite, Vue, Quasar) está pre-configurado para funcionar en armonía.</q-item-section></q-item>
                    <q-item><q-item-section avatar><q-icon name="layers" color="positive" /></q-item-section><q-item-section><b>Modos de Build:</b> Acceso a los comandos `quasar build` para generar SPAs, SSR, PWA, apps móviles (Capacitor) y de escritorio (Electron) sin configuración extra.</q-item-section></q-item>
                    <q-item><q-item-section avatar><q-icon name="auto_awesome" color="positive" /></q-item-section><q-item-section><b>Optimización automática (Tree-shaking):</b> Quasar se encarga de importar solo los componentes, directivas y plugins que usas, manteniendo tu app ligera.</q-item-section></q-item>
                    <q-item><q-item-section avatar><q-icon name="folder_special" color="positive" /></q-item-section><q-item-section><b>Estructura de carpetas organizada:</b> Te crea directorios como `layouts`, `pages`, y el archivo `quasar.config.js` para una organización clara.</q-item-section></q-item>
                </q-list>
            </q-card-section>

            <!-- Opción 2: Proyecto Existente -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Opción 2: Añadir a un Proyecto Vue Existente (Vite) <q-badge color="orange" label="Avanzado" /></div>
                <p>Si ya tienes un proyecto creado con Vite y no quieres empezar de cero, puedes añadir Quasar manualmente usando su plugin oficial. Este método requiere más configuración manual.</p>
                <div class="text-h6 q-mt-lg">Paso a Paso</div>
                <q-list bordered separator class="rounded-borders">
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_one" color="secondary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Instala las dependencias necesarias</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block"># Instala Quasar y su plugin para Vite
npm install quasar @quasar/extras
# Sass es el pre-procesador recomendado por Quasar
npm install -D sass vite-plugin-quasar</code></q-banner>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_two" color="secondary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Configura <code>vite.config.js</code></q-item-label>
                            <q-item-label caption>Importa y añade el plugin de Quasar a tu configuración de Vite. Esto es crucial para que Vite entienda los componentes de Quasar y aplique el tree-shaking.</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // Asegúrate de que las rutas a los archivos SASS sean correctas
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})</code></q-banner>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_3" color="secondary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Modifica tu archivo de entrada (<code>main.js</code>)</q-item-label>
                            <q-item-label caption>Importa los estilos de Quasar y dile a tu instancia de Vue que use el framework.</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, Notify } from 'quasar' // Importa Quasar y los plugins que necesites

// Importa los estilos de Quasar (iconos y css base)
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify // Ejemplo: añade el plugin de Notificaciones
  }, 
  config: {
    notify: { /* Opciones por defecto para Notify */ }
  }
})

myApp.mount('#app')</code></q-banner>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="looks_4" color="secondary" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Crea el archivo de variables (opcional)</q-item-label>
                            <q-item-label caption>Crea el archivo <code>src/quasar-variables.sass</code> para personalizar los colores y estilos de Quasar.</q-item-label>
                            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>// src/quasar-variables.sass
$primary   : #1976D2
$secondary : #26A69A
$accent    : #9C27B0

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037
</code></q-banner>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <!-- Conclusión -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Conclusión: ¿Cuál método debo elegir?</div>
                <q-list bordered separator>
                    <q-item>
                        <q-item-section avatar><q-icon color="positive" name="rocket_launch" size="lg" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Para cualquier proyecto nuevo...</q-item-label>
                            <q-item-label caption>Usa <b>Quasar CLI (`npm init quasar`)</b>. Es la experiencia completa, optimizada y recomendada. Te ahorrará horas de configuración y te dará acceso a todo el poder del ecosistema Quasar con comandos simples.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon color="secondary" name="add_circle_outline" size="lg" /></q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-bold">Si ya tienes un proyecto Vue + Vite...</q-item-label>
                            <q-item-label caption>Usa el <b>Plugin de Vite</b>. Es la forma correcta de integrar Quasar en un entorno existente. Ten en cuenta que perderás las facilidades del Quasar CLI para compilar para diferentes plataformas (móvil, escritorio, etc.).</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
</script>

<style scoped>
.my-card {
    max-width: 900px;
    margin: 2rem auto;
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    background: #fff;
}
.q-banner {
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
    border-radius: 8px;
    line-height: 1.7;
    background: #f5f5f5;
    color: #222;
}
code {
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
    background-color: #e3e3e3;
    padding: 2px 6px;
    border-radius: 4px;
}
.code-block {
    white-space: pre-wrap;
    word-break: break-word;
    display: block;
    background: transparent;
    padding: 0;
}
</style>