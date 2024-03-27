/* Mostrar el saldo y usuario */
const user = localStorage.getItem('name');
const balance = localStorage.getItem('saldo');

const userTag = document.querySelector('#userName');
const balanceTag = document.querySelector('#balance');

console.log(balance, user);

userTag.textContent = user;
balanceTag.textContent = balance;
/* Retirar saldo */

/*
Interfaz para retirar saldo
Obtener el valor del saldo del campo input
Obtener el saldo actual
Hacemos la operación matemática
Guardar el saldo en el localStorage
Muestro el saldo actualizado
*/

const restBalanceBtn = document.querySelector('#restBalanceBtn');
const restBalanceInput = document.querySelector('#restBalance');


/* Sensor de evento */
restBalanceBtn.addEventListener('click', event => {
    console.log(Math.abs(restBalanceInput.value));
    /*
        Obtener el saldo actual
        Hacemos la operación matemática
        Guardar el saldo en el localStorage
        Muestro el saldo actualizado
    */
    const balanc = localStorage.getItem('saldo');

    if( restBalanceInput.value==0 || restBalanceInput.value==" "){ //el input no debe ir vacio o en 0
        alert("Ingresa la cantidad");
    } else if((Number(balanc) - Math.abs(Number(restBalanceInput.value))) < 10){ //solo acepta numeros positivos y no permite que quede en $10 o menos
        alert("El Saldo disponible no puede ser menor a $10"); 
    } else {
        let newBalanc = Number(balanc) - Math.abs(Number(restBalanceInput.value));
        localStorage.setItem('saldo', newBalanc);
        balanceTag.textContent = newBalanc;

        restBalanceInput.value = ' ';
    }
    restBalanceInput.value = ' ';
    
});