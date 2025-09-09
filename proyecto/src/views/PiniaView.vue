
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Pinia: State Management en Vue.js</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p><b>Pinia</b> es la librería oficial para gestión de estado en Vue 3. Permite compartir datos entre componentes de forma reactiva y sencilla.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            npm install pinia<br>
                            // main.js<br>
                            import { createPinia } from 'pinia'<br>
                            app.use(createPinia())
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Ejemplo de store:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                import { defineStore } from 'pinia'<br>
                                export const useMainStore = defineStore('main', {<br>
                                    state: () => ({ contador: 0 }),<br>
                                    actions: { incrementar() { this.contador++ } }<br>
                                })
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <b>¿Cómo se usa Pinia en un componente?</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                &lt;script setup&gt;<br>
                                import { useMainStore } from '../stores/mainStore'<br>
                                const store = useMainStore()<br>
                                &lt;/script&gt;<br>
                                &lt;template&gt;<br>
                                &nbsp;&nbsp;&lt;p&gt;Contador: {{ store.contador }}&lt;/p&gt;<br>
                                &nbsp;&nbsp;&lt;button @click="store.incrementar"&gt;Incrementar&lt;/button&gt;<br>
                                &lt;/template&gt;
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <b>Ventajas de Pinia:</b>
                        <ul>
                            <li>API sencilla y moderna.</li>
                            <li>Soporte para TypeScript.</li>
                            <li>Persistencia de estado con plugins.</li>
                            <li>Devtools integrados.</li>
                        </ul>
                    </div>
                    <div class="q-mt-md">
                        <b>Recursos útiles:</b>
                        <ul>
                            <li><a href="https://pinia.vuejs.org/" target="_blank">Documentación oficial de Pinia</a></li>
                            <li><a href="https://vuejs.org/guide/scaling-up/state-management.html" target="_blank">Guía de gestión de estado en Vue.js</a></li>
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
code {
    white-space: pre-wrap;
    word-break: break-word;
    background: #e3e3e3;
    padding: 2px 6px;
    border-radius: 4px;
}
</style>