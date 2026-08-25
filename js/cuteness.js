document.addEventListener("DOMContentLoaded", () => {
  const cutenessMusic = document.getElementById("cutenessMusic");

  const memeImage = document.getElementById("analysisMemeImage");

  const memeContainer = document.getElementById("analysisMeme");

  const label = document.getElementById("analysisLabel");

  const percent = document.getElementById("analysisPercent");

  const progress = document.getElementById("analysisProgressBar");

  const status = document.getElementById("analysisStatus");

  const meterHeart = document.getElementById("meterHeart");

  if (!memeImage || !memeContainer || !label || !percent || !progress) {
    return;
  }

  const brainMeme = "../assets/images/cat-brain-meme.png";

  const dartaMeme = "../assets/images/darta-meme.jfif";

  const gussaMeme = "../assets/images/gussa.png";

  const cuteMeme = "../assets/images/cute.png";

  const systemHangMeme = "../assets/images/hang.png";

  const marjawaMeme = "../assets/images/marijava.jfif";

  const memeImages = [
    brainMeme,
    dartaMeme,
    gussaMeme,
    cuteMeme,
    systemHangMeme,
    marjawaMeme,
  ];

  memeImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  /* =====================================
           CHANGE MEME
        ===================================== */

  async function changeMeme(imagePath) {
    /*
     * Change the image in place.
     * No hide → wait → show cycle.
     */
    memeImage.src = imagePath;

    /*
     * Make sure the image is loaded before continuing.
     */
    if (!memeImage.complete) {
      await new Promise((resolve) => {
        memeImage.onload = resolve;
        memeImage.onerror = resolve;
      });
    }

    memeContainer.classList.add("is-visible");
  }

  function updateMeter(value) {
    const clamped = Math.min(value, 100);

    /* Fill the bar */
    progress.style.width = `${clamped}%`;

    /* Move travelling heart */
    if (meterHeart) {
      meterHeart.style.left = `${clamped}%`;

      /*
       * Heart grows with progress.
       *
       * 0%   = 0.75
       * 50%  = 1.20
       * 100% = 1.65
       */
      const scale = 1 + clamped / 100;

      meterHeart.style.setProperty("--heart-scale", scale);
    }
  }

  /* =====================================
           PERCENTAGE UPDATE
        ===================================== */

  async function updatePercentage(value, delay) {
    percent.classList.remove("is-updating");

    /*
     * Force animation restart
     */
    void percent.offsetWidth;

    percent.classList.add("is-updating");

    percent.textContent = `${value}%`;

    /*
     * Bar cannot visually exceed 100%.
     * 120% is represented by the number.
     */
    updateMeter(value);

    await wait(delay);
  }

  /* =====================================
           ANALYSIS
        ===================================== */

  async function runAnalysis() {
    if (cutenessMusic) {
      cutenessMusic.currentTime = 0;
      cutenessMusic.volume = 0.25;

      cutenessMusic.play().catch(() => {
        console.log("Cuteness music autoplay was blocked.");
      });
    }
    /* =================================
       0–25%
       CAT BRAIN
    ================================= */

    memeImage.src = brainMeme;

    memeContainer.classList.add("is-visible");

    label.textContent = "Measuring Kaju's cuteness...";

    status.textContent = "Calculating...";

    percent.textContent = "0%";

    updateMeter(0);

    await wait(1500);

    const firstSteps = [
      [5, 1100],
      [10, 1100],
      [15, 1100],
      [20, 1100],
      [25, 1400],
    ];

    for (const [value, delay] of firstSteps) {
      await updatePercentage(value, delay);
    }

    /* =================================
       25–50%
       DARTA
    ================================= */

    await changeMeme(dartaMeme);

    status.textContent = "Still calculating...";

    await wait(1000);

    const secondSteps = [
      [30, 1100],
      [35, 1100],
      [40, 1100],
      [45, 1100],
      [50, 1400],
    ];

    for (const [value, delay] of secondSteps) {
      await updatePercentage(value, delay);
    }

    /* =================================
       50–75%
       GUSSA
    ================================= */

    await changeMeme(gussaMeme);

    status.textContent = "Cuteness getting intense...";

    await wait(1000);

    const thirdSteps = [
      [55, 1100],
      [60, 1100],
      [65, 1100],
      [70, 1100],
      [75, 1400],
    ];
    for (const [value, delay] of thirdSteps) {
      await updatePercentage(value, delay);
    }

    /* =================================
       75–100%
       CUTE
    ================================= */

    await changeMeme(cuteMeme);

    status.textContent = "System processing...";

    await wait(1000);

    const fourthSteps = [
      [80, 1100],
      [85, 1100],
      [90, 1100],
      [95, 1100],
      [100, 1600],
    ];

    for (const [value, delay] of fourthSteps) {
      await updatePercentage(value, delay);
    }

    /* =================================
       100–120%
       SYSTEM HANG
    ================================= */

    await changeMeme(systemHangMeme);

    label.textContent = "Cuteness limit reached.";

    status.textContent = "SYSTEM HANG...";

    await wait(1200);

    const overloadSteps = [
      [105, 1200],
      [110, 1200],
      [115, 1200],
      [120, 1800],
    ];

    for (const [value, delay] of overloadSteps) {
      await updatePercentage(value, delay);
    }

    /* =================================
       120%
       MARJAWA
    ================================= */

    percent.classList.remove("is-updating");

    void percent.offsetWidth;

    percent.classList.add("is-updating");

    percent.textContent = "120%";

    label.textContent = "Cuteness analysis complete.";

    status.textContent = "Result exceeds normal limits.";

    /*
     * Switch directly to Marjawa.
     * No fade-out.
     */
    await changeMeme(marjawaMeme);

    /* Extend meter */
    const progressTrack = document.querySelector(".analysis-progress");

    if (progressTrack) {
      progressTrack.classList.add("is-overload");
    }

    await wait(700);

    /* Heart explosion */
    if (meterHeart) {
      meterHeart.classList.add("is-overload");
    }

    await wait(1200);

    /* Transition out */
    document.body.classList.add("love-transition");

    await wait(1200);

    window.location.href = "hottie.html";
  }

  runAnalysis();
});
