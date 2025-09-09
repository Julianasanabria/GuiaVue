<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Vue Router</div>
        <q-separator class="q-my-sm" />

        <p>
          <b>Vue Router</b> es la librería oficial para navegación entre páginas en Vue.js.
        </p>

        <q-banner class="bg-grey-2 q-mt-sm">
          <code>
npm install vue-router<br>
<br>
// main.js<br>
import { createApp } from 'vue'<br>
import { createRouter, createWebHistory } from 'vue-router'<br>
import App from './App.vue'<br>
import HomeView from './views/HomeView.vue'<br>
import AboutView from './views/AboutView.vue'<br>
<br>
const router = createRouter({<br>
&nbsp;&nbsp;history: createWebHistory(),<br>
&nbsp;&nbsp;routes: [<br>
&nbsp;&nbsp;&nbsp;&nbsp;{ path: '/', component: HomeView },<br>
&nbsp;&nbsp;&nbsp;&nbsp;{ path: '/about', component: AboutView }<br>
&nbsp;&nbsp;]<br>
})<br>
<br>
createApp(App).use(router).mount('#app')
          </code>
        </q-banner>

        <div class="q-mt-md">
          <b>Uso en template:</b>
          <q-banner class="bg-grey-2 q-mt-sm">
            <code>
&lt;router-link to="/about"&gt;Ir a About&lt;/router-link&gt;<br>
&lt;router-view /&gt;
            </code>
          </q-banner>
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
code {
  white-space: pre-wrap;
  word-break: break-word;
  background: #e3e3e3;
  padding: 2px 6px;
  border-radius: 4px;
  display: block;
}
</style>
