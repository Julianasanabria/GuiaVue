import { createRouter, createWebHashHistory } from "vue-router"
import CicloVidaView from "../views/CicloVidaView.vue"
import QueEsVueView from "../views/QueEsVueView.vue"
import ComponentesView from "../views/ComponentesView.vue"
import RequisitosView from "../views/RequisitosView.vue"
import CreacionProyectoView from "../views/CreacionProyectoView.vue"
import InterpolacionView from "../views/InterpolacionView.vue"
import DirectivasView from "../views/DirectivasView.vue"
import OptionsApiView from "../views/OptionsApiView.vue"
import CompositionApiView from "../views/CompositionApiView.vue"
import PropsView from "../views/PropsView.vue"
import TemplateQuasarView from "../views/TemplateQuasarView.vue"
import InstalacionQuasarView from "../views/InstalacionQuasarView.vue"
import VueRouterView from "../views/VueRouterView.vue"
import PiniaView from "../views/PiniaView.vue"
import PersistenciaView from "../views/PersistenciaView.vue"


const routes = [
   {path: "/", component:QueEsVueView},
   {path: "/RequisitosView", component:RequisitosView},
   {path: "/CreacionProyectoView", component:CreacionProyectoView},
   {path: "/InterpolacionView", component:InterpolacionView},
   {path: "/DirectivasView", component:DirectivasView}, 
   {path: "/OptionsApiView", component:OptionsApiView},
   {path: "/CompositionApiView", component:CompositionApiView},
   {path: "/CicloVidaView", component:CicloVidaView},
   {path: "/ComponentesView", component:ComponentesView},
   {path: "/PropsView", component:PropsView},
   {path: "/TemplateQuasarView", component:TemplateQuasarView},
   {path: "/InstalacionQuasarView", component:InstalacionQuasarView},
   {path: "/VueRouterView", component:VueRouterView},
   {path: "/PiniaView", component:PiniaView},
   {path: "/PersistenciaView", component:PersistenciaView}
] 
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})