<template>
  <div class="jelo-kartica" v-if="jelo.ime.toLowerCase().match(matchTerm.toLowerCase()) || jelo.cena.S <= Number(matchTerm)">
    <div>
      <img :src="jelo.slika" @click="$router.push('/jelovnik/jelo' + id)">
      <h1 @click="$router.push('/jelovnik/jelo' + id)">{{jelo.ime}}</h1>
      <div class="ocena">
        <div class="star" @mouseover=starHover(0) @mouseleave=fillStars() @click=rate(0)><div :class="stars[0]"></div></div>
        <div class="star" @mouseover=starHover(1) @mouseleave=fillStars() @click=rate(1)><div :class="stars[1]"></div></div>
        <div class="star" @mouseover=starHover(2) @mouseleave=fillStars() @click=rate(2)><div :class="stars[2]"></div></div>
        <div class="star" @mouseover=starHover(3) @mouseleave=fillStars() @click=rate(3)><div :class="stars[3]"></div></div>
        <div class="star" @mouseover=starHover(4) @mouseleave=fillStars() @click=rate(4)><div :class="stars[4]"></div></div>
        <span>{{jelo.ocena}}/5</span>
        <span>Br. ocena: {{jelo.brojOcena}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .jelo-kartica {
    position: relative;
    height: 400px;
    width: 450px;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer;
  }

  .jelo-kartica>div {
    position: absolute;
    top: 12px;
    left: 12px;
    height: calc(100% - 24px);
    width: calc(100% - 24px);
    border-radius: 8px;
    overflow: hidden;
  }

  img {
    position: relative;
    width: 100%;
    height: 276px;
    object-fit: cover;
    border-radius: 8px;
  }

  h1 {
    line-height: 55px;
    vertical-align: middle;
    font-size: 30px;
    margin: 0;
    text-align: left;
  }

  .ocena {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
  }

  .star {
    position: relative;
    width: 30px;
    height: 30px;
  }

  .star>div {
    position: relative;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }

  .star>div:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #b6a700;
  }

  .star-half:before {
    width: 50%;
  }

  .star-full:before {
    width: 100%;
  }

  span {
    margin-left: 10px;
    line-height: 30px;
    font-size: 20px;
  }
</style>

<script>
export default {
  name: "Jelo-Kartica",
  props: {"id": Number, "matchTerm": String},
  data() {
    return {
      stars: [null, null, null, null, null],
      jelo: {}
    }
  },
  methods: {
    fillStars() {
      for (let i = 0; i < 5; i++) {
        if (this.jelo.ocena-i >= 1) {
          this.stars[i] = "star-full";
        } else if (this.jelo.ocena-i >= 0.5) {
          this.stars[i] = "star-half";
        } else {
          this.stars[i] = null;
        }
      }
    },
    starHover(index) {
      for (let i = 0; i < 5; i++) {
        if (i <= index) {
          this.stars[i] = 'star-full';
        } else {
          this.stars[i] = null;
        }
      }
    },
    rate(index) {
      this.jelo.ocene[index+1]++;
      this.jelo.brojOcena++;
      let zbirGlasova = 0;
      let brojGlasova = 0;
      for (let i = 1; i < 6; i++) {
        zbirGlasova += this.jelo.ocene[i] * i;
        brojGlasova += this.jelo.ocene[i];
      }
      this.jelo.ocena = (zbirGlasova/brojGlasova).toFixed(2);
      this.fillStars();
      this.sacuvajJelo();
    },
    sacuvajJelo() {
      let naziv = "jelo" + this.id;
      localStorage.setItem(naziv, JSON.stringify(this.jelo));
    }
  },
  created() {
    let naziv = "jelo" + this.id;
    this.jelo = JSON.parse(localStorage.getItem(naziv));
  },
  mounted() {
    this.fillStars();
  }
}
</script>