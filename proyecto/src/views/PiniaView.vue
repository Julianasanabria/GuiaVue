<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h5 text-primary">Ejemplo básico de Pinia</div>
        <div>Pinia es el gestor de estado oficial para Vue 3.</div>
        <q-banner class="q-mt-md bg-grey-2">
          <code>npm install pinia</code>
        </q-banner>
        <q-banner class="q-mt-md bg-grey-2">
          <code>
            import { createPinia } from 'pinia'<br>
            const app = createApp(App)<br>
            app.use(createPinia())
          </code>
        </q-banner>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Contador global con Pinia</div>
        <div class="q-mt-md">
          <div>Valor: <b>{{ store.contador }}</b></div>
          <q-btn color="primary" @click="store.incrementar">Incrementar</q-btn>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Ventajas de Pinia</div>
        <ul>
          <li>Reactividad total y fácil integración con Vue 3.</li>
          <li>Soporte para TypeScript.</li>
          <li>Devtools oficiales.</li>
          <li>API sencilla y moderna.</li>
        </ul>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Recursos útiles</div>
        <ul>
          <li><a href="https://pinia.vuejs.org/" target="_blank">Documentación oficial de Pinia</a></li>
          <li><a href="https://vuejs.org/" target="_blank">Vue.js oficial</a></li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Definición del store (puedes mover esto a src/stores/mainStore.js si prefieres)
const useMainStore = defineStore('main', () => {
  const contador = ref(0)
  function incrementar() {
    contador.value++
  }
  return { contador, incrementar }
})

const store = useMainStore()
</script>

<style scoped>
.my-card {
  max-width: 700px;
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
</style>
