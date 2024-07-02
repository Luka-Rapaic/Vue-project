<script>
import KorpaStavka from "@/components/Korpa-Stavka.vue";

export default {
    name: "Korpa",
    components: {KorpaStavka},
    props: {user: Object, reloadUserCallback: Function},
    data() {
        return {
            korpa: [],
            ukupnaCena: 0
        }
    },
    created() {
        let basketName = "user-" + this.user.username + "-basket";
        let korpa = localStorage.getItem(basketName);
        if (korpa == null) this.korpa = [];
        else {
            this.korpa = JSON.parse(korpa);
        }
        this.calculatePrice();
    },
    methods: {
        updateState(naziv, velicina, cena, kolicina) {
            if (this.user==null) return;
            let basketName = "user-" + this.user.username + "-basket"; 
            for (let i = 0; i < this.korpa.length; i++) {
                if (this.korpa[i].naziv == naziv && this.korpa[i].velicina == velicina && this.korpa[i].cena == cena) {
                    if (kolicina == 0) {
                        this.korpa.splice(i, 1);
                    } else {
                        this.korpa[i].kolicina = kolicina;
                    }
                    localStorage.setItem(basketName, JSON.stringify(this.korpa));
                    this.calculatePrice();
                    return;
                }
            }
        },
        calculatePrice() {
            let ukupnaCena = 0;
            for (let i = 0; i < this.korpa.length; i++) {
                ukupnaCena += this.korpa[i].cena * this.korpa[i].kolicina;
            }
            this.ukupnaCena = ukupnaCena;
        },
        finalizeOrder() {
            let user = this.user;
            let accountName = "user-" + this.user.username;
            let basketName = "user-" + this.user.username + "-basket"; 
            let orderName = "user-" + this.user.username + "-order" + this.user.orderCount;
            let order = {"stavke": [], "datum": new Date()};
            for (let stavka of this.korpa) {
                let orderStavka = {"naziv": stavka.naziv, "velicina": stavka.velicina, "cena": stavka.cena, "kolicina": stavka.kolicina};
                order.stavke.push(orderStavka);
            }
            localStorage.setItem(orderName, JSON.stringify(order));

            this.korpa = [];
            localStorage.setItem(basketName, JSON.stringify(this.korpa));

            user.orderCount = this.user.orderCount+1;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem(accountName, JSON.stringify(user));
            this.reloadUserCallback();
        }
    }
}
</script>

<template>
    <div class="korpa" v-if="korpa.length>0">
        <KorpaStavka v-for="stavka in korpa" :key="stavka.naziv" :stavka="stavka" :changeCountCallback="updateState"></KorpaStavka>
        <span>Ukupno: {{ ukupnaCena }}din</span>
        <button @click="finalizeOrder()">Poruči</button>
    </div>
    <span class="korpaPoruka" v-if="korpa.length==0">Nemate nista u korpi!</span>
    <!-- <div v-if="korpa.length==0"></div> -->
</template>

<style scoped>
.korpa {
    position: relative;
    width: 540px;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 20px;
    border: 1px solid black;
    overflow: hidden;
}

.korpa>span {
    border-top: 1px solid black;
    font-size: 1.5em;
    padding: 10px 0;
}

.korpa>button {
    font-size: 1.5em;
    padding: 10px 0;
    background-color: #50C878;
    color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    border-top: 1px solid black;
}

.korpa>button:hover {
    background-color: #009E60;
    cursor: pointer;
}

.korpaPoruka {
    font-size: 1.5em;
}

</style>
