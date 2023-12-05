<script>

export default {
    name: "AppCard",
    props: ["info"],
    mounted() {
        console.log('Informazioni ricevuteCard:', this.info); // Verifica se le prop sono ricevute correttamente

    },

}

</script>

<template>
    <div class="card">
        <h2>Titolo: {{ info.title }}</h2>
        <h2>Titolo originale: {{ info.original_title }}</h2>
        <p> Lingua: {{ info.original_language }}</p>
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
</style>


