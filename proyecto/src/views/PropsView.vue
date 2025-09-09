
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Props en Vue.js</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p>Las <b>props</b> permiten pasar datos de un componente padre a un componente hijo.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            // Componente hijo
                            &lt;template&gt;<br>
                            &nbsp;&nbsp;&lt;p&gt;Hola, {{ nombre }}&lt;/p&gt;<br>
                            &lt;/template&gt;<br>
                            &lt;script setup&gt;<br>
                            defineProps(['nombre'])<br>
                            &lt;/script&gt;
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Uso en el componente padre:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                &lt;template&gt;<br>
                                &nbsp;&nbsp;&lt;ComponenteHijo nombre="Karen" /&gt;<br>
                                &lt;/template&gt;
                            </code>
                        </q-banner>
                    </div>
                </div>
            </q-card-section>
            <q-card-section>
                <div class="text-h6 text-accent q-mb-sm">Analogía</div>
                <p>
                    Las props son como "mensajes" que un padre envía a su hijo. Por ejemplo, el padre dice: "Hola, Karen" y el hijo responde: "Hola, papá".
                </p>
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