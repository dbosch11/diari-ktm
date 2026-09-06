const fotos = document.querySelectorAll(".galeria img");
const visor = document.getElementById("visor");
const fotoGran = document.getElementById("foto-gran");
const tancar = document.getElementById("tancar");

fotos.forEach(function(foto) {

    foto.addEventListener("click", function() {

        visor.style.display = "flex";

        fotoGran.src = foto.src;
    });

});


tancar.addEventListener("click", function() {

    visor.style.display = "none";

});


visor.addEventListener("click", function(event) {

    if (event.target === visor) {
        visor.style.display = "none";
    }

});