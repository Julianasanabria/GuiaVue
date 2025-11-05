<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título y Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">Creación de un Proyecto Vue.js</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Desde un simple script hasta una aplicación profesional
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          Iniciar un proyecto con Vue.js es flexible. Puedes empezar con una simple etiqueta
          <code>&lt;script&gt;</code> para prototipos rápidos, o usar herramientas de línea de comandos (CLI)
          para construir aplicaciones escalables y optimizadas. A continuación, exploramos las
          tres formas principales.
        </p>
      </q-card-section>

      <!-- Métodos de Creación -->
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <!-- Opción 1: CDN -->
          <div class="col-12">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Opción 1: Vía CDN <q-badge align="top" color="info" label="Para prototipos" /></div>
                <p class="q-mt-sm">
                  Ideal para pruebas rápidas, ejemplos en CodePen/JSFiddle o para añadir un poco de interactividad a una página HTML existente sin un proceso de "build" (compilación). Simplemente añades una etiqueta <code>&lt;script&gt;</code> y ¡listo!
                </p>
                <CodeBlock :code="code.cdn" class="q-mt-sm" />
                <div class="row q-mt-md q-col-gutter-sm">
                  <div class="col-12 col-sm-6"><b>Ventajas:</b> Cero configuración, portabilidad, ideal para demos.</div>
                  <div class="col-12 col-sm-6"><b>Desventajas:</b> Sin soporte para Single-File Components (.vue), no hay optimización de build, difícil de escalar.</div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Opción 2: Vue CLI -->
          <div class="col-12">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Opción 2: Con Vue CLI <q-badge align="top" color="orange" label="Legado" /></div>
                <p class="q-mt-sm">
                  La herramienta clásica, basada en <b>Webpack</b> (un potente empaquetador de módulos). Sigue siendo muy robusta y es la opción a seguir si necesitas mantener un proyecto antiguo o requieres una configuración muy específica de Webpack.
                </p>
                <CodeBlock :code="code.vueCli" class="q-mt-sm" />
                <div class="row q-mt-md q-col-gutter-sm">
                  <div class="col-12 col-sm-6"><b>Ventajas:</b> Ecosistema maduro, altamente configurable, muchos plugins.</div>
                  <div class="col-12 col-sm-6"><b>Desventajas:</b> Servidor de desarrollo y builds más lentos que Vite.</div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Opción 3: Vite -->
          <div class="col-12">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">Opción 3: Con Vite <q-badge align="top" color="positive" label="Recomendado" /></div>
                <p class="q-mt-sm">
                  La opción moderna y recomendada por el equipo de Vue. Vite (que en francés significa "rápido") utiliza los módulos ES nativos del navegador para ofrecer un servidor de desarrollo <b>ultrarrápido</b>. Los cambios en tu código se reflejan en el navegador casi instantáneamente.
                </p>
                <div class="text-h6 q-mt-lg">Paso a Paso Detallado</div>
                <q-list bordered separator class="rounded-borders q-mt-sm">
                  <q-item>
                    <q-item-section avatar><q-icon name="create_new_folder" color="primary" /></q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">1. Crea y navega a la carpeta de tu proyecto</q-item-label>
                      <q-item-label caption>Abre tu terminal y crea un directorio para almacenar tu proyecto, luego entra en él.</q-item-label>
                      <CodeBlock :code="code.folder" class="q-mt-sm" />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar><q-icon name="terminal" color="primary" /></q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">2. Ejecuta el asistente de creación de Vite</q-item-label>
                      <q-item-label caption>Este comando iniciará un asistente interactivo en tu terminal.</q-item-label>
                      <CodeBlock :code="code.vite" class="q-mt-sm" />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar><q-icon name="checklist" color="primary" /></q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">3. Sigue las instrucciones del asistente</q-item-label>
                      <q-item-label caption>Vite te guiará para que configures tu proyecto. Deberás:</q-item-label>
                      <CodeBlock :code="code.viteSteps" class="q-mt-sm" />
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar><q-icon name="download" color="primary" /></q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">4. Instala las dependencias y arranca el servidor</q-item-label>
                      <q-item-label caption>Una vez creado el proyecto, instala los paquetes necesarios con npm y lanza el servidor de desarrollo.</q-item-label>
                      <CodeBlock :code="code.installAndRun" class="q-mt-sm" />
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*WULv4MqSBtUoMEEBDZkOhA.png"
                  alt="Captura de pantalla de la terminal mostrando el proyecto Vite creado y el servidor de desarrollo iniciado."
                  class="q-mt-md rounded-borders"
                  style="max-width: 600px; margin: 0 auto; display: block;"
                />
                <div class="row q-mt-md q-col-gutter-sm">
                  <div class="col-12 col-sm-6"><b>Ventajas:</b> Arranque casi instantáneo, HMR (Hot Module Replacement) rapidísimo, configuración sencilla, optimizado para tecnologías modernas.</div>
                  <div class="col-12 col-sm-6"><b>Desventajas:</b> El ecosistema de plugins es más nuevo que el de Webpack.</div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!-- Tabla Comparativa -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Tabla Comparativa</div>
        <q-markup-table flat bordered>
          <thead>
            <tr>
              <th class="text-left">Característica</th>
              <th class="text-left">CDN</th>
              <th class="text-left">Vue CLI (Webpack)</th>
              <th class="text-left">Vite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Velocidad Dev Server</td>
              <td>N/A</td>
              <td>Lenta (empaqueta todo al inicio)</td>
              <td><b class="text-positive">Muy Rápida</b> (sirve archivos bajo demanda)</td>
            </tr>
            <tr>
              <td>Velocidad Build</td>
              <td>N/A</td>
              <td>Lenta (empaqueta todo)</td>
              <td><b class="text-positive">Rápida</b> (usa Rollup, muy optimizado)</td>
            </tr>
            <tr>
              <td>Soporte .vue (SFC)</td>
              <td>No</td>
              <td>Sí</td>
              <td><b class="text-positive">Sí</b></td>
            </tr>
            <tr>
              <td>Configuración</td>
              <td>Ninguna</td>
              <td>Moderada / Compleja</td>
              <td><b class="text-positive">Mínima</b></td>
            </tr>
            <tr>
              <td>Caso de Uso Principal</td>
              <td>Prototipos / Demos</td>
              <td>Proyectos legacy / Mantenimiento</td>
              <td><b class="text-positive">Nuevos proyectos Vue 3</b></td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>

      <!-- Conclusión y Recursos -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">¿Cuál elegir?</div>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar><q-icon color="positive" name="rocket_launch" /></q-item-section>
            <q-item-section>
              <q-item-label>Para cualquier proyecto nuevo con Vue 3...</q-item-label>
              <q-item-label caption>Usa <b>Vite</b>. Es el estándar actual y te dará la mejor experiencia de desarrollo.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon color="orange" name="construction" /></q-item-section>
            <q-item-section>
              <q-item-label>Si vas a trabajar en un proyecto existente...</q-item-label>
              <q-item-label caption>Usa <b>Vue CLI</b> si el proyecto ya está construido con él. La migración a Vite es posible, pero requiere trabajo.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon color="info" name="science" /></q-item-section>
            <q-item-section>
              <q-item-label>Si solo quieres probar una idea rápidamente...</q-item-label>
              <q-item-label caption>Usa la opción <b>CDN</b>. Es la forma más rápida de tener Vue funcionando en una página.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent">Recursos recomendados</div>
        <q-list>
          <q-item clickable tag="a" href="https://vitejs.dev/" target="_blank">
            <q-item-section avatar><q-icon name="link" /></q-item-section>
            <q-item-section>Documentación oficial de Vite</q-item-section>
          </q-item>
          <q-item clickable tag="a" href="https://vuejs.org/guide/quick-start.html" target="_blank">
            <q-item-section avatar><q-icon name="link" /></q-item-section>
            <q-item-section>Guía rápida oficial de Vue.js</q-item-section>
          </q-item>
          <q-item clickable tag="a" href="https://cli.vuejs.org/" target="_blank">
            <q-item-section avatar><q-icon name="link" /></q-item-section>
            <q-item-section>Documentación de Vue CLI</q-item-section>
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
  cdn: `<span class="token-comment">&lt;!-- 1. Incluye el script de Vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">src</span><span class="token-punctuation">=</span><span class="token-attr-value">"https://unpkg.com/vue@3"</span><span class="token-punctuation">&gt;</span><span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- 2. Define el contenedor de tu app --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">id</span><span class="token-punctuation">=</span><span class="token-attr-value">"app"</span><span class="token-punctuation">&gt;</span>{{ mensaje }}<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- 3. Crea y monta la instancia de Vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>
  Vue.<span class="token-function">createApp</span>({ <span class="token-function">data</span>(){ <span class="token-keyword">return</span> { <span class="token-attr-name">mensaje</span>: <span class="token-string">'Hola Vue'</span> } } }).<span class="token-function">mount</span>(<span class="token-string">'#app'</span>)
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  vueCli: `<span class="token-comment"># 1. Instalar Vue CLI globalmente (solo una vez)</span>
<span class="token-keyword">npm</span> <span class="token-function">install</span> -g @vue/cli

