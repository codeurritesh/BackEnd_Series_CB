const but = document.querySelector('button');
const list = document.querySelector('#list');
but.addEventListener('click', () => {
    event.preventDefault();
    while (list.hasChildNodes()) {// Clearing the Screen
        list.removeChild(list.firstChild);
  }
    const sdata = document.querySelector('input');
    searchdata(sdata.value);
});
function searchdata(searchitem) {
    fetch(`https://search.imdbot.workers.dev/?q=${searchitem}`).then((res) => {// fetching API
        return res.json();
    })
    .then((data) => {
        console.log(data.description);
        for (let items in data.description) {
            let ilink = data.description[items]["#IMG_POSTER"];
            let iname = data.description[items]["#TITLE"];

            if (ilink != null) {
                //------------------Creating DIV for every MOvie------------------------
                const idiv = document.createElement('div');
                idiv.style.boxShadow = "10px 10px 8px grey";
                const poster = document.createElement('img');
              
                poster.src = ilink;
                poster.style.width = "180px";
                poster.style.margin = "20px";
                idiv.style.margin = "30px";
                idiv.appendChild(poster);
                list.appendChild(idiv);
                // -----------------------inner div for details-------------------
                const details = document.createElement('div');
                const h1 = document.createElement('h2');
                h1.innerText = iname;
                details.appendChild(h1);//name addded
                const year = data.description[items]["#YEAR"];
                const yearh1 = document.createElement('h3');
                const rankh1 = document.createElement('h3');

                const rank = data.description[items]["#RANK"];
                yearh1.innerText = `YEAR: ${year}`;
                details.appendChild(yearh1);// Year Added

                rankh1.innerText = `RANK: ${rank}`;
                details.appendChild(rankh1);// Rank Added
               
                //-----------------------Creating button link------------------------
                const tlink = data.description[items]["#IMDB_URL"];// adding watch link
                const goto = document.createElement('a');//creating new anchor tage
                goto.href = tlink;
                // goto.innerText="goto";
                const but = document.createElement('button');//creating new button
                but.innerText = "WATCH TRAILER";//adding new inner text to button
                goto.appendChild(but);//adding button to anchor tag
                details.appendChild(goto);//adding button
                idiv.appendChild(details);
            }
        }
    }).catch(() => {//---------------------------------Catch if movie not found in API
        const war = document.createElement('h3');
        war.innerText = "Movie Not Found!"
        list.appendChild(war);
    })
}

