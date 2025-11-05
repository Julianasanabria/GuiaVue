<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary text-center">¿Qué es Vue.js?</div>
        <div class="text-subtitle2 q-mt-xs text-center text-grey-7">
          Framework progresivo para construir interfaces de usuario
        </div>
        <q-separator class="q-my-sm" />
        <p>
          <b>Vue.js</b> es un framework JavaScript de código abierto para construir interfaces de usuario y aplicaciones de una sola página (SPA). 
          Fue creado para ser <b>incrementalmente adoptable</b>: puedes usar solo la parte que necesitas, desde una librería ligera hasta una plataforma completa con enrutamiento, gestión de estado y herramientas de compilación.
        </p>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Historia y creación</div>
        <q-list dense>
          <q-item>
            <q-item-section>
              <b>Creador:</b> <span class="text-grey-9">Evan You</span>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <b>Primera versión pública:</b> <span class="text-grey-9">febrero de 2014</span>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <b>Vue 3 lanzado:</b> <span class="text-grey-9">septiembre de 2020</span> (después de varios años de desarrollo y versiones alfa/beta)
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <b>Inspiración:</b> <span class="text-grey-9">Combina ideas de Angular (directivas, templates) y React (componentes, flujo unidireccional)</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Características principales de Vue 3</div>
        <q-list bordered separator class="custom-list">
          <q-item v-for="(feature, index) in features" :key="index">
            <q-item-section>
              <div class="text-bold">{{ feature.title }}</div>
              <div>{{ feature.description }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">APIs en Vue 3</div>
        <div class="row q-gutter-md">
          <div class="col-12 col-md-6">
            <q-card flat bordered class="bg-grey-1">
              <q-card-section>
                <div class="text-h6 text-primary">Options API</div>
                <p class="q-mt-sm">
                  Estilo clásico de Vue. Organiza la lógica en opciones como <code>data</code>, <code>methods</code>, <code>computed</code>, etc.
                </p>
                <q-code class="text-caption">
import { createApp } from 'vue'<br>
createApp({<br>
&nbsp;&nbsp;data() { return { count: 0 } },<br>
&nbsp;&nbsp;methods: { inc() { this.count++ } }<br>
}).mount('#app')
                </q-code>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="bg-grey-1">
              <q-card-section>
                <div class="text-h6 text-primary">Composition API</div>
                <p class="q-mt-sm">
                  Nueva forma (introducida en Vue 3) para organizar lógica basada en funciones. Ideal para componentes complejos y reutilización de lógica.
                </p>
                <q-code class="text-caption">
import { createApp, ref } from 'vue'<br>
createApp({<br>
&nbsp;&nbsp;setup() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const count = ref(0)<br>
&nbsp;&nbsp;&nbsp;&nbsp;const inc = () => count.value++<br>
&nbsp;&nbsp;&nbsp;&nbsp;return { count, inc }<br>
&nbsp;&nbsp;}<br>
}).mount('#app')
                </q-code>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">¿Cómo se usa Vue 3?</div>
        <p>
          Puedes integrar Vue 3 de varias formas:
        </p>
        <q-list dense>
          <q-item>
            <q-item-section side top>
              <q-icon name="code" color="primary" />
            </q-item-section>
            <q-item-section>
              <b>CDN (rápido para pruebas):</b> Incluye el script desde un CDN y usa directamente en HTML.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side top>
              <q-icon name="build" color="primary" />
            </q-item-section>
            <q-item-section>
              <b>Vue CLI (legacy):</b> Herramienta oficial para scaffolding (aunque ya está en modo mantenimiento).
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side top>
              <q-icon name="terminal" color="primary" />
            </q-item-section>
            <q-item-section>
              <b>Vite (recomendado):</b> Herramienta de construcción ultrarrápida creada por Evan You. Ideal para proyectos modernos con Vue 3.
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side top>
              <q-icon name="extension" color="primary" />
            </q-item-section>
            <q-item-section>
              <b>Frameworks UI:</b> Se integra perfectamente con Quasar, Vuetify, Element Plus, etc.
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ventajas de Vue 3</div>
        <q-list bordered class="custom-list">
          <q-item v-for="(advantage, i) in advantages" :key="i">
            <q-item-section>
              <q-icon name="check_circle" color="green" class="q-mr-sm" />
              <span>{{ advantage }}</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ecosistema de Vue</div>
        <div class="row q-gutter-sm">
          <div v-for="tool in ecosystem" :key="tool.name" class="col-6 col-sm-4 col-md-3">
            <q-card flat bordered class="text-center q-pa-sm bg-grey-2">
              <div class="text-bold">{{ tool.name }}</div>
              <div class="text-caption text-grey-7">{{ tool.desc }}</div>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="text-right">
        <span class="text-caption text-grey-7">
          Desarrollado por Santiago Carvajal y Juliana Sanabria
        </span>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const features = [
  {
    title: 'Reactividad basada en Proxies',
    description: 'Vue 3 usa el objeto Proxy de JavaScript para rastrear reactividad de forma más eficiente y completa (incluye arrays, propiedades dinámicas, etc.).'
  },
  {
    title: 'Composition API',
    description: 'Permite agrupar lógica relacionada, mejorar la reutilización y manejar mejor la complejidad en componentes grandes.'
  },
  {
    title: 'Rendimiento mejorado',
    description: 'Menor tamaño del bundle (~10KB comprimido), mejor rendimiento en actualizaciones y renderizado.'
  },
  {
    title: 'Soporte para Fragments y Teleport',
    description: 'Puedes devolver múltiples elementos raíz (Fragments) o renderizar componentes en otro lugar del DOM (Teleport).'
  },
  {
    title: 'TypeScript nativo',
    description: 'Vue 3 está escrito en TypeScript y ofrece excelente soporte para tipado estático.'
  },
  {
    title: 'Tree-shaking',
    description: 'Solo se incluye en el bundle el código que realmente usas, reduciendo el tamaño final.'
  }
];

const advantages = [
  'Curva de aprendizaje suave para principiantes',
  'Excelente documentación oficial (en múltiples idiomas)',
  'Flexibilidad: puede usarse como librería o framework completo',
  'Gran rendimiento y optimización automática',
  'Comunidad activa y ecosistema maduro',
  'Compatibilidad con Vue 2 mediante el paquete de migración'
];

const ecosystem = [
  { name: 'Vue Router', desc: 'Enrutamiento oficial' },
  { name: 'Pinia', desc: 'Gestión de estado (reemplazo moderno de Vuex)' },
  { name: 'Vite', desc: 'Herramienta de construcción' },
  { name: 'Quasar', desc: 'Framework UI completo con SSR, PWA, etc.' },
  { name: 'Vuetify', desc: 'UI basado en Material Design' },
  { name: 'Vue DevTools', desc: 'Extensión para depuración en navegador' }
];
</script>

<style scoped>
.my-card {
  max-width: 950px;
  margin: 2rem auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 1rem;
}

.custom-list {
  border-radius: 8px;
  background: #fafafa;
}
.custom-list .q-item {
  transition: background 0.2s;
}
.custom-list .q-item:hover {
  background: #f0f0f0;
}

.text-subtitle2 {
  font-size: 18px;
}
.text-h4, .text-h5 {
  font-weight: 700;
}
</style>