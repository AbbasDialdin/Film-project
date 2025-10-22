import { global } from "./global.js";
import { searchApiData } from "./fetchApiData.js";
import pagination from "./pagination.js";



export default async function search(){
    const query = window.location.search;
    const urlParams = new URLSearchParams(query); // get value from url
    global.search.term = urlParams.get("search-term");
    global.search.type = urlParams.get("type");

    
    const {results,page,totalPages,totalResults} = await searchApiData();

    global.search.page = page;
    global.search.totalPages = totalPages;
    global.search.totalResults = totalResults;

    displaySearchResults(results);

}

export function displaySearchResults(results){
  
     results.forEach((search) => {
        
        const htmlcode =`
        <div class="card">
          <a href="movie-details.html?id=${search.id}">
            <img
              src="${global.api.IMAGE_PATH}/${search.poster_path}"
              class="card-img-top"
              alt=""
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${global.search.type === 'movie' ? search.title : search.name}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${global.search.type === 'movie' ? search.release_date : search.first_air_date}</small>
            </p>
          </div>
        </div>  
    `

    document.querySelector("#search-results").insertAdjacentHTML("afterbegin",htmlcode);
});

    console.log(results);
    pagination();
}