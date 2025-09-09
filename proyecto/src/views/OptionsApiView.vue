<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Options API en Vue.js</div>
        <q-separator class="q-my-sm" />
        <div>
          <p>La Options API organiza el código en secciones como <b>data</b>, <b>methods</b> y <b>computed</b>.</p>
          <q-banner class="bg-grey-2 q-mt-md">
            <code>
              export default {
                data(){ return { contador: 0 } },
                methods: { incrementar(){ this.contador++ } },
                computed: { doble(){ return this.contador * 2 } }
              }
            </code>
          </q-banner>
          <div class="q-mt-md">
            <b>Ejemplo práctico:</b>
            <q-banner class="bg-grey-2 q-mt-sm">
              <code>
                &lt;template&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;Contador: {{ contador }}&lt;/p&gt;<br>
                &nbsp;&nbsp;&lt;button @click="incrementar"&gt;Incrementar&lt;/button&gt;<br>
                &lt;/template&gt;<br>
                &lt;script&gt;<br>
                export default {
                  data(){ return { contador: 0 } },
                  methods: { incrementar(){ this.contador++ } }
                }<br>
                &lt;/script&gt;
              </code>
            </q-banner>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// ...existing code...
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