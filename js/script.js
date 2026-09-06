const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("open");

        const isOpen =
            mainNav.classList.contains("open");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuToggle.innerHTML =
            isOpen
                ? '<i data-lucide="x"></i>'
                : '<i data-lucide="menu"></i>';


        lucide.createIcons();

    });


    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.innerHTML =
                    '<i data-lucide="menu"></i>';


                lucide.createIcons();

            });

        });

}


/* CLOSE MOBILE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", event => {

    if (!mainNav || !menuToggle) {
        return;
    }


    const clickedInsideNav =
        mainNav.contains(event.target);


    const clickedToggle =
        menuToggle.contains(event.target);


    if (
        !clickedInsideNav &&
        !clickedToggle
    ) {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.innerHTML =
            '<i data-lucide="menu"></i>';


        lucide.createIcons();

    }

});


/* RESET MENU WHEN RETURNING TO DESKTOP */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 960 &&
        mainNav &&
        menuToggle
    ) {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.innerHTML =
            '<i data-lucide="menu"></i>';


        lucide.createIcons();

    }

});
