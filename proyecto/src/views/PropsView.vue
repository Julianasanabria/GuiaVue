
<template>
    <q-page class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h4 text-primary">Props en Vue.js</div>
                <div class="text-subtitle2 q-mt-xs text-grey-7">
                    La forma de comunicar componentes: de padre a hijo.
                </div>
                <q-separator class="q-my-sm" />
                <p class="text-body1 q-mt-md">
                    Las <b>props</b> (abreviatura de "propiedades") son la manera en que un componente "padre" puede pasarle información a un componente "hijo". Es un canal de comunicación en una sola dirección: de arriba hacia abajo.
                </p>
                <p class="text-body1">
                    Piensa en ello como configurar los ajustes de un aparato. Cuando usas un componente &lt;TarjetaUsuario&gt;, le pasas props como nombre="Julieta" y :edad="25" para decirle cómo debe renderizarse.
                </p>
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Definiendo y Usando Props</div>
                <p>En el componente hijo, usas la macro <CodeBlock :code="'defineProps'" /> para declarar qué props espera recibir.</p>
                <CodeBlock :code="code.hijo" />

                <p class="q-mt-lg">Luego, en el componente padre, pasas los datos como si fueran atributos de una etiqueta HTML.</p>
                <CodeBlock :code="code.padre" />
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Validación de Props: ¡Una Buena Práctica!</div>
                <p>Aunque un array de strings funciona, es mucho mejor y más seguro definir las props con un objeto. Esto te permite especificar el <b>tipo</b>, si es <b>requerida</b>, y un <b>valor por defecto</b>.</p>
                <CodeBlock :code="code.validacion" />
                <p class="q-mt-md">Hacer esto ayuda a prevenir errores. Si alguien intenta usar tu componente pasándole un tipo de dato incorrecto, Vue te avisará con un mensaje en la consola. ¡Es como tener un pequeño guardián para tus componentes!</p>
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Flujo de Datos Unidireccional</div>
                <p>Este es un concepto <b>fundamental</b> en Vue. Los datos fluyen en una sola dirección: del padre al hijo a través de las props.</p>
                <q-card class="q-my-md" flat bordered>
                    <q-card-section class="bg-red-1">
                        <div class="text-h6 text-negative">¡No lo hagas!</div>
                        <p>Un componente hijo <b>nunca debe intentar cambiar (mutar) una prop</b> directamente. Vue te advertirá si lo intentas. Es como si un niño intentara cambiar su propio nombre de nacimiento; no tiene sentido y causa confusión.</p>
                    </q-card-section>
                    <q-card-section class="bg-green-1">
                        <div class="text-h6 text-positive">La forma correcta</div>
                        <p>Si el hijo necesita notificar un cambio o una acción al padre (por ejemplo, el usuario hizo clic en un botón dentro del hijo), debe <b>emitir un evento</b>. El padre escucha ese evento y es el responsable de cambiar el estado.</p>
                        <p>Esta regla hace que el flujo de datos de tu aplicación sea fácil de seguir y depurar. Siempre sabes de dónde viene el cambio.</p>
                    </q-card-section>
                </q-card>
            </q-card-section>

            <q-card-section>
                <div class="text-h5 text-secondary q-mb-md">Ejemplo Interactivo</div>
                <p>
                    Aquí, el componente padre (<CodeBlock :code="'PropsView'" />) tiene una variable <CodeBlock :code="'textoBoton'" />.
                    Se la pasamos como prop al componente hijo (<CodeBlock :code="'q-btn'" />) usando la sintaxis de dos puntos <CodeBlock :code="':label=&quot;textoBoton&quot;'" />.
                </p>
                <q-card flat bordered>
                    <q-card-section>
                        <q-input filled v-model="textoBoton" label="Texto para el botón (prop)" />
                        <div class="q-mt-md">
                            <p>El componente <CodeBlock :code="'q-btn'" /> recibe el texto y lo renderiza:</p>
                            <q-btn color="primary" :label="textoBoton" />
                        </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="bg-grey-2">
                        <CodeBlock :code="code.interactivo" />
                    </q-card-section>
                </q-card>
            </q-card-section>

            <q-card-section>
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
import { ref, reactive } from 'vue';
import CodeBlock from '../components/CodeBlock.vue';

const textoBoton = ref('Haz clic aquí');

const code = reactive({
  hijo: `<span class="token-comment">&lt;!-- Saludo.vue (Componente Hijo) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">h1</span><span class="token-punctuation">&gt;</span>Hola, {{ nombre }}<span class="token-punctuation">&lt;/</span><span class="token-tag">h1</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>

<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-comment">// La forma más simple: un array de strings.</span>
<span class="token-function">defineProps</span>([<span class="token-string">'nombre'</span>])
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  padre: `<span class="token-comment">&lt;!-- App.vue (Componente Padre) --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">Saludo</span> <span class="token-attr-name">nombre</span><span class="token-punctuation">=</span><span class="token-attr-value">"Mundo"</span> <span class="token-punctuation">/&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">Saludo</span> <span class="token-attr-name">nombre</span><span class="token-punctuation">=</span><span class="token-attr-value">"Vue"</span> <span class="token-punctuation">/&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>

<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-keyword">import</span> Saludo <span class="token-keyword">from</span> <span class="token-string">'./Saludo.vue'</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  validacion: `<span class="token-comment">&lt;!-- PerfilUsuario.vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-function">defineProps</span>({
  <span class="token-comment">// Prop con validación de tipo</span>
  <span class="token-attr-name">nombre</span>: String,

  <span class="token-comment">// Prop requerida y con tipo</span>
  <span class="token-attr-name">idUsuario</span>: {
    <span class="token-attr-name">type</span>: Number,
    <span class="token-attr-name">required</span>: <span class="token-boolean">true</span>
  },

  <span class="token-comment">// Prop con valor por defecto</span>
  <span class="token-attr-name">estaActivo</span>: {
    <span class="token-attr-name">type</span>: Boolean,
    <span class="token-attr-name">default</span>: <span class="token-boolean">false</span>
  }
})
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>`,
  interactivo: `<span class="token-comment">&lt;!-- Padre.vue --&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">script</span> <span class="token-attr-name">setup</span><span class="token-punctuation">&gt;</span>
<span class="token-keyword">import</span> { ref } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">const</span> textoBoton = <span class="token-function">ref</span>(<span class="token-string">'Haz clic aquí'</span>)
<span class="token-punctuation">&lt;/</span><span class="token-tag">script</span><span class="token-punctuation">&gt;</span>
<span class="token-punctuation">&lt;</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">q-input</span> <span class="token-attr-name">v-model</span><span class="token-punctuation">=</span><span class="token-attr-value">"textoBoton"</span> <span class="token-punctuation">/&gt;</span>
  <span class="token-punctuation">&lt;</span><span class="token-tag">q-btn</span> <span class="token-attr-name">:label</span><span class="token-punctuation">=</span><span class="token-attr-value">"textoBoton"</span> <span class="token-punctuation">/&gt;</span>
<span class="token-punctuation">&lt;/</span><span class="token-tag">template</span><span class="token-punctuation">&gt;</span>`
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