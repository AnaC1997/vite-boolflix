import { reactive }  from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=4a5e11caf515f1d416ece68934f3d4ad',
    films: [],// Array vuoto per recivere i film filtrati 
    searchFilm: " " // Stringa vuota per ogni volta che un'utente cerche un film 

    
});
