//Elementos de la card del Guerrero

const divIntro = document.getElementById("intro");
const divGuerrero = document.getElementById("guerrero");
const botonGuerrero = document.getElementById("botonGuerrero");
const botonGuerreroElegir = document.createElement("button");
const divInfoGuerrero = document.createElement("p");

const pSeleccionArma = document.createElement("p");
const botonArmaGuerrero1 = document.createElement("button");
const botonArmaGuerrero2 = document.createElement("button");
const botonArmaGuerrero3 = document.createElement("button");
const h3Bienvenido = document.createElement("h3");

//Elementos de la card del Mago

const divMago = document.getElementById("mago");
const botonMago = document.getElementById("botonMago");
const botonMagoElegir = document.createElement("button");
const divInfoMago = document.createElement("p");

const botonArmaMago1 = document.createElement("button");
const botonArmaMago2 = document.createElement("button");
const botonArmaMago3 = document.createElement("button");

//Elementos de la card del Tirador

const divTirador = document.getElementById("tirador");
const botonTirador = document.getElementById("botonTirador");
const botonTiradorElegir = document.createElement("button");
const divInfoTirador = document.createElement("p");

const botonArmaTirador1 = document.createElement("button");
const botonArmaTirador2 = document.createElement("button");
const botonArmaTirador3 = document.createElement("button");

let arma;

//Agregando clase "cta" para poder usar el modal

botonArmaGuerrero1.classList.add("cta");
botonArmaGuerrero2.classList.add("cta");
botonArmaGuerrero3.classList.add("cta");
botonArmaMago1.classList.add("cta");
botonArmaMago2.classList.add("cta");
botonArmaMago3.classList.add("cta");
botonArmaTirador1.classList.add("cta");
botonArmaTirador2.classList.add("cta");
botonArmaTirador3.classList.add("cta");

class Personaje {
  constructor(clase, vida, poder) {
    this.clase = clase;
    this.vida = vida;
    this.poder = poder;
  }


  elegirArma() {
    if (this.clase === "guerrero") {
      pSeleccionArma.innerText = "Selecciona tu arma inicial:";
      botonArmaGuerrero1.innerText = "Espada";
      divGuerrero.append(botonArmaGuerrero1);
      botonArmaGuerrero2.innerText = "Lanza";
      divGuerrero.append(botonArmaGuerrero2);
      botonArmaGuerrero3.innerText = "Hacha";
      divGuerrero.append(botonArmaGuerrero3);
      botonArmaGuerrero1.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaGuerrero2.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaGuerrero3.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
    } else if (this.clase === "mago") {
      pSeleccionArma.innerText = "Selecciona tu arma inicial:";
      botonArmaMago1.innerText = "Varita";
      divMago.append(botonArmaMago1);
      botonArmaMago2.innerText = "BÃ¡culo";
      divMago.append(botonArmaMago2);
      botonArmaMago3.innerText = "Libro";
      divMago.append(botonArmaMago3);
      botonArmaMago1.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaMago2.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaMago3.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
    } else if(this.clase === 'tirador'){
      pSeleccionArma.innerText = "Selecciona tu arma inicial:";
      botonArmaTirador1.innerText = "Arco";
      divTirador.append(botonArmaTirador1);
      botonArmaTirador2.innerText = "Ballesta";
      divTirador.append(botonArmaTirador2);
      botonArmaTirador3.innerText = "Resortera";
      divTirador.append(botonArmaTirador3);
      botonArmaTirador1.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaTirador2.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
      botonArmaTirador3.onclick = (e) => {
        arma = true;
        e.preventDefault;
        modalC.style.opacity = 1;
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
      };
    }
  }
}


//Clase
let clase;
let vida;
let poder;

const datosPersonaje = {};

