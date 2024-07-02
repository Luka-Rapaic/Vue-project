<template>
    <div class="content-wrapper">
        <div class="welcomeBanner">
            <h2>{{ welcomeH2 }}</h2>
            <h1>{{ welcomeH1 }}</h1>
        </div>
        <div class="article">
            <img src="@/assets/Article1_IMG.png">
            <div>
                <h1>{{ article1_H1 }}</h1>
                <p>{{ article1_P1 }}</p>
            </div>
        </div>
        <div class="article">
            <div>
                <h1>{{ article2_H1 }}</h1>
                <p>{{ article2_P1 }}</p>
            </div>
            <img src="@/assets/Article2_IMG.png">
        </div>
    </div>
</template>

<style scoped>

.content-wrapper {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 40px;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    width: 60%;
    margin: 0px auto;
}

.welcomeBanner {
    position: relative;
    height: 700px;
    width: 80vw;
    background-image: url("@/assets/WelcomeBanner2.jpg");
    background-size: cover;
    /* background-position: center; */
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-end;
}

.welcomeBanner>h1 {
    font-size: 7.5em;
    color: white;
    text-shadow: 0 0 5px black;
    margin: 0 40px 40px 40px;
    padding: 0;
}

.welcomeBanner>h2 {
    font-size: 4em;
    color: white;
    text-shadow: 0 0 5px black;
    margin: 40px 40px 0 40px;
    padding: 0;
}

.article {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    border-radius: 20px;
    border: 1px solid black;
    overflow: hidden;
}

.article>img {
    width: 400px;
    height: 450px;
    object-fit: cover;
}

.article>div {
    flex-basis: 50%;
    flex-grow: 1;
    text-align: left;
}

.article>div>h1 {
    font-size: 2.5em;
    margin-left: 40px;
    margin-right: 40px;
}

.article>div>p {
    font-size: 1.25em;
    margin-left: 40px;
    margin-right: 40px;
}

</style>

<script>
import { tekstPocetna } from '@/main';

export default {
    name: "Home",
    components: {},
    data() {
        return {
            welcomeH1: '',
            welcomeH2: '',
            article1_H1: '',
            article1_P1: '',
            article2_H1: '',
            article2_P1: ''
        }
    },
    created() {
        if (localStorage.getItem("language") == "SR") {
            this.setLanguageSerbian();
        } else {
            this.setLanguageEnglish();
        }
    },
    methods: {
        setLanguageSerbian() {
            this.welcomeH1 = tekstPocetna["WELCOME_H1_SR"];
            this.welcomeH2 = tekstPocetna["WELCOME_H2_SR"];
            this.article1_H1 = tekstPocetna["ARTICLE1_H1_SR"];
            this.article1_P1 = tekstPocetna["ARTICLE1_P1_SR"];
            this.article2_H1 = tekstPocetna["ARTICLE2_H1_SR"];
            this.article2_P1 = tekstPocetna["ARTICLE2_P1_SR"];   
        },
        setLanguageEnglish() {

        }
    }
}
</script>
