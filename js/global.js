
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

import search from "./search.js";

export const global = {

    currentPage:window.location.pathname,
    api: {
        API_KEY:"99aa084cfd73541134e9908b537affc1",
        API_URL:"https://api.themoviedb.org/3",
        IMAGE_PATH:"https://image.tmdb.org/t/p/w500"
    },
    search:{
        term:'',
        type:"",
        page:1,
        totalPages:1,
        totalResults:0,
    }


}

