async function fetchMovies() {
    try {
      const response = await fetch("https://movie-details-data.onrender.com/movie/get-movie");
      const movies = await response.json();
      const movieCardsContainer = document.getElementById("movieCards");
      movieCardsContainer.innerHTML = "";
  
      if (response.ok) {
        movies.forEach((movie) => {
          const card = document.createElement("div");
          card.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
          card.innerHTML = `<div class="card" style="cursor: pointer" onclick="location.href='details.html?id=${movie._id}'">
              <img src="${movie.image}" alt="" />
              <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.genre}</p>
              </div>
            </div>`;
          movieCardsContainer.appendChild(card);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchMovies();

  mongodb+srv://vbhava14:anglyIQQ6XTNxwL1@cluster0.g72y8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0