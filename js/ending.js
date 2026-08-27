document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     ELEMENTS
  ===================================== */

  const fakeEnding =
    document.getElementById("fakeEnding");

  const countdownScene =
    document.getElementById("countdownScene");

  const passcodeScene =
    document.getElementById("passcodeScene");

  const finalReveal =
    document.getElementById("finalReveal");

  const countdownDays =
    document.getElementById("countdownDays");

  const countdownHours =
    document.getElementById("countdownHours");

  const countdownMinutes =
    document.getElementById("countdownMinutes");

  const countdownSeconds =
    document.getElementById("countdownSeconds");

  const springMusic =
    document.getElementById("springMusic");

  const passcodeDots =
    document.querySelectorAll(
      "#passcodeDots span"
    );

  const passcodeKeys =
    document.getElementById("passcodeKeys");

  const passcodeMessage =
    document.getElementById("passcodeMessage");


  /* =====================================
     CONFIG
  ===================================== */

  /*
   * Replace with your real passcode.
   */
  const CORRECT_PASSCODE =
    "1409";


  /*
   * Spring teaser length.
   *
   * Increased from 10 seconds
   * to 30 seconds.
   */
  const SPRING_TEASER_SECONDS =
    23;


  /*
   * 14 September 2026
   * 00:00:00 India Standard Time.
   */
  const COUNTDOWN_TARGET =
    new Date(
      "2026-09-14T00:00:00+05:30"
    );


  let enteredCode =
    "";

  let countdownFinished =
    false;

  let springStopTimer =
    null;


  /* =====================================
     HELPERS
  ===================================== */

  function wait(ms) {

    return new Promise(
      (resolve) => {

        window.setTimeout(
          resolve,
          ms
        );

      }
    );

  }


  function showScene(scene) {

    [
      fakeEnding,
      countdownScene,
      passcodeScene,
      finalReveal
    ].forEach(
      (item) => {

        item?.classList.remove(
          "is-active"
        );

      }
    );


    scene?.classList.add(
      "is-active"
    );

  }


  /* =====================================
     SPRING TEASER
  ===================================== */

  function startSpringTeaser() {

    if (!springMusic) {
      return;
    }


    if (
      springStopTimer !== null
    ) {

      window.clearTimeout(
        springStopTimer
      );

    }


    springMusic.pause();

    springMusic.currentTime =
      0;

    springMusic.volume =
      1.5;


    const playPromise =
      springMusic.play();


    if (
      playPromise &&
      typeof playPromise.catch ===
        "function"
    ) {

      playPromise.catch(
        () => {

          /*
           * Autoplay can be blocked.
           * A user interaction later will
           * allow it to start.
           */

        }
      );

    }


    springStopTimer =
      window.setTimeout(
        () => {

          springMusic.pause();

          springMusic.currentTime =
            0;

          springStopTimer =
            null;

        },
        SPRING_TEASER_SECONDS * 1000
      );

  }


  /* =====================================
     COUNTDOWN
  ===================================== */

  function pad(value) {

    return String(value)
      .padStart(2, "0");

  }


  function unlockPasscode() {

    countdownFinished =
      true;


    /*
     * Stop Spring when the
     * countdown unlocks.
     */
    if (springMusic) {

      springMusic.pause();

      springMusic.currentTime =
        0;

    }


    showScene(
      passcodeScene
    );

  }


  function updateCountdown() {

    const now =
      new Date();


    let difference =
      COUNTDOWN_TARGET.getTime() -
      now.getTime();


    /*
     * Countdown is finished.
     */
    if (difference <= 0) {

      difference =
        0;


      countdownDays.textContent =
        "00";

      countdownHours.textContent =
        "00";

      countdownMinutes.textContent =
        "00";

      countdownSeconds.textContent =
        "00";


      if (!countdownFinished) {

        unlockPasscode();

      }

      return;

    }


    const totalSeconds =
      Math.floor(
        difference / 1000
      );


    const days =
      Math.floor(
        totalSeconds / 86400
      );


    const hours =
      Math.floor(
        (totalSeconds % 86400) /
        3600
      );


    const minutes =
      Math.floor(
        (totalSeconds % 3600) /
        60
      );


    const seconds =
      totalSeconds % 60;


    countdownDays.textContent =
      String(days).padStart(
        2,
        "0"
      );


    countdownHours.textContent =
      pad(hours);


    countdownMinutes.textContent =
      pad(minutes);


    countdownSeconds.textContent =
      pad(seconds);

  }


  /* =====================================
     COUNTDOWN LOOP
  ===================================== */

  updateCountdown();


  const countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );


  /* =====================================
     FAKE ENDING → COUNTDOWN
  ===================================== */

  async function runEndingSequence() {

    /*
     * First fake ending.
     */

    showScene(
      fakeEnding
    );


    /*
     * Let the message breathe.
     */

    await wait(5000);


    /*
     * Start the actual countdown.
     */

    showScene(
      countdownScene
    );


    /*
     * Longer Spring teaser.
     */

    startSpringTeaser();

  }


  /* =====================================
     PASSCODE
  ===================================== */

  function updatePasscodeDots() {

    passcodeDots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "is-filled",
          index <
            enteredCode.length
        );

      }
    );

  }


  function showPasscodeMessage(
    message
  ) {

    if (!passcodeMessage) {
      return;
    }


    passcodeMessage.textContent =
      message;


    passcodeMessage.classList.add(
      "is-visible"
    );


    window.setTimeout(
      () => {

        passcodeMessage.classList.remove(
          "is-visible"
        );

      },
      1800
    );

  }


  function handleKey(value) {

    /*
     * Absolutely prevent passcode
     * interaction until midnight.
     */
    if (!countdownFinished) {
      return;
    }


    if (
      enteredCode.length >= 4
    ) {
      return;
    }


    enteredCode +=
      value;


    updatePasscodeDots();


    if (
      enteredCode.length === 4
    ) {

      checkPasscode();

    }

  }


  function handleClear() {

    if (!countdownFinished) {
      return;
    }


    enteredCode =
      "";


    updatePasscodeDots();

  }


  function handleBackspace() {

    if (!countdownFinished) {
      return;
    }


    enteredCode =
      enteredCode.slice(
        0,
        -1
      );


    updatePasscodeDots();

  }


  function checkPasscode() {

    if (
      enteredCode ===
      CORRECT_PASSCODE
    ) {

      showPasscodeMessage(
        "That's my girl ❤️"
      );


      window.setTimeout(
        () => {

          showScene(
            finalReveal
          );

        },
        900
      );


    } else {

      showPasscodeMessage(
        "Hmm... that's not it 😏"
      );


      enteredCode =
        "";


      updatePasscodeDots();

    }

  }


  /* =====================================
     KEYPAD
  ===================================== */

  passcodeKeys?.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          "button"
        );


      if (!button) {
        return;
      }


      const key =
        button.dataset.key;


      const action =
        button.dataset.action;


      if (
        key !== undefined
      ) {

        handleKey(
          key
        );

        return;

      }


      if (
        action ===
        "clear"
      ) {

        handleClear();

        return;

      }


      if (
        action ===
        "back"
      ) {

        handleBackspace();

      }

    }
  );


  /* =====================================
     KEYBOARD
  ===================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        !passcodeScene.classList.contains(
          "is-active"
        )
      ) {

        return;

      }


      if (
        /^[0-9]$/.test(
          event.key
        )
      ) {

        handleKey(
          event.key
        );

        return;

      }


      if (
        event.key ===
        "Backspace"
      ) {

        handleBackspace();

        return;

      }


      if (
        event.key ===
        "Escape"
      ) {

        handleClear();

      }

    }
  );


  /* =====================================
     PAGE VISIBILITY
  ===================================== */

  /*
   * Recalculate immediately when the
   * browser tab becomes active again.
   */
  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        !document.hidden
      ) {

        updateCountdown();

      }

    }
  );


  /* =====================================
     START
  ===================================== */

  runEndingSequence();

});