<template>
    <div class="content-wrapper">
        <div class="welcomeBanner">
            <h2>Dobrodošli u restoran</h2>
            <h1>Noodle palace!</h1>
        </div>
        <div class="article">
            <img src="@/assets/Article1_IMG.png">
            <div>
                <h1>Otvorene su online porudžbine!</h1>
                <p>Od danas možete u čarima naših jela uživati i kod kuće, jer smo konačno, na insistiranje svih vas, uveli online porudžbine! Napravite nalog na strani 'Moj nalog', a zatim ćete na strani 'Jelovnik' dobiti mogućnost da dodate jelo u korpu. Srećno jedenje!</p>
            </div>
        </div>
        <div class="article">
            <div>
                <h1>Možete oceniti jela!</h1>
                <p>Konačno smo dodali dugo traženu mogućnost ocenjivanja jela. Sada nam možete, direktno, preko sajta, jednim klikom reći 'ovo jelo je divno' ili 'ovo jelo ne valja', te nam dati sugestiju na šta u budućnosti treba da obratimo pažnju, a verujte nam, vaše zadovoljstvo nam je na prvom mestu!</p>
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
export default {
    name: "Home",
    components: {}
}
</script>
