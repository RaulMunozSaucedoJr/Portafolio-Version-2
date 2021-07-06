! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {

        const navbar = document.querySelector('.navbar');
        window.onscroll = function () {
            var top = window.scrollY;
            top >= 50 ? navbar.classList.add('activa') : navbar.classList.remove('activa');
        }
        /**********************************************************************/
        var counter = document.querySelector(".percent");
        TweenLite.set(counter, {
            xPercent: -5,
            yPercent: -5,
        });
        window.addEventListener("mousemove", moveCounter);

        function moveCounter(e) {
            TweenLite.to(counter, 0.5, {
                x: e.clientX,
                y: e.clientY,
            });
        }

        function progress() {
            var windowScrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var windowHeight = $(window).height();
            var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

            var $bgColor = progress > 99 ? "#FFBD6E" : "#FFBD6E";
            var $textColor = progress > 99 ? "#FFBD6E" : "#2b2b2b";

            $("h3")
                .text(Math.round(progress) + "%")
                .css({
                    color: $textColor
                });

            $(".fill")
                .height(progress + "%")
                .css({
                    backgroundColor: $bgColor
                });
        }
        progress();
        $(document).on("scroll", progress);
        /**********************************************************************/
        let elements = document.querySelectorAll('.rolling-text');
        elements.forEach(element => {
            let innerText = element.innerText;
            element.innerHTML = '';

            let textContainer = document.createElement('div');
            textContainer.classList.add('block');

            for (let letter of innerText) {
                let span = document.createElement('span');
                span.innerText = letter.trim() === '' ? '\xa0' : letter;
                span.classList.add('letter');
                textContainer.appendChild(span);
            }

            element.appendChild(textContainer);
            element.appendChild(textContainer.cloneNode(true));
        });
        /**********************************************************************/
        const circleText = document.querySelector("svg");
        window.addEventListener("scroll", () => {
            const scrolled = window.pageYOffset;
            const rotate = scrolled * 0.8;
            circleText.style.transform = `rotate(${rotate}deg)`;
        });

        /**********************************************************************/
        AOS.init();
        /**********************************************************************/



    });
}();