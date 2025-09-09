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
              <div class="code-block-container q-mt-sm" v-pre><code>import { ref } from 'vue'

const contador = ref(0)

function incrementar() {
  // Para acceder o modificar el valor, se usa .value
  contador.value++
}</code></div>
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
              <div class="code-block-container q-mt-sm" v-pre><code>import { ref, computed } from 'vue'

const contador = ref(1)
const doble = computed(() => contador.value * 2) // Se actualiza si 'contador' cambia

console.log(doble.value) // 2</code></div>
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
              <div class="code-block-container q-mt-sm" v-pre><code>import { ref, watch } from 'vue'

const pregunta = ref('')

watch(pregunta, (nuevaPregunta, viejaPregunta) => {
  console.log(`La pregunta ha cambiado de "${viejaPregunta}" a "${nuevaPregunta}"`)
})</code></div>
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
              <div class="code-block-container q-mt-sm" v-pre><code>import { onMounted } from 'vue'

onMounted(() => {
  console.log('El componente ha sido montado.')
})</code></div>
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
        <div class="code-block-container q-mt-sm" v-pre><code>&lt;template&gt;
  &lt;q-input filled v-model="nombre" label="Tu Nombre" /&gt;
  &lt;p&gt;&lt;b&gt;Número de caracteres (computado):&lt;/b&gt; {{ longitudNombre }}&lt;/p&gt;
  &lt;q-btn @click="limpiarNombre"&gt;Limpiar Nombre&lt;/q-btn&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue'

// Estado reactivo
const nombre = ref('Mundo')

// Valor computado que depende de 'nombre'
const longitudNombre = computed(() => nombre.value.length)

// Función que modifica el estado
function limpiarNombre() {
  nombre.value = ''
}
&lt;/script&gt;</code></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// Lógica para el ejemplo interactivo
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

/* Estilo para los bloques de código */
.code-block-container {
  font-size: 14px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 8px;
  line-height: 1.7;
  margin-bottom: 10px;
  background: #f5f5f5;
  color: #2c3e50;
  padding: 1rem 1.2rem;
  overflow-x: auto;
}

/* Estilo para el código inline */
code {
  background-color: #e3f2fd;
  color: #1d4ed8;
  padding: 0.2em 0.4em;
  margin: 0 2px;
  font-size: 85%;
  border-radius: 6px;
  white-space: pre-wrap;
  word-break: break-word;
}

/* Anular el estilo inline para el código dentro de los bloques */
.code-block-container code {
  background: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
  font-size: inherit;
  border-radius: 0;
}
</style>