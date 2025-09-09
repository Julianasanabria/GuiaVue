
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Template básico con Quasar</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p>Quasar te permite crear interfaces modernas y responsivas fácilmente. Aquí tienes un ejemplo de template básico:</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            &lt;template&gt;<br>
                            &nbsp;&nbsp;&lt;q-btn label="Botón Quasar" color="primary" /&gt;<br>
                            &lt;/template&gt;
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Más componentes:</b>
                        <ul>
                            <li><code>&lt;q-card&gt;</code> para tarjetas</li>
                            <li><code>&lt;q-input&gt;</code> para campos de texto</li>
                            <li><code>&lt;q-list&gt;</code> para listas</li>
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