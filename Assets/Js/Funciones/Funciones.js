import {
    inputsUsuarios
} from '/Assets/Js/Selectores/Selectores.js';

/**
 * @param {funcion} (verificarTamanos)
 * @param {ciclo/loop} (for)
 * @param {ExpresionInicial}(var i = 0, input__actual)
 * @param {ExpresionCondiconal && ExpresionIncremental && variable} (input__actual =  variable === inputsUsuarios[i++];)
 * @param {Ciclo Condicional} (if)
 * @param {variable} (input__actual.value.length >=50 () => Obtener el valor de los distintos input´s y se verifica que no sea mayor o igual a 50 )
 * @param {funcion} (swal)
 */
export const verificarTamanos = () => {
    for (var i = 0, input__actual; input__actual = inputsUsuarios[i++];) {
        if (input__actual.value.length >= 50) {
            swal({
                icon: "warning",
                title: "¡Atención!",
                text: "Ningún campo debe de tener más de 50 letras/carácteres/números",
                timer: 3000,
                closeOnClickOutside: false,
                button: false,
                closeOnEsc: false,
            });
        }
    }
};