// Smooth navigation and simple page interaction

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {
                item.style.opacity = "1";
            });

            this.style.opacity = "0.7";
        });

    });

});
