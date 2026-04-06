document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue

  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  let num3 = Number(document.getElementById('num3').value); 

  const arr = new Array(3);
  arr [0] = num1;
  arr [1] = num2;
  arr [2] = num3;

// Comprobación de igualdades
let igualdades ="";
    for (i=0; i<3; i++){
        for (j =(i+1) ; j<3; j++){
            if (arr[j] === arr[i]) {
                console.log (`Igualdad entre número ${i+1} y número ${j+1}. Valor de igualdad ${arr[i]}`);
                igualdades += `Igualdad entre número ${i + 1} y número ${j + 1}. Valor: ${arr[i]}. `;
            }
        }
    }

document.getElementById('igualdad').innerText = igualdades || "No hay igualdades.";

// Numeros ordenados
    for (i=0; i<3; i++){
        for (j =(i+1) ; j<3; j++){
            if (arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; //Intercambio moderno de elementos de un arreglo. Mejor manejo de variables y memoria.
            }
        }
    }

    document.getElementById('mayorMenor').innerText = "Los números ordenados de mayor a menor resultan: " + arr[0] + " " + arr[1] + " " + arr[2] ;
    document.getElementById('menorMayor').innerText = "Los números ordenados de menor a mayor resultan: " + arr[2] + " " + arr[1] + " " + arr[0] ;
});

