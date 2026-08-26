document.addEventListener("DOMContentLoaded", () => {
  const els = {
    music: document.getElementById("cutenessMusic"),
    memeImage: document.getElementById("analysisMemeImage"),
    memeContainer: document.getElementById("analysisMeme"),
    label: document.getElementById("analysisLabel"),
    percent: document.getElementById("analysisPercent"),
    progress: document.getElementById("analysisProgressBar"),
    status: document.getElementById("analysisStatus"),
    meterHeart: document.getElementById("meterHeart"),
    progressTrack: document.querySelector(".analysis-progress"),
  };

  if (
    !els.memeImage ||
    !els.memeContainer ||
    !els.label ||
    !els.percent ||
    !els.progress ||
    !els.status
  ) {
    return;
  }


  /* =====================================
     CONFIG
  ===================================== */

  const MAX_VALUE = 120;

  const MUSIC_VOLUME = 0.25;

  /*
   * Normal step speed.
   */
  const STEP_DELAY = 550;

  /*
   * Small delay after each meme change.
   */
  const MEME_PAUSE = 500;


  /* =====================================
     MEMES
  ===================================== */

  const memes = {
    brain: "../assets/images/cat-brain-meme.png",
    darta: "../assets/images/darta-meme.jfif",
    gussa: "../assets/images/gussa.png",
    cute: "../assets/images/cute.png",
    hang: "../assets/images/hang.png",
    marjawa: "../assets/images/marijava.jfif",
  };


  /* =====================================
     PRELOAD
  ===================================== */

  Object.values(memes).forEach((src) => {
    const img = new Image();
    img.src = src;
  });


  /* =====================================
     HELPERS
  ===================================== */

  function wait(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  }


  async function changeMeme(src) {
    els.memeImage.src = src;

    if (!els.memeImage.complete) {
      await new Promise((resolve) => {
        els.memeImage.addEventListener(
          "load",
          resolve,
          { once: true }
        );

        els.memeImage.addEventListener(
          "error",
          resolve,
          { once: true }
        );
      });
    }

    els.memeContainer.classList.add(
      "is-visible"
    );

    await wait(MEME_PAUSE);
  }


  /* =====================================
     METER POSITION
  ===================================== */

  /*
   * 0 → 120 actual value
   *
   * 120 = 100% of the visual track.
   */
  function visualProgress(value) {
    const clamped =
      Math.min(
        Math.max(value, 0),
        MAX_VALUE
      );

    return (
      clamped / MAX_VALUE
    ) * 100;
  }


  /* =====================================
     EXPONENTIAL HEART
  ===================================== */

  /*
   * Heart is intentionally larger
   * right from the beginning.
   *
   * Approximate scale:
   *
   * 0%    → 1.05x
   * 25%   → 1.11x
   * 50%   → 1.28x
   * 75%   → 1.62x
   * 80%   → 1.78x
   * 90%   → 2.05x
   * 100%  → 2.45x
   * 105%  → 2.75x
   * 110%  → 3.10x
   * 115%  → 3.50x
   * 120%  → 4.00x
   */
  function exponentialHeartScale(value) {
    const normalized =
      Math.min(
        Math.max(value, 0),
        MAX_VALUE
      ) / MAX_VALUE;

    const exponent = 5;

    const exponential =
      (
        Math.exp(
          exponent * normalized
        ) - 1
      ) /
      (
        Math.exp(exponent) - 1
      );

    return (
      1.05 +
      exponential * 2.95
    );
  }


  /* =====================================
     UPDATE METER
  ===================================== */

  function updateMeter(value) {

    const visual =
      visualProgress(value);


    /*
     * Fill the real meter.
     */
    els.progress.style.width =
      `${visual}%`;


    if (!els.meterHeart) {
      return;
    }


    /*
     * Heart travels with the bar.
     */
    els.meterHeart.style.left =
      `${visual}%`;


    /*
     * Exponential size.
     */
    const scale =
      exponentialHeartScale(value);


    els.meterHeart.style.setProperty(
      "--heart-scale",
      scale.toFixed(3)
    );
  }


  /* =====================================
     PERCENTAGE
  ===================================== */

  async function updatePercentage(
    value,
    delay = STEP_DELAY
  ) {

    els.percent.classList.remove(
      "is-updating"
    );

    void els.percent.offsetWidth;

    els.percent.textContent =
      `${value}%`;

    els.percent.classList.add(
      "is-updating"
    );


    updateMeter(value);


    await wait(delay);
  }


  /* =====================================
     RUN STEPS
  ===================================== */

  async function runSteps(
    values,
    finalDelay = STEP_DELAY
  ) {

    for (
      let i = 0;
      i < values.length;
      i++
    ) {

      const last =
        i === values.length - 1;


      await updatePercentage(
        values[i],
        last
          ? finalDelay
          : STEP_DELAY
      );
    }
  }


  /* =====================================
     MUSIC
  ===================================== */

  function startMusic() {

    if (!els.music) {
      return;
    }

    els.music.currentTime = 0;

    els.music.volume =
      MUSIC_VOLUME;

    els.music
      .play()
      .catch(() => {
        // Autoplay may be blocked.
      });
  }


  /* =====================================
     ANALYSIS
  ===================================== */

  async function runAnalysis() {

    startMusic();


    /* =================================
       INITIAL
    ================================= */

    els.label.textContent =
      "Measuring Kaju's cuteness...";

    els.status.textContent =
      "Calculating...";

    els.percent.textContent =
      "0%";

    updateMeter(0);


    await changeMeme(
      memes.brain
    );

    await wait(800);


    /* =================================
       0 → 25
    ================================= */

    await runSteps(
      [
        5,
        10,
        15,
        20,
        25,
      ],
      650
    );


    /* =================================
       25 → 50
    ================================= */

    await changeMeme(
      memes.darta
    );

    els.status.textContent =
      "Still calculating...";

    await runSteps(
      [
        30,
        35,
        40,
        45,
        50,
      ],
      650
    );


    /* =================================
       50 → 75
    ================================= */

    await changeMeme(
      memes.gussa
    );

    els.status.textContent =
      "Cuteness getting intense...";

    await runSteps(
      [
        55,
        60,
        65,
        70,
        75,
      ],
      650
    );


    /* =================================
       75 → 100
    ================================= */

    await changeMeme(
      memes.cute
    );

    els.status.textContent =
      "System processing...";

    await runSteps(
      [
        80,
        85,
        90,
        95,
        100,
      ],
      800
    );


    /* =================================
       100 → 120
       OVERLOAD
    ================================= */

    await changeMeme(
      memes.hang
    );

    els.label.textContent =
      "Cuteness limit reached.";

    els.status.textContent =
      "SYSTEM HANG...";


    await runSteps(
      [
        105,
        110,
        115,
        120,
      ],
      900
    );


    /* =================================
       120%
       FINAL RESULT
    ================================= */

    els.label.textContent =
      "Cuteness analysis complete.";

    els.status.textContent =
      "Result exceeds normal limits.";


    await changeMeme(
      memes.marjawa
    );


    /*
     * 120 is now genuinely reached.
     */
    els.progressTrack?.classList.add(
      "is-overload"
    );


    await wait(250);


    /*
     * EXPLODE THE HEART
     */
    els.meterHeart?.classList.add(
      "is-overload"
    );


    await wait(1300);


    /* =================================
       TRANSITION
    ================================= */

    document.body.classList.add(
      "love-transition"
    );


    await wait(1200);


    window.location.href =
      "hottie.html";
  }


  /* =====================================
     START
  ===================================== */

  runAnalysis();
});