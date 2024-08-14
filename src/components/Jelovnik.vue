<template>
  <div>
    <div class="filterResults">
      <h1>{{ sekcija }}</h1>
      <div class="radio-bar">
        <button class="title">Sortiraj po:</button>
        <button :class="{active: sortBy=='name'?true:false}" @click="sortBySelect('name')">nazivu</button>
        <button :class="{active: sortBy=='price'?true:false}" @click="sortBySelect('price')">ceni</button>
      </div>
      <input type="text" v-model="searchTerm" placeholder="Pretraži..." class="search">
    </div>
    <div class="jelovnik">
      <JeloKartica v-for="id in listaJela" :key="id" :id="id" :matchTerm="searchTerm"></JeloKartica>
    </div>
  </div>
</template>

<style scoped>
  .jelovnik {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 40px;
    column-gap: 40px;
  }

  .radio-bar {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    width: 400px;
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

button.title:hover {
  color: black;
  cursor: default;
}

.search {
  flex-grow: 1;
  border-radius: 20px;
  font-size: 1.5em;
  line-height: 1.75em;
  box-sizing: border-box;
  padding: 0 20px;
}

.filterResults {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.filterResults>h1 {
  position: relative;
  flex-basis: 100%;
  font-size: 2em;
  margin: 0;
  padding: 0;
}
</style>

<script>
import JeloKartica from "@/components/Jelo-Kartica.vue";
import { dezerti, glavnaJela, predjela } from "@/main";

export default {
  name: "Jelovnik",
  props: {"sekcija": String},
  components: {"JeloKartica": JeloKartica},
  data() {
    return {
      listaJela: [],
      sortBy: 'name',
      searchTerm: ''
    }
  },
  created() {
    this.sortResults();
  },
  methods: {
    sortBySelect(choice) {
      this.sortBy = choice;
      this.sortResults();
    },
    sortResults() {
      if (this.sortBy == 'name') {
        switch(this.sekcija) {
          case 'Predjela':
            this.listaJela = predjela.name;
            break;
          case 'Glavna jela':
            this.listaJela = glavnaJela.name;
            break;
          case 'Dezerti':
            this.listaJela = dezerti.name;
        }
      } else if (this.sortBy == 'price') {
        switch(this.sekcija) {
          case 'Predjela':
            this.listaJela = predjela.price;
            break;
          case 'Glavna jela':
            this.listaJela = glavnaJela.price;
            break;
          case 'Dezerti':
            this.listaJela = dezerti.price;
        }
      }
    }
  }
}



</script>