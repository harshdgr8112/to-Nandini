document.addEventListener("DOMContentLoaded", () => {

    const cake =
        document.getElementById("cake");

    const blowCandlesBtn =
        document.getElementById("blowCandlesBtn");

    const cakeMessage =
        document.getElementById("cakeMessage");

    const cakeComplete =
        document.getElementById("cakeComplete");

    const continueCakeBtn =
        document.getElementById("continueCakeBtn");

    const candles =
        document.querySelectorAll(".candle");

  


    /* =========================================
       BLOW CANDLES
    ========================================= */

    function blowCandles() {

        if (
            !blowCandlesBtn ||
            blowCandlesBtn.disabled
        ) {
            return;
        }

        /*
         * Finally madam ji...
         * Ab wish bhi kar lo 😌🎂
         */

        blowCandlesBtn.disabled = true;

        if (cakeMessage) {
            cakeMessage.textContent =
                "Blowing candles... 💨";
        }


        /* -------------------------------------
           Candle flames disappear
        ------------------------------------- */

        candles.forEach((candle, index) => {

            window.setTimeout(() => {

                const flame =
                    candle.querySelector(".flame");

                if (flame) {
                    flame.classList.add(
                        "flame-out"
                    );
                }

                addSmoke(candle);

            }, index * 140);

        });


        /* -------------------------------------
           Animals react
        ------------------------------------- */

        window.setTimeout(() => {

        }, 850);


        /* -------------------------------------
           Wish complete
        ------------------------------------- */

        window.setTimeout(() => {

            if (cakeMessage) {
                cakeMessage.textContent =
                    "Wish made ❤️";
            }

            if (cakeComplete) {

                cakeComplete.hidden =
                    false;
            }

        }, 1300);
    }


    /* =========================================
       SMOKE
    ========================================= */

    function addSmoke(candle) {

        const smoke =
            document.createElement("span");

        smoke.className =
            "candle-smoke";

        candle.appendChild(smoke);

        window.setTimeout(() => {
            smoke.remove();
        }, 1400);
    }


    /* =========================================
       CONTINUE
    ========================================= */

    function continueBirthday() {

        /*
         * Wish complete.
         * Ab asli emotional damage incoming. 😌❤️
         */

        window.location.href =
            "letter.html";
    }


    /* =========================================
       EVENTS
    ========================================= */

    blowCandlesBtn?.addEventListener(
        "click",
        blowCandles
    );

    continueCakeBtn?.addEventListener(
        "click",
        continueBirthday
    );

});