const movies = [{



      name:"Inglorious Basterds",
      year:2009,
      director:"Quentin Tarantino",
      picture:"https://images-na.ssl-images-amazon.com/images/I/71bOphYMtVL._AC_UL600_SR600,600_.jpg",}, {
      


      name: "Forrest Gump",
      year: 1994,
      director: "Robert Zemeckis",
      picture: "https://i.pinimg.com/originals/87/49/58/874958b1731c0ee8ca2389e15c47a4a2.jpg",},{



      name: "Meet the robinsons",
      year: 2007,
      director: "Stephen Anderson",
      picture: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D82AD157424F100A45CFE050F2048EE331F7677816BE3406A985A12F6B8F784/scale?width=506&aspectRatio=2.00&format=jpeg",},];



      const movieList = movies.map(movie => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h2>${movie.name}</h2>
          <p>Year: ${movie.year}</p>
          <p>Director: ${movie.director}</p>
          <img src="${movie.picture}" alt="${movie.name} poster" />
        `;
        return li;});
      


      const ol = document.querySelector("ol");
    movieList.forEach(movie => {
     ol.appendChild(movie);});
