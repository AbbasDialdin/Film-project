import {fetchApiData} from "./fetchApiData.js";
import { global } from "./global.js";

export default async function movieDetails(){
    
    const movieId = window.location.search.split("=")[1];
    const movie = await fetchApiData(`movie/${movieId}`);
    const background_img = `${global.api.IMAGE_PATH}/${movie.backdrop_path}`;
    console.log(movie);


     
        let htmlcode =`
        <div>
        <div class="details-top">
            <div class="overlay" style="background-image: url(${background_img})"></div>
            <div>
                <img
                src="${global.api.IMAGE_PATH}/${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
                /> 
            </div>
            <div>
                <h2>${movie.title}</h2>
                <p>
                <i class="fas fa-star text-primary"></i>
                ${movie.vote_average} / 10
                </p>
                <p class="text-muted">Release Date: ${movie.release_date}</p>
                <p>
                ${movie.overview}
                </p>
                <h5>Genres</h5>
                <ul class="list-group">
                    ${movie.genres.map((genre) =>{
                        return `<li>${genre.name}</li>`
                    }).join("")}
                </ul>
                <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
            </div>
            </div>
            <div class="details-bottom">
            <h2>Movie Info</h2>
            <ul>
                <li><span class="text-secondary">Budget:</span> $${movie.budget.toLocaleString()}</li>
                <li><span class="text-secondary">Revenue:</span> $${movie.revenue.toLocaleString()}</li>
                <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
                <li><span class="text-secondary">Status:</span> Released</li>
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">${movie.production_companies.map(company => `<li>${company.name}</li>`).join("")}</div>
            </div> 
            </div>

        `
            document.querySelector("#movie-details").insertAdjacentHTML("afterbegin",htmlcode);

}