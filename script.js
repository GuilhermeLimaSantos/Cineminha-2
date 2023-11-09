const movies = [
   {
    title: "Encanto",
    category: "Comédia",
    imageSrc: "https://play-lh.googleusercontent.com/E05H_CCcoTRnq69ZoCXph2U8ZN6TJ8Us4SBpyFY9T11XD5H3Q4dd2rr3JZyl0LdcKHIXJvog89YhR55dw2IA"
    },

    {
      title: "Moana",
      category:"Fantasia",
      imageSrc: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg"
    },

    {
      title: "Red: Crescer é uma Fera",
      category:"Amadurecimento",
      imageSrc: "https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg"
    },

    {
      title: "Elementos",
      category:"Ficção",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdab6m1R38wYdsAjwcuGacJ80G27bD5oV0HlVR6aJoTS_3S3v"
    },

    {
      title: "Barbie",
      category:"Romance",
      imageSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfrQw_ilMVXBYmS4Cnen202Sqmuy7l1o9eMy04Ba1DCYvF367-"
    },

    {
      title: "Super Mario Bros",
      category:"Comédia",
      imageSrc: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/regions/us/onesheet.jpg"
    },

    {
      title: "Nimona",
      category:"Fantasia",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQg_qPNpCFkfh8m00LkjVgk3j7dEjpuowyGHfBQC8XL0l8V9zLZ"
    },

    {
      title: "Miraculous",
      category:"Aventura",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyGjVKaP42JztCmLEYI39MKnQ193jdZfV-bqob17_D5xrrAVPz"
    },

    {
      title: "A Chamada",
      category:"Ação",
      imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjDWJcz1ONJrRXRuEcn8rkZklqAKFbtGVVrG37nZg6H60I-ZrZ"
    },

    {
      title: "Guardiões da Galáxia",
      category:"Animação",
      imageSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1P_hV6E3_OlEq4MdFMQje5SyBUkAH0JKasP_iVJG4HMT69xn2"
    },

    {
      title: "A Noite das Bruxas",
      category:"Terror",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-NvZ4l6sGpsZgfrC1sgIuXR3nN9sknbiUvZSG8IUkoxTjaeZo"
    },
    
    {
      title: "Dino King - Viagem à Montanha do Fogo ",
      category:"Animação",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0ijLRGlMa3Us9ThvKzDnjvK1YFQE-h1N58NF6-ODFkxJ544w"
    },
    
    {
      title: "Os Guardiões",
      category:"Drama",
      imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZyDeXBdAZu-5gl_3YcUUL2HL3-yDLMHZzojkdK8I3rtd5BRI9"
    },
    
    {
      title: "Besouro Azul",
      category:"Ação",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLXZb6z_VGWUc5O-s7iMJ8QVWQNa3b6hp6HawTsbW8dOJ1RQxh"
    },
    
    {
      title: "Adão Negro",
      category:"Ação",
      imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrULQHUpm3Zr60AXFAltaQkpo6DAe8FZmhSrYsa7t5DCUeaeF9"
    },
    
    {
      title: "Terapia do Medo",
      category:"Terror",
      imageSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrFxpYCPPWiiOGG5pZttHFKywlfTzHHXPYKojERotZLpsiMO42"
    },
    
    {
      title: "O Encontro de Carl",
      category:"Aventura",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWn1yIZNI-6zpCqPFLd4mn0suKix0BUqxSqlb8yM2oleD8td9w"
    },
    
    {
      title: "M3GAN",
      category:"Terror",
      imageSrc: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/megan/images/regions/us/onesheet.jpg"
    },
    
    {
      title: "2067",
      category:"Cyberpunk",
      imageSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUy7Dq51oPVZwnVzeDZUGDJWPRsYaSB2sN5F7Q0T2loxbJ0E0e"
    },

    {
      title: "Paralisia",
      category:"Ficção Científica",
      imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDv-CKwtsWxfwG1I7CBPgVz8J8leuP059DWIDSPSzO8TtLOHfW"
    }
];

function createMovieElement(movie) {

const movieDiv = document.createElement("Div");
  movieDiv.className = "movie";

const movieImage = document.createElement("img");
  movieImage.src = movie.imageSrc;
  movieImage.alt = movie.title;

const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;

const movieCategory = document.createElement("p");
  movieCategory.textContent = movie.category;

const pagination = document.getElementById("pagination");

    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieCategory);

return movieDiv;
}

function renderMovieList(pageNumber = 1) {
  const moviesPerPage = 10;
  const startIndex = (pageNumber - 1)* moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
}

function renderPagination(totalMovies, currentPage) {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalMovies / 10);

  for (let i = 1; i <=totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;

    if (i === currentPage) {
      pageButton.disabled = true;
    }
  }
}

const movieList = document.getElementById("movie-list");
  movies.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    movieList.appendChild(movieElement);
});
