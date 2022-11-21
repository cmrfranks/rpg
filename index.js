const divIntro = document.getElementById('intro');
const divGuerrero = document.getElementById('guerrero');
const botonGuerrero = document.getElementById('botonGuerrero')
const botonGuerreroElegir = document.createElement('button');
const divInfoGuerrero = document.createElement('p');

const pSeleccionArma = document.createElement('p');
const botonArmaGuerrero1 = document.createElement('button');
const botonArmaGuerrero2 = document.createElement('button');
const botonArmaGuerrero3 = document.createElement('button');
const h3Bienvenido = document.createElement('h3');

const divMago = document.getElementById('mago');
const divTirador = document.getElementById('tirador');

let arma;

class Personaje {
    constructor(clase, vida, poder) {
      this.clase = clase;
      this.vida = vida;
      this.poder = poder;
    }
  
    elegirArma(){
      if(this.clase === "guerrero"){
            pSeleccionArma.innerText = 'Selecciona tu arma inicial:'
            botonArmaGuerrero1.innerText = 'Espada';
            divGuerrero.append(botonArmaGuerrero1);
            botonArmaGuerrero2.innerText = 'Lanza';
            divGuerrero.append(botonArmaGuerrero2);
            botonArmaGuerrero3.innerText = 'Hacha';
            divGuerrero.append(botonArmaGuerrero3);
            botonArmaGuerrero1.onclick = () =>{
                arma = true;
                setInterval(figth, 100);
            }
            botonArmaGuerrero2.onclick = () =>{
                arma = true;
                setInterval(figth, 100);
            }
            botonArmaGuerrero3.onclick = () =>{
                arma = true;
                setInterval(figth, 100);
            }
          
      } else if(this.clase === "mago"){
          armaM = prompt(
              "Selecciona tu arma inicial: \n Varita \n Báculo \n Libro"
            );
      } else if (this.clase === "tirador") {
          armaT = prompt(
            "Selecciona tu arma inicial: \n Arco \n Resortera \n  Ballesta"
          );
      } else {
          alert("Por favor, selecciona una opción adecuada");
        }
    }
}

function figth() {
    var x = Math.ceil(Math.random() * 10);
    if (x === 6) {
      alert("Un monstruo se acerca");
      var y = prompt("¿Qué decides? ¿Atacar o Piedad?");
      if (y === "atacar") {
        var a = Math.ceil(Math.random() * 10);
        alert("Ganas " + a + " puntos de xp");
      }
    }
    if (y === "piedad") {
      alert("Bien, ganas 0 puntos de xp, pero una amistad");
    }
}


//Clase
let clase;
let vida;
let poder;

const datosPersonaje = {};

botonGuerrero.onclick = () => {
    divInfoGuerrero.innerText = 'Datos del Guerrero:';
    divGuerrero.append(divInfoGuerrero);

    botonGuerreroElegir.innerText = 'Elegir';
    divGuerrero.append(botonGuerreroElegir);
    botonGuerreroElegir.onclick = () => {
        clase = 'guerrero';
        vida = 100;
        poder = 80;

        datosPersonaje.clase = clase;
        datosPersonaje.vida = vida;
        datosPersonaje.poder = poder;
        localStorage.setItem('datosPersonaje', JSON.stringify(datosPersonaje));
        const infoPersonaje = JSON.parse(localStorage.getItem('datosPersonaje'));
        console.log(infoPersonaje);
        if(infoPersonaje.clase !== ''){
            h3Bienvenido.innerText = `Eres un ${infoPersonaje.clase}.`;
            divIntro.append(h3Bienvenido);
        }
        

        const personaje1 = new Personaje(clase, vida, poder);
        personaje1.elegirArma();

        
    }
    
}

