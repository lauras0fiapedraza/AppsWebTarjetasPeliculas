// componente raiz , se importan los datos y el componente
//.map() renderiza una tarjeta por cada pelicula en data 

import peliculas from "./data/peliculas.js";
import TarjetaPelicula from "./components/TarjetaPelicula";
import "./App.js";

function App() {
  return (
    <div className="app">
      <h1 className="titulo-principal">Lista de Películas</h1>

      <div className="grid">
        {/*se recorre el array de peliculas con map retornando un componente. la prop
        "key" es obligatoria para identificar cada elemento */}
        {peliculas.map((pelicula)=>(
          <TarjetaPelicula
            key={pelicula.id}
            titulo={pelicula.titulo}
            anio={pelicula.anio}
            genero={pelicula.genero}
            calificacion={pelicula.calificacion}
            disponible={pelicula.disponible}
          />
        ))}
      </div>
    </div>
  );
}

export default App
