<template>
    <div class="contenedor">

        <h1 class="text-red-10 text-weight-bold text-center"> ¿Qué es Vue?</h1>

        <div class="parrafo cursive-moderna">
            <h2 class=" cursive-elegante text-red-10">Descripción:</h2>
            <p>Vue.js es un framework progresivo para construir interfaces de usuario. Es progresivo porque puedes
                adoptarlo gradualmente: desde integrarlo en una página HTML simple hasta desarrollar aplicaciones de una
                sola página (SPA) complejas.</p>
        </div>

        <div class="caracteristicas">
            <h3 class="text-blue-4">Características clave:</h3>
            <ul>
                <li><strong>Reactividad:</strong> Los cambios en los datos se reflejan automáticamente en la interfaz.</li>
                <li><strong>Componentes reutilizables:</strong> Permite encapsular UI y lógica en bloques independientes.</li>
                <li><strong>Sintaxis declarativa:</strong> Usa templates basados en HTML con directivas.</li>
                <li><strong>Integración flexible:</strong> Puede coexistir con otras librerías o usarse como base de una SPA completa.</li>
            </ul>
        </div>

        <div class="ecosistema">
            <h3 class="text-green-4">Ecosistema de Vue:</h3>
            <ul>
                <li><strong>Vue Router:</strong> Para la gestión de rutas en SPAs.</li>
                <li><strong>Pinia:</strong> Para la gestión de estado centralizado (sucesor de Vuex).</li>
                <li><strong>Vite:</strong> Herramienta de desarrollo moderna y ultrarrápida.</li>
                <li><strong>Vue Devtools:</strong> Extensión de navegador para depurar aplicaciones Vue.</li>
            </ul>
        </div>

        <div class="ejemplo-codigo">
            <h3 class="text-orange-4">Ejemplo Práctico: Contador</h3>
            <div class="codigo-bloque">
                <p>Contador: {{ count }}</p>
                <button @click="increment">Incrementar</button>
            </div>
            <p>Este simple contador demuestra la reactividad de Vue. Al hacer clic en el botón, la variable <code>count</code> se actualiza y la vista se renderiza de nuevo automáticamente.</p>
        </div>

        <div class="ventajas">
            <h3 class="text-purple-4">¿Por qué elegir Vue?</h3>
            <ul>
                <li><strong>Curva de aprendizaje suave:</strong> Ideal para principiantes gracias a su sintaxis clara y excelente documentación.</li>
                <li><strong>Rendimiento optimizado:</strong> Su DOM virtual y sistema de reactividad lo hacen muy eficiente.</li>
                <li><strong>Comunidad activa:</strong> Un gran ecosistema de librerías y soporte de la comunidad.</li>
                <li><strong>Excelente documentación:</strong> Considerada una de las mejores en el mundo del desarrollo web.</li>
            </ul>
        </div>

        <div class="comparacion">
            <h3 class="text-teal-4">Vue 2 vs Vue 3</h3>
            <p>Vue 3 trajo mejoras significativas sobre Vue 2:</p>
            <ul>
                <li><strong>Composition API:</strong> Una nueva forma de organizar la lógica de los componentes, más escalable.</li>
                <li><strong>Mejor rendimiento:</strong> Reescritura del DOM virtual para ser más rápido y ligero.</li>
                <li><strong>Teleport y Fragments:</strong> Más flexibilidad para renderizar componentes.</li>
                <li><strong>Mejor soporte para TypeScript.</strong></li>
            </ul>
        </div>

        <div class="ejemplo-codigo-2">
            <h3 class="text-cyan-4">Otro Ejemplo: Two-Way Data Binding</h3>
            <div class="codigo-bloque">
                <input v-model="message" placeholder="Escribe algo aquí">
                <p>El mensaje es: {{ message }}</p>
            </div>
            <p>Con la directiva <code>v-model</code>, Vue crea un enlace bidireccional entre el input y la variable <code>message</code>.</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const message = ref('');

function increment() {
    count.value++;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Parisienne&family=Playwrite+AU+SA:wght@300&display=swap');

.contenedor {
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 2rem;
}

.cursive-elegante {
    font-family: 'Dancing Script', cursive;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.4;
}

.cursive-moderna {
    font-family: 'Playwrite AU SA', cursive;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.caracteristicas, .ecosistema, .ejemplo-codigo, .ventajas, .comparacion, .ejemplo-codigo-2 {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #fff;
    border-left: 5px solid;
    border-radius: 5px;
}

.caracteristicas { border-color: #2196F3; } /* Blue */
.ecosistema { border-color: #4CAF50; } /* Green */
.ejemplo-codigo { border-color: #FF9800; } /* Orange */
.ventajas { border-color: #9C27B0; } /* Purple */
.comparacion { border-color: #009688; } /* Teal */
.ejemplo-codigo-2 { border-color: #00BCD4; } /* Cyan */


h3 {
    margin-top: 0;
    font-size: 28px;
    font-family: 'Playwrite AU SA', cursive;
}

ul {
    padding-left: 20px;
    list-style-type: disc;
}

.comparacion ul {
    list-style-type: circle;
}

li {
    margin-bottom: 0.5rem;
    font-size: 18px;
}

.codigo-bloque {
    background-color: #2d2d2d;
    color: #f1f1f1;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-family: 'Courier New', Courier, monospace;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;    
}     

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-family: 'Playwrite AU SA', cursive;
    box-sizing: border-box; /* To prevent padding from affecting width */
    font-size: 16px;
}
</style>