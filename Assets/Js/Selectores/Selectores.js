/**
 * @param {constantes} (inputsUsuarios)
 * @param {input´s} (Recuperan los distintos tipos de inputs del formulario de contacto)
 */

export const inputsUsuarios = document.querySelectorAll("#Contacto input[type=text], input[type=email]");

/**
 * @param {objeto} (inputs__Regexs)
 * @param {propiedades} (Nombre_Completo hasta Telefono)
 * @param {valores|Regexs} (/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/ hasta /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
 */

export let inputs__Vacios = document.querySelectorAll('input');
export let inputs__Regexs = {
    Nombre_Completo: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,
    Correo_Electronico: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,
    Motivo_Mensaje: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,
    Telefono: /^\d{10,20}$/,
};