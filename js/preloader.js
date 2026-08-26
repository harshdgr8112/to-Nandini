(() => {
  "use strict";

  /*
   * Only preload assets that are useful before
   * the next pages are reached.
   *
   * Images are cheap enough to preload.
   * Videos use metadata first so we don't
   * download hundreds of MB immediately.
   */

  const assets = {
    images: [
      // Funny
      "assets/images/*.png",

      // Harandini / Ending / other image assets
      // The script below discovers these automatically
    ],

    videos: [
      "assets/videos/Bargad-Edit.mp4",
      "assets/videos/cute edit.mp4",
      "assets/videos/Untill-Edit.mp4",
      "assets/videos/moonbg.mp4",
    ],

    audio: [
      "assets/music/penchar.mp3",
      "assets/music/moon.mp3",
      "assets/music/Spring.mp3",
    ],
  };


  /* =====================================
     IMAGE PRELOAD
  ===================================== */

  function preloadImage(src) {
    const img = new Image();

    img.decoding = "async";
    img.src = `../${src}`;
  }


  /* =====================================
     VIDEO METADATA PRELOAD
  ===================================== */

  function preloadVideo(src) {
    const video =
      document.createElement("video");

    video.preload = "metadata";
    video.muted = true;

    video.src = `../${src}`;

    video.load();
  }


  /* =====================================
     AUDIO PRELOAD
  ===================================== */

  function preloadAudio(src) {
    const audio =
      document.createElement("audio");

    audio.preload = "metadata";

    audio.src = `../${src}`;

    audio.load();
  }


  /* =====================================
     START
  ===================================== */

  function startPreloading() {

    assets.videos.forEach(
      preloadVideo
    );

    assets.audio.forEach(
      preloadAudio
    );

  }


  /*
   * Don't compete with the current page
   * during its first paint.
   */
  if (
    "requestIdleCallback" in window
  ) {

    window.requestIdleCallback(
      startPreloading,
      {
        timeout: 1500
      }
    );

  } else {

    window.setTimeout(
      startPreloading,
      800
    );

  }

})();