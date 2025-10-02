<template>
  <q-page class="q-pa-md">
    <!-- Importamos y usamos el nuevo componente CodeBlock -->
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
          manipula el contenido y la apariencia de tu página de forma dinámica. ¡Son el corazón de la reactividad de Vue!
        </p>
      </q-card-section>

      <!-- Lista de Directivas -->
      <q-card-section>
        <q-list bordered separator>
          <!-- v-bind -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-bind</code> (o <code>:</code>)</q-item-label>
              <q-item-label caption>Enlaza un atributo HTML a una variable.</q-item-label>
              <p class="q-mt-md">
                Permite que los atributos de una etiqueta HTML (como <code>src</code>, <code>href</code>, <code>class</code>, <code>style</code>) sean dinámicos,
                tomando su valor de una variable o expresión de JavaScript.
              </p>
              <CodeBlock :code="code.vBind" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-model -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-model</code></q-item-label>
              <q-item-label caption>Crea un enlace de datos bidireccional.</q-item-label>
              <p class="q-mt-md">
                Esencial para formularios. Sincroniza el valor de un input (<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>) con una variable.
                Si el usuario escribe en el input, la variable se actualiza. Si la variable cambia en el código, el valor del input también lo hace.
              </p>
              <CodeBlock :code="code.vModel" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-if, v-else-if, v-else -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-if</code> / <code>v-else-if</code> / <code>v-else</code></q-item-label>
              <q-item-label caption>Renderiza un bloque de forma condicional.</q-item-label>
              <p class="q-mt-md">
                Estas directivas te permiten mostrar u ocultar elementos basados en una condición. <code>v-if</code> solo renderizará el bloque si la expresión es verdadera. 
                <b>Importante:</b> Con <code>v-if</code>, los elementos son realmente <b>añadidos o eliminados</b> del DOM. Esto puede ser costoso si la condición cambia muy a menudo.
                Los elementos son realmente añadidos o eliminados del DOM.
              </p>
              <CodeBlock :code="code.vIf" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-show -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-show</code></q-item-label>
              <q-item-label caption>Alternativa a v-if para mostrar/ocultar.</q-item-label>
              <p class="q-mt-md">
                <code>v-show</code> también muestra u oculta un elemento condicionalmente, pero lo hace cambiando la propiedad CSS <code>display</code>. El elemento <b>siempre está en el DOM</b>.
              </p>
              <p class="text-weight-bold">¿Cuándo usar <code>v-if</code> vs <code>v-show</code>?</p>
              <ul>
                <li>Usa <code>v-if</code> si la condición no cambia con frecuencia o si el bloque es pesado y no quieres que se renderice inicialmente.</li>
                <li>Usa <code>v-show</code> si necesitas cambiar la visibilidad muy a menudo, ya que es más eficiente en esos casos.</li>
              </ul>
              <CodeBlock :code="code.vShow" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-for -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-for</code></q-item-label>
              <q-item-label caption>Renderiza una lista de elementos basada en un array.</q-item-label>
              <p class="q-mt-md">
                Perfecta para iterar sobre un array (o un objeto) y renderizar un bloque por cada elemento. Es crucial usar el atributo <code>:key</code> para darle a Vue una identidad única para cada elemento, lo que mejora el rendimiento.
              </p>
              <CodeBlock :code="code.vFor" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-on -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-on</code> (o <code>@</code>)</q-item-label>
              <q-item-label caption>Escucha eventos del DOM.</q-item-label>
              <p class="q-mt-md">
                Permite ejecutar código JavaScript cuando ocurre un evento, como un clic, un envío de formulario o el paso del ratón.
              </p>
              <CodeBlock :code="code.vOn" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-text y v-html -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-text</code> y <code>v-html</code></q-item-label>
              <q-item-label caption>Para insertar contenido de texto o HTML.</q-item-label>
              <p class="q-mt-md">
                Aunque normalmente usamos la sintaxis de bigotes (<code v-pre>{{ ... }}</code>), estas directivas son una alternativa. <code>v-text</code> actualiza el <code>textContent</code> de un elemento, mientras que <code>v-html</code> actualiza su <code>innerHTML</code>.
              </p>
              <q-banner color="warning" class="q-mt-sm">
                <b>¡Cuidado!</b> Usar <code>v-html</code> puede ser peligroso si el contenido viene de un usuario, ya que puede exponerte a ataques XSS (Cross-Site Scripting). Úsalo solo con contenido de confianza o que hayas sanitizado previamente.
              </q-banner>
              <CodeBlock :code="code.vText" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- v-once -->
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="text-h6"><code>v-once</code></q-item-label>
              <q-item-label caption>Renderiza algo una sola vez y nunca más.</q-item-label>
              <p class="q-mt-md">
                Esta directiva es una optimización de rendimiento. Le dice a Vue que renderice el elemento y sus hijos una vez, y que a partir de ese momento los trate como contenido estático. No se volverán a actualizar aunque los datos cambien.
              </p>
              <CodeBlock :code="code.vOnce" class="q-mt-sm" />
            </q-item-section>
          </q-item>

        </q-list>
      </q-card-section>

      <q-separator class="q-my-lg" />

      <!-- Ejemplos Interactivos -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ejemplos Interactivos</div>

        <!-- v-model y v-bind -->
        <q-card flat bordered class="q-mb-md">
          <q-card-section>
            <div class="text-h6"><code>v-model</code> y <code>v-bind</code></div>
            <p>Escribe en el campo para ver cómo <code>v-model</code> actualiza la variable <code>mensaje</code>. El botón cambia el color del texto usando <code>:style</code> (v-bind).</p>
            <q-input filled v-model="mensaje" label="Escribe algo..." class="q-mb-sm" />
            <p :style="{ color: colorTexto }">
              El mensaje es: <span class="text-weight-bold">{{ mensaje }}</span>
            </p>
            <q-btn color="primary" label="Cambiar Color" @click="cambiarColor" />
          </q-card-section>
          <q-separator />
          <CodeBlock :code="code.interactiveModel" />
        </q-card>

        <!-- v-if y v-show -->
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6"><code>v-if</code> vs <code>v-show</code></div>
            <p>Usa el interruptor para ver la diferencia. Inspecciona el DOM con las herramientas de desarrollador: el elemento con <code>v-if</code> se elimina del DOM, mientras que el de <code>v-show</code> solo se oculta con CSS (<code>display: none</code>).</p>
            <q-toggle v-model="mostrarElementos" label="Mostrar elementos" />
            <div v-if="mostrarElementos" class="bg-green-2 q-pa-sm q-mt-sm rounded-borders">
              Este bloque usa <b>v-if</b>. Existe en el DOM.
            </div>
            <div v-show="mostrarElementos" class="bg-orange-2 q-pa-sm q-mt-sm rounded-borders">
  Texto con estilo dinámico
              Este bloque usa <b>v-show</b>. Existe en el DOM, pero puede estar oculto.
            </div>
          </q-card-section>
          <q-separator />
          <CodeBlock :code="code.interactiveIf" />
        </q-card>

      </q-card-section>

      <q-separator class="q-my-lg" />

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
        <q-card-section class="text-right">
        <span class="text-caption text-grey-7">
          Desarrollado por Santiago Carvajal y Juliana Sanabria
        </span>
      </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'; // useQuasar ya no es necesario aquí
