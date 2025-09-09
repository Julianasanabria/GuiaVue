<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Requisitos para trabajar con Vue.js</div>
        <div class="text-subtitle2 q-mt-xs">Instalación y herramientas</div>
        <q-separator class="q-my-sm" />
        <div>
          <ul>
            <li><b>Node.js</b> (descargar desde <a href="https://nodejs.org/" target="_blank">nodejs.org</a>)</li>
            <li><b>NPM</b> (ya viene con Node.js)</li>
            <li><b>Yarn / pnpm</b> (opcional)</li>
            <li><b>Vue CLI</b> (opcional): <code>npm install -g @vue/cli</code></li>
            <li><b>Vite</b> (recomendado): <code>npm create vite@latest mi-proyecto-vue</code></li>
            <li><b>Extensiones VS Code:</b> Volar, ESLint, Prettier</li>
          </ul>
          <q-banner class="bg-grey-2 q-mt-md">
            <code>node -v</code> <code>npm -v</code>
          </q-banner>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h5 text-secondary">Comandos útiles</div>
        <q-list bordered>
          <q-item><q-item-section><b>Instalar Vue CLI:</b> <code>npm install -g @vue/cli</code></q-item-section></q-item>
          <q-item><q-item-section><b>Crear proyecto con Vue CLI:</b> <code>vue create mi-proyecto-vue</code></q-item-section></q-item>
          <q-item><q-item-section><b>Crear proyecto con Vite:</b> <code>npm create vite@latest</code></q-item-section></q-item>
        </q-list>
      </q-card-section>
      <q-card-section>
        <div class="text-h5 text-secondary">¿Por qué necesitamos estas herramientas?</div>
        <ul>
          <li><b>Node.js:</b> Es como el motor que hace que todo funcione.</li>
          <li><b>NPM:</b> Es como una tienda donde compras piezas para tu proyecto.</li>
          <li><b>Vue CLI:</b> Es como un asistente que te ayuda a empezar rápido.</li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>