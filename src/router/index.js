import Pocetna from "@/views/Pocetna.vue"
import Galerija from "@/views/Galerija.vue"
import JelovnikView from "@/views/JelovnikView.vue"
import MojNalog from "@/views/Moj-Nalog.vue"
import ONama from "@/views/O-Nama"
import Jelo from "@/views/Jelo.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: Pocetna,
    component: Pocetna
  },
  {
    path: "/galerija",
    name: Galerija,
    component: Galerija
  },
  {
    path: "/jelovnik",
    name: JelovnikView,
    component: JelovnikView
  },
  {
    path: "/moj_nalog",
    name: MojNalog,
    component: MojNalog
  },
  {
    path: "/o_nama",
    name: ONama,
    component: ONama
  },
  {
    path: "/jelovnik/:jelo",
    name: Jelo,
    component: Jelo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
