<template>
    <div class="content-wrapper">
        <v-breadcrumbs></v-breadcrumbs>
        <div class="content">
            <div class="flex-container opis">
                <img :src="jelo.slika">
                <div>
                    <h1>{{ language == "SR" ? jelo.ime : jelo.imeEN }}</h1>
                    <p>{{tekstJela}}</p>
                </div>
            </div>
            <div class="flex-container">
                <div class="radio-bar">
                    <button :class="{active: size=='L'?true:false}" @click="sizeSelect('L')">L</button>
                    <button :class="{active: size=='M'?true:false}" @click="sizeSelect('M')">M</button>
                    <button :class="{active: size=='S'?true:false}" @click="sizeSelect('S')">S</button>
                </div>
                <div class="kolicina">
                    <button @click="increaseCount()">+</button>
                    <span>{{ kolicina }}</span>
                    <button @click="decreaseCount()">-</button>
                </div>
            </div>
            <div class="cena">
                {{ cenaLabel }}{{ kolicina * jelo.cena[size] }}
            </div>
            <div v-if="errorMessage!=''" class="errorMessage">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage!=''" class="successMessage">
                {{ successMessage }}
            </div>
            <div class="flex-container">
                <button @click="addToBasket()">{{ dodajUKorpuLabel }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    padding: 40px;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.content {
    position: relative;
    width: 60%;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
}

.content>div {
    border-top: 1px solid black;
}

.content>div:first-of-type {
    border-top: none;
}

.flex-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
}

.opis {
    align-items: flex-start;
}

.opis>img {
    position: relative;
    width: 560px;
    height: 400px;
    object-fit: cover;
}

.opis>div {
    text-align: left;
    padding: 20px 40px;
    flex-grow: 1;
}

.radio-bar {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid black;
}

.radio-bar>button {
    flex-grow: 1;
    flex-basis: 1px;
    display: block;
    font-size: 1.5em;
    line-height: 1.75em;
    border: none;
    background-color: white;
    cursor: pointer;
}

.radio-bar>button:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.radio-bar>button:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.radio-bar>button:hover {
    color: #50C878;
}

.radio-bar>button.active {
    background-color: #50C878;
    color: white;
}

.kolicina {
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

.cena {
    font-size: 1.5em;
    padding: 10px 0;
}

.errorMessage {
    font-size: 1.5em;
    padding: 10px 0;
    color: #FF7F50;
}

.successMessage {
    font-size: 1.5em;
    padding: 10px 0;
    color: #50C878;
}

.flex-container>button {
    flex-grow: 1;
    font-size: 1.5em;
    padding: 10px 0;
    background-color: #50C878;
    color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
}

.flex-container>button:hover {
    background-color: #009E60;
    cursor: pointer;
}
</style>

<script>
import { tekstJela } from '@/main';
export default {
    name: "Jelo",
    data() {
        return {
            jelo: {},
            user: {},
            size: 'L',
            kolicina: 1,
            errorMessage: '',
            successMessage: '',
            cenaLabel: '',
            dodajUKorpuLabel: '',
            language: '',
            tekstJela: ''
        }
    },
    created() {
        this.language = localStorage.getItem("language");
        this.jelo = JSON.parse(localStorage.getItem(this.$route.params.jelo));
        this.tekstJela = tekstJela[this.$route.params.jelo][this.language];
        this.user = localStorage.getItem("user");
        if (this.user != null) {
            this.user = JSON.parse(this.user);
        }
        this.language = localStorage.getItem("language");
        if (this.language == "SR") {
            this.cenaLabel = "Cena: ";
            this.dodajUKorpuLabel = "Dodaj u korpu";
        } else {
            this.cenaLabel = "Price: ";
            this.dodajUKorpuLabel = "Add to cart";
        }
    },
    methods: {
        sizeSelect(choice) {
            this.size = choice;
        },
        increaseCount() {
            this.kolicina++;
        },
        decreaseCount() {
            if (this.kolicina == 1) return;
            else this.kolicina--;
        },
        addToBasket() {
            if (this.user == null) {
                this.errorMessage = "Da biste dodali jelo u korpu morate se prvo ulogovati na stranici 'Moj nalog'!";
                this.successMessage = ""
                return;
            }
           
            let basketName = 'user-' + this.user.username + '-basket';
            let basket = localStorage.getItem(basketName);
            if (basket == null) {
                basket = [];
            } else {
                basket = JSON.parse(basket);
            }

            let found = false;
            for (let i = 0; i < basket.length; i++) {
                if (basket[i].naziv == this.jelo.ime && basket[i].velicina == this.size && basket[i].cena == this.jelo.cena[this.size]) {
                    basket[i].kolicina += this.kolicina;
                    found = true;
                }
            }

            if (!found) {
                let stavka = {"naziv": this.jelo.ime, "slika": this.jelo.slika, "velicina": this.size, "cena": this.jelo.cena[this.size], "kolicina": this.kolicina};
                basket.push(stavka);
            }

            localStorage.setItem(basketName, JSON.stringify(basket));
            this.errorMessage = "";
            this.successMessage = "Uspešno ste dodali jelo u korpu!"
        }
    }
}
</script>
