<script>

import AppCard from "./components/AppCard.vue"
import AppSearch from "./components/AppSearch.vue"
import axios from 'axios'

import { store } from "./store"

export default {
  components: {
    AppCard,
    AppSearch,

  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getMovies() {
      let options = {
        method: 'GET',
        url: this.store.apiUrlMovie,
        params: {
          include_adult: 'false',
          language: 'it-IT ',
          page: '1',
          query: this.store.search,
          api_key: this.store.apiKey,
        },
        headers: {
          accept: 'application/json',
        }
      };

      axios.request(options).then(risultato => {
        this.store.films = risultato.data.results;
        console.log("risultato data", risultato.data.results)
        this.store.search = ""; //
        console.log("Risultato ricerca per film:", risultato.data);
      });
    }, 
    getSeries(){
    let optionsSerie = {
        method: 'GET',
        url: this.store.apiUrlSerie,
        params: {
          include_adult: 'false',
          language: 'it-IT ',
          page: '1',
          query: this.store.search,
          api_key: this.store.apiKey,
        },
        headers: {
          accept: 'application/json',
        }
      };

      axios.request(optionsSerie).then(risultato => {
        this.store.series = risultato.data.results;
        console.log("risultato data", risultato.data.results)
        this.store.search= ""; //
        console.log("Risultato ricerca per serie:", risultato.data);
      });
    }


  },
  
  mounted() {

  }
}

</script>

<template>

  <!--Header-->
  <header>
    <h1>BOOLFLIX</h1>
    <AppSearch @search= "getSeries"/>

  </header>

  <!--Main-->
  <main>
    <section class="containerSection" >
      <h1>Films</h1>
      <div class="containerCard">
        <AppCard v-for="film  in store.films" :info="film" />
      </div>
    
    </section>
   
    <section class="containerSection" >
      <h1>Series</h1>
      <div class="containerCard">
        <AppCard v-for="serie  in store.series" :info="serie" />
      </div>
      
    </section>
  </main>
</template>

<style scoped>

header{
  background-color: #010000;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
}

main{
  background-color: #434342;
  color: white;
}

.containerSection{
  text-align: center;
  padding: 1rem;
  
}
.containerCard {
    width: 80%;
    min-height: 40vh;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    
}




</style>