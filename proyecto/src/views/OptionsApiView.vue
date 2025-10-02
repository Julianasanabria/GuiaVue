<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título e Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">La Options API: El Enfoque Clásico</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Organiza la lógica de tu componente en propiedades: data, methods, computed, etc.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          La <b>Options API</b> es la forma tradicional de escribir componentes en Vue. Se basa en un objeto de opciones
          donde defines la lógica del componente en propiedades separadas como <code>data</code>, <code>methods</code>,
          <code>computed</code>, <code>watch</code> y los hooks del ciclo de vida (<code>mounted</code>, <code>created</code>, etc.).
        </p>
        <p class="text-body1 q-mt-md">
          Este enfoque es muy estructurado y fácil de seguir para principiantes, ya que cada pieza de lógica tiene su lugar designado.
        </p>
      </q-card-section>

      <!-- Propiedades Principales -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Propiedades Principales</div>
        <q-list bordered separator>
          <!-- data -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>data()</code></q-item-label>
              <q-item-label caption>La memoria del componente.</q-item-label>
              <p class="q-mt-sm">
                La propiedad <code>data</code> <b>debe ser una función</b> que devuelve un objeto. Vue llama a esta función para cada instancia del componente, asegurando que cada uno tenga su propio estado independiente y no compartan datos por accidente.
                Las propiedades de este objeto se vuelven reactivas y están disponibles en la plantilla y en otros métodos a través de <code>this</code>.
              </p>
              <CodeBlock :code="code.data" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- methods -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>methods: { ... }</code></q-item-label>
              <q-item-label caption>Las acciones del componente.</q-item-label>
              <p class="q-mt-sm">
                Aquí se definen las funciones que se pueden llamar desde la plantilla (por ejemplo, en un <code>@click</code>) o desde otras partes del componente. Tienen acceso a las propiedades de <code>data</code> a través de <code>this</code>.
              </p>
              <CodeBlock :code="code.methods" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- computed -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>computed: { ... }</code></q-item-label>
              <q-item-label caption>Datos derivados y cacheados.</q-item-label>
              <p class="q-mt-sm">
                Las propiedades computadas son como propiedades de <code>data</code>, pero su valor se calcula a partir de otras propiedades. Vue las cachea y solo las recalcula cuando una de sus dependencias cambia, lo que las hace muy eficientes.
              </p>
              <p class="q-mt-sm">
                <b>Diferencia con un método:</b> Podrías obtener el mismo resultado con un método, pero el método se ejecutaría <b>cada vez</b> que la plantilla se renderiza. Una propiedad computada solo se recalcula si sus dependencias (como <code>this.contador</code>) han cambiado. ¡Es mucho más inteligente!
              </p>
              <CodeBlock :code="code.computed" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- watch -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>watch: { ... }</code></q-item-label>
              <q-item-label caption>Observa cambios en los datos.</q-item-label>
              <p class="q-mt-sm">
                Permite ejecutar código en respuesta a cambios en una propiedad específica de <code>data</code> o <code>props</code>. Es útil para realizar operaciones asíncronas o costosas.
              </p>
              <CodeBlock :code="code.watch" class="q-mt-sm" />
            </q-item-section>
          </q-item>

          <!-- Hooks de Ciclo de Vida -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>mounted()</code>, <code>created()</code>, etc.</q-item-label>
              <q-item-label caption>Momentos clave en la vida del componente.</q-item-label>
              <p class="q-mt-sm">
                Son funciones que Vue ejecuta automáticamente en momentos específicos, como cuando el componente es creado (<code>created</code>), insertado en el DOM (<code>mounted</code>), actualizado (<code>updated</code>) o destruido (<code>unmounted</code>).
              </p>
              <div class="q-mt-sm">
                <b>Orden común del ciclo de vida:</b>
                <ol>
                  <li><code>created</code>: La instancia está creada. Puedes acceder a <code>data</code> y <code>methods</code>, pero el DOM aún no existe. Ideal para llamadas a APIs.</li>
                  <li><code>mounted</code>: El componente ha sido insertado en el DOM. Ahora puedes interactuar con los elementos HTML.</li>
                  <li><code>updated</code>: Ocurre después de que un cambio en los datos haya causado una actualización del DOM.</li>
                  <li><code>unmounted</code>: El componente está a punto de ser destruido. Ideal para limpiar timers o listeners.</li>
                </ol>
              </div>
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
            <p>Escribe en el campo de texto para ver cómo la propiedad computada <code>reversedMessage</code> reacciona al cambio de la propiedad <code>message</code> en <code>data</code>.</p>
            <q-input filled v-model="message" label="Mensaje" clearable />
            <div class="q-mt-md">
              <p><b>Mensaje original:</b> {{ message }}</p>
              <p><b>Mensaje al revés (computado):</b> {{ reversedMessage }}</p>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn flat color="primary" @click="clearMessage">Limpiar Mensaje</q-btn>
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

