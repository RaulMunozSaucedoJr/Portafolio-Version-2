! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {

        const inputsUsuarios = document.querySelectorAll("#Contacto input[type=text], input[type=email]");
        let inputs__Vacios = document.querySelectorAll("input");
        let inputs__Regexs = {
            Nombre_Completo: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,
            Correo_Electronico: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,
            Motivo_Mensaje: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/,
            Telefono: /^\d{10,20}$/
        };


        (() => {

            const verificarTamanos = () => {
                for (var e, s = 0; e = inputsUsuarios[s++];) e.value.length >= 50 && swal({
                    icon: "warning",
                    title: "¡Atención!",
                    text: "Ningún campo debe de tener más de 50 letras/carácteres/números",
                    timer: 3e3,
                    closeOnClickOutside: !1,
                    button: !1,
                    closeOnEsc: !1
                })
            };

            window.addEventListener("load", function () {
                var e = document.getElementsByClassName("needs-validation");
                Array.prototype.filter.call(e, function (e) {
                    e.addEventListener("submit", function (t) {
                        !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
                    }, !1)
                })
            }, !1);
            inputs__Vacios.forEach(e => e.addEventListener("keyup", e => {
                ((e, t) => {
                    t.test(e.value.trim()) ? e.className = "valido" : e.className = "invalido"
                })(e.target, inputs__Regexs[e.target.attributes.name.value.trim()])
            })), inputsUsuarios.forEach(e => {
                e.addEventListener("keyup", verificarTamanos)
            })
        })()
    })
}();