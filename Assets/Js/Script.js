! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelector(".navbar");
        window.onscroll = function () {
            window.scrollY >= 50 ? e.classList.add("activa") : e.classList.remove("activa")
        };
        var t = document.querySelector(".percent");

        function n() {
            var e = $(window).scrollTop() / ($(document).height() - $(window).height()) * 100,
                t = e > 99 ? "#FFBD6E" : "#2b2b2b";
            $("h3").text(Math.round(e) + "%").css({
                color: t
            }), $(".fill").height(e + "%").css({
                backgroundColor: "#FFBD6E"
            })
        }
        TweenLite.set(t, {
            xPercent: -5,
            yPercent: -5
        }), window.addEventListener("mousemove", function (e) {
            TweenLite.to(t, .5, {
                x: e.clientX,
                y: e.clientY
            })
        }), n(), $(document).on("scroll", n), document.querySelectorAll(".rolling-text").forEach(e => {
            let t = e.innerText;
            e.innerHTML = "";
            let n = document.createElement("div");
            n.classList.add("block");
            for (let e of t) {
                let t = document.createElement("span");
                t.innerText = "" === e.trim() ? " " : e, t.classList.add("letter"), n.appendChild(t)
            }
            e.appendChild(n), e.appendChild(n.cloneNode(!0))
        })
    })
}();