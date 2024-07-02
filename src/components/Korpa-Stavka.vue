<template>
    <div class="korpa-stavka">
        <img :src="stavka.slika">
        <div class="opis">
            <h1>{{ stavka.naziv }}</h1>
            <h2>Veličina: {{ stavka.velicina }} | Cena: {{stavka.cena}}</h2>
        </div>
        <div class="kolicina">
            <button @click="increaseCount()">+</button>
            <span>{{ stavka.kolicina }}</span>
            <button @click="decreaseCount()">-</button>
        </div>
    </div>
</template>

<style scoped>
.korpa-stavka {
    display: flex;
    flex-flow: row wrap;
    row-gap: 15px;
}

.korpa-stavka:not(:first-of-type) {
    border-top: 1px solid black;
}

.korpa-stavka>img {
    height: 100px;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    object-fit: cover;
}

.opis {
    flex-grow: 5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: left;
    box-sizing: border-box;
    padding: 0px 20px;
}

.opis>h1 {
    font-size: 2em;
    margin: 0;
    padding: 0;
}

.opis>h2 {
    font-size: 1.5em;
    font-weight: normal;
    color: #AAAAAA;
    margin: 0;
    padding: 0;
}

.kolicina {
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    padding: 15px 0px;
}

.kolicina>button {
    font-size: 1.5em;
    background-color: #50C878;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 10px;
}

.kolicina>button:hover {
    background-color: #009E60;
    cursor: pointer;
}

.kolicina>span {
    font-size: 2em;
    justify-self: center;
}
</style>

<script>
export default {
    name: "Korpa-Stavka",
    props: {'stavka': Object, 'changeCountCallback': Function},
    methods: {
        increaseCount() {
            this.changeCountCallback(this.stavka.naziv, this.stavka.velicina, this.stavka.cena, this.stavka.kolicina+1);
        },
        decreaseCount() {
            this.changeCountCallback(this.stavka.naziv, this.stavka.velicina, this.stavka.cena, this.stavka.kolicina-1);
        }
    },
    created() {

    }
}
</script>