<span class="token-comment"># 2. Crear el proyecto (te guiará con preguntas)</span>
<span class="token-keyword">vue</span> <span class="token-function">create</span> mi-proyecto-vue`,
  folder: `<span class="token-comment"># Crea una carpeta llamada 'proyectos-vue' y entra en ella</span>
<span class="token-keyword">mkdir</span> proyectos-vue
<span class="token-keyword">cd</span> proyectos-vue`,
  vite: `<span class="token-comment"># El comando te preguntará el nombre del proyecto y otras opciones</span>
<span class="token-keyword">npm</span> <span class="token-function">create</span> vite@latest`,
  viteSteps: `<span class="token-comment"># 1. Escribe el nombre de tu proyecto (ej: mi-proyecto-vite)</span>
<span class="token-output">✔ Project name: … mi-proyecto-vite</span>
<span class="token-comment"># 2. Selecciona "Vue" usando las flechas y presiona Enter</span>
<span class="token-output">✔ Select a framework: › Vue</span>
<span class="token-comment"># 3. Elige una variante (ej: Vue para JavaScript puro)</span>
<span class="token-output">✔ Select a variant: › Vue</span>`,
  installAndRun: `<span class="token-comment"># Entra a la carpeta que acabas de crear</span>
<span class="token-keyword">cd</span> mi-proyecto-vite
<span class="token-comment"># Instala las dependencias listadas en package.json</span>
<span class="token-keyword">npm</span> <span class="token-function">install</span>
<span class="token-comment"># Inicia el servidor de desarrollo</span>
<span class="token-keyword">npm</span> <span class="token-function">run</span> dev`
});
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  background: #fff;
}
</style>
