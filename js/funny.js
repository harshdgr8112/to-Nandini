document.addEventListener(
    "DOMContentLoaded",
    () => {

        const funnyVideo =
            document.getElementById(
                "funnyVideo"
            );

        if (!funnyVideo) {
            return;
        }

        funnyVideo.currentTime = 0;

        funnyVideo.play().catch(() => {
            console.log(
                "Cutie Pie video autoplay was blocked."
            );
        });


        /* =====================================
           CUTIE PIE VIDEO → CUTENESS PAGE
        ===================================== */

        funnyVideo.addEventListener(
            "ended",
            () => {

                /*
                 * Fade the current stage out.
                 */
                document.body.classList.add(
                    "funny-leaving"
                );


                /*
                 * Move to the Cuteness Analysis
                 * page after the fade.
                 */
                window.setTimeout(() => {

                    window.location.href =
                        "cuteness.html";

                }, 500);

            }
        );

    }
);