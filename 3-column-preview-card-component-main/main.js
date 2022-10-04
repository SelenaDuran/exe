//guardar el estado
let columnaActiva = 1
//seleccionar las columna
const columnas = document.querySelectorAll(".columna")

//escuchar los clicks

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
    cambiarColumna(indice)
   })
})

//cambiar el estado de columnas
function cambiarColumna(indice) {
   columnas[columnaActiva].classList.remove("activa")
   columnas[indice].classList.add("activa")
   columnaActiva = indice 
}