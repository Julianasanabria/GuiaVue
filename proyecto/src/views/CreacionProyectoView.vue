<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Creación de proyecto Vue.js</div>
        <q-separator class="q-my-sm" />

        <p>Existen tres formas principales de crear un proyecto Vue.js:</p>

        <p class="q-mt-md"><b>Proyecto rápido con CDN:</b></p>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code>
&lt;script src="https://unpkg.com/vue@3"&gt;&lt;/script&gt;<br>
&lt;div id="app"&gt;{{ mensaje }}&lt;/div&gt;<br>
&lt;script&gt;<br>
Vue.createApp({ data(){ return { mensaje: 'Hola Vue' } } }).mount('#app')<br>
&lt;/script&gt;
          </code>
        </q-banner>
        <p>Ideal para pruebas rápidas, ejemplos y proyectos muy pequeños. No requiere instalación ni configuración.</p>

        <p class="q-mt-md"><b>Proyecto con Vue CLI:</b></p>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code>
npm install -g @vue/cli<br>
vue create mi-proyecto-vue<br>
cd mi-proyecto-vue<br>
npm run serve
          </code>
        </q-banner>
        <p>Recomendado para proyectos legacy o cuando necesitas configuración avanzada (plugins, presets, etc).</p>

        <p class="q-mt-md"><b>Proyecto con Vite (recomendado en Vue 3):</b></p>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code>
npm create vite@latest<br>
cd mi-proyecto<br>
npm install<br>
npm run dev
          </code>
        </q-banner>
        <p>La opción moderna y oficial para Vue 3. Vite es ultrarrápido, fácil de configurar y soporta hot reload.</p>

        <p class="q-mt-md"><b>Consejos:</b></p>
        <ul>
          <li>Usa <b>Vite</b> para proyectos modernos y rápidos.</li>
          <li>Vue CLI sigue siendo útil para proyectos legacy.</li>
          <li>La opción CDN es ideal para pruebas rápidas y ejemplos.</li>
          <li>Siempre revisa la documentación oficial antes de iniciar un proyecto grande.</li>
        </ul>

        <div class="q-mt-md">
          <b>Ventajas de Vite:</b>
          <ul>
            <li>Arranque instantáneo y recarga en caliente.</li>
            <li>Configuración mínima y soporte para TypeScript.</li>
            <li>Compatible con Vue 3 y otras tecnologías modernas.</li>
          </ul>
        </div>
        <div class="q-mt-md">
          <b>Recursos recomendados:</b>
          <ul>
            <li><a href="https://vuejs.org/" target="_blank">Documentación oficial de Vite</a></li>
            <li><a href="https://vuejs.org/guide/quick-start" target="_blank">Guía rápida de Vue.js</a></li>
            <li><a href="https://youtu.be/fxJ-HkVtI1M?si=Q2ihyxPH_B2_FtBn" target="_blank">Video: Crear proyecto Vue 3 con Vite</a></li>
          </ul>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// Este archivo es solo para documentación visual, no requiere lógica extra.
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}
.q-banner {
  font-size: 15px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 6px;
  line-height: 1.7;
  margin-bottom: 10px;
  background: #f5f5f5;
  color: #222;
}
ul {
  list-style-type: '✔ ';
  padding-left: 24px;
}
li {
  margin-bottom: 0.75rem;
  font-size: 16px;
}
code {
  white-space: pre-wrap;
  word-break: break-word;
  background: #e3e3e3;
  padding: 2px 6px;
  border-radius: 4px;
  display: block;
}
</style>
