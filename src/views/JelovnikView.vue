<template>
    <div class="content-wrapper">
        <Jelovnik v-for="sekcija in sekcije" :key="sekcija" :sekcija="sekcija"></Jelovnik>
    </div>
</template>

<style scoped>
.content-wrapper {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
    row-gap: 80px;
    padding: 40px;
    width: 60%;
    margin: 0px auto;
}
</style>

<script>
import Jelovnik from "@/components/Jelovnik.vue";

export default {
    name: "JelovnikView",
    components: {Jelovnik},
    data() {
        return {
            sekcije: ['Predjela', 'Glavna jela', 'Dezerti']
        }
    },
    created() {
        let jelaPodaci = {
            "jelo0": {"ime":"Junetina i brokoli","imeEN":"Beef and broccoli","slika":"../Beef-and-Broccoli.jpg", "cena": {"L": 1800, "M": 1400, "S": 1100}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo1": {"ime":"Piletina general Tso","imeEN":"General Tso chicken","slika":"../General-Tso-Chicken.jpg", "cena": {"L": 1600, "M": 1300, "S": 900}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo2": {"ime":"Piletina sa narandžom","imeEN":"Orange chicken","slika":"../Orange-Chicken.jpg", "cena": {"L": 1400, "M": 1050, "S": 800}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo3": {"ime":"Slatko kisela svinjetina","imeEN":"Sweet and sour pork","slika":"../Sweet-and-Sour-Pork.jpg", "cena": {"L": 1750, "M": 1400, "S": 1050}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo4": {"ime": "Prolećne rolnice","imeEN":"Spring rolls","slika": "../Spring-Rolls.jpg", "cena": {"L": 900, "M": 750, "S": 650}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo5": {"ime": "Guotie","imeEN":"Guotie","slika": "../Guotie.jpg", "cena": {"L": 1000, "M": 900, "S": 800}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo6": {"ime": "Jiaozi","imeEN":"Jiaozi","slika": "../Jiaozi.jpg", "cena": {"L": 1150, "M": 1000, "S": 850}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo7": {"ime": "Mesečevi kolačići","imeEN":"Mooncakes","slika": "../Mooncakes.jpg", "cena": {"L": 1100, "M": 950, "S": 850}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo8": {"ime": "Torta osam blaga","imeEN":"Eight treasure cake","slika": "../Eight-treasure-cake.jpg", "cena": {"L": 1800, "M": 1400, "S": 1100}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo9": {"ime": "Kolačići sudbine","imeEN":"Fortune cookies","slika": "../Fortune-cookies.jpg", "cena": {"L": 700, "M": 600, "S": 500}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0},
            "jelo10": {"ime": "Jian Dui","imeEN":"Jian Dui","slika": "../Jian-Dui.jpg", "cena": {"L": 900, "M": 750, "S": 650}, "ocene":{"1":0,"2":0,"3":0,"4":0,"5":0},"ocena":"0","brojOcena":0}
        };
        
        let jeloNames = Object.keys(jelaPodaci);
        for (let jeloName of jeloNames) {
            if (localStorage.getItem(jeloName) == null) {
                localStorage.setItem(jeloName, JSON.stringify(jelaPodaci[jeloName]));
            }
        }
    }
}
</script>
