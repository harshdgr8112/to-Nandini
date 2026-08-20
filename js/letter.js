document.addEventListener("DOMContentLoaded", () => {

    const envelope =
        document.getElementById("envelope");

    const letterHint =
        document.getElementById("letterHint");

    const letterReveal =
        document.getElementById("letterReveal");


    /* =========================================
       OPEN LETTER
    ========================================= */

    function openLetter() {

        if (
            !envelope ||
            envelope.classList.contains("is-open")
        ) {
            return;
        }

        /*
         * Finally madam ji ne envelope khol hi diya 😌
         */

        envelope.classList.add("is-open");

        if (letterHint) {
            letterHint.textContent =
                "Ek minute... ❤️";
        }


        /*
         * Let the envelope animation breathe
         * before revealing what's inside.
         */

        window.setTimeout(() => {

            if (letterHint) {
                letterHint.textContent =
                    "Tumhare liye kuch likha hai... ❤️";
            }

        }, 900);


        /*
         * Photo + letter reveal
         */

        window.setTimeout(() => {

            if (!letterReveal) {
                return;
            }

            letterReveal.hidden = false;

            // Force the browser to register the reveal
            // so the fade-in animation starts properly.
            requestAnimationFrame(() => {

                letterReveal.classList.add(
                    "is-visible"
                );

            });

        }, 1400);

    }


    /* =========================================
       CLICK
    ========================================= */

    envelope?.addEventListener(
        "click",
        openLetter
    );


    /* =========================================
       KEYBOARD ACCESS
    ========================================= */

    envelope?.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openLetter();

            }

        }
    );

});