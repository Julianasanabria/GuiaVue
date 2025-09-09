
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Persistencia de datos en Vue.js</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p>La persistencia permite guardar datos en el navegador o en servidores para que no se pierdan al recargar la página.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            // LocalStorage<br>
                            localStorage.setItem('nombre', 'Karen')<br>
                            const nombre = localStorage.getItem('nombre')
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Ejemplo con Pinia y persistencia:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                // Instala pinia-plugin-persistedstate<br>
                                npm install pinia-plugin-persistedstate<br><br>
                                // En tu store<br>
                                import { defineStore } from 'pinia'<br>
                                export const useMainStore = defineStore('main', {<br>
                                    state: () => ({ nombre: 'Karen' }),<br>
                                    persist: true<br>
                                })
                            </code>
                        </q-banner>
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


