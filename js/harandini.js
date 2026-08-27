document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
     ELEMENTS
  ===================================== */

  const moonBackground = document.getElementById("moonBackground");

  const moonMusic = document.getElementById("moonMusic");

  const memorySection = document.getElementById("memorySection");

  const memoryGrid = document.getElementById("memoryGrid");

  const memoryProgressText = document.getElementById("memoryProgressText");

  const memoryDots = document.querySelector(".memory-dots");

  const storyModal = document.getElementById("storyModal");

  const storyPhoto = document.getElementById("storyPhoto");

  const storyNumber = document.getElementById("storyNumber");

  const storyTitle = document.getElementById("storyTitle");

  const storyText = document.getElementById("storyText");

  const storyDone = document.getElementById("storyDone");

  const storyBackdrop = document.getElementById("storyBackdrop");

  const letterGate = document.getElementById("letterGate");

  const letterBox = document.getElementById("letterBox");

  const letterClosed = document.getElementById("letterClosed");

  const letterOpen = document.getElementById("letterOpen");

  const openLetter = document.getElementById("openLetter");

  const editStage = document.getElementById("editStage");

  const untilEdit = document.getElementById("untilEdit");

  const birthdayLetterContent = document.getElementById(
    "birthdayLetterContent",
  );

  const birthdayLastThing = document.getElementById("birthdayLastThing");

  const letterVolumeBtn = document.getElementById("letterVolumeBtn");

  /* =====================================
     CONFIG
  ===================================== */

  const TOTAL_MEMORIES = 14;

  const MUSIC_VOLUME = 0.8;

  /* =====================================
     MEMORIES
  ===================================== */

  const memories = [
    {
      image: "../assets/images/firstouting.jpeg",

      title: "First outing",

      story:
        "This is our first day, when we meet eachother as a couple , pheli baar you made something for me , or apne haath se khilaya bhi tha , wo dal chawal or or mirchi with lal mirchi ka achar aaj bhi muh m pani le aata h",

      ratio: "45",
    },

    {
      image: "../assets/images/garba-before.jpeg",

      title: "Garba - Day 1",

      story:
        "Oho garba night, kese bhul sakte h , phele din, ky lg rhe the dono ,or ap toh madam hotness ki dukan lgri thi ,apn poch gye the or vo log aaye nhi or m unke intezar m time pass krta rha , fir tum gussa hui tumhe manaya or fir uske baad vo chiz pr kabhi tumhe gussa nhi hone diya.",

      ratio: "45",
    },

    {
      image: "../assets/images/Lotus.jpg",

      title: "Lotus Valley",

      story:
        "Ye day was the most relaxing and calming , ek din phele apn ne essential oils aagye the toh trail k liye apn ne pura ghr mehka diya tha , vo oil se , ek dusre ki intimate massages , fir agle din subah uth kr yha aana or raste m lotus tod k aapko dena , mere kapde gila hona , fir meko daat khana , or fir waha poch kr mast boating krna or dher sare lotus lena",

      ratio: "45",
    },

    {
      image: "../assets/images/kanpur.jpeg",

      title: "Kanpur",

      story:
        "Tum jb ghar chali gyi thi , fir milna nhi hota tha toh , dono se nhi raha ja rha tha , toh ek din m kanpur hi aagya ,mast bhagam bhag din tha , pr tumhare saath spend hua tha isliye full thakan vasool tha",

      ratio: "45",
    },

    {
      image: "../assets/images/lastouting.jpeg",

      title: "Last outing",

      story:
        "Ye day toh boht jyada miss krta hu m , is din we were thinking kuch krte h , kahi chalte h ,tum bolri thi coffee chalo, toh phele toh pheonix ja rhe the fir idhr hi chale gye, or yha bhi apn ne kitte maze kiye the , last of our many outing together, i miss this so much",

      ratio: "45",
    },

    {
      image: "../assets/images/marathon.jpeg",

      title: "Marathon",

      story:
        "Ye bhi mast day tha , tumhare bank se tumko milne wala tha pr nhi mila or meko tumne dilwa diya tha vo toh bhala h vo admi ka , vo waha bech rha tha , fir marathon wale day , m bhagra fir tum ruk jara fir m age niklra tum ruk jari tumhari halat ekdum kharab hogyi thi fir ghr aake protien pekar chup chap so gye fir bhar khana khane gye the , gazab marathoners h apn 😂",

      ratio: "45",
    },

    {
      image: "../assets/images/movies.jpeg",

      title: "Movies",

      story:
        "One of our movie nights , kitni hi movies saath m dekhi apn ne , first wali yad h meko demon slayer , i was so tired , but tumhare saath mujhe movie dekhni thi , isliye tumko lekr gya or vahi soya 😂, fir ese hi movies ka silsila chalta raha , har movie tumhare saath dekhna meko sabse best experience lgta h",

      ratio: "45",
    },

    {
      image: "../assets/images/newyear.jpeg",

      title: "New Year",

      story:
        "New year, full thakele log or itna sab krna tha 😂 Phele din decide kiya tha tum party dogi, O3 gaye, mast pizza khaya. But tumhare oil ka kuch jyada hi incident ho gaya tha toh tumhe acha nhi lag raha tha, but still I was there, making you feel comfortable... aur hamesha karunga. Phir apan ne khana liya aur uske baad jo hua, uss night ka apna alag hi feel tha. Thake hue the, but tumhare saath hona hi enough tha.",

      ratio: "45",
    },

    {
      image: "../assets/images/ratlam.jpeg",

      title: "Ratlam",

      story:
        "Ye weekend was so much fun ,ratlam jana ekdum out of sudden fir waha rukne ki dikkat, fir waha jese tese tumhara therna fir ghumne jana , fir nadi kinare bakchodi krna , tumhe mere friends se Milana or fir vo nightout and sari bakchodi , waha ki fir apne rooms m sex sux , mera toh ek tarike se dream come true tha friends bhi or meri babyy bhi , fir agle din apna bahar khana khana , tumhe dal bafle khilana tumhare saath hi fir wapas indore aajana , Boht hi mast experience tha",

      ratio: "45",
    },

    {
      image: "../assets/images/ujjain.jpeg",

      title: "Ujjain",

      story:
        "Ujjain jana bhi apna kbse chalra pr jb tk bulawa nhi aata tb tk ni ja skte , ek saath pheli out of station trip bike se , Boht hi jyada mazedar tha , vaha phele bhairav baba k darshan krna fir mahakal baba k tumahare saath , fir aate hue late hojana or andhere m gaadi chala boht hi daring experience tha ,or tumhara bakchodi krna kuch bhi taki m jaga rahu can't imagine how much I was happy",

      ratio: "11",
    },

    {
      image: "../assets/images/idhrudhr.jpeg",

      title: "Idhar Udhar",

      story:
        "Ye toh apna roz ka ek hissa, mera tumhe pickup krna , or fir late aana fir tumhe mera datna fir mera mana or fir kahi chatorne nikal jana , tumhe pg drop krna sabse bad experience hota tha mera mera bas chalta tha toh m pura time tumse hi chipak k rahu , or fir apn ko ye dur ka ana jana algpn hatane k liye saath room le hi liya tha",

      ratio: "11",
    },

    {
      image: "../assets/images/hanumanji.jpeg",

      title: "Hanumanji",

      story:
        "Hanuman ji , meko mere exam ki boht tension chal rhi thi , tum mujhe calm krna chah rhi thi tumne bola yha chalte h fir mene bola chalo , mast maza aaye the is din mast darshan hue , mast thandi m photos liye the ,pass hi m airport bhi tha , jisse m tumhe laya tha ekdin raat ko , tumhare saath thoda sa time spend krne k liye bhi , mene nhi choda or aagya tha lene",

      ratio: "11",
    },

    {
      image: "../assets/images/garba-after.jpeg",

      title: "Garba - Day 2",

      story:
        "Garba day 2 yaad hi hoga sb log time se aagye is baar or shitiz or agrim dono the btao , phele thoda halka halka warmup apn ne shitiz and gang k saath kiya fir , apn agrim nivi k pass gye the unki family k saath kiya , vo first time tha jb i got to know ki kitni energy h tum m and how much i love you , or after an heavy garba night this is us reacting nice fir meri jutti tut gyi thi bina chapal k gye the",

      ratio: "45",
    },

    {
      image: "../assets/images/birthdayparty.jpeg",

      title: "Birthday",

      story:
        "Your surprise... I can't imagine how much you prepared and did. Tumhare saare gifts, the cake, aur tumne mujhe chat par wait karwaya tha jab tak tum pura prepare kar rahi thi. Phir 12 baje tum upar aayi, aur ekdum ussi time the sky was filled with fireworks. We kissed under that sky, side se dhima dhima music aa raha tha... that was an incredible night. Fir uske baad tumhare handwritten notes aur hand-prepared gifts. You made my best birthday ever. ❤️",

      ratio: "45",
    },
  ];

  /* =====================================
     MANUAL POLAROID POSITIONING
  ===================================== */

  const wallPositions = [
    {
      x: 5,
      y: 40,
      size: 130,
      hanger: 34,
      rotate: -3,
    },

    {
      x: 15,
      y: 80,
      size: 134,
      hanger: 102,
      rotate: 2,
    },

    {
      x: 0,
      y: 100,
      size: 140,
      hanger: 125,
      rotate: -2,
    },

    {
      x: 27,
      y: 67,
      size: 134,
      hanger: 87,
      rotate: -3,
    },

    {
      x: 41,
      y: 50,
      size: 150,
      hanger: 30,
      rotate: -2,
    },

    {
      x: 30,
      y: 110,
      size: 104,
      hanger: 33,
      rotate: 2,
    },

    {
      x: 60,
      y: 41,
      size: 110,
      hanger: 110,
      rotate: -3,
    },

    {
      x: 67,
      y: 98,
      size: 134,
      hanger: 200,
      rotate: -5,
    },

    {
      x: 75,
      y: 8,
      size: 110,
      hanger: 59,
      rotate: -2,
    },

    {
      x: 78,
      y: 70,
      size: 134,
      hanger: 120,
      rotate: -5,
    },

    {
      x: 84,
      y: 117,
      size: 110,
      hanger: 8,
      rotate: -2,
    },

    {
      x: 89,
      y: 40,
      size: 134,
      hanger: 23,
      rotate: 2,
    },

    {
      x: 53,
      y: 85,
      size: 140,
      hanger: 128,
      rotate: -3,
    },

    {
      x: 98,
      y: 80,
      size: 144,
      hanger: 210,
      rotate: 2,
    },
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
    if (!moonMusic || moonMusicStarted) {
      return;
    }

    moonMusic.volume = MUSIC_VOLUME;

    moonMusic.loop = true;

    const promise = moonMusic.play();

    if (promise && typeof promise.then === "function") {
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
    if (!moonMusic || moonMusicStarted) {
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
    document.removeEventListener("pointerdown", unlockMoonMusic);

    document.removeEventListener("touchstart", unlockMoonMusic);

    document.removeEventListener("keydown", unlockMoonMusic);
  }

  document.addEventListener("pointerdown", unlockMoonMusic, {
    passive: true,
  });

  document.addEventListener("touchstart", unlockMoonMusic, {
    passive: true,
  });

  document.addEventListener("keydown", unlockMoonMusic);

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

    for (let i = 0; i < TOTAL_MEMORIES; i++) {
      const dot = document.createElement("span");

      dot.className = "memory-dot";

      memoryDots.appendChild(dot);
    }
  }

  function updateProgress() {
    if (memoryProgressText) {
      memoryProgressText.textContent = `${openedCount} / ${TOTAL_MEMORIES} memories`;
    }

    const dots = document.querySelectorAll(".memory-dot");

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-opened", index < openedCount);
    });
  }

  /* =====================================
     BUILD MEMORY WALL
  ===================================== */

  function buildMemoryGrid() {
    if (!memoryGrid) {
      return;
    }

    memoryGrid.innerHTML = "";

    memories.forEach((memory, index) => {
      const position = wallPositions[index];

      if (!position) {
        return;
      }

      const card = document.createElement("button");

      card.type = "button";

      card.className = `memory-polaroid ratio-${memory.ratio}`;

      card.dataset.index = String(index);

      card.style.setProperty("--x", `${position.x}%`);

      card.style.setProperty("--y", `${position.y}%`);

      card.style.setProperty("--size", `${position.size}px`);

      card.style.setProperty("--hanger", `${position.hanger}px`);

      card.style.setProperty("--tilt", `${position.rotate}deg`);

      const image = document.createElement("img");

      image.className = "memory-photo";

      image.src = memory.image;

      image.alt = memory.title;

      image.loading = "lazy";

      image.addEventListener("error", () => {
        console.error(`Memory image failed: ${memory.image}`);
      });

      const caption = document.createElement("span");

      caption.className = "memory-caption";

      caption.textContent = memory.title;

      card.appendChild(image);

      card.appendChild(caption);

      card.addEventListener("click", () => {
        startMoonMusic();

        openMemory(index);
      });

      memoryGrid.appendChild(card);
    });
  }

  /* =====================================
     STORY
  ===================================== */

  function openMemory(index) {
    const memory = memories[index];

    if (!memory) {
      return;
    }

    activeMemoryIndex = index;

    storyPhoto.src = memory.image;

    storyPhoto.alt = memory.title;

    storyNumber.textContent = `MEMORY ${pad(index + 1)}`;

    storyTitle.textContent = memory.title;

    storyText.textContent = memory.story;

    storyModal.classList.add("is-visible");

    storyModal.setAttribute("aria-hidden", "false");
  }

  function finishMemory() {
    if (activeMemoryIndex === null) {
      return;
    }

    const cards = document.querySelectorAll(".memory-polaroid");

    const currentCard = cards[activeMemoryIndex];

    if (currentCard && currentCard.dataset.opened !== "true") {
      currentCard.dataset.opened = "true";

      currentCard.classList.add("is-opened");

      openedCount = Math.min(openedCount + 1, TOTAL_MEMORIES);

      updateProgress();
    }

    storyModal.classList.remove("is-visible");

    storyModal.setAttribute("aria-hidden", "true");

    activeMemoryIndex = null;

    if (openedCount === TOTAL_MEMORIES) {
      window.setTimeout(showLetterGate, 550);
    }
  }

  storyDone?.addEventListener("click", finishMemory);

  storyBackdrop?.addEventListener("click", finishMemory);

  /* =====================================
     LETTER GATE
  ===================================== */

  function showLetterGate() {
    memorySection.classList.add("is-hidden");

    letterGate.classList.remove("is-opening");

    letterGate.setAttribute("aria-hidden", "false");

    letterGate.classList.add("is-visible");
  }

  /* =====================================
     OPEN LETTER
     → SHOW BIRTHDAY LETTER
  ===================================== */

  openLetter?.addEventListener("click", () => {
    startUntilEdit();
  });

  /* =====================================
     OPEN LETTER STAGE
  ===================================== */

  function startUntilEdit() {
    /* -------------------------------------
       Close the letter gate
    ------------------------------------- */

    letterGate.classList.remove("is-visible");

    letterGate.classList.remove("is-opening");

    letterGate.setAttribute("aria-hidden", "true");

    /* -------------------------------------
       Stop moon VIDEO
       Keep moon AUDIO playing
    ------------------------------------- */

    if (moonBackground) {
      moonBackground.pause();

      moonBackground.currentTime = 0;
    }

    /* -------------------------------------
       Show SAME letter canvas
    ------------------------------------- */

    editStage.classList.add("is-visible");

    editStage.setAttribute("aria-hidden", "false");

    /* -------------------------------------
       Hide final edit
    ------------------------------------- */

    if (untilEdit) {
      untilEdit.pause();

      untilEdit.currentTime = 0;

      untilEdit.classList.remove("is-visible");
    }

    /* -------------------------------------
       Show birthday message
    ------------------------------------- */

    if (birthdayLetterContent) {
      birthdayLetterContent.classList.add("is-visible");
    }

    /* -------------------------------------
       Set volume icon correctly
    ------------------------------------- */

    if (letterVolumeBtn) {
      letterVolumeBtn.textContent = moonMusic && !moonMusic.muted ? "🔊" : "🔇";

      letterVolumeBtn.setAttribute(
        "aria-pressed",
        moonMusic?.muted ? "true" : "false",
      );

      letterVolumeBtn.setAttribute(
        "aria-label",
        moonMusic?.muted ? "Unmute music" : "Mute music",
      );
    }
  }

  /* =====================================
     LAST THING
     → FINAL VIDEO
  ===================================== */

  function startFinalUntilEdit() {
    /* -------------------------------------
       Hide birthday message
    ------------------------------------- */

    if (birthdayLetterContent) {
      birthdayLetterContent.classList.remove("is-visible");
    }

    if (letterVolumeBtn) {
      letterVolumeBtn.style.display = "none";
    }

    /* -------------------------------------
       Stop moon AUDIO
    ------------------------------------- */

    if (moonMusic) {
      moonMusic.pause();

      moonMusic.currentTime = 0;
    }

    /* -------------------------------------
       Show video on SAME canvas
    ------------------------------------- */

    if (untilEdit) {
      untilEdit.pause();

      untilEdit.currentTime = 0;

      untilEdit.classList.add("is-visible");

      const playPromise = untilEdit.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          console.log("Until I Found You edit autoplay was blocked.");
        });
      }
    }
  }

  birthdayLastThing?.addEventListener("click", startFinalUntilEdit);

  /* =====================================
     LETTER VOLUME CONTROL
  ===================================== */

  letterVolumeBtn?.addEventListener("click", () => {
    if (!moonMusic) {
      return;
    }

    moonMusic.muted = !moonMusic.muted;

    if (letterVolumeBtn) {
      letterVolumeBtn.textContent = moonMusic.muted ? "🔇" : "🔊";

      letterVolumeBtn.setAttribute(
        "aria-pressed",
        moonMusic.muted ? "true" : "false",
      );

      letterVolumeBtn.setAttribute(
        "aria-label",
        moonMusic.muted ? "Unmute music" : "Mute music",
      );
    }
  });

  /* =====================================
     FINAL EDIT → ENDING
  ===================================== */

  untilEdit?.addEventListener("ended", () => {
    untilEdit.pause();

    document.body.classList.add("harandini-leaving");

    window.setTimeout(() => {
      window.location.href = "ending.html";
    }, 650);
  });

  /* =====================================
     ERRORS
  ===================================== */

  moonBackground?.addEventListener("error", () => {
    console.error("moonbg.mp4 could not be loaded.");
  });

  moonMusic?.addEventListener("error", () => {
    console.error("moon.mp3 could not be loaded.");
  });

  untilEdit?.addEventListener("error", () => {
    console.error("Untill-Edit.mp4 could not be loaded.");
  });

  letterClosed?.addEventListener("error", () => {
    console.error("close.png could not be loaded.");
  });

  letterOpen?.addEventListener("error", () => {
    console.error("open.png could not be loaded.");
  });

  birthdayLetterContent?.addEventListener("error", () => {
    console.error("Birthday letter content error.");
  });

  /* =====================================
     INITIALIZE
  ===================================== */

  buildProgressDots();

  buildMemoryGrid();

  updateProgress();

  moonBackground?.play().catch(() => {});

  startMoonMusic();
});
