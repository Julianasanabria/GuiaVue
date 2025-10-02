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
                <b>Node.js</b> es un entorno que permite ejecutar JavaScript en tu computadora, fuera de un navegador web. Es como el "taller" donde construirás y probarás tu aplicación Vue antes de mostrarla al mundo.
                <br>
                <b>NPM (Node Package Manager)</b> viene incluido con Node.js y es el "gestor de herramientas" de tu taller. Lo usas para instalar Vue, Quasar, y cualquier otra librería que necesites en tu proyecto.
                <br>
                <span class="text-weight-medium">Recomendación:</span> Instala la versión <b>LTS (Long-Term Support)</b> desde <a href="https://nodejs.org/" target="_blank">nodejs.org</a> para mayor estabilidad.
              </q-item-label>
              <CodeBlock :code="code.verify" class="q-mt-md" />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-h6">Editor de Código: Visual Studio Code</q-item-label>
              <q-item-label caption>Tu espacio de trabajo</q-item-label>
              <q-item-label class="q-mt-sm">
                Aunque puedes usar cualquier editor, <b>VS Code</b> es el estándar de facto en la comunidad de Vue (y en gran parte del desarrollo web) gracias a su increíble soporte, su inteligencia para autocompletar código y su gigantesco ecosistema de extensiones.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Herramientas de Scaffolding -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Creación de Proyectos (Scaffolding)</div>
        <p>En lugar de crear archivos y carpetas a mano, estas herramientas de línea de comandos generan por ti toda la estructura inicial de un proyecto Vue, configurado con las mejores prácticas.</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Vite <q-badge color="positive" label="Recomendado" /> <q-icon name="bolt" color="accent" /></div>
                <p>La herramienta de nueva generación. Ofrece un servidor de desarrollo extremadamente rápido y una configuración optimizada.</p>
                <CodeBlock :code="code.vite" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Vue CLI <q-badge color="orange" label="Legado" /> <q-icon name="build_circle" color="secondary" /></div>
                <p>El asistente clásico para proyectos Vue. Sigue siendo muy potente, pero Vite es más rápido para el desarrollo.</p>
                <CodeBlock :code="code.vueCli" />
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
            <q-item-section avatar><q-icon name="bug_report" color="red" /></q-item-section>
            <q-item-section>
              <q-item-label><b>Vue Devtools</b> (Extensión de Navegador)</q-item-label>
              <q-item-label caption>No es de VS Code, sino para Chrome/Firefox. Es <b>imprescindible</b> para depurar tus aplicaciones, inspeccionar componentes, ver su estado y mucho más.</q-item-label>
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
        <q-card-section class="text-right">
        <span class="text-caption text-grey-7">
          Desarrollado por Santiago Carvajal y Juliana Sanabria
        </span>
      </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import CodeBlock from '../components/CodeBlock.vue';

const code = reactive({
  verify: `<span class="token-comment"># Verificar versión de Node.js</span>
<span class="token-keyword">node</span> <span class="token-parameter">-v</span>
<span class="token-comment"># Verificar versión de npm</span>
<span class="token-keyword">npm</span> <span class="token-parameter">-v</span>`,
  vite: `<span class="token-keyword">npm</span> <span class="token-function">create</span> vite@latest mi-proyecto-vue -- --template vue`,
  vueCli: `<span class="token-keyword">npm</span> <span class="token-function">install</span> -g @vue/cli
<span class="token-keyword">vue</span> <span class="token-function">create</span> mi-proyecto-vue`
});
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
</style>