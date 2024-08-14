import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

export const tekstJela = {
    jelo0: "Neki tekst",
    jelo1: "Neki tekst",
    jelo2: "Neki tekst",
    jelo3: "Neki tekst",
    jelo4: "Neki tekst",
    jelo5: "Neki tekst",
    jelo6: "Neki tekst",
    jelo7: "Neki tekst",
    jelo8: "Neki tekst",
    jelo9: "Neki tekst",
    jelo10: "Neki tekst"
}

export const glavnaJela = {
    name: [0, 1, 2, 3],
    price: [2, 1, 3, 0]
}

export const predjela = {
    name: [5, 6, 4],
    price: [4, 5, 6]
}

export const dezerti = {
    name: [10, 9, 7, 8],
    price: [9, 10, 7, 8]
}