
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <!-- Título e Introducción -->
            <q-card-section>
                <div class="text-h4 text-primary">Plantillas y Componentes Clave de Quasar</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    Construyendo interfaces ricas y responsivas con facilidad.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Quasar es un framework de UI sobre Vue.js que viene con una rica colección de componentes, directivas y plugins. Su objetivo es permitirte escribir código una vez y desplegarlo como sitio web, aplicación móvil y de escritorio.
                </p>
            </q-card-section>

            <!-- Layouts -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Estructura de Layout</div>
                <p>
                    Quasar brilla en la creación de la estructura principal de tu aplicación con <CodeBlock :code="'<q-layout>'" />. Este componente te permite definir fácilmente un encabezado (header), un pie de página (footer), menús laterales (drawers) y el área de contenido principal.
                </p>
                <p>La prop view (ejemplo: "lHh Lpr lFf") es un código mágico que define cómo se posicionan estos elementos. ¡No te asustes! La primera letra controla el header, la segunda el drawer izquierdo y la tercera el footer. Puedes leer la documentación para entenderlo, pero los valores por defecto son un excelente punto de partida.</p>

                <CodeBlock :code="code.layout" />
            </q-card-section>

            <!-- Grid System -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Sistema de Rejilla (Grid)</div>
                <p>Quasar incluye un potente sistema de rejilla flexbox de 12 puntos para crear layouts responsivos que se adaptan a cualquier tamaño de pantalla. Usas la clase <CodeBlock :code="'row'" /> como contenedor y <CodeBlock :code="'col-*'" /> para las columnas. Puedes especificar diferentes tamaños para diferentes breakpoints (<code>col-xs-*</code>, <code>col-sm-*</code>, <code>col-md-*</code>, etc.).</p>
                <CodeBlock :code="code.grid" />
            </q-card-section>

            <!-- Componentes Comunes -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Showcase de Componentes</div>
                <p>Aquí tienes ejemplos de algunos de los componentes más utilizados:</p>
                <q-list bordered separator>
                    <!-- Botones -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Botones (<CodeBlock :code="'q-btn'" />)</q-item-label>
                        <CodeBlock :code="code.buttons" />
                    </q-item-section></q-item>

                    <!-- Inputs -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Inputs (<code>q-input</code>)</q-item-label>
                        <CodeBlock :code="code.inputs" />
                    </q-item-section></q-item>

                    <!-- Tarjetas -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Tarjetas (<code>q-card</code>)</q-item-label>
                        <CodeBlock :code="code.cards" />
                    </q-item-section></q-item>

                    <!-- Diálogos -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Diálogos (<code>$q.dialog</code>)</q-item-label>
                        <p class="q-mt-sm">Plugin para mostrar ventanas modales de confirmación, prompts, etc.</p>
                        <CodeBlock :code="code.dialogs" />
                    </q-item-section></q-item>

                    <!-- Tablas -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Tablas (<CodeBlock :code="'q-table'" />)</q-item-label>
                        <CodeBlock :code="code.table" />
                    </q-item-section></q-item>

                    <!-- Notificaciones --> 
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Notificaciones (<code>$q.notify</code>)</q-item-label>
                        <p class="q-mt-sm">Se invocan desde JavaScript, no desde la plantilla.</p>
                        <CodeBlock :code="code.notify" />
                    </q-item-section></q-item>
                </q-list>
                <q-card-section class="text-right">
        <span class="text-caption text-grey-7">
          Desarrollado por Santiago Carvajal y Juliana Sanabria
        </span>
      </q-card-section>
            </q-card-section>

            <!-- Ejemplo Interactivo -->
            <q-card-section>
              <div class="text-h5 text-secondary q-mb-md">Ejemplo Interactivo</div>
              <p>
                Combina los componentes de Quasar para crear una pequeña aplicación.
                Usa el input, el botón y observa cómo la tarjeta se actualiza.
              </p>
              <q-card flat bordered>
                <q-card-section>
                  <q-input
                    filled
                    v-model="nombreUsuario"
                    label="Nombre de Usuario"
                    class="q-mb-md"
                    :rules="[val => !!val || 'El nombre es requerido']"
                  />
                  <q-btn
                    color="primary"
                    label="Saludar"
                    @click="mostrarNotificacion"
                    :disable="!nombreUsuario"
                  />
                </q-card-section>
                <q-separator />
                <q-card-section v-if="nombreUsuario">
                  <div class="text-h6">Tarjeta de Bienvenida</div>
                  <p>Hola, <span class="text-weight-bold text-primary">{{ nombreUsuario }}</span>. ¡Bienvenido a la guía de Quasar!</p>
                </q-card-section>
              </q-card>
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
import { ref, reactive } from 'vue';
import { useQuasar } from 'quasar';
import CodeBlock from '../components/CodeBlock.vue';

