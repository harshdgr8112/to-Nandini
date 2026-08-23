document.addEventListener("DOMContentLoaded", () => {
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

  const marjawaMeme = "../assets/images/marijava.jfif";

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  /* =====================================
           CHANGE MEME
        ===================================== */

  async function changeMeme(imagePath) {
    memeContainer.classList.remove("is-visible");

    await wait(300);

    memeImage.src = imagePath;

    await new Promise((resolve) => {
      if (memeImage.complete) {
        resolve();
        return;
      }

      memeImage.onload = resolve;
      memeImage.onerror = resolve;
    });

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

    /* ---------------------------------
       START — 0%
       CAT BRAIN MEME
    --------------------------------- */

    memeImage.src = brainMeme;

    memeContainer.classList.add("is-visible");

    label.textContent =
        "Measuring Kaju's cuteness...";

    status.textContent =
        "Calculating...";

    percent.textContent =
        "0%";

    updateMeter(0);

    await wait(600);


    /* ---------------------------------
       0 → 49%
    --------------------------------- */

    const firstSteps = [
        [10, 500],
        [20, 500],
        [30, 500],
        [40, 500],
        [49, 600],
    ];

    for (const [value, delay] of firstSteps) {
        await updatePercentage(
            value,
            delay
        );
    }


    /* ---------------------------------
       50%
       DARTA MEME
    --------------------------------- */

    await updatePercentage(
        50,
        500
    );

    await changeMeme(
        dartaMeme
    );

    status.textContent =
        "Still calculating...";


    /* ---------------------------------
       50 → 99%
    --------------------------------- */

    const secondSteps = [
        [60, 500],
        [70, 500],
        [80, 500],
        [90, 500],
        [99, 650],
    ];

    for (const [value, delay] of secondSteps) {
        await updatePercentage(
            value,
            delay
        );
    }


    /* ---------------------------------
       100%
       MARJAWA MEME
    --------------------------------- */

    await updatePercentage(
        100,
        500
    );

    label.textContent =
        "Cuteness limit reached.";

    status.textContent =
        "System struggling...";

    await changeMeme(
        marjawaMeme
    );

    /* Hold the 100% moment */
    await wait(1800);


    /* ---------------------------------
       120%
       METER OVERLOAD
    --------------------------------- */

    percent.classList.remove(
        "is-updating"
    );

    void percent.offsetWidth;

    percent.classList.add(
        "is-updating"
    );

    percent.textContent =
        "120%";

    label.textContent =
        "Cuteness analysis complete.";

    status.textContent =
        "Result exceeds normal limits.";


    /*
     * Keep the filled bar itself at 100%.
     */
    updateMeter(100);


    /*
     * Extend the OUTER meter to 120%.
     */
    const progressTrack =
        document.querySelector(
            ".analysis-progress"
        );

    if (progressTrack) {
        progressTrack.classList.add(
            "is-overload"
        );
    }


    /*
     * Give the stretched meter
     * a tiny moment to appear.
     */
    await wait(300);


    /* ---------------------------------
       HEART EXPLOSION
    --------------------------------- */

    if (meterHeart) {

        meterHeart.classList.add(
            "is-overload"
        );
    }


    if (
        typeof launchKisses ===
        "function"
    ) {

        await launchKisses();
    }


    /* ---------------------------------
       NEXT: HEART COMPLIMENTS
    --------------------------------- */

    if (
        typeof showComplimentHearts ===
        "function"
    ) {

        showComplimentHearts();
    }
}

  runAnalysis();
});
