document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     ELEMENTS
  ===================================== */

  const moonBackground =
    document.getElementById("moonBackground");

  const moonMusic =
    document.getElementById("moonMusic");

  const memorySection =
    document.getElementById("memorySection");

  const memoryGrid =
    document.getElementById("memoryGrid");

  const memoryProgressText =
    document.getElementById("memoryProgressText");

  const memoryDots =
    document.querySelector(".memory-dots");

  const storyModal =
    document.getElementById("storyModal");

  const storyPhoto =
    document.getElementById("storyPhoto");

  const storyNumber =
    document.getElementById("storyNumber");

  const storyTitle =
    document.getElementById("storyTitle");

  const storyText =
    document.getElementById("storyText");

  const storyDone =
    document.getElementById("storyDone");

  const storyBackdrop =
    document.getElementById("storyBackdrop");

  const letterGate =
    document.getElementById("letterGate");

  const openLetter =
    document.getElementById("openLetter");

  const editStage =
    document.getElementById("editStage");

  const untilEdit =
    document.getElementById("untilEdit");


  /* =====================================
     CONFIG
  ===================================== */

  const TOTAL_MEMORIES = 14;
  const MUSIC_VOLUME = 0.10;


  /* =====================================
     MEMORIES
  ===================================== */

  const memories = [

    {
      image: "../assets/images/firstouting.jpeg",
      title: "First outing",
      story: "Add the story behind our first outing here.",
      ratio: "45"
    },

    {
      image: "../assets/images/garba-before.jpeg",
      title: "Garba - Day 1",
      story: "Add the story behind this Garba memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/gyaras.jpeg",
      title: "Gyaras",
      story: "Add the story behind our Gyaras memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/kanpur.jpeg",
      title: "Kanpur",
      story: "Add the story behind this Kanpur memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/lastouting.jpeg",
      title: "Last outing",
      story: "Add the story behind this outing here.",
      ratio: "45"
    },

    {
      image: "../assets/images/marathon.jpeg",
      title: "Marathon",
      story: "Add the story behind our marathon memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/movies.jpeg",
      title: "Movies",
      story: "Add the story behind our movie memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/newyear.jpeg",
      title: "New Year",
      story: "Add the story behind our New Year memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/ratlam.jpeg",
      title: "Ratlam",
      story: "Add the story behind our Ratlam memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/ujjain.jpeg",
      title: "Ujjain",
      story: "Add the story behind our Ujjain memory here.",
      ratio: "11"
    },

    {
      image: "../assets/images/idhrudhr.jpeg",
      title: "Idhar Udhar",
      story: "Add the story behind this random little memory here.",
      ratio: "11"
    },

    {
      image: "../assets/images/hanumanji.jpeg",
      title: "Hanumanji",
      story: "Add the story behind this memory here.",
      ratio: "11"
    },

    {
      image: "../assets/images/garba-after.jpeg",
      title: "Garba — Day 2",
      story: "Add the story behind this second Garba memory here.",
      ratio: "45"
    },

    {
      image: "../assets/images/birthdayparty.jpeg",
      title: "Birthday",
      story: "Add the story behind this birthday memory here.",
      ratio: "45"
    }

  ];


  /* =====================================
     MANUAL POLAROID POSITIONING

     Change ONLY these numbers.

     x       = left/right position (%)
     y       = up/down position (%)
     size    = Polaroid width (px)
     hanger  = thread length (px)
     rotate  = Polaroid rotation (deg)

     Each memory is completely independent.
  ===================================== */

  const wallPositions = [

    /* 01 — First outing */
    {
      x: 5,
      y: 40,
      size: 130,
      hanger: 34,
      rotate: -3
    },

    /* 02 — Garba */
    {
      x: 15,
      y: 80,
      size: 134,
      hanger: 102,
      rotate: 2
    },

    /* 03 — Gyaras */
    {
      x: 0,
      y: 100,
      size: 140,
      hanger: 125,
      rotate: -2
    },

    /* 04 — Kanpur */
    {
      x: 27,
      y: 67,
      size: 134,
      hanger: 87,
      rotate: -3
    },

    /* 05 — Last outing */
    {
      x: 41,
      y: 50,
      size: 150,
      hanger: 30,
      rotate: -2
    },

    /* 06 — Marathon */
    {
      x: 30,
      y: 110,
      size: 104,
      hanger: 33,
      rotate: 2
    },

    /* 07 — Movies */
    {
      x: 60,
      y: 41,
      size: 110,
      hanger: 110,
      rotate: -3
    },

    /* 08 — New Year */
    {
      x: 67,
      y: 98,
      size: 134,
      hanger: 200,
      rotate: -5
    },

    /* 09 — Ratlam */
    {
      x: 75,
      y: 8,
      size: 110,
      hanger: 59,
      rotate: -2
    },

    /* 10 — Ujjain */
    {
      x: 78,
      y: 70,
      size: 134,
      hanger: 120,
      rotate: -5
    },

    /* 11 — Idhar Udhar */
    {
      x: 84,
      y: 117,
      size: 110,
      hanger: 8,
      rotate: -2
    },

    /* 12 — Hanumanji */
    {
      x: 89,
      y: 40,
      size: 134,
      hanger: 23,
      rotate: 2
    },

    /* 13 — Garba — one more */
    {
      x: 53,
      y: 85,
      size: 140,
      hanger: 128,
      rotate: -3
    },

    /* 14 — Birthday */
    {
      x: 98,
      y: 80,
      size: 144,
      hanger: 210,
      rotate: 2
    }

  ];


  /* =====================================
     STATE
  ===================================== */

  let openedCount = 0;
  let activeMemoryIndex = null;
  let moonMusicStarted = false;


  /* =====================================
     MOON MUSIC
  ===================================== */

  function setupMoonMusic() {

    if (!moonMusic) {
      return;
    }

    moonMusic.volume = MUSIC_VOLUME;
    moonMusic.loop = true;
    moonMusic.preload = "auto";
  }


  function startMoonMusic() {

    if (
      !moonMusic ||
      moonMusicStarted
    ) {
      return;
    }

    moonMusic.volume = MUSIC_VOLUME;
    moonMusic.loop = true;

    const promise = moonMusic.play();

    if (
      promise &&
      typeof promise.then === "function"
    ) {

      promise
        .then(() => {
          moonMusicStarted = true;
        })
        .catch(() => {
          moonMusicStarted = false;
        });
    }
  }


  function unlockMoonMusic() {

    if (
      !moonMusic ||
      moonMusicStarted
    ) {
      return;
    }

    moonMusic.volume = MUSIC_VOLUME;
    moonMusic.loop = true;

    moonMusic
      .play()
      .then(() => {

        moonMusicStarted = true;

        removeAudioListeners();

      })
      .catch(() => {});
  }


  function removeAudioListeners() {

    document.removeEventListener(
      "pointerdown",
      unlockMoonMusic
    );

    document.removeEventListener(
      "touchstart",
      unlockMoonMusic
    );

    document.removeEventListener(
      "keydown",
      unlockMoonMusic
    );
  }


  document.addEventListener(
    "pointerdown",
    unlockMoonMusic,
    { passive: true }
  );

  document.addEventListener(
    "touchstart",
    unlockMoonMusic,
    { passive: true }
  );

  document.addEventListener(
    "keydown",
    unlockMoonMusic
  );


  setupMoonMusic();


  /* =====================================
     HELPERS
  ===================================== */

  function pad(value) {
    return String(value).padStart(2, "0");
  }


  /* =====================================
     PROGRESS
  ===================================== */

  function buildProgressDots() {

    if (!memoryDots) {
      return;
    }

    memoryDots.innerHTML = "";

    for (
      let i = 0;
      i < TOTAL_MEMORIES;
      i++
    ) {

      const dot =
        document.createElement("span");

      dot.className =
        "memory-dot";

      memoryDots.appendChild(dot);
    }
  }


  function updateProgress() {

    if (memoryProgressText) {

      memoryProgressText.textContent =
        `${openedCount} / ${TOTAL_MEMORIES} memories`;
    }


    const dots =
      document.querySelectorAll(
        ".memory-dot"
      );


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "is-opened",
          index < openedCount
        );

      }
    );
  }


  /* =====================================
     BUILD MEMORY WALL
  ===================================== */

  function buildMemoryGrid() {

    if (!memoryGrid) {
      return;
    }

    memoryGrid.innerHTML = "";


    memories.forEach(
      (memory, index) => {

        const position =
          wallPositions[index];


        if (!position) {
          return;
        }


        const card =
          document.createElement("button");

        card.type =
          "button";

        card.className =
          `memory-polaroid ratio-${memory.ratio}`;

        card.dataset.index =
          String(index);


        /*
         * Convert manual values into CSS units.
         */
        card.style.setProperty(
          "--x",
          `${position.x}%`
        );

        card.style.setProperty(
          "--y",
          `${position.y}%`
        );

        card.style.setProperty(
          "--size",
          `${position.size}px`
        );

        card.style.setProperty(
          "--hanger",
          `${position.hanger}px`
        );

        card.style.setProperty(
          "--tilt",
          `${position.rotate}deg`
        );


        const image =
          document.createElement("img");

        image.className =
          "memory-photo";

        image.src =
          memory.image;

        image.alt =
          memory.title;

        image.loading =
          "lazy";


        image.addEventListener(
          "error",
          () => {

            console.error(
              `Memory image failed: ${memory.image}`
            );

          }
        );


        const caption =
          document.createElement("span");

        caption.className =
          "memory-caption";

        caption.textContent =
          memory.title;


        card.appendChild(image);
        card.appendChild(caption);


        card.addEventListener(
          "click",
          () => {

            startMoonMusic();

            openMemory(index);

          }
        );


        memoryGrid.appendChild(card);

      }
    );
  }


  /* =====================================
     STORY
  ===================================== */

  function openMemory(index) {

    const memory =
      memories[index];

    if (!memory) {
      return;
    }


    activeMemoryIndex =
      index;


    storyPhoto.src =
      memory.image;

    storyPhoto.alt =
      memory.title;

    storyNumber.textContent =
      `MEMORY ${pad(index + 1)}`;

    storyTitle.textContent =
      memory.title;

    storyText.textContent =
      memory.story;


    storyModal.classList.add(
      "is-visible"
    );

    storyModal.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  function finishMemory() {

    if (
      activeMemoryIndex ===
      null
    ) {
      return;
    }


    const cards =
      document.querySelectorAll(
        ".memory-polaroid"
      );


    const currentCard =
      cards[activeMemoryIndex];


    if (
      currentCard &&
      currentCard.dataset.opened !==
        "true"
    ) {

      currentCard.dataset.opened =
        "true";

      currentCard.classList.add(
        "is-opened"
      );

      openedCount =
        Math.min(
          openedCount + 1,
          TOTAL_MEMORIES
        );

      updateProgress();
    }


    storyModal.classList.remove(
      "is-visible"
    );

    storyModal.setAttribute(
      "aria-hidden",
      "true"
    );


    activeMemoryIndex = null;


    if (
      openedCount ===
      TOTAL_MEMORIES
    ) {

      window.setTimeout(
        showLetterGate,
        550
      );
    }
  }


  storyDone?.addEventListener(
    "click",
    finishMemory
  );

  storyBackdrop?.addEventListener(
    "click",
    finishMemory
  );


  /* =====================================
     LETTER
  ===================================== */

  function showLetterGate() {

    memorySection.classList.add(
      "is-hidden"
    );

    letterGate.classList.add(
      "is-visible"
    );

    letterGate.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  openLetter?.addEventListener(
    "click",
    () => {

      letterGate.classList.add(
        "is-opened"
      );

      window.setTimeout(
        startUntilEdit,
        1450
      );
    }
  );


  /* =====================================
     FINAL EDIT
  ===================================== */

  function startUntilEdit() {

    letterGate.classList.remove(
      "is-visible"
    );

    letterGate.setAttribute(
      "aria-hidden",
      "true"
    );


    editStage.classList.add(
      "is-visible"
    );

    editStage.setAttribute(
      "aria-hidden",
      "false"
    );


    if (moonMusic) {
      moonMusic.pause();
    }


    untilEdit.currentTime = 0;


    const promise =
      untilEdit.play();


    if (
      promise &&
      typeof promise.catch === "function"
    ) {

      promise.catch(() => {});
    }
  }


  /* =====================================
     EDIT → ENDING
  ===================================== */

  untilEdit?.addEventListener(
    "ended",
    () => {

      untilEdit.pause();

      document.body.classList.add(
        "harandini-leaving"
      );


      window.setTimeout(
        () => {

          window.location.href =
            "ending.html";

        },
        650
      );
    }
  );


  /* =====================================
     ERRORS
  ===================================== */

  moonBackground?.addEventListener(
    "error",
    () => {

      console.error(
        "moonbg.mp4 could not be loaded."
      );
    }
  );


  moonMusic?.addEventListener(
    "error",
    () => {

      console.error(
        "moon.mp3 could not be loaded."
      );
    }
  );


  untilEdit?.addEventListener(
    "error",
    () => {

      console.error(
        "Untill-Edit.mp4 could not be loaded."
      );
    }
  );


  /* =====================================
     INITIALIZE
  ===================================== */

  buildProgressDots();

  buildMemoryGrid();

  updateProgress();


  moonBackground
    ?.play()
    .catch(() => {});


  startMoonMusic();

});