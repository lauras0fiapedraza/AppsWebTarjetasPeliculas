// el componentre que recibe los props y los muestra
// se define una sola vez y se reutiliza 6 veces con datos distintos

//las props llegan como un objeto
function TarjetaPelicula({ titulo, anio, genero, calificacion, disponible }) {
    return (
        <div className="tarjeta">
            <h2 className="tarjeta-titulo">{titulo}</h2>

            <div className="tarjeta-info">
                <span>{anio}</span>
                <span>{genero}</span>
                <span>{calificacion}</span>

            </div>

            {/* operador terniario muestra un texto si esta true la disponibilidad o si no esta disponible */}
                <span className={`badge ${disponible ? "badge-verde" : "badge-rojo"}`}>
                    {disponible ? "Disponible" : "No disponible"}
                </span>
        </div>
    );
}
export default TarjetaPelicula;