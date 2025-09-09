<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título Principal -->
      <q-card-section>
        <div class="text-h4 text-primary">Requisitos para trabajar con Vue.js</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Configurando tu entorno de desarrollo profesional
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          Para empezar a construir aplicaciones con Vue.js de manera moderna y eficiente,
          necesitas un conjunto de herramientas que forman el ecosistema de desarrollo.
          A continuación, desglosamos cada una de ellas.
        </p>
      </q-card-section>

      <!-- Requisitos Fundamentales -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Requisitos Fundamentales</div>
        <q-list separator>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6">Node.js y NPM</q-item-label>
              <q-item-label caption>El motor y el gestor de paquetes</q-item-label>
              <q-item-label class="q-mt-sm">
                <b>Node.js</b> es un entorno de ejecución de JavaScript que te permite correr código JavaScript fuera del navegador. Es la base para todas las herramientas de desarrollo modernas.
                <br>
                <b>NPM (Node Package Manager)</b> viene incluido con Node.js y se usa para instalar y gestionar las dependencias (librerías, frameworks) de tu proyecto.
                <br>
                <span class="text-weight-medium">Recomendación:</span> Instala la versión <b>LTS (Long-Term Support)</b> desde <a href="https://nodejs.org/" target="_blank">nodejs.org</a> para mayor estabilidad.
              </q-item-label>
              <q-banner dense class="bg-grey-2 q-mt-md">
                <template v-slot:avatar>
                  <q-icon name="terminal" color="black" />
                </template>
                Verifica tu instalación con: <code>node -v</code> y <code>npm -v</code>
              </q-banner>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-h6">Editor de Código: Visual Studio Code</q-item-label>
              <q-item-label caption>Tu espacio de trabajo</q-item-label>
              <q-item-label class="q-mt-sm">
                Aunque puedes usar cualquier editor, <b>VS Code</b> es el estándar de facto en la comunidad de Vue gracias a su increíble soporte y extensiones.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Herramientas de Scaffolding -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Creación de Proyectos (Scaffolding)</div>
        <p>Estas herramientas te ayudan a generar la estructura inicial de un proyecto Vue con las mejores prácticas.</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Vite <q-badge color="positive" label="Recomendado" /></div>
                <p>La herramienta de nueva generación. Ofrece un servidor de desarrollo extremadamente rápido y una configuración optimizada.</p>
                <q-banner dense class="bg-grey-2">
                  <code>npm create vite@latest mi-proyecto-vue -- --template vue</code>
                </q-banner>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Vue CLI <q-badge color="orange" label="Legado" /></div>
                <p>El asistente clásico para proyectos Vue. Sigue siendo muy potente, pero Vite es más rápido para el desarrollo.</p>
                <q-banner dense class="bg-grey-2">
                  <code>npm install -g @vue/cli</code><br>
                  <code>vue create mi-proyecto-vue</code>
                </q-banner>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!-- Extensiones para VS Code -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Extensiones para VS Code</div>
        <p>Potencia tu productividad con estas extensiones esenciales:</p>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar><q-icon name="extension" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Vue Language Features (Volar)</b></q-item-label>
              <q-item-label caption>Soporte oficial para Vue 3. Ofrece autocompletado, resaltado de sintaxis y detección de errores.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="spellcheck" color="secondary" /></q-item-section>
            <q-item-section>
              <q-item-label><b>ESLint</b></q-item-label>
              <q-item-label caption>Analiza tu código en busca de errores y problemas de estilo, ayudando a mantener la calidad.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="format_paint" color="accent" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Prettier - Code formatter</b></q-item-label>
              <q-item-label caption>Formatea automáticamente tu código al guardar, garantizando un estilo consistente en todo el proyecto.</q-item-label>
            </q-item-section>
          </q-item>
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
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

code {
  background-color: #e3e3e3;
  padding: 3px 6px;
  border-radius: 4px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
}
</style>