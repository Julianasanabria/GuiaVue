<template>
  <div class="full-width">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders full-height">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-yellow-8'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Conociendo un poco de Vue 3</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer 
        v-model="drawer"
        show-if-above
        :width="280"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-purple-3' : 'bg-yellow-2'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :to="menuItem.to" active-class="text-primary" exact v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="full-width">
        <q-page class="full-width" padding>
          <router-view class="full-width"/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const menuList = [
  {
    label: 'Que es Vue 3',
    separator: true,
    to: '/'
  },
{
  label: 'Requisitos',
  separator: true,
  to: '/RequisitosView'  
},
  {
    label: 'Creacion del proyecto',
    separator: true,
    to: '/CreacionProyectoView'
  },
  {
    label: 'Interpolacion',
    separator: true,
    to: '/InterpolacionView'
  },
  {
    label: 'Directivas de vue',
    separator: true,
    to: '/DirectivasView'
  },
  {
    label: 'Options Api',
    separator: true,
    to: '/OptionsApiView'
  },
  {
    label: 'Composition Api',
    separator: true,
    to: '/CompositionApiView'
  },
  {
    label: 'Ciclo de vida de Vue',
    separator: true,
    to: '/CicloVidaView'
  },
  {
    label: 'Componentes importación',
    separator: true,
    to: '/ComponentesView'
  },
  {
    label: 'Componetización Props',
    separator: true,
    to: '/PropsView'
  },
  {
    label: 'Creación de un proyecto template Quasar',
    separator: true,
    to: '/TemplateQuasarView'
  },
  {
    label: 'Instalar Quasar en un proyecto ya creado',
    separator: true,
    to: '/InstalacionQuasarView'
  },
  {
    label: 'Vue router',
    separator: true,
    to: '/VueRouterView'
  },
  {
    label: 'Pinia',
    separator: true,
    to: '/PiniaView'
  },
  {
    label: 'Pinia-plugin-presistedstate',
    separator: true,
    to: '/PersistenciaView'
  },
]

  const drawer = ref(false)

</script>
<style scoped>


</style>