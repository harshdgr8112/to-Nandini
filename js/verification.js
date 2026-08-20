document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       VERIFICATION ELEMENTS
    ========================================= */

    const popup =
        document.getElementById("verificationPopup");

    const popupStep =
        document.getElementById("popupStep");

    const popupIcon =
        document.getElementById("popupIcon");

    const popupTitle =
        document.getElementById("popupTitle");

    const popupText =
        document.getElementById("popupText");

    const popupDetails =
        document.getElementById("popupDetails");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressBar =
        document.getElementById("progressBar");

    const verificationStatus =
        document.getElementById("verificationStatus");


    /* =========================================
       MUSIC
       SAME SONG CONTINUES INTO CAKE
    ========================================= */

    const music =
        document.getElementById("backgroundMusic");


    /* =========================================
       CAKE ELEMENTS
    ========================================= */

    const cakeCelebration =
        document.getElementById("cakeCelebration");

    const cakeLitVideo =
        document.getElementById("cakeLitVideo");

    const cakeBlownVideo =
        document.getElementById("cakeBlownVideo");

    const cakeMessage =
        document.getElementById("cakeMessage");

    const blowCandlesBtn =
        document.getElementById("blowCandlesBtn");

    const cakeComplete =
        document.getElementById("cakeComplete");

    const continueCakeBtn =
        document.getElementById("continueCakeBtn");

    const birthdayGraphic =
        document.getElementById("birthdayGraphic");


    /* =========================================
       RECIPIENT DATA
    ========================================= */

    const recipientNames = [
        {
            name: "Kaju 🥜",
            progress: 6
        },
        {
            name: "Bacchu 🌸",
            progress: 12
        },
        {
            name: "Madam Ji ✨",
            progress: 18
        },
        {
            name: "Cutie Pie 💕",
            progress: 25
        }
    ];


    /* =========================================
       PERSONALITY DATA
    ========================================= */

    const personalities = [
        {
            name: "Caring mode",
            progress: 38
        },
        {
            name: "Calls before goodbye",
            progress: 50
        },
        {
            name: "Chiii bolke sharmana",
            progress: 62
        },
        {
            name: "Madam Ji attitude",
            progress: 72
        },
        {
            name: "Soo jao reminder",
            progress: 82
        }
    ];


    /* =========================================
       SENDER DATA
    ========================================= */

    const senderChecks = [
        {
            name: "Sender label",
            value: "Litchi 🍓",
            progress: 88
        },
        {
            name: "Package label",
            value: "VALID",
            progress: 92
        },
        {
            name: "Delivery route",
            value: "MATCHED",
            progress: 96
        },
        {
            name: "Security seal",
            value: "VERIFIED",
            progress: 100
        }
    ];


    /* =========================================
       HELPERS
    ========================================= */

    const sleep = (ms) =>
        new Promise((resolve) =>
            window.setTimeout(resolve, ms)
        );


    function updateProgress(percent) {

        if (progressPercent) {
            progressPercent.textContent =
                `${percent}%`;
        }

        if (progressBar) {
            progressBar.style.width =
                `${percent}%`;
        }
    }


    function updateStatus(message) {

        if (!verificationStatus) {
            return;
        }

        verificationStatus.textContent =
            message;
    }


    function updatePopup(
        step,
        icon,
        title,
        text
    ) {

        if (popupStep) {
            popupStep.textContent = step;
        }

        if (popupIcon) {
            popupIcon.textContent = icon;
        }

        if (popupTitle) {
            popupTitle.textContent = title;
        }

        if (popupText) {
            popupText.textContent = text;
        }
    }


    async function showItem(
        content,
        percent,
        status
    ) {

        if (!popupDetails) {
            return;
        }

        popupDetails.innerHTML = `
            <div class="popup-row verify-animate">

                <span>${content}</span>

                <strong>${status}</strong>

            </div>
        `;

        await sleep(150);

        updateProgress(percent);

        updateStatus(
            `Checking ${content}...`
        );

        await sleep(850);


        const currentRow =
            popupDetails.firstElementChild;

        if (currentRow) {
            currentRow.classList.add(
                "fade-out"
            );
        }

        await sleep(350);
    }


    /* =========================================
       MUSIC
       DO NOT RESTART DURING CAKE
    ========================================= */

    async function startMusic() {

        if (!music) {
            return;
        }

        try {

            music.volume = 0.35;

            await music.play();

        } catch (error) {

            console.log(
                "Autoplay was blocked by the browser."
            );
        }
    }


    /* =========================================
       CONFETTI
    ========================================= */

    function launchConfetti() {

        const colors = [
            "#ff6b9a",
            "#ffd166",
            "#8ed081",
            "#7cc7ff",
            "#c89bff"
        ];


        for (let i = 0; i < 140; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "confetti-piece";

            piece.style.position = "fixed";
            piece.style.top = "-20px";
            piece.style.left =
                `${Math.random() * 100}%`;

            piece.style.width = "9px";
            piece.style.height = "14px";

            piece.style.zIndex = "9999";

            piece.style.pointerEvents =
                "none";

            piece.style.borderRadius =
                "2px";

            piece.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];

            piece.style.animation =
                "confettiFall 2.2s ease-out forwards";

            piece.style.animationDelay =
                `${Math.random() * 0.35}s`;

            document.body.appendChild(
                piece
            );


            window.setTimeout(() => {
                piece.remove();
            }, 2600);
        }
    }


    /* =========================================
       SHOW CAKE CELEBRATION
    ========================================= */

    function showCakeCelebration() {

        if (!cakeCelebration) {
            return;
        }


        /*
         * 1. Verification disappears FIRST.
         */

        if (popup) {
            popup.hidden = true;
        }


        /*
         * 2. Cake scene appears immediately.
         */

        cakeCelebration.hidden = false;


        /*
         * 3. Reset lit cake.
         */

        if (cakeLitVideo) {

            cakeLitVideo.style.display =
                "block";

            cakeLitVideo.classList.remove(
                "is-hidden"
            );

            cakeLitVideo.muted = true;
            cakeLitVideo.volume = 0;

            cakeLitVideo.currentTime = 0;
        }


        /*
         * 4. Reset blown cake.
         */

        if (cakeBlownVideo) {

            cakeBlownVideo.pause();

            cakeBlownVideo.currentTime = 0;

            cakeBlownVideo.style.display =
                "none";

            cakeBlownVideo.classList.remove(
                "is-visible"
            );

            cakeBlownVideo.muted = true;
            cakeBlownVideo.volume = 0;
        }


        /*
         * 5. Show Kuchupuchu graphic.
         */

        if (birthdayGraphic) {

            birthdayGraphic.hidden = false;

            birthdayGraphic.classList.remove(
                "is-visible"
            );

            requestAnimationFrame(() => {

                birthdayGraphic.classList.add(
                    "is-visible"
                );

            });
        }


        /*
         * 6. Initial message.
         */

        if (cakeMessage) {

            cakeMessage.textContent =
                "Make a wish, Kaju ❤️";
        }


        /*
         * 7. Reset controls.
         */

        if (blowCandlesBtn) {

            blowCandlesBtn.disabled =
                false;
        }


        if (cakeComplete) {

            cakeComplete.hidden =
                true;
        }


        /*
         * 8. Start cake video silently.
         */

        if (cakeLitVideo) {

            cakeLitVideo.play().catch(() => {

                console.log(
                    "Cake video autoplay was blocked."
                );

            });
        }


        /*
         * 9. Confetti AFTER verification
         *    has disappeared.
         */

        launchConfetti();
    }


    /* =========================================
       BLOW CANDLES
    ========================================= */

    function blowCandles() {

        if (
            !cakeLitVideo ||
            !cakeBlownVideo ||
            !blowCandlesBtn
        ) {
            return;
        }


        if (blowCandlesBtn.disabled) {
            return;
        }


        /*
         * Kaju ne candles uda di...
         * ab cake ka second state 😌🎂
         */

        blowCandlesBtn.disabled = true;


        if (cakeMessage) {

            cakeMessage.textContent =
                "💨 Blowing the candles...";
        }


        /*
         * Stop lit cake.
         */

        cakeLitVideo.pause();

        cakeLitVideo.style.display =
            "none";


        /*
         * Show blown cake.
         */

        cakeBlownVideo.style.display =
            "block";

        cakeBlownVideo.classList.add(
            "is-visible"
        );

        cakeBlownVideo.muted = true;
        cakeBlownVideo.volume = 0;

        cakeBlownVideo.currentTime = 0;


        /*
         * Play blown version silently.
         */

        cakeBlownVideo.play().catch(() => {

            console.log(
                "Blown cake video autoplay was blocked."
            );

        });


        /*
         * Wait for the blown-out animation
         * before showing the completion card.
         */

        window.setTimeout(() => {

            if (cakeMessage) {

                cakeMessage.textContent =
                    "Wish made ❤️";
            }


            if (cakeComplete) {

                cakeComplete.hidden =
                    false;
            }

        }, 1200);
    }


    /* =========================================
       CONTINUE TO LETTER
    ========================================= */

    function continueToLetter() {

        /*
         * Cake complete.
         * Ab asli letter incoming ❤️
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
        continueToLetter
    );


    /* =========================================
       VERIFICATION FLOW
    ========================================= */

    async function runVerification() {

        /*
         * Be My Baby starts here and remains
         * the only audible source.
         */

        await startMusic();


        /* -------------------------------------
           START
        ------------------------------------- */

        updateProgress(0);

        updateStatus(
            "Initializing verification..."
        );


        updatePopup(
            "SECURE VERIFICATION",
            "🔐",
            "Verifying package",
            "Please wait while we complete the required checks."
        );


        await sleep(700);


        /* -------------------------------------
           STEP 1 — RECIPIENT
        ------------------------------------- */

        updatePopup(
            "STEP 1 OF 3",
            "🔍",
            "Verifying recipient",
            "Checking recipient details..."
        );


        updateStatus(
            "Searching familiar names..."
        );


        await sleep(400);


        for (const person of recipientNames) {

            await showItem(
                person.name,
                person.progress,
                "MATCHED"
            );
        }


        /* -------------------------------------
           STEP 2 — PERSONALITY
        ------------------------------------- */

        updatePopup(
            "STEP 2 OF 3",
            "🧠",
            "Checking personality",
            "Matching familiar recipient patterns..."
        );


        updateStatus(
            "Matching familiar behaviour..."
        );


        await sleep(500);


        for (const mode of personalities) {

            await showItem(
                mode.name,
                mode.progress,
                "VERIFIED"
            );
        }


        /* -------------------------------------
           STEP 3 — SENDER
        ------------------------------------- */

        updatePopup(
            "STEP 3 OF 3",
            "🏷️",
            "Verifying sender",
            "Checking package and sender information..."
        );


        updateStatus(
            "Checking sender information..."
        );


        await sleep(500);


        /*
         * Litchi reveal gets a proper pause.
         */

        if (popupDetails) {

            popupDetails.innerHTML = `
                <div class="popup-row verify-animate sender-reveal">

                    <span>Sender</span>

                    <strong>Litchi 🍓</strong>

                </div>
            `;
        }


        updateProgress(88);

        updateStatus(
            "Sender identified..."
        );


        await sleep(2200);


        /* -------------------------------------
           REMAINING SENDER CHECKS
        ------------------------------------- */

        await showItem(
            "Package label: VALID",
            92,
            "CHECKED"
        );


        await showItem(
            "Delivery route: MATCHED",
            96,
            "CHECKED"
        );


        await showItem(
            "Security seal: VERIFIED",
            100,
            "CHECKED"
        );


        /* -------------------------------------
           CAKE TRANSITION
        ------------------------------------- */

        updateProgress(100);

        updateStatus(
            "Verification complete."
        );


        /*
         * Tiny buffer so the 100% state
         * registers before the transition.
         */

        await sleep(250);


        /*
         * Verification disappears,
         * then cake + graphic + confetti.
         */

        showCakeCelebration();
    }


    /* =========================================
       START
    ========================================= */

    runVerification();

});