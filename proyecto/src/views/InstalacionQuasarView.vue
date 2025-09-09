
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Instalación de Quasar</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p>Quasar es un framework basado en Vue.js para crear aplicaciones web, móviles y de escritorio con una sola base de código.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            npm install -g @quasar/cli<br>
                            quasar create mi-app-quasar<br>
                            cd mi-app-quasar<br>
                            quasar dev
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Instalación en proyecto existente:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                npm install quasar<br>
                                npm install @quasar/extras
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