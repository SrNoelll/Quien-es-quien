
const cayetana = document.querySelector("#Cayetana");
const roberto = document.querySelector("#Roberto");
const mara = document.querySelector("#Mara");
const marta = document.querySelector("#Marta");
const asier = document.querySelector("#Asier");
const alvaro = document.querySelector("#Alvaro");
const maria = document.querySelector("#Maria");
const manolo = document.querySelector("#Manolo");
const valentina = document.querySelector("#Valentina");
const javier = document.querySelector("#Javier");
const vanesa = document.querySelector("#Vanessa");
const juan = document.querySelector("#Juan");
const felipe = document.querySelector("#Felipe");
const david = document.querySelector("#David");
const esther = document.querySelector("#Esther");
const gracia = document.querySelector("#Gracia");
const idoia = document.querySelector("#Idoia");
const ramon = document.querySelector("#Ramon");
const aitana = document.querySelector("#Aitana");
const xema = document.querySelector("#Xema");
const jesus = document.querySelector("#Jesus");
const rita = document.querySelector("#Rita");
const juana = document.querySelector("#Juana");
const jeronimo = document.querySelector("#Jeronimo");
const datoSelect2 = document.querySelector("#eleccion2");
const datoSelect = document.querySelector("#eleccion");
const idTxt = document.querySelector("#texto");

const colorDelPelo = [
    "Negro", "Castaño", "Pelirrojo", "Rubio"
];

const colorDePiel = [
    "Blanco", "Negro"

];
const Gafas = [
    "Si", "No"
];
const formaPelo = [
    "Largo", "Corto"
];
const sexo = [
    "Hombre", "Mujer"
];
const bigote = [
    "Si", "No"
];
const barba = [
    "Si", "No"
];
const colorCamiseta = [
    "Marron", "Azul", "Rosa", "Violeta", "Verde", "Amarilla"
];
const pendientes = [
    "Si", "No"
];


const arrayPersonajes = [
    cayetana, roberto, manolo, maria,
    mara, marta, aitana, alvaro, asier,
    valentina, vanesa, juan, javier, jeronimo
    , jesus, juana, idoia, xema, gracia, rita,
    felipe, david, esther, ramon
];

const personajeElegido = eligePersonaje();

let vidas = 4;

