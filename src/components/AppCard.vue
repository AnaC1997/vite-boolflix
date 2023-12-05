<script>

export default {
    name: "AppCard",
    props: ["info"],
    mounted() {
        console.log('Informazioni ricevuteCard:', this.info); // Verifica se le prop sono ricevute correttamente

    },
    methods: {
        getFlag(img) {
            return new URL(`../assets/img/${img}.svg`, import.meta.url).href;

        }
    }

}

</script>

<template>
        <div class="card">
            <h2 class="p1">Titolo: {{ info.title }}  {{ info.name}}</h2>
            <h4 class="p1">Titolo originale: {{ info.original_title }} {{ info.original_name }}</h4>
            <img class="p1" :src="getFlag(info.original_language)" alt="flag">
            <p class="p1">Numero di voti: {{ info.vote_average }}</p>
        </div>
</template>


<style scoped>


.card {
    background-color: black;
    width: 30%;
    min-height: 400px;
    padding: 1rem;
    margin: 1rem;
    
   

}

img {
    height: 30%;
    width: 30%;


}

.p1{
    padding: 0.5rem;
}
</style>


