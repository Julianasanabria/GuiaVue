<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Componentes en Vue.js</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    Construye tu aplicación con bloques reutilizables, como si fueran LEGOs.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Imagina que estás construyendo algo con LEGOs. En lugar de tener una sola pieza gigante y complicada, tienes muchos bloques pequeños y especializados (un bloque rojo de 2x4, una rueda, una ventana...). Puedes combinar estos bloques para crear cualquier cosa que imagines.
                </p>
                <p class="text-body1">
                    En Vue, los <b>componentes</b> son exactamente eso: bloques de construcción para tu interfaz. Cada componente es una pieza autocontenida y reutilizable que tiene su propio HTML (<code>&lt;template&gt;</code>), JavaScript (<code>&lt;script&gt;</code>) y CSS (<code>&lt;style&gt;</code>).
                </p>
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Anatomía de un Componente (SFC)</div>
                <p>Los componentes de Vue se escriben en archivos <code>.vue</code>, conocidos como <b>Single-File Components</b> (Componentes de un Solo Archivo). Esto es genial porque mantiene todo lo relacionado con una pieza de la UI en un solo lugar.</p>
                <CodeBlock :code="code.sfc" />
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Usando un Componente</div>
                <p>Una vez que has creado tu "bloque de LEGO", puedes usarlo en otro componente (un "padre") importándolo y colocándolo en su plantilla.</p>
                <CodeBlock :code="code.usage" />
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Comunicación entre Componentes</div>
                <p>Los componentes no viven aislados. Necesitan hablar entre ellos. Vue establece una regla muy clara para esto:</p>
                <ul>
                    <li><b>De Padre a Hijo:</b> se usan las <b>Props</b>.</li>
                    <li><b>De Hijo a Padre:</b> se usan los <b>Eventos</b>.</li>
                </ul>
                <p>Esto se conoce como "flujo de datos unidireccional" y hace que el comportamiento de tu aplicación sea mucho más predecible.</p>

                <div class="text-h6 q-mt-lg">1. Props (Padre → Hijo)</div>
                <p>El padre pasa datos al hijo a través de atributos en la etiqueta del componente. El hijo los declara para poder usarlos.</p>
                <CodeBlock :code="code.props" />

                <div class="text-h6 q-mt-lg">2. Eventos (Hijo → Padre)</div>
                <p>El hijo no puede cambiar directamente los datos del padre. En su lugar, "emite un evento" (como lanzar una bengala) para avisar al padre de que algo ha ocurrido. El padre escucha ese evento y decide qué hacer.</p>
                 <CodeBlock :code="code.events" />
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Slots: El Contenedor Mágico</div>
                <p>A veces quieres que un componente actúe como una "plantilla" o un "marco", y pasarle HTML desde el padre. Para eso existen los <b>slots</b>.</p>
                <CodeBlock :code="code.slots" />
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Ventajas y Buenas Prácticas</div>
                 <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                        <b>Ventajas Clave:</b>
                        <q-list dense>
                            <q-item><q-item-section avatar><q-icon name="recycling" color="positive" /></q-item-section><q-item-section><b>Reutilización:</b> Escribe un componente una vez, úsalo en todas partes.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon name="account_tree" color="positive" /></q-item-section><q-item-section><b>Organización:</b> Tu código es más fácil de leer, entender y mantener.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon name="groups" color="positive" /></q-item-section><q-item-section><b>Colaboración:</b> Diferentes personas pueden trabajar en diferentes componentes sin pisarse.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon name="escalator" color="positive" /></q-item-section><q-item-section><b>Escalabilidad:</b> Puedes construir aplicaciones enormes y complejas sin volverte loco.</q-item-section></q-item>
                        </q-list>
                    </div>
                    <div class="col-12 col-md-6">
                        <b>Buenas Prácticas:</b>
                        <q-list dense>
                            <q-item><q-item-section avatar><q-icon name="drive_file_rename_outline" color="info" /></q-item-section><q-item-section>Nombra los archivos de componentes en <b>PascalCase</b> (Ej: <code>MiComponente.vue</code>).</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon name="splitscreen" color="info" /></q-item-section><q-item-section>Crea componentes pequeños y con una <b>única responsabilidad</b>.</q-item-section></q-item>
                            <q-item><q-item-section avatar><q-icon name="description" color="info" /></q-item-section><q-item-section>Documenta las <b>props, eventos y slots</b> que tu componente espera.</q-item-section></q-item>
                        </q-list>
                    </div>
                </div>
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
  sfc: `<span class="token-comment">&lt;!-- MiBoton.vue --&gt;</span>

<span class="token-comment">&lt;!-- 1. El HTML del componente --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">button</span> <span class="token-attr-name">class</span><span class="token-punctuation">=</span><span class="token-attr-value">"mi-boton"</span> <span class="token-attr-name">@click</span><span class="token-punctuation">=</span><span class="token-attr-value">"incrementar"</span><span class="token-punctuation">&gt;</span>
    Me han pulsado {{ contador }} veces
  <span class="token-punctuation">&lt;/</span><span class="token-tag">button</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- 2. La lógica y datos del componente --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> contador = <span class="token-function">ref</span>(<span class="token-number">0</span>)
<span class="token-keyword">function</span> <span class="token-function">incrementar</span>() {
  contador.value<span class="token-operator">++</span>
}
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>

<span class="token-comment">&lt;!-- 3. Los estilos (opcionales y 'scoped' para que no afecten a otros componentes) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">style</span> <span class="token-attr-name">scoped</span><span class="token-punctuation">&gt;</span>
.mi-boton {
  background-color: #42b983;
  color: white;
}
<span class="token-punctuation">&lt;/</span><span class="token-tag">style</span><span class="token-punctuation">&gt;</span>`,
  usage: `<span class="token-comment">&lt;!-- App.vue (Componente Padre) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">h1</span><span class="token-punctuation">&gt;</span>Mi increíble aplicación<span class="token-punctuation">&lt;/</span><span class="token-tag">h1</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">MiBoton</span> <span class="token-punctuation">/&gt;</span> <span class="token-comment">&lt;!-- ¡Aquí está nuestro componente! --&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">MiBoton</span> <span class="token-punctuation">/&gt;</span> <span class="token-comment">&lt;!-- Podemos reutilizarlo cuantas veces queramos --&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>

<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-comment">// 1. Importamos el componente que hemos creado</span>
<span class="token-keyword">import</span> MiBoton <span class="token-keyword">from</span> <span class="token-string">'./components/MiBoton.vue'</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  props: `<span class="token-comment">&lt;!-- Padre.vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">TarjetaDeUsuario</span> <span class="token-attr-name">nombre</span><span class="token-punctuation">=</span><span class="token-attr-value">"Ana"</span> <span class="token-attr-name">:edad</span><span class="token-punctuation">=</span><span class="token-attr-value">"30"</span> <span class="token-punctuation">/&gt;</span>

