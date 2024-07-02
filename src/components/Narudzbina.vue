<template>
    <div class="narudzbina">
        <div @click="prikazi = !prikazi" :class="{active: prikazi}">{{ datum }}</div>
        <table v-if="prikazi">
            <tr>
                <td>Naziv</td>
                <td>Velicina</td>
                <td>Cena</td>
                <td>Kolicina</td>
            </tr>
            <tr v-for="stavka in narudzbina.stavke" :key="stavka.naziv">
                <td>{{ stavka.naziv }}</td>
                <td>{{ stavka.velicina }}</td>
                <td>{{ stavka.cena }}</td>
                <td>{{ stavka.kolicina }}</td>
            </tr>
            <tr>
                <td colspan="4">Ukupna cena: {{ ukupnaCena }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>

.narudzbina>div {
    font-size: 1.5em;
    line-height: 2.5em;
    /* background-color: #FF7F50; */
}

.narudzbina>div:hover {
    color: #50C878;
    cursor: pointer;
    user-select: none;
}

.narudzbina>div.active {
    background-color: #50C878;
    color: white;
}

.narudzbina {
   border-top: 1px solid black;
}

.narudzbina:first-of-type {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    border-top: none;
}

.narudzbina:last-of-type {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
}

.narudzbina>table {
    font-size: 1.25em;
    width: 100%;
    border-collapse: collapse;
}

.narudzbina>table td{
    border: 1px solid black;
    padding: 10px 0;
}

.narudzbina>table td:first-of-type {
    border-left: none;
}

.narudzbina>table td:last-of-type {
    border-right: none;
}

.narudzbina>table>tr:last-of-type>td {
    border-bottom: none;
}

.narudzbina>table>tr:first-of-type td{
    border-top: none;
    font-weight: bold;
    font-style: italic;
}

</style>

<script>
export default {
    name: "Narudzbina",
    props: {narudzbina: Object},
    data() {
        return {
            ukupnaCena: 0,
            datum: String,
            prikazi: false
        }
    },
    methods: {
        calculatePrice() {
            let ukupnaCena = 0;
            for (let stavka of this.narudzbina.stavke) {
                ukupnaCena += stavka.cena * stavka.kolicina;
            }
            this.ukupnaCena = ukupnaCena;
        }
    },
    created() {
        this.calculatePrice();
        let datum = new Date(this.narudzbina.datum)
        this.datum = datum.getDate() + "." + datum.getMonth() + "." + datum.getFullYear() + " - " + datum.getHours() + ":" + datum.getMinutes();
    }
}
</script>
