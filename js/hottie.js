document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
     ELEMENTS
  ===================================== */

  const bargadVideo = document.getElementById("bargadVideo");

  const kissBackgroundVideo = document.getElementById("kissBackgroundVideo");

  const kissLayer = document.getElementById("kissLayer");

  const complimentLayer = document.getElementById("complimentLayer");

  const heartUnlock = document.getElementById("heartUnlock");

  const heartProgress = document.getElementById("heartProgress");

  const continueAfterHearts = document.getElementById("continueAfterHearts");

  const postBargadMeme = document.getElementById("postBargadMeme");

  /* =====================================
     STATE
  ===================================== */

  let openedHearts = 0;

  const totalHearts = 12;

  /* =====================================
     ASSETS
  ===================================== */

  const kissImages = [
    "../assets/images/kiss1.png",
    "../assets/images/kiss2.png",
    "../assets/images/kiss3.png",
  ];

  /* =====================================
     HELPERS
  ===================================== */

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  /* =====================================
     KISS PNG
     0 → 7 SECONDS
  ===================================== */

  function createKiss() {
    if (!kissLayer || !bargadVideo) {
      return;
    }

    /*
     * Don't create kisses after
     * the Bargad scene has ended.
     */
    if (bargadVideo.dataset.finished === "true") {
      return;
    }

    const kiss = document.createElement("img");

    kiss.className = "floating-kiss";

    kiss.src = kissImages[Math.floor(Math.random() * kissImages.length)];

    kiss.alt = "";

    /* =====================================
       FIND ACTUAL VISIBLE BARGAD AREA
    ===================================== */

    const rect = bargadVideo.getBoundingClientRect();

    /*
     * Video metadata must exist.
     */
    if (!bargadVideo.videoWidth || !bargadVideo.videoHeight) {
      return;
    }

    const videoRatio = bargadVideo.videoWidth / bargadVideo.videoHeight;

    const boxRatio = rect.width / rect.height;

    let visibleWidth;
    let visibleHeight;
    let visibleLeft;
    let visibleTop;

    /*
     * Because Bargad uses object-fit: contain,
     * calculate the actual visible picture.
     */

    if (boxRatio > videoRatio) {
      visibleHeight = rect.height;

      visibleWidth = visibleHeight * videoRatio;

      visibleLeft = rect.left + (rect.width - visibleWidth) / 2;

      visibleTop = rect.top;
    } else {
      visibleWidth = rect.width;

      visibleHeight = visibleWidth / videoRatio;

      visibleLeft = rect.left;

      visibleTop = rect.top + (rect.height - visibleHeight) / 2;
    }

    /* =====================================
       RANDOM SIZE
    ===================================== */

    const size = randomBetween(45, 120);

    kiss.style.width = `${size}px`;

    /* =====================================
       RANDOM POSITION
       INSIDE BARGAD ONLY
    ===================================== */

    const x = randomBetween(
      visibleLeft,
      Math.max(visibleLeft, visibleLeft + visibleWidth - size),
    );

    const y = randomBetween(
      visibleTop,
      Math.max(visibleTop, visibleTop + visibleHeight - size),
    );

    kiss.style.left = `${x}px`;

    kiss.style.top = `${y}px`;

    /* =====================================
       RANDOM MOVEMENT
    ===================================== */

    kiss.style.setProperty("--kiss-drift", `${randomBetween(-60, 60)}px`);

    kiss.style.setProperty("--kiss-rotation", `${randomBetween(-25, 25)}deg`);

    kiss.style.setProperty("--kiss-duration", `${randomBetween(1.5, 2.5)}s`);

    kissLayer.appendChild(kiss);

    window.setTimeout(() => {
      kiss.remove();
    }, 2700);
  }

  function launchKissesForSevenSeconds() {
    /*
     * Initial burst
     */
    for (let i = 0; i < 5; i++) {
      window.setTimeout(createKiss, i * 120);
    }

    /*
     * Continue spawning
     */
    const interval = window.setInterval(() => {
      createKiss();

      if (Math.random() < 0.5) {
        window.setTimeout(createKiss, 100);
      }
    }, 300);

    /*
     * Stop creating NEW kisses
     * after exactly 7 seconds.
     */
    window.setTimeout(() => {
      window.clearInterval(interval);
    }, 7000);
  }

  /* =====================================
     FLOATING HEARTS
  ===================================== */

  function createFloatingHeart(side) {
    if (!complimentLayer) {
      return null;
    }

    const heart = document.createElement("button");

    heart.type = "button";

    heart.className = "floating-compliment-heart";

    const heartShapes = ["♥", "♡", "💗", "💖", "💕", "❣"];

    heart.textContent =
      heartShapes[Math.floor(Math.random() * heartShapes.length)];

    /*
     * Locked until Bargad ends.
     */
    heart.dataset.opened = "false";

    heart.style.pointerEvents = "none";

    /* =====================================
       RANDOM SIDE POSITION
    ===================================== */

    if (side === "left") {
      heart.style.left = `${randomBetween(2, 25)}%`;
    } else {
      heart.style.left = `${randomBetween(75, 98)}%`;
    }

    heart.style.top = `${randomBetween(5, 92)}%`;

    /* =====================================
       RANDOM SIZE
    ===================================== */

    const heartSize = randomBetween(90, 135);

    heart.style.width = `${heartSize}px`;

    heart.style.height = `${heartSize}px`;

    heart.style.fontSize = `${randomBetween(4.4, 5.6)}rem`;

    heart.style.setProperty("--heart-opacity", `${randomBetween(0.72, 1)}`);

    heart.style.opacity = "var(--heart-opacity)";

    /* =====================================
       RANDOM MOVEMENT
    ===================================== */

    heart.style.setProperty("--heart-x1", `${randomBetween(-120, 120)}px`);

    heart.style.setProperty("--heart-y1", `${randomBetween(-140, 140)}px`);

    heart.style.setProperty("--heart-x2", `${randomBetween(-150, 150)}px`);

    heart.style.setProperty("--heart-y2", `${randomBetween(-160, 160)}px`);

    heart.style.setProperty("--heart-x3", `${randomBetween(-130, 130)}px`);

    heart.style.setProperty("--heart-y3", `${randomBetween(-150, 150)}px`);

    heart.style.setProperty("--heart-x4", `${randomBetween(-160, 160)}px`);

    heart.style.setProperty("--heart-y4", `${randomBetween(-170, 170)}px`);

    heart.style.setProperty("--heart-duration", `${randomBetween(8, 14)}s`);

    /*
     * Random animation phase.
     */
    heart.style.animationDelay = `${randomBetween(-4, 0)}s`;

    complimentLayer.appendChild(heart);

    return heart;
  }

  function createComplimentHearts() {
    if (!complimentLayer) {
      return;
    }

    complimentLayer.innerHTML = "";

    const count = totalHearts;

    for (let i = 0; i < count; i++) {
      createFloatingHeart(i % 2 === 0 ? "left" : "right");
    }
  }

  /* =====================================
     ENABLE HEARTS
  ===================================== */

  function enableComplimentHearts() {
    if (!complimentLayer) {
      return;
    }

    const hearts = complimentLayer.querySelectorAll(
      ".floating-compliment-heart",
    );

    hearts.forEach((heart) => {
      /*
       * Make clickable.
       */
      heart.style.pointerEvents = "auto";

      heart.style.cursor = "pointer";

      /*
       * Don't add the listener twice.
       */
      if (heart.dataset.listenerAdded === "true") {
        return;
      }

      heart.dataset.listenerAdded = "true";

      heart.addEventListener("click", () => {
        /*
         * Already opened?
         */
        if (heart.dataset.opened === "true") {
          return;
        }

        heart.dataset.opened = "true";

        openedHearts++;

        /*
         * Visual opened state.
         */
        heart.classList.add("heart-opened");

        /*
         * Update counter.
         */
        if (heartProgress) {
          heartProgress.textContent = `${openedHearts} / ${totalHearts} hearts opened`;
        }

        /*
         * Final heart opened.
         */
        if (openedHearts >= totalHearts) {
          if (continueAfterHearts) {
            continueAfterHearts.disabled = false;

            continueAfterHearts.textContent = "Okay Kaju, ab aage chalein 👀";
          }
        }
      });
    });
  }

  /* =====================================
     BARGAD FINISH
  ===================================== */
  function finishBargad() {
    if (!bargadVideo || bargadVideo.dataset.finished === "true") {
      return;
    }

    bargadVideo.dataset.finished = "true";

    /* Stop Bargad */
    bargadVideo.pause();

    /* Remove Bargad from center */
    bargadVideo.classList.add("is-finished");

    /* =====================================
     SHOW POST-BARGAD MEME
  ===================================== */

    if (postBargadMeme) {
      console.log("Showing post-Bargad meme");

      postBargadMeme.classList.add("is-visible");

      postBargadMeme.setAttribute("aria-hidden", "false");
    }

    /* =====================================
     HOLD MEME FOR 4 SECONDS
  ===================================== */

    window.setTimeout(() => {
      /* Hide meme */
      if (postBargadMeme) {
        postBargadMeme.classList.remove("is-visible");

        postBargadMeme.setAttribute("aria-hidden", "true");
      }

      /* =====================================
       NOW SHOW HEART INSTRUCTION POPUP
    ===================================== */

      enableComplimentHearts();

      if (heartUnlock) {
        heartUnlock.classList.add("is-visible");

        heartUnlock.setAttribute("aria-hidden", "false");
      }
    }, 4000);
  }
  /* =====================================
     KISSES BACKGROUND
  ===================================== */

  if (kissBackgroundVideo) {
    kissBackgroundVideo.currentTime = 0;

    kissBackgroundVideo.muted = true;

    kissBackgroundVideo.loop = true;

    kissBackgroundVideo.preload = "auto";

    kissBackgroundVideo.playsInline = true;

    kissBackgroundVideo.play().catch(() => {
      console.log("Kiss background autoplay was blocked.");
    });
  }

  /* =====================================
   BARGAD MAIN VIDEO
===================================== */

  if (bargadVideo) {
    bargadVideo.currentTime = 0;

    bargadVideo.preload = "auto";

    bargadVideo.playsInline = true;

    bargadVideo.muted = false;

    bargadVideo.volume = 1;

    /* =====================================
     START KISSES WHEN BARGAD ACTUALLY PLAYS
  ===================================== */

    let kissesStarted = false;

    function startKissesOnce() {
      if (kissesStarted) {
        return;
      }

      kissesStarted = true;

      launchKissesForSevenSeconds();
    }

    /*
     * This fires when Bargad has actually
     * entered playback.
     */
    bargadVideo.addEventListener("playing", startKissesOnce, { once: true });

    /* =====================================
     START BARGAD
  ===================================== */

    bargadVideo.play().catch(() => {
      console.log("Bargad audio autoplay was blocked.");

      /*
       * Retry muted so Bargad still plays.
       */
      bargadVideo.muted = true;

      bargadVideo.play().catch(() => {});
    });

    /* =====================================
     BARGAD ENDS
  ===================================== */

    bargadVideo.addEventListener("ended", finishBargad);

    /* =====================================
     FALLBACK END DETECTION
  ===================================== */

    bargadVideo.addEventListener("timeupdate", () => {
      if (
        bargadVideo.duration &&
        bargadVideo.currentTime >= bargadVideo.duration - 0.15
      ) {
        finishBargad();
      }
    });

    /* =====================================
     HEARTS
  ===================================== */

    createComplimentHearts();
  }

  /* =====================================
     INITIAL COUNTER
  ===================================== */

  if (heartProgress) {
    heartProgress.textContent = `0 / ${totalHearts} hearts opened`;
  }

  /* =====================================
     INITIAL POPUP STATE
  ===================================== */

  if (heartUnlock) {
    heartUnlock.classList.remove("is-visible");

    heartUnlock.setAttribute("aria-hidden", "true");
  }
});
