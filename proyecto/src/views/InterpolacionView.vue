<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Interpolación en Vue.js</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Mostrando tus datos en el HTML de la forma más sencilla.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          La forma más básica de enlazar datos en Vue es la <b>interpolación de texto</b>, usando la sintaxis de "bigotes" o "mustaches": <CodeBlock :code="'{{ }}'" />.
        </p>
        <p class="text-body1">
          Imagina que tu HTML es una carta con espacios en blanco. La interpolación te permite "rellenar" esos espacios con los datos (variables) de tu componente. Cuando los datos cambian, ¡Vue actualiza automáticamente el texto en la carta!
        </p>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">¿Qué puedes poner dentro de los bigotes?</div>
        <p>Dentro de <CodeBlock :code="'{{ }}'" /> puedes colocar cualquier <b>expresión de JavaScript</b> válida.</p>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar><q-icon name="code" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Una variable:</b> <CodeBlock :code="'{{ nombre }}'" /></q-item-label>
              <q-item-label caption>Es el uso más común. Muestra el valor de una variable definida en tu <code>&lt;script&gt;</code>.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="calculate" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Operaciones matemáticas:</b> <CodeBlock :code="'{{ edad * 2 }}'" /></q-item-label>
              <q-item-label caption>Puedes realizar cálculos simples directamente en la plantilla.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="functions" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Llamadas a métodos:</b> <CodeBlock :code="'{{ formatearFecha(fecha) }}'" /></q-item-label>
              <q-item-label caption>Puedes invocar funciones para procesar los datos antes de mostrarlos.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="construction" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Expresiones ternarias:</b> <CodeBlock :code="'{{ estaActivo ? \'S\u00ed\' : \'No\' }}'" /></q-item-label>
              <q-item-label caption>Útil para mostrar un texto u otro dependiendo de una condición booleana.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ejemplo Interactivo</div>
        <q-card flat bordered>
          <q-card-section>
            <p>Escribe en el campo de abajo. Verás cómo el texto interpolado se actualiza en tiempo real gracias a la reactividad de Vue.</p>
            <q-input filled v-model="nombre" label="Escribe tu nombre" class="q-mb-md" />
            <div class="text-h6">
              ¡Hola, <span class="text-primary text-weight-bold">{{ nombre }}</span>!
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Limitaciones y Buenas Prácticas</div>
        <q-card class="q-my-md" flat bordered>
          <q-card-section class="bg-red-1">
            <div class="text-h6 text-negative">Lo que NO puedes hacer</div>
            <p>La interpolación solo acepta <b>expresiones</b>, no <b>declaraciones</b>. Esto significa que no puedes usar:</p>
            <ul>
              <li>Declaraciones de variables: <CodeBlock :code="'{{ var a = 1 }}'" /></li>
              <li>Condicionales como `if/else`: <CodeBlock :code="'{{ if (ok) { return \'S\u00ed\' } }}'" /> (para esto usa un ternario).</li>
              <li>Bucles como `for` o `while`.</li>
            </ul>
          </q-card-section>
          <q-card-section class="bg-green-1">
            <div class="text-h6 text-positive">Buenas Prácticas</div>
            <ul>
              <li><b>Manténlo simple:</b> Usa la interpolación para mostrar datos directamente o con lógica muy simple.</li>
              <li><b>Usa Propiedades Computadas:</b> Si necesitas realizar cálculos más complejos, concatenar varios valores o aplicar formato, una <router-link to="/options-api">propiedad computada</router-link> es la mejor opción. Mantiene tu plantilla limpia y el código más organizado y eficiente.</li>
              <li><b>Seguridad primero:</b> La interpolación <code v-pre>{{ }}</code> automáticamente escapa el contenido HTML. Esto significa que si una variable contiene <code>&lt;b&gt;Hola&lt;/b&gt;</code>, se mostrará como texto literal y no como negrita. Esto te protege de ataques XSS. Para renderizar HTML real, debes usar la directiva <router-link to="/directivas"><code>v-html</code></router-link> (con precaución).</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <div class="text-right">
          <span class="text-caption text-grey-7">
            Desarrollado por Santiago Carvajal y Juliana Sanabria
          </span>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

// Lógica para el ejemplo interactivo
const nombre = ref('Karen')

function formatearFecha(date) {
  return date.toLocaleDateString('es-ES')
}

// Variables para los ejemplos de la sección "¿Qué puedes poner...?"
const edad = ref(25);
const fecha = new Date();
const estaActivo = ref(true);
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 0.75rem;
}
code {
  white-space: pre-wrap;
  word-break: break-word;
  background: #e3e3e3;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>