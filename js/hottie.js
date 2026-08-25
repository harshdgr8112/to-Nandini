document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     ELEMENTS
  ===================================== */

  const blueMusic =
    document.getElementById("blueMusic");

  const bargadVideo =
    document.getElementById("bargadVideo");

  const kissBackgroundVideo =
    document.getElementById("kissBackgroundVideo");

  const kissLayer =
    document.getElementById("kissLayer");

  const complimentLayer =
    document.getElementById("complimentLayer");

  const postBargadMeme =
    document.getElementById("postBargadMeme");

  const heartUnlock =
    document.getElementById("heartUnlock");

  const heartProgress =
    document.getElementById("heartProgress");


  /* =====================================
     HEART MESSAGE ELEMENTS
  ===================================== */

  const heartMessage =
    document.getElementById("heartMessage");

  const heartMessageCard =
    document.getElementById("heartMessageCard");

  const heartMessageBackground =
    document.getElementById(
      "heartMessageBackground"
    );

  const heartMessageIcon =
    document.getElementById(
      "heartMessageIcon"
    );

  const heartMessageTitle =
    document.getElementById(
      "heartMessageTitle"
    );

  const heartMessageText =
    document.getElementById(
      "heartMessageText"
    );

  const heartMessageDone =
    document.getElementById(
      "heartMessageDone"
    );


  /* =====================================
     FINAL TRANSITION
  ===================================== */

  const usTransition =
    document.getElementById(
      "usTransition"
    );

  const seeUsButton =
    document.getElementById(
      "seeUsButton"
    );


  /* =====================================
     STATE
  ===================================== */

  const totalHearts = 12;

  /*
   * Only the first 11 messages live
   * in the normal message sequence.
   */
  const normalMessageCount = 11;

  let openedHearts = 0;

  let activeHeart = null;

  let activeMessageIndex = null;

  let bargadFinished = false;

  let kissesStarted = false;

  let usTransitionShown = false;


  /* =====================================
     NORMAL MESSAGES — 1 TO 11
  ===================================== */

  const heartMessages = [

    /* 1 */
    {
      title:
        "Tumhare liye mera intention",

      text:
        "Maybe me har baar sahi nahi kar pata, " +
        "par tumhe khush, safe, beautiful aur loved feel karana — " +
        "ye intention kabhi nahi badlega.",

      reply:
        "I know baby 🥺",

      background:
        "../assets/images/8.png",

      theme:
        "heart-theme-soft",

      icon:
        "🥺",

      width:
        500,

      contentClass:
        "heart-layout-1"
    },


    /* 2 */
    {
      title:
        "Tumhari little things",

      text:
        "Sabko shayad tumhari beauty dikhti hogi, " +
        "mujhe tumhari woh little things bhi dikhti hain " +
        "jo tum khud shayad notice nahi karti.",

      reply:
        "Acha ji? 👀",

      background:
        "../assets/images/5.png",

      theme:
        "heart-theme-bows",

      icon:
        "✨",

      width:
        490,

      contentClass:
        "heart-layout-2"
    },


    /* 3 */
    {
      title:
        "Tumhari care",

      text:
        'Tumhara "aaj rest karo", "Volini laga lo", ' +
        '"thande paani se naha lena" — ye chhoti baatein nahi hain. ' +
        "Inhi chhoti baaton mein toh tumhara pyaar dikhta hai.",

      reply:
        "Nahi manogi toh pitti 🥺❤️",

      background:
        "../assets/images/5.png",

      theme:
        "heart-theme-bows",

      icon:
        "🥺",

      width:
        520,

      contentClass:
        "heart-layout-3"
    },


    /* 4 */
    {
      title:
        "My favourite",

      text:
        "The cutie I fell in love with. " +
        "The sexy I am in love with. " +
        "Aur beech mein jo kuch bhi tum ban jaati ho — " +
        "woh sab meri favourite hai.",

      reply:
        "Bas bas, zyada tareef mat karo 😂",

      background:
        "../assets/images/4.png",

      theme:
        "heart-theme-lips",

      icon:
        "😏",

      width:
        530,

      contentClass:
        "heart-layout-4"
    },


    /* 5 */
    {
      title:
        "Tumse baat...",

      text:
        "Tumse baat ho toh din thoda aur accha lagta hai, " +
        "tum muskura do toh sab kuch apna sa lagta hai, " +
        "aur tum paas ho ya door — dil ko bas tumhara hi khayal rehta hai.",

      reply:
        "Mujhe bhi tumse baat karni hai 🌷",

      background:
        "../assets/images/8.png",

      theme:
        "heart-theme-soft",

      icon:
        "🌷",

      width:
        510,

      contentClass:
        "heart-layout-5"
    },


    /* 6 */
    {
      title:
        "Every passing day..",

      text:
        "Every passing day, main tumhe thoda aur miss karta hoon, " +
        "thoda aur cherish karta hoon, " +
        "aur somehow… thoda aur pyaar karta hoon.",

      reply:
        "Itna pyaar? 🥺",

      background:
        "../assets/images/8.png",

      theme:
        "heart-theme-soft",

      icon:
        "💗",

      width:
        505,

      contentClass:
        "heart-layout-6"
    },


    /* 7 */
    {
      title:
        "Still thinking of you",

      text:
        "When I'm out, I think of you. " +
        "When I'm home, I think of you. " +
        "When the world grows quiet… I still think of you.",

      reply:
        "Mujhe pata tha 😌",

      background:
        "../assets/images/4.png",

      theme:
        "heart-theme-lips",

      icon:
        "🌙",

      width:
        515,

      contentClass:
        "heart-layout-7"
    },


    /* 8 */
    {
      title:
        "Beside me",

      text:
        "I want you beside me, " +
        "your arms around me, " +
        "to lose myself in you, " +
        "and find myself there too.",

      reply:
        "Aa jao phir 🫶",

      background:
        "../assets/images/4.png",

      theme:
        "heart-theme-lips",

      icon:
        "🫶",

      width:
        525,

      contentClass:
        "heart-layout-8"
    },


    /* 9 */
    {
      title:
        "Our future",

      text:
        "Pehle Vrindavan. " +
        "Phir ghumi-ghumi. " +
        "Phir aur places. " +
        "Phir naye birthdays. " +
        "Aur har jagah ek hi constant — tum aur main.",

      reply:
        "Done, pakka? 🥺🌸",

      background:
        "../assets/images/3.png",

      theme:
        "heart-theme-sunflower",

      icon:
        "🌻",

      width:
        545,

      contentClass:
        "heart-layout-9"
    },


    /* 10 */
    {
      title:
        "Birthday promise",

      text:
        "Pehla birthday ho ya agla, " +
        "main bas ek cheez chahta hoon — " +
        "sabse pehla wish mera hi milega",

      reply:
        "Haan haan, aap hi wish karna 😎",

      background:
        "../assets/images/3.png",

      theme:
        "heart-theme-sunflower",

      icon:
        "😎",

      width:
        535,

      contentClass:
        "heart-layout-10"
    },


    /* 11 */
    {
      title:
        "My person",

      text:
        "Whenever life hurts, you're the comfort I crave. " +
        "Whenever life smiles, you're the first person I want to celebrate with.",

      reply:
        "Main hamesha hoon 🤍",

      background:
        "../assets/images/8.png",

      theme:
        "heart-theme-soft",

      icon:
        "🤍",

      width:
        525,

      contentClass:
        "heart-layout-11"
    }

  ];


  /* =====================================
     FINAL MESSAGE — HEART #12 ONLY
  ===================================== */

  const finalHeartMessage = {

    title:
      "I miss us",

    text:
      "I miss us. Together.",

    reply:
      "I miss us too 🥺",

    background:
      "../assets/images/8.png",

    theme:
      "heart-theme-soft",

    icon:
      "🥺",

    width:
      450,

    contentClass:
      "heart-layout-12"
  };


  /* =====================================
     FLOATING KISS PNGS
  ===================================== */

  const kissImages = [
    "../assets/images/kiss1.png",
    "../assets/images/kiss2.png",
    "../assets/images/kiss3.png"
  ];


  /* =====================================
     HELPER
  ===================================== */

  function randomBetween(
    min,
    max
  ) {
    return (
      min +
      Math.random() *
      (max - min)
    );
  }


  /* =====================================
     LOAD HEART IMAGE
  ===================================== */

  function loadHeartImage(
    src
  ) {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        if (
          !heartMessageBackground
        ) {

          reject(
            new Error(
              "Heart background element missing."
            )
          );

          return;
        }


        const currentSrc =
          heartMessageBackground
            .getAttribute("src") ||
          "";


        if (
          currentSrc === src &&
          heartMessageBackground.complete &&
          heartMessageBackground.naturalWidth > 0
        ) {

          resolve(
            heartMessageBackground
          );

          return;
        }


        const onLoad = () => {

          cleanup();

          resolve(
            heartMessageBackground
          );
        };


        const onError = () => {

          cleanup();

          reject(
            new Error(
              `Could not load ${src}`
            )
          );
        };


        const cleanup = () => {

          heartMessageBackground
            .removeEventListener(
              "load",
              onLoad
            );

          heartMessageBackground
            .removeEventListener(
              "error",
              onError
            );
        };


        heartMessageBackground
          .addEventListener(
            "load",
            onLoad
          );

        heartMessageBackground
          .addEventListener(
            "error",
            onError
          );


        heartMessageBackground.src =
          src;
      }
    );
  }


  /* =====================================
     CREATE KISS
  ===================================== */

  function createKiss() {

    if (
      !kissLayer ||
      !bargadVideo ||
      bargadFinished
    ) {
      return;
    }


    const kiss =
      document.createElement(
        "img"
      );


    kiss.className =
      "floating-kiss";


    kiss.src =
      kissImages[
        Math.floor(
          Math.random() *
          kissImages.length
        )
      ];


    kiss.alt =
      "";


    const size =
      randomBetween(
        42,
        88
      );


    kiss.style.width =
      `${size}px`;


    kiss.style.left =
      `${randomBetween(
        8,
        92
      )}%`;


    kiss.style.top =
      `${randomBetween(
        7,
        88
      )}%`;


    kiss.style.setProperty(
      "--kiss-drift",
      `${randomBetween(
        -28,
        28
      )}px`
    );


    kiss.style.setProperty(
      "--kiss-rotation",
      `${randomBetween(
        -15,
        15
      )}deg`
    );


    kiss.style.setProperty(
      "--kiss-duration",
      `${randomBetween(
        1.7,
        2.4
      )}s`
    );


    kissLayer.appendChild(
      kiss
    );


    window.setTimeout(
      () => {
        kiss.remove();
      },
      2700
    );
  }


  /* =====================================
     FIRST 7 SECOND KISS SEQUENCE
  ===================================== */

  function launchKissesForSevenSeconds() {

    if (
      !kissLayer ||
      bargadFinished
    ) {
      return;
    }


    for (
      let i = 0;
      i < 6;
      i++
    ) {

      window.setTimeout(
        createKiss,
        i * 120
      );
    }


    const interval =
      window.setInterval(
        () => {

          if (
            bargadFinished
          ) {

            window.clearInterval(
              interval
            );

            return;
          }


          createKiss();


          if (
            Math.random() <
            0.45
          ) {

            window.setTimeout(
              () => {

                if (
                  !bargadFinished
                ) {

                  createKiss();
                }

              },
              100
            );
          }

        },
        300
      );


    window.setTimeout(
      () => {

        window.clearInterval(
          interval
        );

      },
      7000
    );
  }


  /* =====================================
     FLOATING HEARTS
  ===================================== */

  function createFloatingHeart(
    side
  ) {

    if (
      !complimentLayer
    ) {
      return null;
    }


    const heart =
      document.createElement(
        "button"
      );


    heart.type =
      "button";


    heart.className =
      "floating-compliment-heart";


    const heartShapes = [
      "♥",
      "♡",
      "💗",
      "💖",
      "💕",
      "❣"
    ];


    heart.textContent =
      heartShapes[
        Math.floor(
          Math.random() *
          heartShapes.length
        )
      ];


    heart.dataset.opened =
      "false";


    heart.dataset.listenerAdded =
      "false";


    heart.style.pointerEvents =
      "none";


    heart.style.left =
      side === "left"
        ? `${randomBetween(
            2,
            25
          )}%`
        : `${randomBetween(
            75,
            98
          )}%`;


    heart.style.top =
      `${randomBetween(
        5,
        92
      )}%`;


    const heartSize =
      randomBetween(
        90,
        135
      );


    heart.style.width =
      `${heartSize}px`;

    heart.style.height =
      `${heartSize}px`;


    heart.style.fontSize =
      `${randomBetween(
        4.4,
        5.6
      )}rem`;


    heart.style.setProperty(
      "--heart-opacity",
      `${randomBetween(
        0.72,
        1
      )}`
    );


    heart.style.opacity =
      "var(--heart-opacity)";


    heart.style.setProperty(
      "--heart-x1",
      `${randomBetween(
        -120,
        120
      )}px`
    );

    heart.style.setProperty(
      "--heart-y1",
      `${randomBetween(
        -140,
        140
      )}px`
    );

    heart.style.setProperty(
      "--heart-x2",
      `${randomBetween(
        -150,
        150
      )}px`
    );

    heart.style.setProperty(
      "--heart-y2",
      `${randomBetween(
        -160,
        160
      )}px`
    );

    heart.style.setProperty(
      "--heart-x3",
      `${randomBetween(
        -130,
        130
      )}px`
    );

    heart.style.setProperty(
      "--heart-y3",
      `${randomBetween(
        -150,
        150
      )}px`
    );

    heart.style.setProperty(
      "--heart-x4",
      `${randomBetween(
        -160,
        160
      )}px`
    );

    heart.style.setProperty(
      "--heart-y4",
      `${randomBetween(
        -170,
        170
      )}px`
    );

    heart.style.setProperty(
      "--heart-duration",
      `${randomBetween(
        8,
        14
      )}s`
    );


    heart.style.animationDelay =
      `${randomBetween(
        -4,
        0
      )}s`;


    complimentLayer.appendChild(
      heart
    );


    return heart;
  }


  function createComplimentHearts() {

    if (
      !complimentLayer
    ) {
      return;
    }


    complimentLayer.innerHTML =
      "";


    for (
      let i = 0;
      i < totalHearts;
      i++
    ) {

      createFloatingHeart(
        i % 2 === 0
          ? "left"
          : "right"
      );
    }
  }


  /* =====================================
     POSITION HEART MESSAGE
  ===================================== */

  function positionHeartMessage(
    heart
  ) {

    if (
      !heartMessageCard ||
      !heartMessageBackground
    ) {
      return;
    }


    const messageIndex =
      Number(
        heart.dataset.messageIndex
      );


    const message =
      messageIndex ===
      totalHearts - 1
        ? finalHeartMessage
        : heartMessages[
            messageIndex
          ];


    const cardWidth =
      Math.min(
        message?.width || 480,
        window.innerWidth * 0.86
      );


    const naturalWidth =
      heartMessageBackground
        .naturalWidth || 1;


    const naturalHeight =
      heartMessageBackground
        .naturalHeight || 1;


    const ratio =
      naturalHeight /
      naturalWidth;


    const cardHeight =
      cardWidth *
      ratio;


    const rect =
      heart.getBoundingClientRect();


    const heartX =
      rect.left +
      rect.width / 2;


    const heartY =
      rect.top +
      rect.height / 2;


    const halfWidth =
      cardWidth / 2;


    const halfHeight =
      cardHeight / 2;


    let left =
      heartX;

    let top =
      heartY;


    left =
      Math.max(
        halfWidth + 8,
        Math.min(
          window.innerWidth -
            halfWidth -
            8,
          left
        )
      );


    top =
      Math.max(
        halfHeight + 8,
        Math.min(
          window.innerHeight -
            halfHeight -
            8,
          top
        )
      );


    heartMessageCard.style.width =
      `${cardWidth}px`;


    heartMessageCard.style.setProperty(
      "--message-left",
      `${left}px`
    );


    heartMessageCard.style.setProperty(
      "--message-top",
      `${top}px`
    );


    const originX =
      (
        (
          heartX -
          (
            left -
            halfWidth
          )
        ) /
        cardWidth
      ) *
      100;


    const originY =
      (
        (
          heartY -
          (
            top -
            halfHeight
          )
        ) /
        cardHeight
      ) *
      100;


    heartMessageCard.style.setProperty(
      "--message-origin-x",
      `${Math.max(
        0,
        Math.min(
          100,
          originX
        )
      )}%`
    );


    heartMessageCard.style.setProperty(
      "--message-origin-y",
      `${Math.max(
        0,
        Math.min(
          100,
          originY
        )
      )}%`
    );
  }


  /* =====================================
     ENABLE HEARTS
     MESSAGE ORDER IS BASED ON OPEN COUNT
  ===================================== */

  function enableComplimentHearts() {

    if (
      !complimentLayer
    ) {
      return;
    }


    const hearts =
      complimentLayer.querySelectorAll(
        ".floating-compliment-heart"
      );


    hearts.forEach(
      (
        heart
      ) => {

        heart.style.pointerEvents =
          "auto";


        heart.style.cursor =
          "pointer";


        heart.classList.add(
          "is-clickable"
        );


        if (
          heart.dataset.listenerAdded ===
          "true"
        ) {
          return;
        }


        heart.dataset.listenerAdded =
          "true";


        heart.addEventListener(
          "click",
          async (
            event
          ) => {

            event.preventDefault();
            event.stopPropagation();


            if (
              heart.dataset.opened ===
              "true"
            ) {
              return;
            }


            if (
              activeHeart
            ) {
              return;
            }


            /*
             * THIS IS THE KEY:
             *
             * 0 opened -> message 1
             * 1 opened -> message 2
             * ...
             * 10 opened -> message 11
             * 11 opened -> FINAL message
             *
             * Therefore I miss us can ONLY
             * appear after the first 11 hearts
             * have already been completed.
             */
            const messageIndex =
              openedHearts;


            const message =
              messageIndex <
                normalMessageCount
                ? heartMessages[
                    messageIndex
                  ]
                : finalHeartMessage;


            if (
              !message
            ) {
              return;
            }


            /*
             * Store which message this
             * particular active heart opened.
             */
            activeMessageIndex =
              messageIndex;


            heart.dataset.messageIndex =
              String(
                messageIndex
              );


            activeHeart =
              heart;


            try {

              await loadHeartImage(
                message.background
              );

            } catch (error) {

              console.error(
                error
              );

              activeHeart =
                null;

              activeMessageIndex =
                null;

              return;
            }


            heartMessage.className =
              "heart-message";


            heartMessage.classList.add(
              message.theme
            );


            heartMessage.classList.add(
              message.contentClass
            );


            heartMessageIcon.textContent =
              message.icon;


            heartMessageTitle.textContent =
              message.title;


            heartMessageText.textContent =
              message.text;


            heartMessageDone.textContent =
              message.reply;


            requestAnimationFrame(
              () => {

                positionHeartMessage(
                  heart
                );


                heartMessage.classList.add(
                  "is-visible"
                );


                heartMessage.setAttribute(
                  "aria-hidden",
                  "false"
                );
              }
            );
          }
        );
      }
    );
  }


  /* =====================================
     FINAL "WANNA SEE US?" POPUP
  ===================================== */

  function showUsTransition() {

    if (
      !usTransition ||
      usTransitionShown
    ) {
      return;
    }


    /*
     * Absolute safety check:
     * NEVER show this popup before
     * all 12 hearts are completed.
     */
    if (
      openedHearts !== totalHearts
    ) {
      return;
    }


    usTransitionShown =
      true;


    heartMessage?.classList.remove(
      "is-visible"
    );


    heartMessage?.setAttribute(
      "aria-hidden",
      "true"
    );


    usTransition.classList.add(
      "is-visible"
    );


    usTransition.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  /* =====================================
     COMPLETE CURRENT HEART
  ===================================== */

  function closeCurrentHeartMessage() {

    if (
      !activeHeart
    ) {
      return;
    }


    /*
     * Get the message that this heart
     * actually displayed.
     */
    const messageIndex =
      activeMessageIndex;


    /*
     * Mark the physical heart opened.
     */
    if (
      activeHeart.dataset.opened !==
      "true"
    ) {

      activeHeart.dataset.opened =
        "true";


      openedHearts++;


      activeHeart.classList.add(
        "heart-opened"
      );


      const spans =
        heartProgress?.querySelectorAll(
          "span"
        );


      if (
        spans &&
        spans.length >= 2
      ) {

        spans[1].textContent =
          `${openedHearts} / ${totalHearts}`;
      }
    }


    /*
     * Close the current message.
     */
    heartMessage.classList.remove(
      "is-visible"
    );


    heartMessage.setAttribute(
      "aria-hidden",
      "true"
    );


    activeHeart =
      null;


    activeMessageIndex =
      null;


    /*
     * ONLY THE 12TH COMPLETED HEART
     * can trigger the final popup.
     */
    if (
      openedHearts ===
      totalHearts
    ) {

      window.setTimeout(
        showUsTransition,
        350
      );
    }
  }


  heartMessageDone?.addEventListener(
    "click",
    closeCurrentHeartMessage
  );


  /* =====================================
     FINAL BUTTON → HARANDINI
  ===================================== */

  seeUsButton?.addEventListener(
    "click",
    () => {

      if (
        !usTransition
      ) {
        return;
      }


      usTransition.classList.add(
        "is-leaving"
      );


      usTransition.setAttribute(
        "aria-hidden",
        "true"
      );


      document.body.classList.add(
        "page-leaving"
      );


      window.setTimeout(
        () => {

          window.location.href =
            "harandini.html";

        },
        550
      );
    }
  );


  /* =====================================
     START KISSES VIDEO
  ===================================== */

  function startKissesBackground() {

    if (
      !kissBackgroundVideo ||
      kissesStarted
    ) {
      return;
    }


    kissesStarted =
      true;


    kissBackgroundVideo.preload =
      "auto";

    kissBackgroundVideo.muted =
      true;

    kissBackgroundVideo.loop =
      true;

    kissBackgroundVideo.playsInline =
      true;

    kissBackgroundVideo.autoplay =
      true;


    try {

      kissBackgroundVideo.currentTime =
        0;

    } catch (_) {}


    kissBackgroundVideo.classList.add(
      "is-active"
    );


    const playPromise =
      kissBackgroundVideo.play();


    if (
      playPromise &&
      typeof playPromise.catch ===
        "function"
    ) {

      playPromise.catch(
        () => {

          kissBackgroundVideo
            .addEventListener(
              "canplay",
              () => {

                kissBackgroundVideo
                  .play()
                  .catch(
                    () => {}
                  );

              },
              {
                once: true
              }
            );
        }
      );
    }
  }


  /* =====================================
     BARGAD FINISH
  ===================================== */

  function finishBargad() {

    if (
      !bargadVideo ||
      bargadFinished
    ) {
      return;
    }


    bargadFinished =
      true;


    bargadVideo.dataset.finished =
      "true";


    if (
      kissLayer
    ) {

      kissLayer.innerHTML =
        "";
    }


    bargadVideo.pause();


    const bargadStage =
      document.querySelector(
        ".bargad-stage"
      );


    /*
     * Start Kisses first.
     */
    startKissesBackground();


    /*
     * Hide Bargad.
     */
    if (
      bargadStage
    ) {

      bargadStage.classList.add(
        "is-finished"
      );
    }


    /*
     * Show meme.
     */
    if (
      postBargadMeme
    ) {

      postBargadMeme.classList.add(
        "is-visible"
      );


      postBargadMeme.setAttribute(
        "aria-hidden",
        "false"
      );
    }


    window.setTimeout(
      () => {

        postBargadMeme?.classList.remove(
          "is-visible"
        );


        postBargadMeme?.setAttribute(
          "aria-hidden",
          "true"
        );


        if (
          blueMusic
        ) {

          blueMusic.currentTime =
            0;

          blueMusic.volume =
            1;

          blueMusic.loop =
            true;

          blueMusic
            .play()
            .catch(
              () => {}
            );
        }


        enableComplimentHearts();


        if (
          heartUnlock
        ) {

          heartUnlock.classList.add(
            "is-visible"
          );


          heartUnlock.setAttribute(
            "aria-hidden",
            "false"
          );
        }

      },
      4000
    );
  }


  /* =====================================
     INITIAL KISSES STATE
  ===================================== */

  if (
    kissBackgroundVideo
  ) {

    kissBackgroundVideo.pause();


    try {

      kissBackgroundVideo.currentTime =
        0;

    } catch (_) {}


    kissBackgroundVideo.muted =
      true;

    kissBackgroundVideo.loop =
      true;

    kissBackgroundVideo.playsInline =
      true;

    kissBackgroundVideo.autoplay =
      false;

    kissBackgroundVideo.preload =
      "auto";

    kissBackgroundVideo.load();


    kissBackgroundVideo.classList.remove(
      "is-active"
    );
  }


  /* =====================================
     BARGAD VIDEO
  ===================================== */

  if (
    bargadVideo
  ) {

    bargadVideo.currentTime =
      0;

    bargadVideo.preload =
      "auto";

    bargadVideo.playsInline =
      true;

    bargadVideo.muted =
      false;

    bargadVideo.volume =
      0.40;


    launchKissesForSevenSeconds();


    bargadVideo
      .play()
      .catch(
        () => {

          bargadVideo.muted =
            true;

          bargadVideo
            .play()
            .catch(
              () => {}
            );
        }
      );


    bargadVideo.addEventListener(
      "ended",
      finishBargad
    );


    bargadVideo.addEventListener(
      "timeupdate",
      () => {

        if (
          bargadVideo.duration &&
          bargadVideo.currentTime >=
            bargadVideo.duration -
            0.15
        ) {

          finishBargad();
        }
      }
    );


    createComplimentHearts();
  }


  /* =====================================
     INITIAL COUNTER
  ===================================== */

  if (
    heartProgress
  ) {

    const spans =
      heartProgress.querySelectorAll(
        "span"
      );


    if (
      spans.length >= 2
    ) {

      spans[1].textContent =
        `0 / ${totalHearts}`;
    }
  }


  /* =====================================
     INITIAL POPUP STATES
  ===================================== */

  heartUnlock?.classList.remove(
    "is-visible"
  );

  heartUnlock?.setAttribute(
    "aria-hidden",
    "true"
  );


  heartMessage?.classList.remove(
    "is-visible"
  );

  heartMessage?.setAttribute(
    "aria-hidden",
    "true"
  );


  usTransition?.classList.remove(
    "is-visible"
  );

  usTransition?.classList.remove(
    "is-leaving"
  );

  usTransition?.setAttribute(
    "aria-hidden",
    "true"
  );


  /* =====================================
     RESPONSIVE HEART POSITION
  ===================================== */

  window.addEventListener(
    "resize",
    () => {

      if (
        activeHeart
      ) {

        requestAnimationFrame(
          () => {

            positionHeartMessage(
              activeHeart
            );
          }
        );
      }
    }
  );

});