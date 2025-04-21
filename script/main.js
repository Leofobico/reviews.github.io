const btnTheme = document.getElementById("toggleTheme");

btnTheme.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
});

const itensShorts = document.getElementById("itensShorts");

const basePath = window.location.pathname.includes('reviews.github.io') ? '/reviews.github.io' : '';
fetch(`${basePath}/data/stories.json`)

/*
fetch('../data/stories.json')
*/
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensShorts.insertAdjacentHTML('beforeend',
        `
          <article class="story-card">
            <img src="${element.link}" alt="${element.name}">
            <div class="overlay">
              <p><strong>${element.description}</strong></p>
            </div>
          </article>
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensMovies = document.getElementById("itensMovies");
/*
fetch('../data/movies.json')
*/
fetch(`${basePath}/data/movies.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensMovies.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensGames = document.getElementById("itensGames");
/*
fetch('../data/games.json')
*/
fetch(`${basePath}/data/games.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensGames.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensAnimes = document.getElementById("itensAnimes");
/*
fetch('../data/animes.json')
*/
fetch(`${basePath}/data/animes.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensAnimes.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensSeries = document.getElementById("itensSeries");
/*
fetch('../data/series.json')
*/
fetch(`${basePath}/data/series.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensSeries.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensOnlyPs3 = document.getElementById("itensOnlyPs3");
/*
fetch('../data/onlyps3.json')
*/
fetch(`${basePath}/data/onlyps3.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensOnlyPs3.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensSongs = document.getElementById("itensSongs");
/*
fetch('../data/songs.json')
*/
fetch(`${basePath}/data/songs.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensSongs.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img item__song__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Artista: ${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });

const itensCartoons = document.getElementById("itensCartoons");
/*
fetch('../data/cartoons.json')
*/
fetch(`${basePath}/data/cartoons.json`)
  .then(response => response.json())
  .then(dados => {
    dados.forEach(element => {
      itensCartoons.insertAdjacentHTML('beforeend',
        `
          <div class="item">
            <img class="item__img" src="${element.link}" alt="${element.name}">

            <div class="item__text">
              <p class="item__title">${element.name}</p>
              <p class="item__author">Escolhido por ${element.autor}</p>
            </div>

            <div class="item__avaliation">
              <button class="botao_jogos" aria-label="Curtir ${element.name}">Like</button>
              <button class="botao_jogos" aria-label="Não curtir ${element.name}">Dislike</button>
            </div>
          </div>
          <hr class="item__hr">
        `
      )
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar JSON:", erro);
  });