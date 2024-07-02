<template>
    <div class="footer">
        {{ copyright }}<br>
    </div>
</template>

<style scoped>
.footer {
    font-size: 1.5em;
    padding: 20px 0;
    background-color: #FF7F50;
    color: white;
}
</style>

<script>
import { footerText } from '@/main';

export default {
    name: "FooterComponent",
    data() {
        return {
            copyright: ''
        }
    },
    created() {
        if (localStorage.getItem("language") == "SR") {
            this.copyright = "Copyright 2024, Luka Rapaić, Jovan Babović, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu";
        }
        else {
            this.copyright = "Copyright 2024, Luka Rapaić, Jovan Babović, The department of software engineering at the school of Electrical engineering at University of Belgrade";
        }
    },
    methods: {
        setLanguageSerbian() {
            this.copyright = footerText.COPYRIGHT_SR;
        },
        setLanguageEnglish() {
            this.copyright = footerText.COPYRIGHT_EN;
        }
    }
}
</script>
