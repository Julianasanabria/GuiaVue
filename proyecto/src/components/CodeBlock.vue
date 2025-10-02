<template>
  <div class="code-block-container">
    <q-btn
      dense
      flat
      round
      icon="content_copy"
      class="copy-btn"
      @click="copy"
      aria-label="Copiar código"
    />
    <code class="code-block" v-html="highlightedCode"></code>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'html', // Puedes ajustar el lenguaje por defecto
  },
});

const $q = useQuasar();

// Esta función simula el resaltado de sintaxis que ya tienes.
// En un proyecto real, aquí usarías una librería como Prism.js o highlight.js
// para generar el HTML resaltado a partir de texto plano.
// Por ahora, asumimos que el 'code' que pasas ya es HTML resaltado.
const highlightedCode = computed(() => props.code);

function copy() {
  // Crea un elemento temporal para extraer el texto plano del HTML
  const tempEl = document.createElement('div');
  tempEl.innerHTML = props.code;
  const textToCopy = tempEl.innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    $q.notify({
      message: '¡Copiado!',
      color: 'positive',
      icon: 'check',
      position: 'top-right',
      timeout: 1500,
    });
  }).catch(err => {
    $q.notify({
      message: 'Error al copiar',
      color: 'negative',
      icon: 'error',
      position: 'top-right',
    });
    console.error('Error al copiar: ', err);
  });
}
</script>

<style scoped>
/* Todos los estilos que tenías en DirectivasView.vue para los bloques de código van aquí */
.code-block-container {
  position: relative;
  font-size: 14px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 8px;
  line-height: 1.7;
  background: #000;
  color: #f8f8f2;
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

.code-block {
  display: block;
  background: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
  font-size: inherit;
  border-radius: 0;
}

/* --- Estilos para el Resaltado de Sintaxis --- */
/* Usamos :deep() porque el contenido de v-html no está en el scope del componente */
:deep(.token-comment) { color: #6a9955; }
:deep(.token-punctuation) { color: #d4d4d4; }
:deep(.token-tag) { color: #569cd6; }
:deep(.token-attr-name) { color: #9cdcfe; }
:deep(.token-attr-value) { color: #ce9178; }
:deep(.token-keyword) { color: #c586c0; }
:deep(.token-function) { color: #dcdcaa; }
:deep(.token-string) { color: #ce9178; }
</style>
