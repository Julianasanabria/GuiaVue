<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Creación de Componentes en Vue</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Aprende a crear y usar componentes reutilizables.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          Los componentes son la base de cualquier aplicación Vue.js. Te permiten dividir la interfaz de usuario en partes independientes y reutilizables, cada una con su propia lógica y estilo.
        </p>
        <p class="text-body1">
          Imagina que tu aplicación es un coche. Los componentes son como las piezas del coche: el motor, las ruedas, el volante, etc. Cada pieza tiene su propia función, pero todas trabajan juntas para que el coche funcione.
        </p>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">¿Cómo crear un componente?</div>
        <p>Para crear un componente en Vue, necesitas definir al menos dos cosas: un <b>template</b> y un <b>script</b>.</p>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar><q-icon name="view_in_ar" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Template:</b> Es la parte visual de tu componente, lo que el usuario verá en la pantalla.</q-item-label>
              <q-item-label caption>Se define usando la sintaxis de plantilla de Vue, similar a cómo lo harías en una vista normal.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="code" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Script:</b> Aquí es donde defines la lógica de tu componente.</q-item-label>
              <q-item-label caption>Puedes usar la sintaxis de <code>setup</code> para definir tus variables y funciones.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ejemplo de un Componente Simple</div>
        <q-card flat bordered>
          <q-card-section>
            <CodeBlock :code="code.simple" />
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Limitaciones y Buenas Prácticas</div>
        <q-card class="q-my-md" flat bordered>
          <q-card-section class="bg-red-1">
            <div class="text-h6 text-negative">Lo que NO puedes hacer</div>
            <p>Dentro de un componente, recuerda que:</p>
            <ul>
              <li>No puedes usar <code>this</code> para acceder a las propiedades. En su lugar, usa las variables y funciones directamente.</li>
              <li>No puedes tener múltiples raíces en el template. Siempre debe haber un solo elemento raíz.</li>
            </ul>
          </q-card-section>
          <q-card-section class="bg-green-1">
            <div class="text-h6 text-positive">Buenas Prácticas</div>
            <ul>
              <li><b>Componentes pequeños y enfocados:</b> Cada componente debe tener una única responsabilidad. Si un componente hace demasiadas cosas, es más difícil de mantener y reutilizar.</li>
              <li><b>Usa nombres significativos:</b> Nombra tus componentes y sus propiedades de manera que sea claro qué hacen o qué representan.</li>
              <li><b>Documenta tus componentes:</b> Agrega comentarios o usa herramientas como Storybook para documentar cómo usar tus componentes.</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <span class="text-caption text-grey-7">
          Desarrollado por Santiago Carvajal y Juliana Sanabria
        </span>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import CodeBlock from '../components/CodeBlock.vue';

const code = reactive({
  simple: `<span class="token-comment">&lt;!-- MiComponente.vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>{{ mensaje }}<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>

<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-keyword">const</span> mensaje = <span class="token-string">'Hola desde el componente'</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`
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

ul {
  padding-left: 20px;
}
li {
  margin-bottom: 0.75rem;
}
</style>