<span class="token-comment">&lt;!-- TarjetaDeUsuario.vue (Hijo) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-function">defineProps</span>({
  nombre: String,
  edad: Number
})
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  events: `<span class="token-comment">&lt;!-- Alerta.vue (Hijo) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-keyword">const</span> emit = <span class="token-function">defineEmits</span>([<span class="token-string">'cerrar'</span>]) <span class="token-comment">// 1. Declaramos el evento</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>
<span class="token-comment">&lt;!-- ... al hacer click, emitimos el evento --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">button</span> <span class="token-attr-name">@click</span><span class="token-punctuation">=</span><span class="token-attr-value">"emit('cerrar')"</span><span class="token-punctuation">&gt;</span>Cerrar<span class="token-punctuation">&lt;/</span><span class="token-tag">button</span><span class="token-punctuation">&gt;</span>`,
  slots: `<span class="token-comment">&lt;!-- CajaConEstilo.vue (Hijo) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">div</span> <span class="token-attr-name">class</span><span class="token-punctuation">=</span><span class="token-attr-value">"caja-bonita"</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">slot</span><span class="token-punctuation">&gt;</span><span class="token-punctuation">&lt;/</span><span class="token-tag">slot</span><span class="token-punctuation">&gt;</span> <span class="token-comment">&lt;!-- Aquí se insertará el contenido del padre --&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">div</span><span class="token-punctuation">&gt;</span>`
});
</script>

<style scoped>
.my-card {
    max-width: 900px;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    background: #fff;
}
</style>
