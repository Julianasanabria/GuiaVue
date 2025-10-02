<template>
  <q-page class="q-pa-md">
    <!-- Importamos y usamos el nuevo componente CodeBlock -->
    <q-card class="my-card">
      <!-- Título e Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">Pinia: El Gestor de Estado Oficial</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          La forma recomendada, simple y potente de gestionar el estado global en Vue 3.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          Imagina que tienes datos que necesitas compartir entre componentes que no son padre-hijo directos (como el estado de autenticación del usuario, el carrito de compras, etc.). Pinia te ofrece un "almacén" centralizado (store) donde puedes guardar, modificar y leer estos datos desde cualquier parte de tu aplicación de una manera reactiva y organizada.
        </p>
      </q-card-section>

      <!-- Instalación y Configuración -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">1. Instalación y Configuración</div>
        <p>Añadir Pinia a tu proyecto es muy sencillo.</p>
        <CodeBlock :code="code.install" />
        <p class="q-mt-md">Luego, necesitas registrarlo como un plugin en tu archivo <code>main.js</code>:</p>
        <CodeBlock :code="code.setup" />
      </q-card-section>

      <!-- Estructura de Carpetas -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">2. Estructura de Carpetas y Definición de un Store</div>
        <p>La convención es crear una carpeta <code>src/stores</code> para organizar todos tus "almacenes" de datos.</p>
        <p>Un <b>store</b> se define con <code>defineStore()</code>. Contiene tres conceptos clave: <b>state</b>, <b>getters</b> y <b>actions</b>.</p>
        <CodeBlock :code="code.store" />
      </q-card-section>

      <!-- Ejemplo Interactivo -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">3. Usando el Store en un Componente</div>
        <p>Para usar el store, simplemente impórtalo y llámalo dentro del <code>&lt;script setup&gt;</code> de tu componente.</p>
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Ejemplo Interactivo</div>
            <p>Este contador es global. Si navegas a otra página y vuelves, mantendrá su valor (mientras no recargues la página).</p>
            <div class="text-body1 q-mb-sm">
              Valor del State (<code>count</code>): <b class="text-primary">{{ count }}</b>
            </div>
            <div class="text-body1">
              Valor del Getter (<code>doubleCount</code>): <b class="text-secondary">{{ doubleCount }}</b>
            </div>
            <div class="q-mt-md q-gutter-sm">
              <q-btn color="primary" label="Incrementar (Action)" @click="counterStore.increment" />
              <q-btn color="secondary" label="Aleatorio (Action)" @click="counterStore.randomizeCounter" />
            </div>
          </q-card-section>
          <q-card-section class="bg-grey-2">
            <p>Para mantener la reactividad al desestructurar el store, usa la utilidad <code>storeToRefs</code>.</p>
            <CodeBlock :code="code.usage" />
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ventajas y Recursos</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-h6">Ventajas de Pinia</div>
            <ul>
              <li><b>Sencillo e Intuitivo:</b> Su API es muy similar a la Composition API de Vue.</li>
              <li><b>Totalmente tipado:</b> Excelente soporte para TypeScript.</li>
              <li><b>Devtools:</b> Se integra con las Devtools de Vue para una depuración increíble.</li>
              <li><b>Modular y Escalable:</b> Puedes tener múltiples stores, cada uno para una parte de tu aplicación.</li>
              <li><b>Extensible:</b> Se puede ampliar con plugins, como el de persistencia en localStorage.</li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <div class="text-h6">Recursos Útiles</div>
            <ul>
              <li><a href="https://pinia.vuejs.org/" target="_blank">Documentación oficial de Pinia</a></li>
              <li><a href="https://vuejs.org/" target="_blank">Vue.js oficial</a></li>
              <li><router-link to="/persistencia">Persistencia de datos con Pinia</router-link></li>
            </ul>
          </div>
        </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useCounterStore } from '../stores/counterStore' // Actualizar la ruta de importación
import CodeBlock from '../components/CodeBlock.vue';

const code = reactive({
  install: `<span class="token-keyword">npm</span> <span class="token-function">install</span> pinia`,
  setup: `<span class="token-comment">// src/main.js</span>
<span class="token-keyword">import</span> { createApp } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">import</span> { createPinia } <span class="token-keyword">from</span> <span class="token-string">'pinia'</span> <span class="token-comment">// 1. Importar</span>
<span class="token-keyword">import</span> App <span class="token-keyword">from</span> <span class="token-string">'./App.vue'</span>

<span class="token-keyword">const</span> app = <span class="token-function">createApp</span>(App)

app.<span class="token-function">use</span>(<span class="token-function">createPinia</span>()) <span class="token-comment">// 2. Usar el plugin</span>
app.<span class="token-function">mount</span>(<span class="token-string">'#app'</span>)`,
  store: `<span class="token-comment">// src/stores/counterStore.js</span>
<span class="token-keyword">import</span> { defineStore } <span class="token-keyword">from</span> <span class="token-string">'pinia'</span>
<span class="token-keyword">import</span> { ref, computed } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>

<span class="token-keyword">export const</span> useCounterStore = <span class="token-function">defineStore</span>(<span class="token-string">'counter'</span>, () => {
  <span class="token-comment">// 1. STATE (Estado)</span>
  <span class="token-comment">// Son como el 'data' de un componente. Se definen con ref().</span>
  <span class="token-keyword">const</span> count = <span class="token-function">ref</span>(<span class="token-number">0</span>)

  <span class="token-comment">// 2. GETTERS (Obtenedores)</span>
  <span class="token-comment">// Son como las 'computed properties'.</span>
  <span class="token-keyword">const</span> doubleCount = <span class="token-function">computed</span>(() => count.value * <span class="token-number">2</span>)

  <span class="token-comment">// 3. ACTIONS (Acciones)</span>
  <span class="token-comment">// Son como los 'methods'. Pueden ser asíncronos.</span>
  <span class="token-keyword">function</span> <span class="token-function">increment</span>() {
    count.value<span class="token-operator">++</span>
  }

  <span class="token-comment">// Es obligatorio retornar todo lo que quieras exponer.</span>
  <span class="token-keyword">return</span> { count, doubleCount, increment }
})`,
  usage: `<span class="token-keyword">import</span> { storeToRefs } <span class="token-keyword">from</span> <span class="token-string">'pinia'</span>
<span class="token-keyword">import</span> { useCounterStore } <span class="token-keyword">from</span> <span class="token-string">'../stores/counterStore'</span>
<span class="token-keyword">const</span> counterStore = <span class="token-function">useCounterStore</span>()`
});

// 1. Instanciamos el store
const counterStore = useCounterStore()

// 2. Para poder usar las propiedades (state y getters) directamente en el template
// y mantener su reactividad, usamos `storeToRefs`.
const { count, doubleCount } = storeToRefs(counterStore)

// Las acciones (métodos) se pueden usar directamente desde el store.
</script>

<style scoped>
.my-card {
  max-width: 700px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}
ul {
  padding-left: 20px;
}
</style>
