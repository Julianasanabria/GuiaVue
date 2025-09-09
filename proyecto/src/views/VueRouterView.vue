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
        <q-banner class="bg-grey-2 q-mt-sm">
          <code class="code-block" v-pre>npm install vue-router</code>
        </q-banner>

        <div class="text-h6 q-mt-lg">2. Creación de Rutas</div>
        <p>Es una buena práctica definir las rutas en un archivo separado, por ejemplo <code>src/router/routes.js</code>.</p>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code class="code-block" v-pre>
// src/router/routes.js
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/IndexPage.vue') // Lazy loading
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('pages/AboutPage.vue')
  }
]
export default routes
          </code>
        </q-banner>

        <div class="text-h6 q-mt-lg">3. Integración en la App (<code>main.js</code>)</div>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code class="code-block" v-pre>
// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
          </code>
        </q-banner>
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
            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>&lt;router-link to="/"&gt;Inicio&lt;/router-link&gt;
&lt;router-link :to="{ name: 'about' }"&gt;Sobre nosotros&lt;/router-link&gt;</code></q-banner>
          </q-item-section></q-item>

          <!-- router-view -->
          <q-item><q-item-section>
            <q-item-label class="text-h6"><code>&lt;router-view&gt;</code></q-item-label>
            <q-item-label caption>Punto de renderizado.</q-item-label>
            <p class="q-mt-sm">Actúa como un marcador de posición donde se renderizará el componente que corresponde a la ruta actual.</p>
            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>&lt;!-- En tu App.vue o MainLayout.vue --&gt;
&lt;router-view /&gt;</code></q-banner>
          </q-item-section></q-item>

          <!-- Rutas Dinámicas -->
          <q-item><q-item-section>
            <q-item-label class="text-h6">Rutas Dinámicas con Parámetros</q-item-label>
            <q-item-label caption>Para crear páginas como perfiles de usuario, detalles de producto, etc.</q-item-label>
            <p class="q-mt-sm">Se definen con dos puntos (<code>:</code>) en el path. El valor se puede acceder en el componente a través de <code>useRoute()</code>.</p>
            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>// En routes.js
{ path: '/user/:id', name: 'user-detail', component: UserDetail }

// En el componente UserDetail.vue
import { useRoute } from 'vue-router'
const route = useRoute()
const userId = route.params.id // Accede al parámetro 'id'</code></q-banner>
          </q-item-section></q-item>

          <!-- Navegación Programática -->
          <q-item><q-item-section>
            <q-item-label class="text-h6">Navegación Programática</q-item-label>
            <q-item-label caption>Navegar desde JavaScript, por ejemplo, después de un login.</q-item-label>
            <p class="q-mt-sm">Se utiliza el composable <code>useRouter()</code> para obtener acceso a la instancia del enrutador.</p>
            <q-banner class="bg-grey-2 q-mt-sm"><code class="code-block" v-pre>import { useRouter } from 'vue-router'
const router = useRouter()

function login() {
  // ...lógica de login
  router.push({ name: 'dashboard' })
}</code></q-banner>
          </q-item-section></q-item>
        </q-list>
      </q-card-section>

      <!-- Navigation Guards -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Navigation Guards (Guardianes de Navegación)</div>
        <p>Son "ganchos" que se ejecutan antes, durante o después de una navegación. Son perfectos para proteger rutas que requieren autenticación.</p>
        <q-banner class="bg-grey-2 q-mt-sm">
          <code class="code-block" v-pre>
// En tu archivo de router
router.beforeEach((to, from, next) => {
  const isAuthenticated = // ... tu lógica para saber si está logueado
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirige al login si la ruta requiere autenticación y no está logueado
    next({ name: 'login' })
  } else {
    // Permite la navegación
    next()
  }
})
          </code>
        </q-banner>
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
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  background: #fff;
}
.q-banner {
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 8px;
  line-height: 1.7;
  background: #f5f5f5;
  color: #222;
}
.code-block {
  white-space: pre-wrap;
  word-break: break-word;
  display: block;
  background: transparent;
  padding: 0;
}
code {
  white-space: pre-wrap;
  word-break: break-word;
  background: #e3e3e3;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
