import { reactive } from 'vue'

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '4a5e11caf515f1d416ece68934f3d4ad',
    ////////Film////////
    films: [],// Array vuoto per recivere i film filtrati 
    search: " ", // Stringa vuota per ogni volta che un'utente cerca qualcosa

    ////////Serie tv////////
   apiUrlSerie: 'https://api.themoviedb.org/3/search/tv',
   series: [],
   imageBaseURL: 'https://image.tmdb.org/t/p/w342/',
   flags: ["cn", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "gb", "hi", "hr", "hu", "it","ja","kr","lt", "lv", "mt", "nl","no", "pl", "pt", "ro", "sl", "sv","th", "tl"]
 


});