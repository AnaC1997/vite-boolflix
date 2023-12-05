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
      if (this.store.search.searchSerie.trim() !== "") {
        console.log("Cerca: ", this.store.search);
        this.$emit("search");
      }
    },
  },
};
</script>

<template>
  <div>
    <input class="styleCerca"
      placeholder="Cerca i tuoi film o serie"
      v-model.trim="store.search" 
      @keyup.enter="$emit('search')"
    />
    <button class="styleCerca"  @click="search">Cerca</button>
  </div>
</template>

<style scoped>
.styleCerca{
    padding: 0.5rem;
    margin: 0.5rem;
}


</style>
