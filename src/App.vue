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
        url: this.store.apiUrl,
        params: {
          include_adult: 'false',
          language: 'it-IT ',
          page: '1',
          query: this.store.searchFilm,
          api_key: this.store.apiKey,
        },
        headers: {
          accept: 'application/json',
        }
      };

      axios.request(options).then(risultato => {
        this.store.films = risultato.data.results;
        console.log("risultato data", risultato.data.results)
        this.store.searchFilm = ""; //
        console.log("Risultato ricerca per film:", risultato.data);
      });
    }
  },
  mounted() {

  }
}

</script>

<template>
  <p>App vue prova</p>

  <!--Header-->
  <header>
    <AppSearch @search="getMovies" />
  </header>

  <!--Main-->
  <main>
    <AppCard v-for="film  in store.films" :info="film" />
  </main>
</template>

<style scoped>
main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>