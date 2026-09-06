document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    function refreshIcons() {

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }

    }


    if (!menuToggle || !mainNav) {
        refreshIcons();
        return;
    }


    function setMenu(open) {

        mainNav.classList.toggle(
            "open",
            open
        );

        menuToggle.setAttribute(
            "aria-expanded",
            open ? "true" : "false"
        );

        menuToggle.innerHTML =
            open
                ? '<i data-lucide="x"></i>'
                : '<i data-lucide="menu"></i>';

        refreshIcons();

    }


    menuToggle.addEventListener(
        "click",
        event => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                mainNav.classList.contains("open");

            setMenu(!isOpen);

        }
    );


    mainNav.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const link =
                event.target.closest("a");

            if (link) {
                setMenu(false);
            }

        }
    );


    document.addEventListener(
        "click",
        () => {

            setMenu(false);

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 960) {
                setMenu(false);
            }

        }
    );


    refreshIcons();

});
