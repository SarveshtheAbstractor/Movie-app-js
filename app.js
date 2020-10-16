const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

async function getMovies(){
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    
    console.log(respData);
    
    respData.results.forEach(movie => {
        const {poster_path , title , overview,vote_average} = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('img-card');
        movieEl.innerHTML = `<img src="${IMGPATH + poster_path}"><h1>${title}</h1>
<h4>${vote_average}</h4>
<div class="overview">${overview}</div>`;
        
        document.getElementById('movie').appendChild(movieEl);
        
        
    });
    
}

getMovies();