botonGuerrero.onclick = () => {

  divGuerrero.append(divInfoGuerrero);

  botonGuerreroElegir.innerText = "Elegir";
  divGuerrero.append(botonGuerreroElegir);
  botonGuerreroElegir.onclick = () => {
    clase = "guerrero";
    vida = 100;
    poder = 80;

    datosPersonaje.clase = clase;
    datosPersonaje.vida = vida;
    datosPersonaje.poder = poder;
    localStorage.setItem("datosPersonaje", JSON.stringify(datosPersonaje));
    const infoPersonaje = JSON.parse(localStorage.getItem("datosPersonaje"));
    console.log(infoPersonaje);
    if (infoPersonaje.clase !== "") {
      h3Bienvenido.innerText = `Eres un ${infoPersonaje.clase}.`;
      divIntro.append(h3Bienvenido);
    }

    const personaje1 = new Personaje(clase, vida, poder);
    personaje1.elegirArma();
  };
};

botonMago.onclick = () => {

  divMago.append(divInfoMago);

  botonMagoElegir.innerText = "Elegir";
  divMago.append(botonMagoElegir);
  botonMagoElegir.onclick = () => {
    clase = "mago";
    vida = 70;
    poder = 100;

    datosPersonaje.clase = clase;
    datosPersonaje.vida = vida;
    datosPersonaje.poder = poder;
    localStorage.setItem("datosPersonaje", JSON.stringify(datosPersonaje));
    const infoPersonaje = JSON.parse(localStorage.getItem("datosPersonaje"));
    console.log(infoPersonaje);
    if (infoPersonaje.clase !== "") {
      h3Bienvenido.innerText = `Eres un ${infoPersonaje.clase}.`;
      divIntro.append(h3Bienvenido);
    }

    const personaje2 = new Personaje(clase, vida, poder);
    personaje2.elegirArma();
  };
};

botonTirador.onclick = () => {
  
  divTirador.append(divInfoTirador);

  botonTiradorElegir.innerText = "Elegir";
  divTirador.append(botonTiradorElegir);
  botonTiradorElegir.onclick = () => {
    clase = "tirador";
    vida = 80;
    poder = 90;

    datosPersonaje.clase = clase;
    datosPersonaje.vida = vida;
    datosPersonaje.poder = poder;
    localStorage.setItem("datosPersonaje", JSON.stringify(datosPersonaje));
    const infoPersonaje = JSON.parse(localStorage.getItem("datosPersonaje"));
    console.log(infoPersonaje);
    if (infoPersonaje.clase !== "") {
      h3Bienvenido.innerText = `Eres un ${infoPersonaje.clase}.`;
      divIntro.append(h3Bienvenido);
    }

    const personaje3 = new Personaje(clase, vida, poder);
    personaje3.elegirArma();
  };
};

//Funciones para abrir y cerrar el modal
let cerrar = document.querySelectorAll(".close")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let ataque = document.querySelector(".atk");
let piedad = document.querySelector(".pty");

cerrar.addEventListener("click", function() {
  modal.classList.toggle("modal-close");
  setTimeout(function () {
    modalC.style.opacity = 0;
    modalC.style.visibility = "hidden";
  }, 500);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = 0;
      modalC.style.visibility = "hidden";
    }, 500);
  }
});


ataque.addEventListener("click", function(){
let a = Math.ceil(Math.random() * 10);
  Swal.fire({
    title: 'FELICIDADES',
    text: `Ganas ${a} puntos de xp.`,
    icon: 'success',
    confirmButtonText: 'Continuar'
  })
});

piedad.addEventListener("click", function(){
  Swal.fire({
    title: 'FELICIDADES',
    text: `Bien, ganas 0 puntos de xp, pero una nueva amistad`,
    icon: 'success',
    confirmButtonText: 'Continuar'
  })
})

const buscarStats = async () => {
  const statsFetch = await fetch('stats.json');
  const statsJson = await statsFetch.json();
  
  console.log(statsJson);

  divInfoGuerrero.innerText = `Datos del ${statsJson[0].clase}: \n Vida: ${statsJson[0].vida} \n Poder: ${statsJson[0].poder} \n Agilidad: ${statsJson[0].agilidad}`;
  divInfoMago.innerText = `Datos del ${statsJson[1].clase}: \n Vida: ${statsJson[1].vida} \n Poder: ${statsJson[1].poder} \n Agilidad: ${statsJson[1].agilidad}`;
  divInfoTirador.innerText = `Datos del ${statsJson[2].clase}: \n Vida: ${statsJson[2].vida} \n Poder: ${statsJson[2].poder} \n Agilidad: ${statsJson[2].agilidad}`;
}

buscarStats();