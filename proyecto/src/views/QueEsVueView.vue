<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-primary text-center">Ciclo de Vida en Vue.js</div>
        <div class="text-subtitle2 q-mt-xs text-center text-grey-7">
          ¿Qué es el ciclo de vida?
        </div>
        <q-separator class="q-my-sm" />
        <div>
          En Vue, cada componente pasa por una serie de etapas desde que se crea,
          se monta en el DOM, se actualiza cuando cambian sus datos, y finalmente
          se destruye.<br />
          A estos pasos se les llama <b>ciclo de vida</b> y Vue nos da
          <b>hooks</b> (ganchos) para ejecutar código en cada momento.
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-secondary q-mb-md">Etapas principales</div>
        <q-timeline color="primary">
          <q-timeline-entry
            title="Creación (Creation)"
            subtitle="Preparación de datos"
            icon="settings"
          >
            <div>
              El componente prepara sus datos (<code>data</code>, <code>props</code>, <code>methods</code>).<br />
              <b>Aún no aparece en pantalla (DOM).</b>
              <ul>
                <li><b>beforeCreate</b> → No se puede acceder a data ni methods.</li>
                <li><b>created</b> → Ya existen data y methods, pero aún no hay acceso al DOM.</li>
              </ul>
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Montaje (Mounting)"
            subtitle="Inserción en el DOM"
            icon="publish"
          >
            <div>
              El componente se inserta en el DOM real.<br />
              Aquí ya puedes manipular elementos con <code>refs</code>.
              <ul>
                <li><b>beforeMount</b> → Antes de montar el DOM.</li>
                <li><b>mounted</b> → El componente ya está en el DOM.</li>
              </ul>
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Actualización (Updating)"
            subtitle="Cambios en datos"
            icon="autorenew"
          >
            <div>
              Se ejecuta cada vez que cambian datos (<code>data</code>, <code>props</code>).
              <ul>
                <li><b>beforeUpdate</b> → Antes de que Vue actualice el DOM.</li>
                <li><b>updated</b> → Después de que el DOM se actualizó.</li>
              </ul>
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Destrucción (Unmounting)"
            subtitle="Eliminación del componente"
            icon="delete"
          >
            <div>
              El componente se elimina del DOM.<br />
              Aquí limpias timers, sockets o eventos.
              <ul>
                <li><b>beforeUnmount</b> → Justo antes de destruir el componente.</li>
                <li><b>unmounted</b> → El componente ya fue eliminado.</li>
              </ul>
              <div class="text-caption">
                En Vue 2: <code>beforeDestroy</code> y <code>destroyed</code>.
              </div>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent q-mb-sm">Hooks en Options API</div>
        <q-list bordered class="custom-list">
          <q-item v-for="hook in optionsApiHooks" :key="hook.name" clickable>
            <q-item-section>
              <b>{{ hook.name }}</b>: {{ hook.desc }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent q-mb-sm">Hooks en Composition API (Vue 3)</div>
        <q-list bordered class="custom-list">
          <q-item v-for="hook in compositionApiHooks" :key="hook.name" clickable>
            <q-item-section>
              <b>{{ hook.name }}</b>: {{ hook.desc }}
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-mt-sm text-caption">
          <b>Nota:</b> no existen <code>beforeCreate</code> ni <code>created</code>, porque la lógica inicial se ejecuta directamente en <code>setup()</code>.
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent q-mb-sm">Comparación con la vida real</div>
        <q-table
          :rows="lifeComparison"
          :columns="lifeColumns"
          dense
          flat
          hide-bottom
          class="custom-table"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent q-mb-sm">Diagrama del ciclo de vida (Vue 3)</div>
        <q-img
          src="https://vuejs.org/assets/lifecycle.16e4c08e.png"
          alt="Diagrama ciclo de vida Vue 3"
          style="max-width: 500px; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.2);"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-accent q-mb-sm">Buenas prácticas</div>
        <q-list bordered class="custom-list">
          <q-item v-for="(tip, i) in tips" :key="i">
            <q-item-section>
              <span v-html="tip"></span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
const optionsApiHooks = [
  { name: 'beforeCreate', desc: 'No hay data ni methods.' },
  { name: 'created', desc: 'Ya puedes acceder a data y methods.' },
  { name: 'beforeMount', desc: 'Antes de mostrar el DOM.' },
  { name: 'mounted', desc: 'El componente ya está en el DOM.' },
  { name: 'beforeUpdate', desc: 'Antes de actualizar el DOM.' },
  { name: 'updated', desc: 'El DOM ya se actualizó.' },
  { name: 'beforeUnmount', desc: 'Antes de destruir el componente.' },
  { name: 'unmounted', desc: 'El componente ya fue destruido.' }
];

const compositionApiHooks = [
  { name: 'onBeforeMount', desc: 'Antes de montar el DOM.' },
  { name: 'onMounted', desc: 'El componente ya está en el DOM.' },
  { name: 'onBeforeUpdate', desc: 'Antes de actualizar el DOM.' },
  { name: 'onUpdated', desc: 'El DOM ya se actualizó.' },
  { name: 'onBeforeUnmount', desc: 'Antes de destruir el componente.' },
  { name: 'onUnmounted', desc: 'El componente ya fue destruido.' }
];

const lifeColumns = [
  { name: 'hook', label: 'Hook Vue', field: 'hook', align: 'left' },
  { name: 'real', label: 'Vida Real', field: 'real', align: 'left' }
];

const lifeComparison = [
  { hook: 'beforeCreate', real: 'Bebé en el vientre (no tiene identidad)' },
  { hook: 'created', real: 'Bebé nace (ya tiene nombre, pero aún no está en casa)' },
  { hook: 'beforeMount', real: 'Preparas la cuna antes de que llegue' },
  { hook: 'mounted', real: 'El bebé ya está en casa' },
  { hook: 'beforeUpdate', real: 'Niño a punto de cambiarse de ropa' },
  { hook: 'updated', real: 'Niño con ropa nueva' },
  { hook: 'beforeUnmount', real: 'Empacando para mudarse' },
  { hook: 'unmounted', real: 'Persona ya se mudó, la habitación está vacía' }
];

const tips = [
  '✔ Usa <b>created</b> para inicializar datos o llamar a APIs.',
  '✔ Usa <b>mounted</b> para acceder a elementos del DOM o integrar librerías externas.',
  '✔ Usa <b>beforeUnmount</b> para limpiar timers, sockets o eventos.',
  '❌ Evita modificar datos dentro de <b>updated</b>, puede causar bucles infinitos.',
  '❌ <b>beforeCreate</b> casi nunca se necesita.'
];
</script>

<style scoped>
.my-card {
  max-width: 950px;
  margin: 2rem auto;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 1rem;
}

/* Listas */
.custom-list {
  border-radius: 8px;
  background: #fafafa;
}
.custom-list .q-item {
  transition: background 0.2s;
}
.custom-list .q-item:hover {
  background: #f0f0f0;
}

/* Tabla */
.custom-table {
  border-radius: 8px;
  overflow: hidden;
  background: #fafafa;
}
.custom-table thead {
  background: #e3f2fd;
  font-weight: bold;
}
.custom-table td {
  font-size: 15px;
}

/* Textos */
.text-subtitle2 {
  font-size: 18px;
}
.text-h4 {
  font-weight: 700;
}
</style>
