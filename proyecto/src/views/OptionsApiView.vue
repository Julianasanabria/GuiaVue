<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <!-- Título e Introducción -->
      <q-card-section>
        <div class="text-h4 text-primary">La Options API: El Enfoque Clásico</div>
        <div class="text-subtitle2 q-mt-xs text-grey-7">
          Organiza la lógica de tu componente en propiedades: data, methods, computed, etc.
        </div>
        <q-separator class="q-my-sm" />
        <p class="text-body1 q-mt-md">
          La <b>Options API</b> es la forma tradicional de escribir componentes en Vue. Se basa en un objeto de opciones
          donde defines la lógica del componente en propiedades separadas como <code>data</code>, <code>methods</code>,
          <code>computed</code>, <code>watch</code> y los hooks del ciclo de vida (<code>mounted</code>, <code>created</code>, etc.).
        </p>
        <p class="text-body1">
          Este enfoque es muy estructurado y fácil de seguir para principiantes, ya que cada pieza de lógica tiene su lugar designado.
        </p>
      </q-card-section>

      <!-- Propiedades Principales -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Propiedades Principales</div>
        <q-list bordered separator>
          <!-- data -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>data()</code></q-item-label>
              <q-item-label caption>La memoria del componente.</q-item-label>
              <p class="q-mt-sm">
                La función <code>data</code> debe devolver un objeto. Las propiedades de este objeto se vuelven reactivas y están disponibles en la plantilla y en otros métodos a través de <code>this</code>.
              </p>
              <div class="code-block-container q-mt-sm" v-pre><code>data() {
  return {
    contador: 0,
    mensaje: 'Hola Vue'
  }
}</code></div>
            </q-item-section>
          </q-item>

          <!-- methods -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>methods: { ... }</code></q-item-label>
              <q-item-label caption>Las acciones del componente.</q-item-label>
              <p class="q-mt-sm">
                Aquí se definen las funciones que se pueden llamar desde la plantilla (por ejemplo, en un <code>@click</code>) o desde otras partes del componente. Tienen acceso a las propiedades de <code>data</code> a través de <code>this</code>.
              </p>
              <div class="code-block-container q-mt-sm" v-pre><code>methods: {
  incrementar() {
    this.contador++;
  },
  resetear() {
    this.contador = 0;
  }
}</code></div>
            </q-item-section>
          </q-item>

          <!-- computed -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>computed: { ... }</code></q-item-label>
              <q-item-label caption>Datos derivados y cacheados.</q-item-label>
              <p class="q-mt-sm">
                Las propiedades computadas son como propiedades de <code>data</code>, pero su valor se calcula a partir de otras propiedades. Vue las cachea y solo las recalcula cuando una de sus dependencias cambia, lo que las hace muy eficientes.
              </p>
              <div class="code-block-container q-mt-sm" v-pre><code>computed: {
  doble() {
    // Se actualiza automáticamente cuando 'contador' cambia
    return this.contador * 2;
  }
}</code></div>
            </q-item-section>
          </q-item>

          <!-- watch -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>watch: { ... }</code></q-item-label>
              <q-item-label caption>Observa cambios en los datos.</q-item-label>
              <p class="q-mt-sm">
                Permite ejecutar código en respuesta a cambios en una propiedad específica de <code>data</code> o <code>props</code>. Es útil para realizar operaciones asíncronas o costosas.
              </p>
              <div class="code-block-container q-mt-sm" v-pre><code>watch: {
  contador(nuevoValor, valorAnterior) {
    console.log(`El contador cambió de ${valorAnterior} a ${nuevoValor}`);
  }
}</code></div>
            </q-item-section>
          </q-item>

          <!-- Hooks de Ciclo de Vida -->
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"><code>mounted()</code>, <code>created()</code>, etc.</q-item-label>
              <q-item-label caption>Momentos clave en la vida del componente.</q-item-label>
              <p class="q-mt-sm">
                Son funciones que Vue ejecuta automáticamente en momentos específicos, como cuando el componente es creado (<code>created</code>), insertado en el DOM (<code>mounted</code>), actualizado (<code>updated</code>) o destruido (<code>unmounted</code>).
              </p>
              <div class="code-block-container q-mt-sm" v-pre><code>export default {
  // ...
  mounted() {
    console.log('El componente ha sido montado en el DOM.');
    // Ideal para interactuar con el DOM o iniciar librerías externas.
  }
}</code></div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <!-- Ejemplo Práctico -->
      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Ejemplo Interactivo</div>
        <q-card flat bordered>
          <q-card-section>
            <p>Escribe en el campo de texto para ver cómo la propiedad computada reacciona al cambio.</p>
            <q-input filled v-model="message" label="Mensaje" clearable />
            <div class="q-mt-md">
              <p><b>Mensaje original:</b> {{ message }}</p>
              <p><b>Mensaje al revés (computado):</b> {{ reversedMessage }}</p>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat color="primary" @click="clearMessage">Limpiar Mensaje</q-btn>
          </q-card-actions>
        </q-card>

        <div class="text-h6 q-mt-lg">Código del Ejemplo</div>
        <div class="code-block-container q-mt-sm" v-pre><code>&lt;template&gt;
  &lt;q-input filled v-model="message" label="Mensaje" /&gt;
  &lt;p&gt;&lt;b&gt;Mensaje al revés (computado):&lt;/b&gt; {{ reversedMessage }}&lt;/p&gt;
  &lt;q-btn @click="clearMessage"&gt;Limpiar Mensaje&lt;/q-btn&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: 'Hola Vue!'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    clearMessage() {
      this.message = '';
    }
  }
}
&lt;/script&gt;</code></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
// Para demostrar la Options API, este componente está escrito con ella.
export default {
  name: 'OptionsApiView',
  data() {
    return {
      message: 'Hola Vue!'
    }
  },
  computed: {
    // Una propiedad computada que depende de 'message'
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    // Un método para modificar el estado
    clearMessage() {
      this.message = ''
    }
  }
}
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  background: #fff;
}

/* Estilo para los bloques de código */
.code-block-container {
  font-size: 14px;
  font-family: 'Fira Mono', 'Courier New', Courier, monospace;
  border-radius: 8px;
  line-height: 1.7;
  margin-bottom: 10px;
  background: #f5f5f5;
  color: #2c3e50;
  padding: 1rem 1.2rem;
  overflow-x: auto;
}

/* Estilo para el código inline */
code {
  background-color: #e3f2fd;
  color: #1d4ed8;
  padding: 0.2em 0.4em;
  margin: 0 2px;
  font-size: 85%;
  border-radius: 6px;
  white-space: pre-wrap;
  word-break: break-word;

}

/* Anular el estilo inline para el código dentro de los bloques */
.code-block-container code {
  background: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
  font-size: inherit;
  border-radius: 0;
}

</style>