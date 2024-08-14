<template>
    <div class="content-wrapper">
        <div class="zastoSmoNajbolji">
            <h1>Zašto smo najbolji?</h1>
            <p>Naš restoran zapošljava svetski poznate kuvare kineske hrane i uživa poverenje deset hiljada posetilaca mesečno. Naš vlasnik, Martin Yan, je autor poznatog TV šoua 'Yan can cook' i osnivač je Yan Can internacionalne škole kulinarstva. Njegovo iskutvo i ekspertiza razlog su za to što se za rezervaciju u našem restoranu mora čekati čak pet meseci.</p>
        </div>
        <div class="zaposleni">
            <h1>Naš tim:</h1>
            <div>
                <img src="@/assets/Employee1.jpeg">
                <h1>Andrew Wong</h1>
                <h2>Kuvar</h2>
            </div>
            <div>
                <img src="@/assets/Employee2.jpg">
                <h1>Susanna Foo</h1>
                <h2>Kuvar</h2>
            </div>
            <div>
                <img src="@/assets/Employee3.jpg">
                <h1>Mei Lin</h1>
                <h2>Kuvar</h2>
            </div>
            <div>
                <img src="@/assets/Employee4.jpg">
                <h1>Peter Chang</h1>
                <h2>Kuvar</h2>
            </div>
            <div>
                <img src="@/assets/Owner.jpg">
                <h1>Martin Yan</h1>
                <h2>Vlasnik</h2>
            </div>
        </div>
        <div class="kontakt">
            <h1>Kontakt</h1>
            <table>
                <tr>
                    <td>Radno vreme:</td>
                    <td>16-02h</td>
                </tr>
                <tr>
                    <td>Telefon:</td>
                    <td>064 9248 529</td>
                </tr>
                <tr>
                    <td>Mail adresa:</td>
                    <td>noodlepalace@gmail.com</td>
                </tr>
                <tr>
                    <td>Adresa:</td>
                    <td>Cara Uroša 23</td>
                </tr>
            </table>
        </div>
        <iframe src="https://www.google.com/maps/embed/v1/place&q=44.822200,20.456960?pb=!1m14!1m12!1m3!1d594.9249596331528!2d20.456611387401665!3d44.822461434340305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1719884308893!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style scoped>

.content-wrapper {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
    row-gap: 40px;
    padding: 40px;
    width: 60%;
    margin: 0px auto;
}

.zastoSmoNajbolji>h1 {
    font-size: 2.5em;
}

.zastoSmoNajbolji>p {
    font-size: 1.25em;
}

.zaposleni {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    margin: 20px;
}

.zaposleni>h1 {
    flex-basis: 100%;
    font-size: 2.5em;
    color: black;
}

.zaposleni>div {
    position: relative;
    width: 350px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid transparent;
    overflow: hidden;
    transition: 200ms;
}

.zaposleni>div:hover {
    border: 1px solid black;
    transition: 200ms;
}

.zaposleni>div>img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid black;
    transition: 200ms;
}

.zaposleni>div:hover>img {
    border-radius: 0;
    border: none;
    transition: 200ms;
}

.zaposleni>div>h1 {
    font-size: 1.5em;
    margin: 0;
    padding: 10px 0 5px 0;
    color: transparent;
    transition: 200ms;
}

.zaposleni>div:hover>h1 {
    color: black;
    transition: 200ms;
}

.zaposleni>div>h2 {
    font-size: 1.25em;
    margin: 0;
    padding: 5px 0 10px 0;
    color: transparent;
    transition: 200ms;
}

.zaposleni>div:hover>h2 {
    color: #6c757d;
    transition: 200ms;
}

.kontakt>h1 {
    font-size: 2.5em;
}

.kontakt>table {
    font-size: 1.25em;
    text-align: left;
}

.kontakt>table td {
    padding: 8px 24px;
}

</style>

<script>
export default {
    name: "O-Nama"
}
</script>
