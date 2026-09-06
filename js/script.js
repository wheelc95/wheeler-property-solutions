document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    function refreshIcons() {
        if (typeof lucide !== "undefined") lucide.createIcons();
    }

    function setMenu(open) {
        if (!menuToggle || !mainNav) return;
        mainNav.classList.toggle("open", open);
        document.body.classList.toggle("menu-open", open);
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        menuToggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        refreshIcons();
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            setMenu(!mainNav.classList.contains("open"));
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => setMenu(false));
        });

        document.addEventListener("click", (event) => {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 960) setMenu(false);
        });
    }

    const propertyForm = document.getElementById("property-form");
    const submitButton = document.getElementById("submitButton");
    const submitText = document.getElementById("submitText");
    if (propertyForm && submitButton && submitText) {
        propertyForm.addEventListener("submit", () => {
            submitButton.disabled = true;
            submitText.textContent = "Submitting...";
        });
    }

    const contactForm = document.getElementById("contact-form");
    const contactSubmitButton = document.getElementById("contactSubmitButton");
    const contactSubmitText = document.getElementById("contactSubmitText");
    if (contactForm && contactSubmitButton && contactSubmitText) {
        contactForm.addEventListener("submit", () => {
            contactSubmitButton.disabled = true;
            contactSubmitText.textContent = "Sending...";
        });
    }

    refreshIcons();
});
