<script>

export default {
    name: "AppCard",
    props: ["info"],
    mounted() {
        console.log('Informazioni ricevuteCard:', this.info); // Verifica se le prop sono ricevute correttamente

    },
    methods:{
        getFlag(img){
         return new URL(`../assets/img/${img}.svg`, import.meta.url).href;
            
        }
    }

}

</script>

<template>
    <div class="card">
        <h2>Titolo: {{ info.title }}</h2>
        <h4>Titolo originale: {{ info.original_title }}</h4>
        <img :src="getFlag(info.original_language)" alt="flag">
        <p>Numero di voti: {{ info.vote_average }}</p>

    </div>
</template>


<style scoped>

.card {
    padding: 1rem;
    background-color: blue;
    width: 30%;
    margin: 1rem;
}

img{
    width: 100%;
    
}
</style>


