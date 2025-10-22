import { searchApiData } from './fetchApiData.js';
import {global} from './global.js';
import { displaySearchResults } from './search.js';


export default async function pagination(){


    const htmlcode=` 

         <div class="pagination">
          <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>

        </div> 

     

`;

        document.querySelector('#pagination').innerHTML=htmlcode;

    if(global.search.page===1){
        document.querySelector('#prev').disabled=true;
    }
    if(global.search.page===global.search.totalPages){
        document.querySelector('#next').disabled=true;
    }

    document.querySelector('#next').addEventListener('click', async function(){
        global.search.page++;
        const { results,totalPages } = await searchApiData();
       displaySearchResults(results);
    });

    document.querySelector('#prev').addEventListener('click', async function(){
        global.search.page--;
        const { results , totalPages } = await searchApiData();
       displaySearchResults(results);
    });
}