// Lógica para el ejemplo interactivo
const message = ref('Hola Vue!');
const reversedMessage = computed(() => message.value.split('').reverse().join(''));
function clearMessage() {
  message.value = '';
}

// Bloques de código con resaltado
const code = reactive({
  data: `<span class="token-function">data</span>() {
  <span class="token-keyword">return</span> {
    <span class="token-attr-name">contador</span>: <span class="token-number">0</span>,
    <span class="token-attr-name">mensaje</span>: <span class="token-string">'Hola Vue'</span>
  }
}`,
  methods: `<span class="token-attr-name">methods</span>: {
  <span class="token-function">incrementar</span>() {
    <span class="token-keyword">this</span>.contador<span class="token-operator">++</span>;
  },
  <span class="token-function">resetearContador</span>() {
    <span class="token-keyword">this</span>.contador = <span class="token-number">0</span>;
  }
}`,
  computed: `<span class="token-attr-name">computed</span>: {
  <span class="token-function">contadorDoble</span>() {
    <span class="token-comment">// Se actualiza automáticamente cuando 'contador' cambia</span>
    <span class="token-keyword">return</span> <span class="token-keyword">this</span>.contador <span class="token-operator">*</span> <span class="token-number">2</span>;
  },
  <span class="token-function">mensajeAlReves</span>() {
    <span class="token-comment">// Se actualiza automáticamente cuando 'mensaje' cambia</span>
    <span class="token-keyword">return</span> <span class="token-keyword">this</span>.mensaje.<span class="token-function">split</span>(<span class="token-string">''</span>).<span class="token-function">reverse</span>().<span class="token-function">join</span>(<span class="token-string">''</span>);
  }
}`,
  watch: `<span class="token-attr-name">watch</span>: {
  <span class="token-function">contador</span>(nuevoValor, valorAnterior) {
    <span class="token-keyword">if</span> (nuevoValor <span class="token-operator">></span> <span class="token-number">10</span>) {
      console.<span class="token-function">log</span>(<span class="token-string">\`¡Cuidado! El contador (\${nuevoValor}) ha superado 10.\`</span>);
    }
  },
  <span class="token-comment">// Para observar cambios profundos en un objeto</span>
  <span class="token-string">'objeto.propiedad'</span>: {
    <span class="token-function">handler</span>(nuevoValor) { <span class="token-comment">/* ... */</span> },
    <span class="token-attr-name">deep</span>: <span class="token-boolean">true</span> <span class="token-comment">// Necesario para observar propiedades anidadas</span>
  }
}`,
  hooks: `<span class="token-keyword">export default</span> {
  <span class="token-comment">// ...</span>
  <span class="token-function">mounted</span>() {
    console.<span class="token-function">log</span>(<span class="token-string">'El componente ha sido montado en el DOM.'</span>);
    <span class="token-comment">// Ideal para interactuar con el DOM o iniciar librerías externas.</span>
  }
}`,
  example: `<span class="token-comment">&lt;!-- Template --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">q-input</span> <span class="token-attr-name">filled</span> <span class="token-attr-name">v-model</span><span class="token-punctuation">=</span><span class="token-attr-value">"message"</span> <span class="token-attr-name">label</span><span class="token-punctuation">=</span><span class="token-attr-value">"Mensaje"</span> <span class="token-punctuation">/&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">p</span><span class="token-punctuation">&gt;</span>Mensaje al revés: {{ reversedMessage }}<span class="token-punctuation">&lt;/</span><span class="token-tag">p</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- Script --&gt;</span>
<span class="token-keyword">export default</span> {
  <span class="token-function">data</span>() {
    <span class="token-keyword">return</span> { <span class="token-attr-name">message</span>: <span class="token-string">'Hola Vue!'</span> }
  },
  <span class="token-attr-name">computed</span>: {
    <span class="token-function">reversedMessage</span>() {
      <span class="token-keyword">return</span> <span class="token-keyword">this</span>.message.<span class="token-function">split</span>(<span class="token-string">''</span>).<span class="token-function">reverse</span>().<span class="token-function">join</span>(<span class="token-string">''</span>);
    }
  }
}`
});

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