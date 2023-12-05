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
        this.store.series = risultato.data.results;

      });
    },
    generaImageUrl(path) {
      if (path) {
        return `${this.store.imageBaseURL}${path}`;
      }
      else {
        return `https://picsum.photos/seed/{seed}/342/`
      }
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
    <AppSearch @search="getMovies" />

  </header>

  <!--Main-->
  <main>
    <!--Section Films-->
    <section class="containerSection">
      <h1>Films</h1>
      <div class="containerCard">
        <AppCard v-for="film  in store.films" :info="film" />
        <div v-for="film in store.films">
          <img :src="generaImageUrl(film.poster_path)" alt="Movie Poster">
        </div>
      </div>
    </section>

       <!--Section series-->
    <section class="containerSection">
      <h1>Series</h1>
      <div class="containerCard">
        <AppCard v-for="serie  in store.series" :info="serie" />
        <h1>Imgine series</h1>
        <div v-for="film in store.series">
          <img :src="generaImageUrl(film.poster_path)" alt="Movie Poster">
        </div>
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
  width: 80%;
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

}
</style>