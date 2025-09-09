<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Componentes en Vue.js</div>
                <q-separator class="q-my-sm" />
                <div>
                    <p>Un <b>componente</b> es una pieza reutilizable de la interfaz. Permite dividir la aplicación en bloques independientes y organizados.</p>
                    <q-banner class="bg-grey-2 q-mt-sm">
                        <code>
                            // Componente hijo
                            &lt;template&gt;<br>
                            &nbsp;&nbsp;&lt;p&gt;Soy un componente hijo&lt;/p&gt;<br>
                            &lt;/template&gt;<br>
                            &lt;script setup&gt;<br>
                            // lógica aquí<br>
                            &lt;/script&gt;
                        </code>
                    </q-banner>
                    <div class="q-mt-md">
                        <b>Uso en el componente padre:</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                &lt;template&gt;<br>
                                &nbsp;&nbsp;&lt;ComponenteHijo /&gt;<br>
                                &lt;/template&gt;<br>
                                &lt;script setup&gt;<br>
                                import ComponenteHijo from './ComponenteHijo.vue'<br>
                                &lt;/script&gt;
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <b>Comunicación entre componentes (props y eventos):</b>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                // Componente hijo
                                &lt;script setup&gt;<br>
                                defineProps(['mensaje'])<br>
                                &lt;/script&gt;<br>
                                &lt;template&gt;<br>
                                &nbsp;&nbsp;&lt;p&gt;{{ mensaje }}&lt;/p&gt;<br>
                                &lt;/template&gt;
                            </code>
                        </q-banner>
                        <q-banner class="bg-grey-2 q-mt-sm">
                            <code>
                                // Componente padre
                                &lt;template&gt;<br>
                                &nbsp;&nbsp;&lt;ComponenteHijo mensaje="Hola desde el padre" /&gt;<br>
                                &lt;/template&gt;
                            </code>
                        </q-banner>
                    </div>
                    <div class="q-mt-md">
                        <b>Ventajas de usar componentes:</b>
                        <ul>
                            <li>Reutilización de código y UI.</li>
                            <li>Mejor organización y mantenimiento.</li>
                            <li>Facilita el trabajo en equipo.</li>
                            <li>Permite crear interfaces escalables.</li>
                        </ul>
                    </div>
                    <div class="q-mt-md">
                        <b>Buenas prácticas:</b>
                        <ul>
                            <li>Usa nombres claros y en PascalCase para los componentes.</li>
                            <li>Divide la lógica en componentes pequeños y específicos.</li>
                            <li>Evita componentes demasiado grandes.</li>
                            <li>Documenta las props y eventos que recibe/emite cada componente.</li>
                        </ul>
                    </div>
                    <div class="q-mt-md">
                        <b>Recursos recomendados:</b>
                        <ul>
                            <li><a href="https://es.vuejs.org/v2/guide/components" target="_blank">Documentación oficial: Componentes Vue</a></li>
                            <li><a href="https://youtu.be/30AYGfp_oAM" target="_blank">Video: Componentes en Vue 3</a></li>
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
ul {
    margin-left: 1.5em;
    margin-bottom: 1em;
}
li {
    margin-bottom: 0.5em;
}
</style>
