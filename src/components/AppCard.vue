<script>
import { store } from "../store.js";


export default {
    name: "AppCard",
    data() {
        return {
            store,
        };
    },
    props: ["info"],
    mounted() {
        console.log('Informazioni ricevuteCard:', this.info); // Verifica se le prop sono ricevute correttamente
        console.log("metodo getFlag", this.getFlag)
        console.log("metodo generaStarts", this.generaStarts)

    },
    methods: {
        getFlag(img) {
            if (img) {
                return new URL(`../assets/img/${img}.svg`, import.meta.url).href;

            }


        },
        isInFlags(lenguageCode) {
            return this.store.flags.includes(lenguageCode)


        },
        generaImageUrl(path) {
            if (path) {
                return `${this.store.imageBaseURL}${path}`;

            }
            else {
                return `https://picsum.photos/seed/{seed}/342/`
            }
        },
        generaStarts(vote) {
            return Math.ceil(vote / 2)
        }
    }

}

</script>

<template>
    <div class="card">
        <h2 class="p1">Titolo: {{ info.title }} {{ info.name }}</h2>
        <h4 class="p1">Titolo originale: {{ info.original_title }} {{ info.original_name }}</h4>
        <img v-if="isInFlags(info.original_language)" class="p1" :src="getFlag(info.original_language)" alt="flag">
        <p v-else>{{ info.original_language }}</p>
        <!--Una stella-->
        <span v-if="generaStarts(info.vote_average) === 1">
            <i class="fas fa-star"></i> {{ generaStarts(info.vote_average) }}
        </span>

        <!--Due stelle-->
        <span v-else-if="generaStarts(info.vote_average) === 2">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> {{ generaStarts(info.vote_average) }}
        </span>

         <!--Tre stelle-->
        <span v-else-if="generaStarts(info.vote_average) === 3">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>{{ generaStarts(info.vote_average) }}
        </span>

         <!--Quatro stelle-->
        <span v-else-if="generaStarts(info.vote_average) === 4">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> {{ generaStarts(info.vote_average) }}
        </span>
        <!--Cinco stelle-->
        <span v-else-if="generaStarts(info.vote_average) === 5">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> {{ generaStarts(info.vote_average) }}
        </span>

          <!--Nessuns Stella stelle-->
          <span v-else-if="generaStarts(info.vote_average) === 0">
            Numero di voti: {{ generaStarts(info.vote_average) }}
        </span>

        
        <img :src="generaImageUrl(info.poster_path)" alt="Movie Poster">
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

.fa-star {
    color: white;
}

img {
    height: 30%;
    width: 30%;


}

.p1 {
    padding: 0.5rem;
}
</style>


