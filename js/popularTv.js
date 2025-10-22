import { fetchApiData } from "./fetchApiData.js";
import { global } from "./global.js";


export async function displayPopularTv(){
    const {results} = await fetchApiData("tv/popular");
    console.log(results);

    results.forEach((show) => {

        const htmlcode =`
        <div class="card">
          <a href="tv-details.html?id=${show.id}">
            <img
              src="${global.api.IMAGE_PATH}/${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.original_name}</h5>
            <p class="card-text">
              <small class="text-muted">Aired: ${show.first_air_date}</small>
            </p>
          </div>
        </div>
    `

    document.querySelector("#popular-shows").insertAdjacentHTML("afterbegin",htmlcode);
});

}   