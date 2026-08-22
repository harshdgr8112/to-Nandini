document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       VERIFICATION ELEMENTS
    ========================================= */

  const popup = document.getElementById("verificationPopup");

  const popupStep = document.getElementById("popupStep");

  const popupIcon = document.getElementById("popupIcon");

  const popupTitle = document.getElementById("popupTitle");

  const popupText = document.getElementById("popupText");

  const popupDetails = document.getElementById("popupDetails");

  const progressPercent = document.getElementById("progressPercent");

  const progressBar = document.getElementById("progressBar");

  const verificationStatus = document.getElementById("verificationStatus");

  /* =========================================
       MUSIC
       SAME SONG CONTINUES INTO CAKE
    ========================================= */

  const music = document.getElementById("backgroundMusic");

  /* =========================================
       CAKE ELEMENTS
    ========================================= */

  const cakeCelebration = document.getElementById("cakeCelebration");

  const cakeLitVideo = document.getElementById("cakeLitVideo");

  const cakeBlownVideo = document.getElementById("cakeBlownVideo");

  const cakeMessage = document.getElementById("cakeMessage");

  const blowCandlesBtn = document.getElementById("blowCandlesBtn");

  const cakeComplete = document.getElementById("cakeComplete");

  const continueCakeBtn = document.getElementById("continueCakeBtn");

  const birthdayGraphic = document.getElementById("birthdayGraphic");

  /* =========================================
       RECIPIENT DATA
    ========================================= */

  const recipientNames = [
    {
      name: "Kaju 🥜",
      progress: 6,
    },
    {
      name: "Bacchu 🌸",
      progress: 12,
    },
    {
      name: "Madam Ji ✨",
      progress: 18,
    },
    {
      name: "Cutie Pie 💕",
      progress: 25,
    },
  ];

  /* =========================================
       PERSONALITY DATA
    ========================================= */

  const personalities = [
    {
      name: "Caring mode",
      progress: 38,
    },
    {
      name: "Calls before goodbye",
      progress: 50,
    },
    {
      name: "Chiii bolke sharmana",
      progress: 62,
    },
    {
      name: "Madam Ji attitude",
      progress: 72,
    },
    {
      name: "Soo jao reminder",
      progress: 82,
    },
  ];

  /* =========================================
       SENDER DATA
    ========================================= */

  const senderChecks = [
    {
      name: "Sender label",
      value: "Litchi 🍓",
      progress: 88,
    },
    {
      name: "Package label",
      value: "VALID",
      progress: 92,
    },
    {
      name: "Delivery route",
      value: "MATCHED",
      progress: 96,
    },
    {
      name: "Security seal",
      value: "VERIFIED",
      progress: 100,
    },
  ];

  /* =========================================
       HELPERS
    ========================================= */

  const sleep = (ms) =>
    new Promise((resolve) => window.setTimeout(resolve, ms));

  function updateProgress(percent) {
    if (progressPercent) {
      progressPercent.textContent = `${percent}%`;
    }

    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }
  }

  function updateStatus(message) {
    if (!verificationStatus) {
      return;
    }

    verificationStatus.textContent = message;
  }

  function updatePopup(step, icon, title, text) {
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

  async function showItem(content, percent, status) {
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

    updateStatus(`Checking ${content}...`);

    await sleep(850);

    const currentRow = popupDetails.firstElementChild;

    if (currentRow) {
      currentRow.classList.add("fade-out");
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
      console.log("Autoplay was blocked by the browser.");
    }
  }

  function launchBalloons() {
    const balloons = [
      "../assets/images/balloon-pink.png",
      "../assets/images/balloon-purple.png",
      "../assets/images/balloon-yellow.png",
      "../assets/images/balloon-blue.png",
      "../assets/images/balloon-red.png",
    ];

    const amount = 45;

    for (let i = 0; i < amount; i++) {
      const balloon = document.createElement("img");

      balloon.className = "birthday-balloon";

      balloon.src = balloons[Math.floor(Math.random() * balloons.length)];

      balloon.alt = "";

      balloon.style.width = `${65 + Math.random() * 55}px`;

      balloon.style.left = `${Math.random() * 94}%`;

      balloon.style.setProperty("--rotation", `${-8 + Math.random() * 16}deg`);

      /* Gentle sideways movement while continuously rising */
      const drift = -70 + Math.random() * 140;

      balloon.style.setProperty("--exit-x", `${drift}px`);
      balloon.style.setProperty("--duration", `${3.5 + Math.random() * 1.2}s`);

      balloon.style.setProperty("--delay", `${Math.random() * 1.1}s`);

      document.body.appendChild(balloon);

      const duration = parseFloat(balloon.style.getPropertyValue("--duration"));

      const delay = parseFloat(balloon.style.getPropertyValue("--delay"));

      window.setTimeout(
        () => {
          balloon.remove();
        },
        (duration + delay) * 1000 + 300,
      );
    }
  }

  /* =========================================
       CONFETTI
    ========================================= */

  function launchConfetti() {
    const colors = [
      "#FF2D75", // hot pink
      "#7B2CFF", // vivid purple
      "#00C2A8", // teal
      "#FF6A00", // orange
      "#FFD23F", // gold
      "#E91E63", // pink
      "#3F51FF", // blue
    ];

    const pieces = 280;

    for (let i = 0; i < pieces; i++) {
      const piece = document.createElement("span");

      piece.className = "confetti-piece";

      /*
       * Keep the confetti spread wide.
       * Avoid creating a heavy column directly
       * over the cake.
       */
      const left = Math.random() * 100;

      const width = 5 + Math.random() * 6;

      const height = 8 + Math.random() * 9;

      const drift = -150 + Math.random() * 300;

      const rotation = Math.random() * 720 - 360;

      const delay = Math.random() * 0.35;

      const duration = 2.2 + Math.random() * 0.8;

      piece.style.position = "fixed";

      piece.style.top = "-25px";

      piece.style.left = `${left}%`;

      piece.style.width = `${width}px`;

      piece.style.height = `${height}px`;

      piece.style.zIndex = "9999";

      piece.style.pointerEvents = "none";

      piece.style.borderRadius = `${1 + Math.random() * 2}px`;

      piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.setProperty("--confetti-drift", `${drift}px`);

      piece.style.setProperty("--confetti-rotation", `${rotation}deg`);

      piece.style.animation = `confettiFall ${duration}s ease-out forwards`;

      piece.style.animationDelay = `${delay}s`;

      document.body.appendChild(piece);

      window.setTimeout(
        () => {
          piece.remove();
        },
        (duration + delay) * 1000 + 300,
      );
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
     * Everything transitions together.
     */

    const page = document.querySelector(".verification-page");

    if (page) {
      page.classList.add("is-birthday");
    }

    /* Birthday scene becomes available */
    cakeCelebration.hidden = false;

    requestAnimationFrame(() => {
      cakeCelebration.classList.add("is-visible");
    });

    /* Balloons start at the same moment */
    launchBalloons();

    /*
     * 3. Reset lit cake.
     */

    if (cakeLitVideo) {
      cakeLitVideo.style.display = "block";

      cakeLitVideo.classList.remove("is-hidden");

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

      cakeBlownVideo.style.display = "none";

      cakeBlownVideo.classList.remove("is-visible");

      cakeBlownVideo.muted = true;
      cakeBlownVideo.volume = 0;
    }

    /*
     * 5. Show Kuchupuchu graphic.
     */

    if (birthdayGraphic) {
      birthdayGraphic.hidden = false;

      birthdayGraphic.classList.remove("is-visible");

      requestAnimationFrame(() => {
        birthdayGraphic.classList.add("is-visible");
      });
    }

    /*
     * 6. Initial message.
     */

    if (cakeMessage) {
      cakeMessage.textContent = "Make a wish, Kaju ❤️";
    }

    /*
     * 7. Reset controls.
     */

    if (blowCandlesBtn) {
      blowCandlesBtn.disabled = false;
    }

    if (cakeComplete) {
      cakeComplete.hidden = true;
    }

    /*
     * 8. Start cake video silently.
     */

    if (cakeLitVideo) {
      cakeLitVideo.play().catch(() => {
        console.log("Cake video autoplay was blocked.");
      });
    }

    /*
     * 9. Confetti AFTER verification
     *    has disappeared.
     */
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

    blowCandlesBtn.disabled = true;


    /* =====================================
       EVERYTHING STARTS TOGETHER
    ===================================== */

    // Remove "Make a wish, Kaju ❤️"
    if (cakeMessage) {

        cakeMessage.style.opacity = "0";
        cakeMessage.style.pointerEvents = "none";
    }


    // Remove blow button
    blowCandlesBtn.style.opacity = "0";
    blowCandlesBtn.style.pointerEvents = "none";


    // Lit cake OFF
    cakeLitVideo.pause();
    cakeLitVideo.style.display = "none";


    // Blown cake ON
    cakeBlownVideo.style.display = "block";

    cakeBlownVideo.classList.add(
        "is-visible"
    );

    cakeBlownVideo.muted = true;
    cakeBlownVideo.volume = 0;
    cakeBlownVideo.currentTime = 0;

    cakeBlownVideo.play().catch(() => {

        console.log(
            "Blown cake video autoplay was blocked."
        );

    });


    // Confetti starts immediately
    launchConfetti();


    /* =====================================
       SHOW BIRTHDAY CARD
    ===================================== */

    window.setTimeout(() => {

        if (!cakeComplete) {
            return;
        }

        cakeComplete.hidden = false;

        cakeComplete.classList.remove(
            "popup-stage-two"
        );

        cakeComplete.classList.remove(
            "cake-complete-enter"
        );

        /*
         * Force animation restart
         */
        void cakeComplete.offsetWidth;

        cakeComplete.classList.add(
            "cake-complete-enter"
        );

    }, 2400);
}

  /* =========================================
       CONTINUE TO LETTER
    ========================================= */

  function continueCake() {
    const title = document.getElementById("cakeCompleteTitle");

    const text = document.getElementById("cakeCompleteText");

    if (title) {
      title.textContent = "Let's see... 👀";
    }

    if (text) {
      text.textContent = "Let's see ab meri Kaju kitni samajhdaar hui hai 😂";
    }

    if (continueCakeBtn) {
      continueCakeBtn.textContent = "Let's find out 👀";
    }

    /*
     * Only change the popup content here.
     * Do NOT transition yet.
     */

    cakeComplete.classList.remove("cake-complete-enter");

    cakeComplete.classList.remove("popup-stage-two");

    void cakeComplete.offsetWidth;

    cakeComplete.classList.add("popup-stage-two");

    /*
     * Mark that the popup is now on stage 2.
     */

    continueCakeBtn.dataset.stage = "two";
  }

  /* =========================================
       EVENTS
    ========================================= */

  blowCandlesBtn?.addEventListener("click", blowCandles);

  continueCakeBtn?.addEventListener(
    "click",
    () => {

        if (cakeCelebration) {

            cakeCelebration.classList.add(
                "cake-exit"
            );
        }

        window.setTimeout(() => {

            window.location.href =
                "funny.html";

        }, 800);
    }
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

    updateStatus("Initializing verification...");

    updatePopup(
      "SECURE VERIFICATION",
      "🔐",
      "Verifying package",
      "Please wait while we complete the required checks.",
    );

    await sleep(700);

    /* -------------------------------------
           STEP 1 — RECIPIENT
        ------------------------------------- */

    updatePopup(
      "STEP 1 OF 3",
      "🔍",
      "Verifying recipient",
      "Checking recipient details...",
    );

    updateStatus("Searching familiar names...");

    await sleep(400);

    for (const person of recipientNames) {
      await showItem(person.name, person.progress, "MATCHED");
    }

    /* -------------------------------------
           STEP 2 — PERSONALITY
        ------------------------------------- */

    updatePopup(
      "STEP 2 OF 3",
      "🧠",
      "Checking personality",
      "Matching familiar recipient patterns...",
    );

    updateStatus("Matching familiar behaviour...");

    await sleep(500);

    for (const mode of personalities) {
      await showItem(mode.name, mode.progress, "VERIFIED");
    }

    /* -------------------------------------
           STEP 3 — SENDER
        ------------------------------------- */

    updatePopup(
      "STEP 3 OF 3",
      "🏷️",
      "Verifying sender",
      "Checking package and sender information...",
    );

    updateStatus("Checking sender information...");

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

    updateStatus("Sender identified...");

    await sleep(2200);

    /* -------------------------------------
           REMAINING SENDER CHECKS
        ------------------------------------- */

    await showItem("Package label: VALID", 92, "CHECKED");

    await showItem("Delivery route: MATCHED", 96, "CHECKED");

    await showItem("Security seal: VERIFIED", 100, "CHECKED");

    /* -------------------------------------
           CAKE TRANSITION
        ------------------------------------- */

    updateProgress(100);

    updateStatus("Verification complete.");

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
