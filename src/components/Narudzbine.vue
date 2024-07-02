<template>
    <div class="narudzbine" v-if="listaNarudzbina.length != 0">
        <Narudzbina v-for="narudzbina in listaNarudzbina" :key="narudzbina" :narudzbina="narudzbina"></Narudzbina>
    </div>
</template>

<style scoped>
.narudzbine {
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    width: 540px;
    border-radius: 20px;
}

</style>

<script>
import Narudzbina from "@/components/Narudzbina.vue";

export default {
    name: "Narudzbine",
    props: {user: Object},
    data() {
        return {
            listaNarudzbina: []
        }
    },
    methods: {
        updateState() {
            let listaNarudzbina = [];
            for (let i = 0; i < this.user.orderCount; i++) {
                let orderName = "user-" + this.user.username + "-order" + i;
                listaNarudzbina.push(JSON.parse(localStorage.getItem(orderName)));
            }
            this.listaNarudzbina = listaNarudzbina;
        }
    },
    created() {
        this.updateState();
    },
    components: {Narudzbina},
    watch: {
        user: function() {
            this.updateState();
        }
    }
}
</script>
