alert("Hola mundo mi nombre es nerling");

let numeroSecreto=Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let numeroIntentos=0;2
// let palabraVeces="vez";
let intentosMaximos=3;
while(numeroUsuario!=numeroSecreto){
     numeroUsuario= parseInt(prompt("Escriba un numero del 1 al 10"));
     numeroIntentos=numeroIntentos+1;
    if(numeroUsuario==numeroSecreto){
        alert(`Felicitaciones,el numero secrerto es: ${numeroUsuario} lo hiciste en ${numeroIntentos} ${numeroIntentos>1 ? `veces`: `vez`}`);
    }
     else{
         if(numeroSecreto>numeroUsuario){
            alert ("No, el numero es mayor");

         } else{ alert("No, el numero es menor");

         }
         //palabraVeces="veces";
         if(numeroIntentos==intentosMaximos){
            alert(`llegaste al numero maximo de: ${intentosMaximos} intentos`); 
        break;
        }
     }
 } 
//let numeroUsuario= parseInt(prompt ("Ingrese un numero"));
//console.log(typeof(numeroUsuario));







