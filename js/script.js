import { global } from "./global.js";
import movieDetails from "./movieDetails.js";
import { displayPopularMovies } from "./popularMovie.js";
import  navLinks  from "./navLinks.js";
import { displaySlider } from "./slider.js";
import {displayPopularTv} from "./popularTv.js";
import {tvDetails} from "./TvDetails.js";
import search from "./search.js";


function init(){
    
    switch(global.currentPage){
        case "/":
        case "/index.html":
            displayPopularMovies();
            displaySlider();
            break;
        case '/movie-details.html':
            movieDetails();
            break;
        case '/shows.html':
            displayPopularTv();
            break;
        case '/tv-details.html':
            tvDetails();
            break;
        case '/search.html':
            search();
            break;
        
    }
    navLinks();
}
document.addEventListener("DOMContentLoaded",init);