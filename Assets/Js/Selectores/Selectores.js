export const inputsUsuarios=document.querySelectorAll("#Contacto input[type=text], input[type=email]");export let inputs__Vacios=document.querySelectorAll("input");export let inputs__Regexs={Nombre_Completo:/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,Correo_Electronico:/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,Motivo_Mensaje:/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,Telefono:/^\d{10,20}$/};