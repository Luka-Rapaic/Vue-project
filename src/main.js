import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

export const footerText = {
    COPYRIGHT_SR: "Copyright 2024, Luka Rapaić, Jovan Babović, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu"
}

export const tekstPocetna = {
    WELCOME_H2_SR: "Dobrodošli u restoran",
    WELCOME_H1_SR: "Noodle palace!",
    ARTICLE1_H1_SR: "Otvorene su online porudžbine!",
    ARTICLE1_P1_SR: "Od danas možete u čarima naših jela uživati i kod kuće, jer smo konačno, na insistiranje svih vas, uveli online porudžbine! Napravite nalog na strani 'Moj nalog', a zatim ćete na strani 'Jelovnik' dobiti mogućnost da dodate jelo u korpu. Srećno jedenje!",
    ARTICLE2_H1_SR: "Možete oceniti jela!",
    ARTICLE2_P1_SR: "Konačno smo dodali dugo traženu mogućnost ocenjivanja jela. Sada nam možete, direktno, preko sajta, jednim klikom reći 'ovo jelo je divno' ili 'ovo jelo ne valja', te nam dati sugestiju na šta u budućnosti treba da obratimo pažnju, a verujte nam, vaše zadovoljstvo nam je na prvom mestu!"
};

export const tekstJelovnik = {
    PREDJELA_SR: "Predjela",
    GLAVNAJELA_SR: "Glavna jela",
    DEZERTI_SR: "Dezerti",
    SORTING_METHOD_TITLE_SR: "Sortiraj po:",
    SORTING_METHOD_NAME_SR: "nazivu",
    SORTING_METHOD_PRICE_SR: "ceni",
    SEARCH_PLACEHOLDER_SR: "Pretraži..."
}

export const tekstJela = {
    jelo0: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo1: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo2: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo3: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo4: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo5: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo6: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo7: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo8: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo9: {
        SR: "Neki tekst",
        EN: "Some text"
    },
    jelo10: {
        SR: "Neki tekst",
        EN: "Some text"
    },
}

export const tekstONama = {
    EMPLOYEES_H1_SR: "Naš tim:",
    EMPLOYEES_TITLE1_SR: "Kuvar",
    EMPLOYEES_TITLE2_SR: "Vlasnik",
    WHY_WE_ARE_THE_BEST_H1_SR: "Zašto smo najbolji?",
    WHY_WE_ARE_THE_BEST_P1_SR: "Naš restoran zapošljava svetski poznate kuvare kineske hrane i uživa poverenje deset hiljada posetilaca mesečno. Naš vlasnik, Martin Yan, je autor poznatog TV šoua 'Yan can cook' i osnivač je Yan Can internacionalne škole kulinarstva. Njegovo iskutvo i ekspertiza razlog su za to što se za rezervaciju u našem restoranu mora čekati čak pet meseci.",
    CONTACT_H1_SR: "Kontakt",
    CONTACT_WORKINGHOURS_SR: "Radno vreme:",
    CONTACT_TELEPHONE_SR: "Telefon:",
    CONTACT_EMAIL_SR: "Mail adresa:",
    CONTACT_ADRESS_SR: "Adresa:"
};

export const glavnaJela = {
    nameSR: [0, 1, 2, 3],
    nameEN: [],
    price: [2, 1, 3, 0]
}

export const predjela = {
    nameSR: [5, 6, 4],
    nameEN: [],
    price: [4, 5, 6]
}

export const dezerti = {
    nameSR: [10, 9, 7, 8],
    nameEN: [],
    price: [9, 10, 7, 8]
}