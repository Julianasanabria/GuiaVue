
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Pinia: State Management en Vue.js</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p><b>Pinia</b> es la librería oficial para gestión de estado en Vue 3. Permite compartir datos entre componentes de forma reactiva y sencilla.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code class="code-block">
npm install pinia
# En tu archivo main.js 
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia())
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Ejemplo de store:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code class="code-block">
import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
    state: () => ({ contador: 0 }),
    actions: { incrementar() { this.contador++ } }
})
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <b>¿Cómo se usa Pinia en un componente?</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code class="code-block">
&lt;script setup&gt;
import { useMainStore } from '../stores/mainStore'
const store = useMainStore()
&lt;/script&gt;
&lt;template&gt;
  &lt;p&gt;Contador: {{ store.contador }}&lt;/p&gt;
  &lt;button @click="store.incrementar"&gt;Incrementar&lt;/button&gt;
&lt;/template&gt;
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <div class="text-h6 text-secondary q-mb-sm">Ventajas de Pinia</div>
                        <q-list bordered separator class="rounded-borders">
                            <q-item><q-item-section avatar><q-icon color="positive" name="check_circle" /></q-item-section><q-item-section>API sencilla y moderna.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon color="positive" name="check_circle" /></q-item-section><q-item-section>Soporte para TypeScript.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon color="positive" name="check_circle" /></q-item-section><q-item-section>Persistencia de estado con plugins.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon color="positive" name="check_circle" /></q-item-section><q-item-section>Devtools integrados.</q-item-section></q-item>
                        </q-list>
                    </div>
                    <div class="q-mt-md">
                        <div class="text-h6 text-secondary q-mb-sm">Recursos útiles</div>
                        <q-list bordered separator class="rounded-borders">
                            <q-item clickable tag="a" href="https://pinia.vuejs.org/" target="_blank">
                                <q-item-section avatar><q-icon color="primary" name="link" /></q-item-section>
                                <q-item-section>Documentación oficial de Pinia</q-item-section>
                            </q-item>
                            <q-item clickable tag="a" href="https://vuejs.org/guide/scaling-up/state-management.html" target="_blank">
                                <q-item-section avatar><q-icon color="primary" name="link" /></q-item-section>
                                <q-item-section>Guía de gestión de estado en Vue.js</q-item-section>
                            </q-item>
                        </q-list>
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
.code-block {
    white-space: pre-wrap;
    word-break: break-word;
    display: block;
    background: transparent;
}
code {
    white-space: pre-wrap;
    word-break: break-word;
    background: #e3e3e3;
    padding: 2px 6px;
    border-radius: 4px;
}
.q-banner .code-block {
    background: transparent;
    padding: 0;
}
</style>