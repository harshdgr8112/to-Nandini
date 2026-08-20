document.addEventListener("DOMContentLoaded", () => {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const card = document.querySelector(".delivery-card");
  const popup = document.getElementById("verificationPopup");
  const popupBtn = document.getElementById("popupBtn");
  const popupStep = document.getElementById("popupStep");
  const popupIcon = document.getElementById("popupIcon");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const popupDetails = document.getElementById("popupDetails");
  const buttonArea = document.getElementById("buttonArea");
  const statusMessage = document.getElementById("statusMessage");

  const recipientNames = ["Kaju 🥜", "Bacchu 🌸", "Madam Ji ✨", "Cutie Pie 💕"];
  const personalities = ["Caring mode", "Calls before goodbye", "Chiii bolke sharmana", "Madam Ji attitude", "Soo jao reminder"];
  const rejectMessages = ["😂 Nice try.", "Courier bhaiya bhaag gaye.", "Package reject nahi hota 😏", "Litchi ko bura lagega 🥺", "Accept dabao na ❤️"];
  let rejectIndex = 0;
  const sleep = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
  const setPopup = ({ step, icon, title, text, details = "", button, disabled = false }) => {
    popupStep.textContent = step; popupIcon.textContent = icon; popupTitle.textContent = title; popupText.textContent = text;
    popupDetails.innerHTML = details; popupBtn.textContent = button; popupBtn.disabled = disabled;
  };

  const openDelivery = () => {
    const acceptBtn = document.getElementById("acceptBtn");
    if (!page1 || !page2 || !card) return;
    if (acceptBtn) { acceptBtn.disabled = true; acceptBtn.textContent = "📦 Opening Package..."; }
    card.classList.add("is-opening");
    window.setTimeout(() => { page1.hidden = true; page2.hidden = false; page2.setAttribute("aria-hidden", "false"); }, 650);
  };

  const dodgeRejectButton = () => {
    const rejectBtn = document.getElementById("rejectBtn");
    if (!rejectBtn || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = (Math.random() * 2 - 1) * Math.max(65, window.innerWidth * 0.16);
    const y = (Math.random() * 2 - 1) * Math.max(30, window.innerHeight * 0.08);
    rejectBtn.style.transform = `translate(${x}px, ${y}px)`;
    statusMessage.textContent = rejectMessages[rejectIndex++ % rejectMessages.length];
  };

  const showButtons = () => {
    buttonArea.innerHTML = `<div class="delivery-buttons"><button id="acceptBtn" class="button button--accept" type="button">❤️ Accept Delivery</button><button id="rejectBtn" class="button button--reject" type="button">Reject</button></div>`;
    document.getElementById("acceptBtn").addEventListener("click", openDelivery);
    const rejectBtn = document.getElementById("rejectBtn");
    ["mouseenter", "focus", "click"].forEach((event) => rejectBtn.addEventListener(event, dodgeRejectButton));
  };

  const showRecipientResult = () => setPopup({ step:"STEP 1 OF 4", icon:"✅", title:"Recipient verified", text:"The recipient details match this package.", details:recipientNames.map((name) => `<div class="popup-row"><span>${name}</span><strong>VERIFIED</strong></div>`).join(""), button:"Continue" });
  const showPersonality = () => setPopup({ step:"STEP 2 OF 4", icon:"🔍", title:"Personality verification", text:"Confirming a few recipient details before release.", details:personalities.map((item) => `<div class="popup-row"><span>${item}</span><strong>CHECKED</strong></div>`).join(""), button:"Verify details" });
  const showPersonalityResult = () => setPopup({ step:"STEP 2 OF 4", icon:"✅", title:"Details verified", text:"Recipient profile confirmation was successful.", details:`<div class="popup-result">All recipient details verified</div>`, button:"Continue" });
  const showSender = () => setPopup({ step:"STEP 3 OF 4", icon:"🏷️", title:"Sender verification", text:"One final label check is required before delivery.", details:`<div class="popup-row"><span>Sender label</span><strong>VERIFIED</strong></div><div class="popup-row"><span>Label name</span><strong>Litchi 🍓</strong></div>`, button:"Complete verification" });
  const showComplete = () => setPopup({ step:"STEP 4 OF 4", icon:"✅", title:"Ready for delivery", text:"All verification checks are complete. You can now accept the package.", details:`<div class="popup-result">Package cleared for handover</div>`, button:"Show delivery options" });

  let stage = 0;
  const advanceVerification = async () => {
    popupBtn.disabled = true;
    if (stage === 0) { setPopup({ step:"STEP 1 OF 4", icon:"🔍", title:"Verifying recipient", text:"Checking recipient details…", button:"Verifying…", disabled:true }); await sleep(900); showRecipientResult(); }
    else if (stage === 1) { showPersonality(); }
    else if (stage === 2) { setPopup({ step:"STEP 2 OF 4", icon:"🔍", title:"Verifying details", text:"Checking recipient profile…", button:"Verifying…", disabled:true }); await sleep(900); showPersonalityResult(); }
    else if (stage === 3) { showSender(); }
    else if (stage === 4) { showComplete(); }
    else { popup.hidden = true; statusMessage.textContent = "Verification completed — package ready for handover."; showButtons(); }
    stage += 1;
  };
  popupBtn.addEventListener("click", advanceVerification);
});
