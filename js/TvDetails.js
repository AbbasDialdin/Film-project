import {fetchApiData} from "./fetchApiData.js";
import { global } from "./global.js";

export async function tvDetails(){
    const tvId = window.location.search.split("=")[1];
    const tv = await fetchApiData(`tv/${tvId}`);
    const background_img = `${global.api.IMAGE_PATH}/${tv.backdrop_path}`;
    console.log(tvId);

        //i love this 
    let vote = (tvId == 153312) ? "100000 / 10" : `${tv.vote_average} / 10`;

        const htmlcode =`
        <div class="details-top">
          <div>
            <img
              src="${global.api.IMAGE_PATH}/${tv.poster_path}"
              class="card-img-top"
              alt="${tv.name}"
            />
          </div>
          <div>
            <h2>${tv.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${vote}
            </p>
            <p class="text-muted">Release Date: ${tv.first_air_date}</p>
            <p>
                ${tv.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
               ${tv.genres.map((genre) =>{
                        return `<li>${genre.name}</li>`
                    }).join("")}
             </ul>
            <a href="#" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number Of Episodes:</span> ${tv.number_of_episodes}</li>
            <li>
              <span class="text-secondary">Last Episode To Air:</span> ${tv.last_episode_to_air.name}
              Aired Show Episode
            </li>
            <li><span class="text-secondary">Status:</span> Released</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">
            ${tv.production_companies.map(company => company.name).join(", ")}
          </div>
        </div>

        `
            document.querySelector("#show-details").insertAdjacentHTML("afterbegin",htmlcode);

}