document.addEventListener("DOMContentLoaded", () => {

    const acceptAgainBtn =
        document.getElementById("acceptAgainBtn");

    acceptAgainBtn?.addEventListener("click", () => {

        window.location.href =
            "verification.html";

    });

});