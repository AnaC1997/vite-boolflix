<script>
import { store } from "../store.js";

export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      if (this.store.searchFilm.trim() !== "") {
        console.log("Cerca: ", this.store.searchFilm);
        this.$emit("search");
      }
    },
  },
};
</script>

<template>
  <div>
    <input
      placeholder="Cerca i tuoi film o serie"
      v-model.trim="store.searchFilm"
      @keyup.enter="$emit('search')"
    />
    <button @click="search">Cerca</button>
  </div>
</template>

<style scoped></style>
