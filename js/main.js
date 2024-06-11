'use strict';

// query selector

const input = document.querySelector ('.js__input');
const btn = document.querySelector ('.js__button');
const clue = document.querySelector ('.js__clueForUser');
const attempts = document.querySelector ('.js__userAttempts');
const randomNumber = getRandomNumber(100);
let attemptssuser = 0;


// funciones

// generar el num aleatorio entre 1 y 100

function getRandomNumber(max) {
    return parseInt(Math.random() * max);
   }   


// coger el valor del input

// verifica si el numero es correcto, demasiado alto o demasiado bajo

// cambiar el contenido del primer p

// cambiar contenido del segundo p

function changefirstp () {

    console.log(input.value) 
    const userGuess = parseInt(input.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        clue.innerHTML = 'Introduce un numero valido';
    } else if ( userGuess < randomNumber ) {
        clue.innerHTML = 'Demasiado bajo';
    } else if ( userGuess > randomNumber) {
        clue.innerHTML = 'demasiado alto'
    } else  {
        clue.innerHTML = 'Has ganado campeona!'
    }


    //clue.innerHTML = 'demasiado alto';
    //clue.innerHTML = 'Demasiado bajo';
    //clue.innerHTML = 'Has ganado campeona!!!';

}


function changesecondp () {
    attemptssuser++;
    attempts.innerHTML = `Numero de intentos: ${attemptssuser}`;

}


// eventos

const handleClickBtn = (ev) => {
    ev.preventDefault ();
    changefirstp ();
    changesecondp ();
};

btn.addEventListener ('click', handleClickBtn );