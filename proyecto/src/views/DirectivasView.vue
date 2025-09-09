<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título y Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">Directivas Fundamentales en Vue.js</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Atributos especiales que dan superpoderes a tu HTML
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          Las <b>directivas</b> son atributos especiales que Vue añade al HTML, siempre con el prefijo <code>v-</code>.
          Su trabajo es aplicar efectos reactivos al DOM cuando el valor de su expresión cambia. Son la forma en que Vue
          manipula el contenido y la apariencia de tu página de forma dinámica.
        </p>
      </q-card-section>

      <!-- Lista de Directivas -->
      <q-card-section>
        <q-list bordered separator>
          <!-- v-bind -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>v-bind</code> (o <code>:</code>)</q-item-label>
              <q-item-label caption>Enlaza un atributo HTML a una variable.</q-item-label>
              <p class="q-mt-sm">
                Permite que los atributos de una etiqueta HTML (como <code>src</code>, <code>href</code>, <code>class</code>, <code>style</code>) sean dinámicos,
                tomando su valor de una variable o expresión de JavaScript.
              </p>
              <q-banner class="bg-grey-2 q-mt-sm">
                <code class="code-block" v-pre>
&lt;!-- Sintaxis completa --&gt;
&lt;img v-bind:src="urlDeImagen"&gt;

&lt;!-- Atajo (shorthand) recomendado --&gt;
&lt;a :href="urlSitioWeb"&gt;Visítanos&lt;/a&gt;
&lt;div :class="{ 'activo': estaActivo }"&gt;&lt;/div&gt;
                </code>
              </q-banner>
            </q-item-section>
          </q-item>

          <!-- v-model -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>v-model</code></q-item-label>
              <q-item-label caption>Crea un enlace de datos bidireccional.</q-item-label>
              <p class="q-mt-sm">
                Esencial para formularios. Sincroniza el valor de un input (<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>) con una variable.
                Si el usuario escribe en el input, la variable se actualiza. Si la variable cambia en el código, el valor del input también lo hace.
              </p>
              <q-banner class="bg-grey-2 q-mt-sm">
                <code class="code-block" v-pre>
&lt;!-- El texto del input y la variable 'mensaje' siempre estarán sincronizados --&gt;
&lt;input v-model="mensaje" placeholder="Escribe algo..."&gt;
&lt;p&gt;El mensaje es: {{ mensaje }}&lt;/p&gt;
                </code>
              </q-banner>
            </q-item-section>
          </q-item>

          <!-- v-if, v-else-if, v-else -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>v-if</code> / <code>v-else-if</code> / <code>v-else</code></q-item-label>
              <q-item-label caption>Renderiza un bloque de forma condicional.</q-item-label>
              <p class="q-mt-sm">
                Estas directivas te permiten mostrar u ocultar elementos basados en una condición. <code>v-if</code> solo renderizará el bloque si la expresión es verdadera.
                Los elementos son realmente añadidos o eliminados del DOM.
              </p>
              <q-banner class="bg-grey-2 q-mt-sm">
                <code class="code-block" v-pre>
&lt;div v-if="tipo === 'A'"&gt;Bloque A&lt;/div&gt;
&lt;div v-else-if="tipo === 'B'"&gt;Bloque B&lt;/div&gt;
&lt;div v-else&gt;Cualquier otro bloque&lt;/div&gt;
                </code>
              </q-banner>
            </q-item-section>
          </q-item>

          <!-- v-for -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>v-for</code></q-item-label>
              <q-item-label caption>Renderiza una lista de elementos basada en un array.</q-item-label>
              <p class="q-mt-sm">
                Perfecta para iterar sobre un array (o un objeto) y renderizar un bloque por cada elemento. Es crucial usar el atributo <code>:key</code> para darle a Vue una identidad única para cada elemento, lo que mejora el rendimiento.
              </p>
              <q-banner class="bg-grey-2 q-mt-sm">
                <code class="code-block" v-pre>
&lt;ul&gt;
  &lt;li v-for="(item, index) in miLista" :key="item.id"&gt;
    {{ index }} - {{ item.texto }}
  &lt;/li&gt;
&lt;/ul&gt;
                </code>
              </q-banner>
            </q-item-section>
          </q-item>

          <!-- v-on -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>v-on</code> (o <code>@</code>)</q-item-label>
              <q-item-label caption>Escucha eventos del DOM.</q-item-label>
              <p class="q-mt-sm">
                Permite ejecutar código JavaScript cuando ocurre un evento, como un clic, un envío de formulario o el paso del ratón.
              </p>
              <q-banner class="bg-grey-2 q-mt-sm">
                <code class="code-block" v-pre>
&lt;!-- Sintaxis completa --&gt;
&lt;button v-on:click="miMetodo"&gt;Haz clic&lt;/button&gt;

&lt;!-- Atajo (shorthand) recomendado --&gt;
&lt;form @submit.prevent="enviarFormulario"&gt;...&lt;/form&gt;
                </code>
              </q-banner>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Consejos y Buenas Prácticas -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Consejos y Buenas Prácticas</div>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar><q-icon name="check_circle" color="positive" /></q-item-section>
            <q-item-section>
              <q-item-label>Usa siempre los atajos <code>:</code> para <code>v-bind</code> y <code>@</code> para <code>v-on</code>.</q-item-label>
              <q-item-label caption>Son el estándar en la comunidad y hacen tu código más limpio y legible.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="check_circle" color="positive" /></q-item-section>
            <q-item-section>
              <q-item-label>Proporciona una <code>:key</code> única en cada <code>v-for</code>.</q-item-label>
              <q-item-label caption>Idealmente, usa un ID único del elemento. Usar el `index` es un último recurso.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="warning" color="orange" /></q-item-section>
            <q-item-section>
              <q-item-label>Evita usar <code>v-if</code> y <code>v-for</code> en el mismo elemento.</q-item-label>
              <q-item-label caption>Puede ser confuso y afectar el rendimiento. Es mejor filtrar la lista antes con una propiedad computada o mover el `v-if` a un elemento contenedor.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// Se declaran las variables usadas en los ejemplos de la plantilla para evitar errores en la consola.
// Estas variables no se usan para crear un ejemplo interactivo, solo para que Vue las reconozca.
const urlDeImagen = ref('');
const urlSitioWeb = ref('');
const estaActivo = ref(false);
const mensaje = ref('');
const tipo = ref('');
const miLista = ref([]);
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
.code-block {
  white-space: pre-wrap;
  word-break: break-word;
  display: block;
  background: transparent;
}
</style>