import CodeBlock from '../components/CodeBlock.vue'; // Importamos el nuevo componente

// Variables para ejemplos interactivos
const mensaje = ref('Hola Vue!');
const colorTexto = ref('blue');
const mostrarElementos = ref(true);

function cambiarColor() {
  colorTexto.value = colorTexto.value === 'blue' ? 'green' : 'blue';
}

// Objeto con los bloques de código para facilitar su manejo
const code = reactive({
  vBind: `<span class="token-comment">&lt;!-- Sintaxis completa --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">img</span> <span class="token-attr-name">v-bind:src</span><span class="token-punctuation">=</span><span class="token-attr-value">"urlDeImagen"</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Atajo (shorthand) recomendado --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">a</span> <span class="token-attr-name">:href</span><span class="token-punctuation">=</span><span class="token-attr-value">"urlSitioWeb"</span><span class="token-punctuation">&gt;</span>Visítanos<span class="token-punctuation">&lt;/</span><span class="token-tag">a</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">:class</span><span class="token-punctuation">=</span><span class="token-attr-value">"{ 'activo': estaActivo }"</span><span class="token-punctuation">&gt;</span><span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- También puedes enlazar estilos dinámicamente --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">:style</span><span class="token-punctuation">=</span><span class="token-attr-value">"{ color: colorTexto, fontSize: tamanoFuente + 'px' }"</span><span class="token-punctuation">&gt;</span>
  Texto con estilo dinámico
<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`,

  vModel: `<span class="token-comment">&lt;!-- El texto del input y la variable 'mensaje' siempre estarán sincronizados --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">input</span> <span class="token-attr-name">v-model</span><span class="token-punctuation">=</span><span class="token-attr-value">"mensaje"</span> <span class="token-attr-name">placeholder</span><span class="token-punctuation">=</span><span class="token-attr-value">"Escribe algo..."</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">p</span><span class="token-punctuation">&gt;</span>El mensaje es: {{ mensaje }}<span class="token-punctuation">&lt;/</span><span class="token-tag">p</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Modificadores útiles --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">input</span> <span class="token-attr-name">v-model.lazy</span><span class="token-punctuation">=</span><span class="token-attr-value">"texto"</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Sincroniza en el evento 'change' --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">input</span> <span class="token-attr-name">v-model.number</span><span class="token-punctuation">=</span><span class="token-attr-value">"edad"</span> <span class="token-attr-name">type</span><span class="token-punctuation">=</span><span class="token-attr-value">"number"</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Asegura que el valor sea un número --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">input</span> <span class="token-attr-name">v-model.trim</span><span class="token-punctuation">=</span><span class="token-attr-value">"usuario"</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Elimina espacios en blanco --&gt;</span>`,

  vIf: `<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-if</span><span class="token-punctuation">=</span><span class="token-attr-value">"tipo === 'A'"</span><span class="token-punctuation">&gt;</span>Bloque A<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-else-if</span><span class="token-punctuation">=</span><span class="token-attr-value">"tipo === 'B'"</span><span class="token-punctuation">&gt;</span>Bloque B<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-else</span><span class="token-punctuation">&gt;</span>Cualquier otro bloque<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`,

  vShow: `<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-show</span><span class="token-punctuation">=</span><span class="token-attr-value">"usuarioLogueado"</span><span class="token-punctuation">&gt;</span>Panel de Usuario<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`,

  vFor: `<span class="token-punctuation">&lt;</span><span class="token-tag">ul</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">li</span> <span class="token-attr-name">v-for</span><span class="token-punctuation">=</span><span class="token-attr-value">"(item, index) in miLista"</span> <span class="token-attr-name">:key</span><span class="token-punctuation">=</span><span class="token-attr-value">"item.id"</span><span class="token-punctuation">&gt;</span>
    {{ index }} - {{ item.texto }}
  <span class="token-punctuation">&lt;/</span><span class="token-tag">li</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">ul</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Iterando sobre un objeto --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-for</span><span class="token-punctuation">=</span><span class="token-attr-value">"(valor, clave, index) in miObjeto"</span> <span class="token-attr-name">:key</span><span class="token-punctuation">=</span><span class="token-attr-value">"clave"</span><span class="token-punctuation">&gt;</span>
  {{ index }}. {{ clave }}: {{ valor }}
<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`,

  vOn: `<span class="token-comment">&lt;!-- Sintaxis completa --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">button</span> <span class="token-attr-name">v-on:click</span><span class="token-punctuation">=</span><span class="token-attr-value">"miMetodo"</span><span class="token-punctuation">&gt;</span>Haz clic<span class="token-punctuation">&lt;/</span><span class="token-tag">button</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Atajo (shorthand) recomendado --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">form</span> <span class="token-attr-name">@submit.prevent</span><span class="token-punctuation">=</span><span class="token-attr-value">"enviarFormulario"</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">form</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Modificadores de evento --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">a</span> <span class="token-attr-name">@click.stop</span><span class="token-punctuation">=</span><span class="token-attr-value">"hacerAlgo"</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">a</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Detiene la propagación --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">@click.self</span><span class="token-punctuation">=</span><span class="token-attr-value">"hacerAlgo"</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Solo en el elemento --&gt;</span>`,

  vText: `<span class="token-punctuation">&lt;</span><span class="token-tag">span</span> <span class="token-attr-name">v-text</span><span class="token-punctuation">=</span><span class="token-attr-value">"mensaje"</span><span class="token-punctuation">&gt;</span><span class="token-punctuation">&lt;/</span><span class="token-tag">span</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Equivalente a: &lt;span&gt;{{ mensaje }}&lt;/span&gt; --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">v-html</span><span class="token-punctuation">=</span><span class="token-attr-value">"htmlPuro"</span><span class="token-punctuation">&gt;</span><span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Renderiza HTML real --&gt;</span>`,

  vOnce: `<span class="token-comment">&lt;!-- Este encabezado nunca cambiará --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">h1</span> <span class="token-attr-name">v-once</span><span class="token-punctuation">&gt;</span>{{ titulo }}<span class="token-punctuation">&lt;/</span><span class="token-tag">h1</span><span class="token-punctuation">&gt;</span>`,

  interactiveModel: `<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> mensaje = <span class="token-function">ref</span>(<span class="token-string">'Hola Vue!'</span>)
<span class="token-keyword">const</span> colorTexto = <span class="token-function">ref</span>(<span class="token-string">'blue'</span>)

<span class="token-keyword">function</span> <span class="token-function">cambiarColor</span>() {
  colorTexto.value = colorTexto.value === <span class="token-string">'blue'</span> ? <span class="token-string">'green'</span> : <span class="token-string">'blue'</span>
}`,

  interactiveIf: `<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> mostrarElementos = <span class="token-function">ref</span>(<span class="token-boolean">true</span>)`
});

// Variables para los fragmentos de código (evitan errores en consola)
const tamanoFuente = ref(16);
const miObjeto = ref({ titulo: 'Aprende Vue', autor: 'Equipo Vue', anio: 2023 });
const htmlPuro = ref('<span style="color: red;">Esto es HTML</span>');
const titulo = ref('Título Inicial');
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}

/* Estilo para el código inline */
code {
  background-color: #2a2a2a;
  color: #e3e3e3;
  padding: 0.2em 0.4em;
  margin: 0 2px;
  font-size: 85%;
  border-radius: 6px;
  white-space: pre-wrap;
  word-break: break-word;
}

</style>