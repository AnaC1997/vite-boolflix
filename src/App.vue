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
      
      let indirizzo = this.store.apiUrl;
      const options = {
        url: 'https://api.themoviedb.org/3/search/movie',
        method: 'GET',
        params: {
          include_adult: 'false',
          language: 'it-IT ',
          page: '1',
          query: encodeURI(this.store.dato),

        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTVlMTFjYWY1MTVmMWQ0MTZlY2U2ODkzNGYzZDRhZCIsInN1YiI6IjY1NmRkZjk0MDVhNTMzMDBhZDU2Y2ZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J20G19wBk3xqkI0gXd1nAgxZqcrE-2-3i_szb6GvvT4'
        }
      };

      let filmsDati = `${this.store.apiUrl}&query=${this.store.searchFilm}`;
      console.log("films filtrati:", filmsDati)
      axios.get(filmsDati).then(risultato => {
        this.store.films = risultato.data;
        console.log("risultato data", risultato.data)
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
  background-color: honeydew;
}
</style>
