/**
 * @param {expresiones} (import & from)
 */
import {
    inputsUsuarios,
    inputs__Regexs,
    inputs__Vacios
} from '/Assets/Js/Selectores/Selectores.js'

import {
    verificarTamanos,
} from '/Assets/Js/Funciones/Funciones.js'


! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {

        /**
         * @param {funcion} (Listeners)
         */

        const Listeners = () => {

            /**
             * @param {Función Validación Default Bootstrap}
             */

            window.addEventListener('load', function () {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);

            /**
             * @param {function} (validar__InputsRegexs)
             * @param {parametros} (field, regex)
             * @param {metodo} (.test)
             * @param {parametro & valor & metodo} (field|value|.trim)
             * @param {operador ternario === if-else} (? : =)
             * @param {variable} (inputs__Vacios)
             * @param {metodo} (forEach)
             * @param {elemento} (item)
             * @param {metodo} (addEventListener === alzado de tecla)
             * @param {evento} (e.target === target actual === inputactual)
             * @param {evento & objeto & arreglo & [atributo & className & valor & metodo]} (e.target, inputs__Regexs[e.target.attributes.name.value.trim])
             **/

            const validar__InputsxRegexs = (field, regex) => {
                regex.test(field.value.trim()) ? field.className = 'valido' : field.className = 'invalido';
            }

            inputs__Vacios.forEach(item => item.addEventListener(
                'keyup', e => {
                    validar__InputsxRegexs(e.target, inputs__Regexs[e.target.attributes.name.value.trim()])
                }
            ));

            /**
             *@param {constante} (inputsUsuarios & inputsDocumentos & inputsRecuperarContraseña & inputsLogin)
             *@param {metodo} (forEach)
             *@param {elemento} (input)
             *@param {metodo} (addEventListener)
             *@param {funcion} (verificarTamanos) 
             **/

            inputsUsuarios.forEach((input) => {
                input.addEventListener('keyup', verificarTamanos);
            });

        };

        /**
          //!Ejecuta la función Listeners, a su vez está ejectua las demás funciones que contienen sus respectivos parámetros y objetos con sus propiedades y valores.
         * @param {funcion} (Listeners)
         */
        Listeners();

    });
}();