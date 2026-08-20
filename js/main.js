document.addEventListener("DOMContentLoaded", () => {

    const buttonArea = document.getElementById("buttonArea");

    /* =========================================
       ACCEPT DELIVERY
    ========================================= */

    const openDelivery = () => {
        window.location.href = "pages/verification.html";
    };


    /* =========================================
       REJECT BUTTON
    ========================================= */

    const dodgeRejectButton = () => {

        const rejectBtn =
            document.getElementById("rejectBtn");

        if (
            !rejectBtn ||
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }

        const x =
            (Math.random() * 2 - 1) *
            Math.max(65, window.innerWidth * 0.16);

        const y =
            (Math.random() * 2 - 1) *
            Math.max(30, window.innerHeight * 0.08);

        rejectBtn.style.transform =
            `translate(${x}px, ${y}px)`;
    };


    /* =========================================
       DELIVERY OPTIONS
    ========================================= */

    const showButtons = () => {

        buttonArea.innerHTML = `
            <div class="delivery-buttons">

                <button
                    id="acceptBtn"
                    class="button button--accept"
                    type="button"
                >
                    Accept delivery
                </button>

                <button
                    id="rejectBtn"
                    class="button button--reject"
                    type="button"
                >
                    I can't receive this package
                </button>

            </div>
        `;

        const acceptBtn =
            document.getElementById("acceptBtn");

        const rejectBtn =
            document.getElementById("rejectBtn");

        acceptBtn.addEventListener(
            "click",
            openDelivery
        );

        rejectBtn.addEventListener(
            "mouseenter",
            dodgeRejectButton
        );

        rejectBtn.addEventListener(
            "focus",
            dodgeRejectButton
        );

        rejectBtn.addEventListener(
            "click",
            () => {
                window.location.href =
                    "pages/reject.html";
            }
        );
    };


    /* =========================================
       START
    ========================================= */

    showButtons();
});
