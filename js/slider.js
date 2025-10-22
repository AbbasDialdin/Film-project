import { fetchApiData } from "./fetchApiData.js";
import { global } from "./global.js";


export async function displaySlider(){
    const {results} = await fetchApiData("movie/now_playing");
    

    results.forEach(slider => {
        const htmlcode =`
        
        <div class="swiper-slide">
            <a href="movie-details.html?id=${slider.id}">
              <img src="${global.api.IMAGE_PATH}/${slider.poster_path}" alt="${slider.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${slider.vote_average} / 10
            </h4>
          </div>
        

        `
        document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend", htmlcode);
    });
    initSwiper();
}

function initSwiper(){
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            breakpoints: {
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
}