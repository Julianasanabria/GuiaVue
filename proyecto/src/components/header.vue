<template>
  <div class="full-width">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders full-height">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
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
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
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
  separator: false,
  to: '/RequisitosView'  
},
  {
    label: 'Creacion del proyecto',
    separator: false,
    to: '/CreacionProyectoView'
  },
  {
    label: 'Interpolacion',
    separator: false,
    to: '/InterpolacionView'
  },
  {
    label: 'Directivas de vue',
    separator: false,
    to: '/DirectivasView'
  },
  {
    label: 'Options Api',
    separator: false,
    to: '/OptionsApiView'
  },
  {
    label: 'Composition Api',
    separator: false,
    to: '/CompositionApiView'
  },
  {
    label: 'Ciclo de vida de Vue',
    separator: false,
    to: '/CicloVidaView'
  },
  {
    label: 'Componentes importación',
    separator: false,
    to: '/ComponentesView'
  },
  {
    label: 'Componetización Props',
    separator: true,
    to: '/PropsView'
  },
  {
    label: 'Creación de un proyecto template Quasar',
    separator: false,
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
    separator: false,
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