import { fetchApiData } from "./fetchApiData.js";
import { global } from "./global.js";



export async function displayPopularMovies(){
    const {results} = await fetchApiData("movie/popular");
    console.log(results);
       
        results.forEach((movie) => {
        
        const htmlcode =`
        <div class="card">
          <a href="movie-details.html?id=${movie.id}">
            <img
              src="${global.api.IMAGE_PATH}/${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        </div>  
    `

    document.querySelector("#popular-movies").insertAdjacentHTML("afterbegin",htmlcode);
});

}