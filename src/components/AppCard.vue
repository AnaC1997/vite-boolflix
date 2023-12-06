<script>
import { store } from "../store.js";


export default {
    name: "AppCard",
    data() {
        return {
            store,
            isMouseOver: false,
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
        },
        showDetails() {
            this.isMouseOver = true;
        },
        hideDetails() {
            this.isMouseOver = false;
        },
    }

}

</script>

<template >
        <div class="card" @mouseenter="showDetails" @mouseleave="hideDetails">
            <div class="containerCard" v-if="!isMouseOver">
                <img class="imgCard" :src="generaImageUrl(info.poster_path)" alt="Movie Poster">
            </div>
            <div class="containerInfo" v-if="isMouseOver">
                <h2 class="p1">Titolo: {{ info.title }} {{ info.name }}</h2>
                <h4 class="p1">Titolo originale: {{ info.original_title }} {{ info.original_name }}</h4>
                <img v-if="isInFlags(info.original_language)" class="p1 imgFlags" :src="getFlag(info.original_language)" alt="flag">
                <p v-else>{{ info.original_language }}</p>
                <!--stelle generate dinamicamente-->
                <span v-if="generaStarts(info.vote_average) > 0">
                    <template v-for="n in generaStarts(info.vote_average)">
                        <i class="fas fa-star"></i>
                    </template>
                    {{ generaStarts(info.vote_average) }}
                </span>
                <span v-else>
                    Numero di voti: {{ generaStarts(info.vote_average) }}
                </span>
            </div>
        </div>
</template>



<style scoped>

.card{
    padding: 1rem;
    
    
}

.containerInfo {
    background-color: black;
    width: 342px;
    height: 342px;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}


.fa-star {
    color: white;
}

.imgFlags {
    height: 30%;
    width: 30%;
   

}

.imgCard{
    width: 342px;
    height: 342px;
    border-radius: 10%;
}

h2, h4{
    font-size: 0.9rem;
}

.p1 {
    padding: 0.5rem;
}

</style>


