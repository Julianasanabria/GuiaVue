<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título e Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">La Composition API: Un Enfoque Flexible y Potente</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Organiza tu código por características lógicas, no por tipo de opción.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          La <b>Composition API</b> es un conjunto de APIs que nos permite crear componentes de Vue utilizando funciones importadas en lugar de declarar opciones. Es un término que abarca:
        </p>
        <q-list dense>
          <q-item><q-item-section avatar><q-icon color="primary" name="api" /></q-item-section><q-item-section><b>APIs de Reactividad</b>, como <code>ref()</code> y <code>reactive()</code>, que nos permiten crear estado reactivo directamente.</q-item-section></q-item>
          <q-item><q-item-section avatar><q-icon color="primary" name="recycling" /></q-item-section><q-item-section><b>Hooks del Ciclo de Vida</b>, como <code>onMounted()</code> y <code>onUnmounted()</code>, para ejecutar código en diferentes etapas.</q-item-section></q-item>
          <q-item><q-item-section avatar><q-icon color="primary" name="sync_alt" /></q-item-section><q-item-section><b>Inyección de Dependencias</b>, con <code>provide()</code> e <code>inject()</code>.</q-item-section></q-item>
        </q-list>
        <p class="text-body1 q-mt-md">
          El lugar principal donde usamos esta API es dentro de la etiqueta <b><code>&lt;script setup&gt;</code></b>, que es una "azúcar sintáctica" para hacer su uso más conciso y ergonómico.
        </p>
      </q-card-section>

      <!-- Conceptos Fundamentales -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Conceptos Fundamentales</div>
        <q-list bordered separator>
          <!-- ref() -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>ref()</code></q-item-label>
              <q-item-label caption>Crea una referencia reactiva para cualquier tipo de valor.</q-item-label>
              <p class="q-mt-sm">
                <code>ref()</code> toma un valor interno y devuelve un objeto de referencia reactivo y mutable. Este objeto tiene una única propiedad <code>.value</code> que apunta al valor interno. Es la forma más común de declarar estado reactivo para valores primitivos (strings, números, booleanos).
              </p>
              <CodeBlock :code="code.ref" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- computed() -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>computed()</code></q-item-label>
              <q-item-label caption>Crea un valor derivado de otras fuentes reactivas.</q-item-label>
              <p class="q-mt-sm">
                Una propiedad computada rastrea sus dependencias reactivas y se recalcula automáticamente solo cuando estas cambian. Son muy eficientes porque su valor se guarda en caché.
              </p>
              <CodeBlock :code="code.computed" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- watch() -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>watch()</code></q-item-label>
              <q-item-label caption>Ejecuta una función cuando una fuente de datos reactiva cambia.</q-item-label>
              <p class="q-mt-sm">
                Es útil para realizar acciones en respuesta a cambios de datos, como llamadas a una API, o para lógica más compleja que no puede ser expresada con una propiedad computada.
              </p>
              <CodeBlock :code="code.watch" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- Hooks de Ciclo de Vida -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>onMounted()</code> y otros hooks</q-item-label>
              <q-item-label caption>Engánchate a los momentos clave de la vida del componente.</q-item-label>
              <p class="q-mt-sm">
                Podemos registrar callbacks para ser ejecutados en diferentes momentos del ciclo de vida. Por ejemplo, <code>onMounted</code> se ejecuta después de que el componente ha sido insertado en el DOM.
              </p>
              <CodeBlock :code="code.hooks" class="q-mt-sm" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Ejemplo Práctico -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ejemplo Interactivo</div>
        <q-card flat bordered>
          <q-card-section>
            <p>Este ejemplo combina <code>ref</code>, <code>computed</code> y una función para demostrar la reactividad.</p>
            <q-input filled v-model="nombre" label="Tu Nombre" clearable />
            <div class="q-mt-md">
              <p><b>Nombre:</b> {{ nombre }}</p>
              <p><b>Número de caracteres (computado):</b> {{ longitudNombre }}</p>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat color="primary" @click="limpiarNombre">Limpiar Nombre</q-btn>
          </q-card-actions>
        </q-card>

        <div class="text-h6 q-mt-lg">Código del Ejemplo</div>
        <CodeBlock :code="code.example" class="q-mt-sm" />
        <div class="text-right q-mt-md">
          <span class="text-caption text-grey-7">Desarrollado por Santiago Carvajal y Juliana Sanabria</span>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import CodeBlock from '../components/CodeBlock.vue';

// Código para los ejemplos
const code = reactive({
  ref: `<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-comment">// Para usarlo, necesitas acceder a su propiedad .value en el script</span>
<span class="token-keyword">const</span> contador = <span class="token-function">ref</span>(<span class="token-number">0</span>)
console.<span class="token-function">log</span>(contador.value) <span class="token-comment">// 0</span>
contador.value<span class="token-operator">++</span>`,
  computed: `<span class="token-keyword">import</span> { ref, computed } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> contador = <span class="token-function">ref</span>(<span class="token-number">1</span>)
<span class="token-comment">// 'masUno' se actualiza automáticamente cuando 'contador' cambia</span>
<span class="token-keyword">const</span> masUno = <span class="token-function">computed</span>(() => contador.value <span class="token-operator">+</span> <span class="token-number">1</span>)`,
  watch: `<span class="token-keyword">import</span> { ref, watch } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> pregunta = <span class="token-function">ref</span>(<span class="token-string">''</span>)
<span class="token-function">watch</span>(pregunta, (nuevaPregunta, viejaPregunta) => {
  console.<span class="token-function">log</span>(<span class="token-string">'La pregunta ha cambiado a:'</span>, nuevaPregunta)
})`,
  hooks: `<span class="token-keyword">import</span> { onMounted, onUnmounted } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-function">onMounted</span>(() => {
  console.<span class="token-function">log</span>(<span class="token-string">'El componente se ha montado en el DOM.'</span>)
})`,
  example: `<span class="token-keyword">import</span> { ref, computed } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> nombre = <span class="token-function">ref</span>(<span class="token-string">'Mundo'</span>)
<span class="token-keyword">const</span> longitudNombre = <span class="token-function">computed</span>(() => nombre.value.length)
<span class="token-keyword">function</span> <span class="token-function">limpiarNombre</span>() {
  nombre.value = <span class="token-string">''</span>
}`
});
// Lógica del ejemplo interactivo
const nombre = ref('Mundo')
const longitudNombre = computed(() => nombre.value.length)
function limpiarNombre() {
  nombre.value = ''
}
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}
</style>