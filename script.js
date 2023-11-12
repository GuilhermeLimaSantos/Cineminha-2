const movies = [

  { name: "Encanto", 
  image: "https://play-lh.googleusercontent.com/E05H_CCcoTRnq69ZoCXph2U8ZN6TJ8Us4SBpyFY9T11XD5H3Q4dd2rr3JZyl0LdcKHIXJvog89YhR55dw2IA", 
  tickets: 100, 
  category: "Comédia" },

  { name: "Moana", 
  image: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg", 
  tickets: 150, 
  category: "Comédia" },

  { name: "Red: Crescer é uma Fera", 
  image: "https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg", 
  tickets: 80, 
  category: "Comédia" },

  { name: "Elementos", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdab6m1R38wYdsAjwcuGacJ80G27bD5oV0HlVR6aJoTS_3S3v", 
  tickets: 120, 
  category: "Romance" },

  { name: "Barbie", 
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfrQw_ilMVXBYmS4Cnen202Sqmuy7l1o9eMy04Ba1DCYvF367-", 
  tickets: 90, 
  category: "Comédia" },

  { name: "Super Mario Bros", 
  image: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/regions/us/onesheet.jpg", 
  tickets: 110, 
  category: "Comédia" },

  { name: "Nimona", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQg_qPNpCFkfh8m00LkjVgk3j7dEjpuowyGHfBQC8XL0l8V9zLZ", 
  tickets: 70, 
  category: "Comédia" },

  { name: "Miraculous", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyGjVKaP42JztCmLEYI39MKnQ193jdZfV-bqob17_D5xrrAVPz", 
  tickets: 140, 
  category: "Romance" },

  { name: "A Chamada", 
  image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjDWJcz1ONJrRXRuEcn8rkZklqAKFbtGVVrG37nZg6H60I-ZrZ", 
  tickets: 60, 
  category: "Terror" },

  { name: "Guardiões da Galáxia", 
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1P_hV6E3_OlEq4MdFMQje5SyBUkAH0JKasP_iVJG4HMT69xn2", 
  tickets: 130, 
  category: "Terror" },

  { name: "Dino King - Viagem à Montanha do Fogo ", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0ijLRGlMa3Us9ThvKzDnjvK1YFQE-h1N58NF6-ODFkxJ544w", 
  tickets: 95, 
  category: "Comédia" },

  { name: "A Noite das Bruxas", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-NvZ4l6sGpsZgfrC1sgIuXR3nN9sknbiUvZSG8IUkoxTjaeZo", 
  tickets: 105, 
  category: "Terror" },

  { name: "Os Guardiões", 
  image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZyDeXBdAZu-5gl_3YcUUL2HL3-yDLMHZzojkdK8I3rtd5BRI9", 
  tickets: 75, 
  category: "Comédia" },

  { name: "Besouro Azul", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLXZb6z_VGWUc5O-s7iMJ8QVWQNa3b6hp6HawTsbW8dOJ1RQxh", 
  tickets: 125, 
  category: "Comédia" },

  { name: "Adão Negro", 
  image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrULQHUpm3Zr60AXFAltaQkpo6DAe8FZmhSrYsa7t5DCUeaeF9", 
  tickets: 85, 
  category: "Comédia" },

  { name: "Terapia do Medo", 
  image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrFxpYCPPWiiOGG5pZttHFKywlfTzHHXPYKojERotZLpsiMO42", 
  tickets: 115, 
  category: "Terror" },

  { name: "O Encontro de Carl", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWn1yIZNI-6zpCqPFLd4mn0suKix0BUqxSqlb8yM2oleD8td9w", 
  tickets: 65, 
  category: "Comédia" },

  { name: "M3GAN", 
  image: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/megan/images/regions/us/onesheet.jpg", 
  tickets: 135, 
  category: "Terror" },

  { name: "2067", 
  image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUy7Dq51oPVZwnVzeDZUGDJWPRsYaSB2sN5F7Q0T2loxbJ0E0e", 
  tickets: 105, 
  category: "Terror" },

  { name: "Paralisia", 
  image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDv-CKwtsWxfwG1I7CBPgVz8J8leuP059DWIDSPSzO8TtLOHfW", 
  tickets: 90, 
  category: "Terror" }
];

const movieList = document.getElementById("movieList");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const pagination = document.getElementById("pagination");

function renderMovieList(pageNumber = 1) {
  const moviesPerPage = 10;
  const startIndex = (pageNumber - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  const filteredMovies = movies.filter(movie => {
  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;

return (
  (movie.name.toLowerCase().includes(searchValue) || searchValue === "") &&
  (categoryValue === "Todos" || movie.category === categoryValue)
  );
});

const paginatedMovies = filteredMovies.slice(startIndex, endIndex);
     
 movieList.innerHTML = "";

for (const movie of paginatedMovies) {
   const movieCard = document.createElement("div");
   movieCard.classList.add("movie-card");

movieCard.innerHTML = `
 <h2>${movie.name}</h2>
  <img src="${movie.image}" alt="${movie.name}">
  <p>Tickets disponíveis: ${movie.tickets}</p>
  <p>Categoria: ${movie.category}</p>
`;
  
  movieList.appendChild(movieCard);
 }
     
  renderPagination(filteredMovies.length, pageNumber);
}

function renderPagination(totalMovies, currentPage) {
  pagination.innerHTML = "";
     
  const totalPages = Math.ceil(totalMovies / 10);
     
for (let i = 1; i <= totalPages; i++) {
  const pageButton = document.createElement("button");
  pageButton.innerText = i;
       
if (i === currentPage) {
  pageButton.disabled = true;
}

pageButton.addEventListener("click", () => {
  renderMovieList(i);
    });
       
  pagination.appendChild(pageButton);
  }
}

searchInput.addEventListener("input", () => renderMovieList());
  categoryFilter.addEventListener("change", () => renderMovieList());

renderMovieList();