datoSelect.addEventListener('change', () => {
    // Elimina el elementos de la lista de datos
    for (let i = 0; i < datoSelect.length; i++) {
        const elemento = datoSelect[i].value;

        if (datoSelect[i].selected) {

            switch (elemento) {
                case "colorPelo":
                    eliminaElementos();
                    for (let i = 0; i < colorDelPelo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorDelPelo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "colorPiel":
                    eliminaElementos();
                    for (let i = 0; i < colorDePiel.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorDePiel[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }

                    break;

                case "sexo":
                    eliminaElementos();

                    for (let i = 0; i < sexo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = sexo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }


                    break;

                case "pelo":
                    eliminaElementos();

                    for (let i = 0; i < formaPelo.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = formaPelo[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "gafas":
                    eliminaElementos();

                    for (let i = 0; i < Gafas.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = Gafas[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "camiseta":
                    eliminaElementos();

                    for (let i = 0; i < colorCamiseta.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = colorCamiseta[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "bigote":
                    eliminaElementos();

                    for (let i = 0; i < bigote.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = bigote[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "barba":
                    eliminaElementos();

                    for (let i = 0; i < barba.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = barba[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                case "pendientes":
                    eliminaElementos();

                    for (let i = 0; i < pendientes.length; i++) {
                        let nuevo = document.createElement("option");
                        let texto = document.createTextNode = pendientes[i];
                        nuevo.textContent = texto;
                        datoSelect2.appendChild(nuevo);
                    }
                    break;

                default:
                    break;
            }
        }

    }
})
idTxt.addEventListener('click', () => {
let acertado=false;
    if (personajeElegido.getAttribute(datoSelect.value) == datoSelect2[datoSelect2.selectedIndex].textContent.toLowerCase()) {
        compruebaAtributos(datoSelect.value, datoSelect2.value.toLowerCase());
        acertado=true;
    }
    if (!acertado) {
        compruebaPerder();
    }
})

/**
* CompruebaAtributos Funcion que permite visualizar los atributos de un personaje
* 
* @param atributo - Nombre del atributo a mostrar
* @param caracteristica - Indica si tiene caracteristicas o
*/
function compruebaAtributos(atributo, caracteristica) {
    // Devuelve  la caracteristica.
    for (let index = 0; index < arrayPersonajes.length; index++) {
        let atributos = arrayPersonajes[index].getAttribute(atributo);
        if (atributos != caracteristica) {
            arrayPersonajes[index].style.opacity = "0.5";
        } 
    }

}
//Funcion para saber cuando hemos perdido

function compruebaPerder() {
    vidas--;
    alert("Has fallado te quedan estas vidas " + vidas);
    if (vidas == 0) {
        alert("Has perdido");
    }
}

/**
* Funcion que elige el personaje en el array de personajes devuelve el objeto personaje
* 
* 
* @return { Object } El personaje del objeto personaje si existe o null si no exist
*/
function eligePersonaje() {
    let nAleatorio = random();
    // Devuelve el personaje de la lista de personajes
    for (let index = 0; index < arrayPersonajes.length; index++) {
        let personajeElegido = arrayPersonajes[index].getAttribute("n");
        // Devuelve el personaje de la cadena de la lista de personajes
        if (personajeElegido == nAleatorio) {
            return arrayPersonajes[index];
        }
    }
}

/**
* Elimina elementos del formulario seleccionado 
*/
function eliminaElementos() {
    while (datoSelect2.firstChild) {
        datoSelect2.firstChild.remove();
    }
}



/**
* Generates a random number between 1 and 24. This is used to generate random numbers that are in the range of a user's email address.
* 
* 
* @return { number } The random number between 1 and 24 ( inclusive ) as a number between 1 and 2^24
*/
function random() {
    let n = Math.floor((Math.random() * 24) + 1);

    return n;
}

/**
* Comprueba ganador en el boton se encuentra de la personaje
* 
* @param e - Evento que genero el evento 
*/
function compruebaGanador(e) {

    if (e.currentTarget.getAttribute("id") == personajeElegido.getAttribute("id")) {
        alert("Has ganado");
    } else {
        compruebaPerder();
    }
}
/* Eventos para cuando clickas en el personaje*/

cayetana.addEventListener('click', (e) => {
    compruebaGanador(e)
});
ramon.addEventListener('click', (e) => {
    compruebaGanador(e)
});
rita.addEventListener('click', (e) => {
    compruebaGanador(e)
});
roberto.addEventListener('click', (e) => {
    compruebaGanador(e)
});
manolo.addEventListener('click', (e) => {
    compruebaGanador(e)
});
mara.addEventListener('click', (e) => {
    compruebaGanador(e)
});

maria.addEventListener('click', (e) => {
    compruebaGanador(e)
});
marta.addEventListener('click', (e) => {
    compruebaGanador(e)
});
aitana.addEventListener('click', (e) => {
    compruebaGanador(e)
});
alvaro.addEventListener('click', (e) => {
    compruebaGanador(e)
});
asier.addEventListener('click', (e) => {
    compruebaGanador(e)
});
valentina.addEventListener('click', (e) => {
    compruebaGanador(e)
});
vanesa.addEventListener('click', (e) => {
    compruebaGanador(e)
});
esther.addEventListener('click', (e) => {
    compruebaGanador(e)
});
idoia.addEventListener('click', (e) => {
    compruebaGanador(e)
});
xema.addEventListener('click', (e) => {
    compruebaGanador(e)
});
javier.addEventListener('click', (e) => {
    compruebaGanador(e)
});
jeronimo.addEventListener('click', (e) => {
    compruebaGanador(e)
});
jesus.addEventListener('click', (e) => {
    compruebaGanador(e)
});
juan.addEventListener('click', (e) => {
    compruebaGanador(e)
});
juana.addEventListener('click', (e) => {
    compruebaGanador(e)
});
felipe.addEventListener('click', (e) => {
    compruebaGanador(e)
});
david.addEventListener('click', (e) => {
    compruebaGanador(e)
});
esther.addEventListener('click', (e) => {
    compruebaGanador(e)
});
gracia.addEventListener('click', (e) => {
    compruebaGanador(e)
});
