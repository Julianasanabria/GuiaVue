<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary">Composition API en Vue.js</div>
        <q-separator class="q-my-sm" />
        <div>
          <p>La Composition API organiza la lógica dentro de <b>setup()</b> y permite reutilización y mejor escalabilidad.</p>
          <q-banner class="bg-grey-2 q-mt-md">
            <code>
              import { ref, computed } from 'vue'
              const contador = ref(0)
              const doble = computed(() => contador.value * 2)
              function incrementar(){ contador.value++ }
            </code>
          </q-banner>
          <div class="q-mt-md">
            <b>Ejemplo práctico:</b>
            <q-banner class="bg-grey-2 q-mt-sm">
              <code>
                &lt;template&gt;<br>
                &nbsp;&nbsp;&lt;p&gt;Contador: {{ contador }}&lt;/p&gt;<br>
                &nbsp;&nbsp;&lt;button @click="incrementar"&gt;Incrementar&lt;/button&gt;<br>
                &lt;/template&gt;<br>
                &lt;script setup&gt;<br>
                import { ref } from 'vue'<br>
                const contador = ref(0)<br>
                function incrementar(){ contador.value++ }<br>
                &lt;/script&gt;
              </code>
            </q-banner>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
// No se requiere lógica extra para la documentación
</script>
<style scoped>
.my-card {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 30px;
}
.q-banner {
  font-size: 15px;
  margin-bottom: 10px;
}
</style>