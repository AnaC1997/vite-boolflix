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
    getFilmsAndSeries() {
      // Richiesta per i film
      let filmOptions = {
        method: 'GET',
        url: this.store.apiUrlMovie,
        params: {
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          query: this.store.search,
          api_key: this.store.apiKey,
        },
        headers: {
          accept: 'application/json',
        },
      };

      // Richiesta per le serie TV
      let serieOptions = {
        method: 'GET',
        url: this.store.apiUrlSerie,
        params: {
          include_adult: 'false',
          language: 'it-IT',
          page: '1',
          query: this.store.search,
          api_key: this.store.apiKey,
        },
        headers: {
          accept: 'application/json',
        },
      };

      // Richieste separatamente
      axios.all([axios(filmOptions), axios(serieOptions)])
        .then(axios.spread((filmResponse, serieResponse) => {
          this.store.films = filmResponse.data.results;
          this.store.series = serieResponse.data.results;
        }))
        .catch(error => {
          console.error('Errore nella richiesta:', error);
        });
    },
  },

  mounted() {

  }
}

</script>

<template>
  <!--Header-->
  <header>
    <h1>BOOLFLIX</h1>
    <AppSearch @search="getFilmsAndSeries" />

  </header>

  <!--Main-->
  <main>
    <!--Section Films-->
    <section class="containerSection">
      <h1>Films</h1>
      <div class="containerCard">
        <AppCard v-for="film  in store.films" :info="film" />
      </div>

    </section>

    <!--Section series-->
    <section class="containerSection">
      <h1>Series</h1>
      <div class="containerCard">
        <AppCard v-for="serie  in store.series" :info="serie" />
      </div>


    </section>
  </main>
</template>

<style scoped>
header {
  background-color: #010000;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
}

main {
  background-color: #434342;
  color: white;


}

.containerSection {
  text-align: center;
  padding: 1rem;


}

.containerCard {
  width: 90%;
  min-height: 40vh;
  display: flex;
  overflow: auto;
  margin-left: 3.5rem;

}
</style>