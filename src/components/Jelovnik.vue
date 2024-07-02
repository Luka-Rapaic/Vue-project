<template>
  <div>
    <div class="filterResults">
      <h1>{{ sectionName }}</h1>
      <div class="radio-bar">
        <button class="title">{{ sortingMethod_title }}</button>
        <button :class="{active: sortBy=='name'?true:false}" @click="sortBySelect('name')">{{ sortingMethod_name }}</button>
        <button :class="{active: sortBy=='price'?true:false}" @click="sortBySelect('price')">{{ sortingMethod_price }}</button>
      </div>
      <input type="text" v-model="searchTerm" :placeholder="search_placeholder" class="search">
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
import { tekstJelovnik } from "@/main";

export default {
  name: "Jelovnik",
  props: {"sekcija": String},
  components: {"JeloKartica": JeloKartica},
  data() {
    return {
      listaJela: [],
      sortBy: 'name',
      searchTerm: '',
      sectionName: '',
      sortingMethod_title: '',
      sortingMethod_name: '', 
      sortingMethod_price: '',
      search_placeholder: ''
    }
  },
  created() {
    if (localStorage.getItem("language") == "SR") {
      this.setLanguageSerbian();
    } else {
      this.setLanguageEnglish();
    }
    this.sortResults();
  },
  methods: {
    setLanguageSerbian() {
      switch(this.sekcija) {
        case 'Predjela':
          this.sectionName = tekstJelovnik.PREDJELA_SR;
          break;
        case 'Glavna jela':
          this.sectionName = tekstJelovnik.GLAVNAJELA_SR;
          break;
        case 'Dezerti':
          this.sectionName = tekstJelovnik.DEZERTI_SR;
          break;
      }
      this.sortingMethod_title = tekstJelovnik.SORTING_METHOD_TITLE_SR;
      this.sortingMethod_name = tekstJelovnik.SORTING_METHOD_NAME_SR;
      this.sortingMethod_price = tekstJelovnik.SORTING_METHOD_PRICE_SR;
      this.search_placeholder = tekstJelovnik.SEARCH_PLACEHOLDER_SR;
    },
    setLanguageEnglish() {

    },
    sortBySelect(choice) {
      this.sortBy = choice;
      this.sortResults();
    },
    sortResults() {
      if (this.sortBy == 'name') {
        switch(this.sekcija) {
          case 'Predjela':
            this.listaJela = predjela.nameSR;
            break;
          case 'Glavna jela':
            this.listaJela = glavnaJela.nameSR;
            break;
          case 'Dezerti':
            this.listaJela = dezerti.nameSR;
        }
      } else {
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