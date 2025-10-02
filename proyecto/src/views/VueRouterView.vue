<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título e Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">Vue Router: El Enrutador Oficial</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Navegación y gestión de rutas en Single-Page Applications (SPA).
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          <b>Vue Router</b> es la librería oficial para gestionar la navegación en aplicaciones Vue. Permite mapear componentes a diferentes URLs, creando una experiencia de "múltiples páginas" sin necesidad de recargar el navegador.
        </p>
      </q-card-section>

      <!-- Instalación y Configuración -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Instalación y Configuración</div>
        <div class="text-h6 q-mt-lg">1. Instalación</div>
        <CodeBlock :code="code.install" class="q-mt-sm" />

        <div class="text-h6 q-mt-lg">2. Creación de Rutas</div>
        <p>Es una buena práctica definir las rutas en un archivo separado, por ejemplo <code>src/router/routes.js</code>.</p>
        <p>Fíjate en la sintaxis <code>() => import(...)</code>. Esto se llama <b>lazy loading</b> (carga perezosa). Significa que el código de una página solo se descarga del servidor cuando el usuario navega a ella, haciendo que la carga inicial de tu aplicación sea mucho más rápida.</p>
        <CodeBlock :code="code.routes" class="q-mt-sm" />

        <div class="text-h6 q-mt-lg">3. Integración en la App (<code>main.js</code>)</div>
        <p>Finalmente, creamos la instancia del router y le decimos a nuestra aplicación Vue que la use. Aquí también definimos el "modo de historial".</p>
        <ul>
          <li><code>createWebHistory()</code>: Usa la API de Historial del navegador para lograr URLs limpias (ej: <code>dominio.com/usuarios/1</code>). Requiere configuración del servidor para funcionar correctamente en producción.</li>
          <li><code>createWebHashHistory()</code>: Usa un hash (<code>#</code>) en la URL (ej: <code>dominio.com/#/usuarios/1</code>). No requiere configuración especial del servidor y funciona siempre.</li>
        </ul>
        <CodeBlock :code="code.mainJs" class="q-mt-sm" />
      </q-card-section>

      <!-- Conceptos Clave -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Conceptos Clave</div>
        <q-list bordered separator>
          <!-- router-link -->
          <q-item><q-item-section>
            <q-item-label class="text-h6"><code>&lt;router-link&gt;</code></q-item-label>
            <q-item-label caption>Navegación declarativa.</q-item-label>
            <p class="q-mt-sm">Es el componente para crear enlaces. Se renderiza como una etiqueta <code>&lt;a&gt;</code> por defecto. Usa la prop <code>to</code> para definir la ruta de destino.</p>
            <CodeBlock :code="code.routerLink" class="q-mt-sm" />
          </q-item-section></q-item>

          <!-- router-view -->
          <q-item><q-item-section>
            <q-item-label class="text-h6"><code>&lt;router-view&gt;</code></q-item-label>
            <q-item-label caption>Punto de renderizado.</q-item-label>
            <p class="q-mt-sm">Actúa como un marcador de posición donde se renderizará el componente que corresponde a la ruta actual.</p>
            <CodeBlock :code="code.routerView" class="q-mt-sm" />
          </q-item-section></q-item>

          <!-- Rutas Dinámicas -->
          <q-item><q-item-section>
            <q-item-label class="text-h6">Rutas Dinámicas con Parámetros</q-item-label>
            <q-item-label caption>Para crear páginas como perfiles de usuario, detalles de producto, etc.</q-item-label>
            <p class="q-mt-sm">Se definen con dos puntos (<code>:</code>) en el path. El valor se puede acceder en el componente a través de <code>useRoute()</code>.</p>
            <CodeBlock :code="code.dynamic" class="q-mt-sm" />
          </q-item-section></q-item>

          <!-- Navegación Programática -->
          <q-item><q-item-section>
            <q-item-label class="text-h6">Navegación Programática</q-item-label>
            <q-item-label caption>Navegar desde JavaScript, por ejemplo, después de un login.</q-item-label>
            <p class="q-mt-sm">Se utiliza el composable <code>useRouter()</code> para obtener acceso a la instancia del enrutador.</p>
            <CodeBlock :code="code.programmatic" class="q-mt-sm" />
          </q-item-section></q-item>
        </q-list>
      </q-card-section>

      <!-- Navigation Guards -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Navigation Guards (Guardianes de Navegación)</div>
        <p>Son "ganchos" que se ejecutan antes o después de una navegación. Son perfectos para proteger rutas que requieren autenticación o para preguntar al usuario si está seguro de abandonar una página con cambios sin guardar.</p>
        <p>El guardián más común es <code>router.beforeEach</code>, que se ejecuta antes de cada cambio de ruta. Recibe tres argumentos:</p>
        <ul>
          <li><code>to</code>: La ruta de <b>destino</b>.</li>
          <li><code>from</code>: La ruta de <b>origen</b>.</li>
          <li><code>next</code>: Una función que <b>debes llamar</b> para resolver el gancho. Puedes llamarla sin argumentos para permitir la navegación, o con un objeto de ruta (<code>next({ name: 'login' })</code>) para redirigir.</li>
        </ul>
        <CodeBlock :code="code.guards" class="q-mt-sm" />
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
  install: `<span class="token-keyword">npm</span> <span class="token-function">install</span> vue-router`,
  routes: `<span class="token-comment">// src/router/routes.js</span>
<span class="token-keyword">const</span> routes = [
  {
    <span class="token-attr-name">path</span>: <span class="token-string">'/'</span>,
    <span class="token-attr-name">name</span>: <span class="token-string">'home'</span>,
    <span class="token-attr-name">component</span>: () => <span class="token-function">import</span>(<span class="token-string">'pages/IndexPage.vue'</span>)
  },
  {
    <span class="token-attr-name">path</span>: <span class="token-string">'/about'</span>,
    <span class="token-attr-name">name</span>: <span class="token-string">'about'</span>,
    <span class="token-attr-name">component</span>: () => <span class="token-function">import</span>(<span class="token-string">'pages/AboutPage.vue'</span>)
  }
]
<span class="token-keyword">export default</span> routes`,
  mainJs: `<span class="token-comment">// src/main.js</span>
<span class="token-keyword">import</span> { createApp } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">import</span> { createRouter, createWebHistory } <span class="token-keyword">from</span> <span class="token-string">'vue-router'</span>
<span class="token-keyword">import</span> routes <span class="token-keyword">from</span> <span class="token-string">'./router/routes'</span>

<span class="token-keyword">const</span> router = <span class="token-function">createRouter</span>({
  <span class="token-attr-name">history</span>: <span class="token-function">createWebHistory</span>(),
  routes
})

<span class="token-function">createApp</span>(App).<span class="token-function">use</span>(router).<span class="token-function">mount</span>(<span class="token-string">'#app'</span>)`,
  routerLink: `<span class="token-punctuation">&lt;</span><span class="token-tag">router-link</span> <span class="token-attr-name">to</span><span class="token-punctuation">=</span><span class="token-attr-value">"/"</span><span class="token-punctuation">&gt;</span>Inicio<span class="token-punctuation">&lt;/</span><span class="token-tag">router-link</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">router-link</span> <span class="token-attr-name">:to</span><span class="token-punctuation">=</span><span class="token-attr-value">"{ name: 'about' }"</span><span class="token-punctuation">&gt;</span>Sobre nosotros<span class="token-punctuation">&lt;/</span><span class="token-tag">router-link</span><span class="token-punctuation">&gt;</span>`,
  routerView: `<span class="token-comment">&lt;!-- En tu App.vue o MainLayout.vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">router-view</span> <span class="token-punctuation">/&gt;</span>`,
  dynamic: `<span class="token-comment">// En routes.js</span>
{ <span class="token-attr-name">path</span>: <span class="token-string">'/user/:id'</span>, <span class="token-attr-name">name</span>: <span class="token-string">'user-detail'</span>, <span class="token-attr-name">component</span>: UserDetail }

<span class="token-comment">// En el componente UserDetail.vue</span>
<span class="token-keyword">import</span> { useRoute } <span class="token-keyword">from</span> <span class="token-string">'vue-router'</span>
<span class="token-keyword">const</span> route = <span class="token-function">useRoute</span>()
<span class="token-keyword">const</span> userId = route.params.id`,
  programmatic: `<span class="token-keyword">import</span> { useRouter } <span class="token-keyword">from</span> <span class="token-string">'vue-router'</span>
<span class="token-keyword">const</span> router = <span class="token-function">useRouter</span>()

<span class="token-keyword">async function</span> <span class="token-function">login</span>() {
  <span class="token-comment">// ...lógica de login</span>
  <span class="token-keyword">await</span> router.<span class="token-function">push</span>({ <span class="token-attr-name">name</span>: <span class="token-string">'dashboard'</span> })
}`,
  guards: `router.<span class="token-function">beforeEach</span>((to, from, next) => {
  <span class="token-keyword">if</span> (to.meta.requiresAuth && !isAuthenticated) {
    <span class="token-function">next</span>({ <span class="token-attr-name">name</span>: <span class="token-string">'login'</span> })
  } <span class="token-keyword">else</span> {
    <span class="token-function">next</span>()
  }
})`
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