const $q = useQuasar();
const nombreUsuario = ref('Karen');

function mostrarNotificacion() {
  $q.notify({
    message: `¡Hola, ${nombreUsuario.value}!`,
    color: 'positive',
    icon: 'check'
  });
}

// Lógica para copiar código
function copyToClipboard(codeBlock) {
  const tempEl = document.createElement('div');
  tempEl.innerHTML = codeBlock.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const textToCopy = tempEl.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    $q.notify({ message: '¡Copiado!', color: 'positive', icon: 'check', position: 'top-right', timeout: 1500 });
  });
}

// Bloques de código (simplificados para este ejemplo, no se aplica resaltado complejo)
const code = reactive({
  layout: `<span class="token-punctuation">&lt;</span><span class="token-tag">q-layout</span> <span class="token-attr-name">view</span><span class="token-punctuation">=</span><span class="token-attr-value">"lHh Lpr lFf"</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">q-header</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">q-header</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">q-drawer</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">q-drawer</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">q-page-container</span><span class="token-punctuation">&gt;</span>
    <span class="token-punctuation">&lt;</span><span class="token-tag">router-view</span> <span class="token-punctuation">/&gt;</span>
  <span class="token-punctuation">&lt;/</span><span class="token-tag">q-page-container</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">q-layout</span><span class="token-punctuation">&gt;</span>`,
  table: `<span class="token-punctuation">&lt;</span><span class="token-tag">q-table</span>
  <span class="token-attr-name">title</span><span class="token-punctuation">=</span><span class="token-attr-value">"Usuarios"</span>
  <span class="token-attr-name">:rows</span><span class="token-punctuation">=</span><span class="token-attr-value">"listaDeUsuarios"</span>
  <span class="token-attr-name">:columns</span><span class="token-punctuation">=</span><span class="token-attr-value">"columnasDefinidas"</span>
  <span class="token-attr-name">row-key</span><span class="token-punctuation">=</span><span class="token-attr-value">"name"</span>
<span class="token-punctuation">/&gt;</span>`,
  grid: `<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">class</span><span class="token-punctuation">=</span><span class="token-attr-value">"row"</span><span class="token-punctuation">&gt;</span>
  &lt;div class="col-12 col-md-6"&gt;...&lt;/div&gt;
  &lt;div class="col-12 col-md-6"&gt;...&lt;/div&gt;
<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`,
  buttons: `<span class="token-punctuation">&lt;</span><span class="token-tag">q-btn</span> <span class="token-attr-name">color</span><span class="token-punctuation">=</span><span class="token-attr-value">"primary"</span> <span class="token-attr-name">label</span><span class="token-punctuation">=</span><span class="token-attr-value">"Primario"</span> <span class="token-punctuation">/&gt;</span>`,
  inputs: `<span class="token-punctuation">&lt;</span><span class="token-tag">q-input</span> <span class="token-attr-name">filled</span> <span class="token-attr-name">v-model</span><span class="token-punctuation">=</span><span class="token-attr-value">"texto"</span> <span class="token-attr-name">label</span><span class="token-punctuation">=</span><span class="token-attr-value">"Escribe algo..."</span> <span class="token-punctuation">/&gt;</span>`,
  cards: `<span class="token-punctuation">&lt;</span><span class="token-tag">q-card</span><span class="token-punctuation">&gt;</span>...<span class="token-punctuation">&lt;/</span><span class="token-tag">q-card</span><span class="token-punctuation">&gt;</span>`,
  dialogs: `<span class="token-variable">$q</span>.<span class="token-function">dialog</span>({ ... })`,
  notify: `<span class="token-keyword">import</span> { useQuasar } <span class="token-keyword">from</span> <span class="token-string">'quasar'</span>
<span class="token-keyword">const</span> $q = <span class="token-function">useQuasar</span>()
$q.<span class="token-function">notify</span>({
  <span class="token-attr-name">message</span>: <span class="token-string">'Operación exitosa'</span>,
  <span class="token-attr-name">color</span>: <span class="token-string">'positive'</span>,
  <span class="token-attr-name">icon</span>: <span class="token-string">'check'</span>
})`
});
</script>

<style scoped>
.my-card {
    max-width: 900px;
    margin: 2rem auto;
    margin-bottom: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    background: #fff;
}

/* Estilo para los bloques de código */
.code-block-container {
  position: relative;
  font-size: 14px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 8px;
  line-height: 1.7;
  background: #000; /* Fondo totalmente negro */
  color: #f8f8f2; /* Texto claro */
  padding: 1rem 1.2rem;
  overflow-x: auto;
  border: 1px solid #444;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #aaa;
  z-index: 10;
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

/* Anular el estilo inline para el código dentro de los bloques */
.code-block-container code,
.code-block {
  display: block;
  background: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
  font-size: inherit;
  border-radius: 0;
}

</style>