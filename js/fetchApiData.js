import { global } from "./global.js";

//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1

export async function fetchApiData(endpoint){
    
    const API_URL = global.api.API_URL;
    const API_KEY = global.api.API_KEY;
    showSpin();

    const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    hideSpin();

    return data;
}


export async function searchApiData(){
    
    const API_URL = global.api.API_URL;
    const API_KEY = global.api.API_KEY;
    showSpin();

    const response = await fetch(`${API_URL}/search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page} `);
    const data = await response.json();
    hideSpin();
    return data;
}



function showSpin(){
    document.querySelector(".spinner").classList.add("show");
}

function hideSpin(){
    document.querySelector(".spinner").classList.remove("show");
}
