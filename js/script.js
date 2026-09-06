const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


function refreshIcons() {

    if (
        typeof lucide !== "undefined"
    ) {

        lucide.createIcons();

    }

}


function closeMenu() {

    if (
        !menuToggle ||
        !mainNav
    ) {
        return;
    }


    mainNav.classList.remove("open");


    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    menuToggle.innerHTML =
        '<i data-lucide="menu"></i>';


    refreshIcons();

}


function openMenu() {

    if (
        !menuToggle ||
        !mainNav
    ) {
        return;
    }


    mainNav.classList.add("open");


    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );


    menuToggle.innerHTML =
        '<i data-lucide="x"></i>';


    refreshIcons();

}


if (
    menuToggle &&
    mainNav
) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.contains("open");


            if (isOpen) {

                closeMenu();

            }
            else {

                openMenu();

            }

        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        });

}


/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener(
    "click",
    event => {

        if (
            !mainNav ||
            !menuToggle
        ) {
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

            closeMenu();

        }

    }
);


/* RESET NAV WHEN RETURNING TO DESKTOP */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 960
        ) {

            closeMenu();

        }

    }
);


/* INITIAL ICON RENDER */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        refreshIcons();

    }
);
