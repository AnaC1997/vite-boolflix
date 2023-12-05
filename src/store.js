import { reactive } from 'vue'

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '4a5e11caf515f1d416ece68934f3d4ad',
    ////////Film////////
    films: [],// Array vuoto per recivere i film filtrati 
    searchSerie: " ", // Stringa vuota per ogni volta che un'utente cerche un film 

    ////////Serie tv////////
   apiUrlSerie: 'https://api.themoviedb.org/3/search/tv',
   series: [],
   searchSerie:" "


});