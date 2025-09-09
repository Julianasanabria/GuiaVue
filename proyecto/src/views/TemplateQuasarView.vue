
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <!-- Título e Introducción -->
            <q-card-section>
                <div class="text-h4 text-primary">Plantillas y Componentes Clave de Quasar</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    Construyendo interfaces ricas y responsivas con facilidad.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Quasar es un framework de UI sobre Vue.js que viene con una rica colección de componentes, directivas y plugins. Su objetivo es permitirte escribir código una vez y desplegarlo como sitio web, aplicación móvil y de escritorio.
                </p>
            </q-card-section>

            <!-- Layouts -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Estructura de Layout</div>
                <p>Quasar proporciona un sistema de layouts para organizar tu aplicación. Un layout típico incluye un encabezado, un menú lateral (drawer) y un contenedor para las páginas.</p>
                <q-banner class="bg-grey-2 q-mt-sm">
                    <code class="code-block" v-pre>
&lt;!-- src/layouts/MainLayout.vue --&gt;
&lt;template&gt;
  &lt;q-layout view="lHh Lpr lFf"&gt;
    &lt;q-header elevated&gt;
      &lt;q-toolbar&gt;
        &lt;q-toolbar-title&gt;Mi App Quasar&lt;/q-toolbar-title&gt;
      &lt;/q-toolbar&gt;
    &lt;/q-header&gt;

    &lt;q-drawer show-if-above bordered&gt;
      &lt;q-list&gt;
        &lt;!-- Enlaces del menú --&gt;
      &lt;/q-list&gt;
    &lt;/q-drawer&gt;

    &lt;q-page-container&gt;
      &lt;!-- Aquí se renderizan las vistas del router --&gt;
      &lt;router-view /&gt;
    &lt;/q-page-container&gt;
  &lt;/q-layout&gt;
&lt;/template&gt;
                    </code>
                </q-banner>
            </q-card-section>

            <!-- Grid System -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Sistema de Rejilla (Grid)</div>
                <p>Quasar incluye un potente sistema de rejilla flexbox de 12 puntos para crear layouts responsivos.</p>
                <q-banner class="bg-grey-2 q-mt-sm">
                    <code class="code-block" v-pre>
&lt;div class="row q-col-gutter-md"&gt;
  &lt;div class="col-12 col-md-6"&gt;
    &lt;!-- Ocupa 12 columnas en móvil, 6 en desktop --&gt;
  &lt;/div&gt;
  &lt;div class="col-12 col-md-6"&gt;
    &lt;!-- Ocupa 12 columnas en móvil, 6 en desktop --&gt;
  &lt;/div&gt;
&lt;/div&gt;
                    </code>
                </q-banner>
            </q-card-section>

            <!-- Componentes Comunes -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Showcase de Componentes</div>
                <p>Aquí tienes ejemplos de algunos de los componentes más utilizados:</p>
                <q-list bordered separator>
                    <!-- Botones -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Botones (<code>q-btn</code>)</q-item-label>
                        <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>&lt;q-btn color="primary" label="Primario" /&gt;
&lt;q-btn flat color="secondary" label="Plano" /&gt;
&lt;q-btn outline rounded color="accent" label="Con Borde" /&gt;</code></q-banner>
                    </q-item-section></q-item>

                    <!-- Inputs -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Inputs (<code>q-input</code>)</q-item-label>
                        <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>&lt;q-input filled v-model="texto" label="Escribe algo..."&gt;
  &lt;template v-slot:prepend&gt;
    &lt;q-icon name="person" /&gt;
  &lt;/template&gt;
&lt;/q-input&gt;</code></q-banner>
                    </q-item-section></q-item>

                    <!-- Tarjetas -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Tarjetas (<code>q-card</code>)</q-item-label>
                        <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>&lt;q-card class="my-card"&gt;
  &lt;q-card-section&gt;Contenido de la tarjeta&lt;/q-card-section&gt;
  &lt;q-separator /&gt;
  &lt;q-card-actions align="right"&gt;
    &lt;q-btn flat&gt;Acción&lt;/q-btn&gt;
  &lt;/q-card-actions&gt;
&lt;/q-card&gt;</code></q-banner>
                    </q-item-section></q-item>

                    <!-- Notificaciones -->
                    <q-item><q-item-section>
                        <q-item-label class="text-h6">Notificaciones (<code>$q.notify</code>)</q-item-label>
                        <p class="q-mt-sm">Se invocan desde JavaScript, no desde la plantilla.</p>
                        <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>import { useQuasar } from 'quasar'
const $q = useQuasar()
$q.notify({
  message: 'Operación exitosa',
  color: 'positive',
  icon: 'check'
})</code></q-banner>
                    </q-item-section></q-item>
                </q-list>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
// No se requiere lógica de script para esta vista de documentación.
</script>

<style scoped>
.my-card {
    max-width: 900px;
    margin: 2rem auto;
    margin-bottom: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
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
    background-color: #e3e3e3;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
}
.code-block {
    display: block;
    background: transparent;
}
</style>