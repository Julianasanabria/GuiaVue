
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <!-- Título y Introducción -->
            <q-card-section>
                <div class="text-h4 text-primary">Persistencia de Datos en Vue.js</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    Guardando el estado para que sobreviva a recargas y cierres de pestaña.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Por defecto, cualquier dato en tus componentes de Vue (en <CodeBlock :code="'data'" /> o <CodeBlock :code="'ref'" />) se pierde cuando el usuario recarga la página. La <b>persistencia</b> es la técnica de guardar estos datos en un almacenamiento más duradero, como el navegador del usuario, para que la información se mantenga entre sesiones.
                </p>
            </q-card-section>

            <!-- APIs Nativas del Navegador -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">APIs Nativas del Navegador</div>
                <q-list bordered separator>
                    <!-- localStorage -->
                    <q-item>
                        <q-item-section>
                            <q-item-label class="text-h6"><CodeBlock :code="'localStorage'" /></q-item-label>
                            <q-item-label caption>Almacenamiento persistente que no expira.</q-item-label>
                            <p class="q-mt-sm">
                                Guarda datos como pares clave-valor (solo strings). Los datos <b>no se eliminan</b> al cerrar el navegador y permanecen hasta que se borran explícitamente. Es ideal para guardar preferencias de usuario, carritos de compra, etc.
                            </p>
                            <CodeBlock :code="`// Guardar un objeto (hay que convertirlo a string)
const usuario = { id: 1, nombre: 'Karen' };
localStorage.setItem('usuario', JSON.stringify(usuario));

// Leer el dato (hay que convertirlo de vuelta a objeto)
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

// Eliminar el dato
localStorage.removeItem('usuario');

// Limpiar todo el localStorage
localStorage.clear();`" />
                        </q-item-section>
                    </q-item>
                    <!-- sessionStorage -->
                    <q-item>
                        <q-item-section>
                            <q-item-label class="text-h6"><CodeBlock :code="'sessionStorage'" /></q-item-label>
                            <q-item-label caption>Almacenamiento por sesión (por pestaña).</q-item-label>
                            <p class="q-mt-sm">
                                Funciona igual que <CodeBlock :code="'localStorage'" />, pero los datos <b>se eliminan automáticamente</b> cuando se cierra la pestaña del navegador. Es útil para datos temporales que no deben persistir indefinidamente.
                            </p>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>

            <!-- Tabla Comparativa -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Tabla Comparativa</div>
                <q-markup-table flat bordered>
                    <thead>
                        <tr>
                            <th class="text-left">Característica</th>
                            <th class="text-left">localStorage</th>
                            <th class="text-left">sessionStorage</th>
                            <th class="text-left">Cookies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Persistencia</td><td>Permanente (hasta borrado manual)</td><td>Por sesión de pestaña</td><td>Hasta fecha de expiración</td></tr>
                        <tr><td>Capacidad</td><td>~5-10 MB</td><td>~5-10 MB</td><td>~4 KB</td></tr>
                        <tr><td>Accesible desde</td><td>Solo cliente (JavaScript)</td><td>Solo cliente (JavaScript)</td><td>Cliente y Servidor (enviadas en cada petición HTTP)</td></tr>
                        <tr><td>Caso de Uso</td><td>Preferencias de usuario, estado de la app</td><td>Datos de un formulario, estado temporal</td><td>Autenticación, seguimiento de sesión</td></tr>
                    </tbody>
                </q-markup-table>
            </q-card-section>

            <!-- Persistencia con Pinia -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Persistencia Automática con Pinia</div>
                <p class="text-body1">
                    Manejar la persistencia manualmente puede ser repetitivo. Para Pinia, la solución recomendada es usar el plugin <CodeBlock :code="'pinia-plugin-persistedstate'" />, que automatiza todo el proceso.
                </p>
                <!-- Instalación -->
                <div class="text-h6 q-mt-lg">1. Instalación y Configuración</div>
                <CodeBlock :code="`# 1. Instalar el plugin
npm install pinia-plugin-persistedstate

# 2. Añadirlo a Pinia en tu archivo main.js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)`" />
                <!-- Uso -->
                <div class="text-h6 q-mt-lg">2. Uso en tus Stores</div>
                <p>Una vez configurado, solo necesitas añadir la opción <CodeBlock :code="'persist: true'" /> a tu store.</p>
                <CodeBlock :code="`// En: src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nombre: 'Karen',
    token: null
  }),
  // ¡Con solo esta línea, todo el estado se guardará en localStorage!
  persist: true
})`" />
                <!-- Uso Avanzado -->
                <div class="text-h6 q-mt-lg">3. Configuración Avanzada</div>
                <p>Puedes personalizar el comportamiento de la persistencia pasando un objeto a la opción <CodeBlock :code="'persist'" />.</p>
                <CodeBlock :code="`export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0,
    preferenciaEnvio: 'estandar'
  }),
  persist: {
    // Cambiar el nombre de la clave en el storage
    key: 'mi-tienda-carrito',

    // Especificar el tipo de storage (localStorage o sessionStorage)
    storage: sessionStorage,

    // Guardar solo una parte del estado
    paths: ['items', 'total'] // 'preferenciaEnvio' no se guardará
  }
})`" />
            </q-card-section>

            <!-- Buenas Prácticas -->
            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Buenas Prácticas</div>
                <q-list bordered separator>
                    <q-item>
                        <q-item-section avatar><q-icon name="security" color="negative" /></q-item-section>
                        <q-item-section>
                            <q-item-label><b>No guardes datos sensibles.</b></q-item-label>
                            <q-item-label caption><CodeBlock :code="'localStorage'" /> es accesible por cualquier script en tu página. Nunca guardes contraseñas, tokens de alta seguridad o información personal identificable.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="storage" color="info" /></q-item-section>
                        <q-item-section>
                            <q-item-label><b>Sé consciente del tamaño.</b></q-item-label>
                            <q-item-label caption>Aunque 5MB parece mucho, evita guardar datos masivos o innecesarios para no impactar el rendimiento.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar><q-icon name="sync" color="positive" /></q-item-section>
                        <q-item-section>
                            <q-item-label><b>Automatiza con plugins.</b></q-item-label>
                            <q-item-label caption>Para Pinia/Vuex, usar un plugin de persistencia es más limpio, seguro y menos propenso a errores que hacerlo manualmente.</q-item-label>
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
import CodeBlock from '../components/CodeBlock.vue'
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
.code-block {
    white-space: pre-wrap;
    word-break: break-word;
    display: block;
    background: transparent;
}
code {
    white-space: pre-wrap;
    word-break: break-word;
    background: #e3e3e3;
    padding: 2px 6px;
    border-radius: 4px;
}
.q-banner .code-block {
    background: transparent;
    padding: 0;
}
</style>
