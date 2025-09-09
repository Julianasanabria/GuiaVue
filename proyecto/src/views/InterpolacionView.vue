
<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Interpolación en Vue.js</div>
        <q-separator class="q-my-sm" />
        <div>
          <p>La interpolación permite mostrar valores dinámicos en el HTML usando <code>{{ }}</code>. Es la forma más sencilla de mostrar datos reactivos en la vista.</p>
          <q-banner class="bg-grey-2 q-mt-sm">
            <code>&lt;p&gt;{{ mensaje }}&lt;/p&gt;</code><br>
            <code>&lt;p&gt;Edad: {{ edad }}&lt;/p&gt;</code><br>
            <code>&lt;p&gt;El doble de la edad es: {{ edad * 2 }}&lt;/p&gt;</code>
          </q-banner>
          <div class="q-mt-md">
            <b>Ejemplo práctico:</b>
            <q-banner class="bg-grey-2 q-mt-sm">
              <code>
                &lt;template&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;Hola, {{ nombre }}&lt;/p&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;Edad: {{ edad }}&lt;/p&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;El doble de la edad es: {{ edad * 2 }}&lt;/p&gt;<br>
                &lt;/template&gt;<br>
                &lt;script setup&gt;<br>
                import { ref } from 'vue'<br>
                const nombre = ref('Karen')<br>
                const edad = ref(22)<br>
                &lt;/script&gt;
              </code>
            </q-banner>
          </div>
          <div class="q-mt-md">
            <b>Buenas prácticas:</b>
            <ul>
              <li>Usa interpolación para mostrar datos simples.</li>
              <li>Para lógica más compleja, usa propiedades computadas.</li>
              <li>Evita poner expresiones largas dentro de <code>{{ }}</code>.</li>
            </ul>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// Este archivo es solo para documentación visual, no requiere lógica extra.
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
ul {
  list-style-type: '✔ ';
  padding-left: 24px;
}
li {
  margin-bottom: 0.75rem;
  font-size: 16px;
}
code {
  white-space: pre-wrap;
  word-break: break-word;
  background: #e3e3e3;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>