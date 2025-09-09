<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Directivas de Vue.js</div>
        <q-separator class="q-my-sm" />
        <div>
          <ul>
            <li><b>v-bind:</b> enlaza atributos dinámicamente. Ejemplo: `<img :src="imagen" />`</li>
            <li><b>v-model:</b> enlace bidireccional input ↔ data. Ejemplo: `<input v-model="nombre" />`</li>
            <li><b>v-if / v-else-if / v-else:</b> renderizado condicional. Ejemplo: `<div v-if="mostrar">Visible</div>`</li>
            <li><b>v-for:</b> iteración sobre listas. Ejemplo: `<li v-for="item in lista" :key="item.id">{{ item.nombre }}</li>`</li>
            <li><b>v-on (@):</b> escucha de eventos. Ejemplo: `<button @click="accion">Click</button>`</li>
          </ul>
          <q-banner class="bg-grey-2 q-mt-md">
            <code>
              &lt;ul&gt;<br>
              &nbsp;&nbsp;&lt;li v-for='(item, index) in lista' :key='index'&gt;{{ item }}&lt;/li&gt;<br>
              &lt;/ul&gt;
            </code>
          </q-banner>
          <div class="q-mt-md">
            <b>Ejemplo v-model:</b>
            <q-banner class="bg-grey-2 q-mt-sm">
              <code>
                &lt;input v-model="nombre" placeholder="Escribe tu nombre"&gt;<br>
                &lt;p&gt;Hola, {{ nombre }}&lt;/p&gt;
              </code>
            </q-banner>
          </div>
          <div class="q-mt-md">
            <b>Consejos útiles:</b>
            <ul>
              <li>Usa <b>v-bind</b> para atributos dinámicos como clases o estilos.</li>
              <li>Utiliza <b>v-model</b> para formularios interactivos.</li>
              <li>Combina <b>v-if</b> y <b>v-for</b> con cuidado para evitar problemas de rendimiento.</li>
              <li>Prefiere <b>v-on</b> para manejar eventos en botones y enlaces.</li>
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
.q-banner code {
  white-space: pre-wrap;
}
</style>