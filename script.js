const doseButtons = [...document.querySelectorAll(".dose-button")];
const selectedDose = document.querySelector("#selectedDose");
const injectButton = document.querySelector("#injectButton");
const messageBox = document.querySelector("#messageBox");
const resultModal = document.querySelector("#resultModal");
const closeModal = document.querySelector("#closeModal");
const resultDose = document.querySelector("#resultDose");
const resultMessage = document.querySelector("#resultMessage");
const resultScene = document.querySelector("#resultScene");
const saveImageButton = document.querySelector("#saveImageButton");
const copyLinkButton = document.querySelector("#copyLinkButton");
const kakaoShareButton = document.querySelector("#kakaoShareButton");
const prescribeButton = document.querySelector("#prescribeButton");
const languageToggle = document.querySelector("#languageToggle");
const updateButton = document.querySelector("#updateButton");
const updateModal = document.querySelector("#updateModal");
const closeUpdateModal = document.querySelector("#closeUpdateModal");
const updateTitle = document.querySelector("#updateTitle");
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterEmail = document.querySelector("#newsletterEmail");
const newsletterButton = document.querySelector("#newsletterButton");
const newsletterStatus = document.querySelector("#newsletterStatus");
const newsletterFormSection = document.querySelector("#newsletterFormSection");
const newsletterEmailSection = document.querySelector("#newsletterEmailSection");
const newsletterButtonSection = document.querySelector("#newsletterButtonSection");
const newsletterStatusSection = document.querySelector("#newsletterStatusSection");
const appTitle = document.querySelector("#app-title");
const subtitle = document.querySelector(".subtitle");
const hospitalSign = document.querySelector(".hospital-sign");
const panelLabel = document.querySelector(".panel-top span");
const resultTitle = document.querySelector("#resultTitle");
const recordLabel = document.querySelector("#recordLabel");
const recordDose = document.querySelector("#recordDose");
const recordMessage = document.querySelector("#recordMessage");
const recordDate = document.querySelector("#recordDate");
const recordSerial = document.querySelector("#recordSerial");
const clinicNewsletterKicker = document.querySelector("#clinicNewsletterKicker");
const clinicNewsletterTitle = document.querySelector("#clinicNewsletterTitle");
const clinicNewsletterLead = document.querySelector("#clinicNewsletterLead");
const clinicNewsletterBody1 = document.querySelector("#clinicNewsletterBody1");
const clinicNewsletterBody2 = document.querySelector("#clinicNewsletterBody2");
const clinicNewsletterBody3 = document.querySelector("#clinicNewsletterBody3");
const clinicNewsletterBody4 = document.querySelector("#clinicNewsletterBody4");
const clinicNewsletterBody5 = document.querySelector("#clinicNewsletterBody5");
const clinicNewsletterBody6 = document.querySelector("#clinicNewsletterBody6");
const clinicNewsletterBody7 = document.querySelector("#clinicNewsletterBody7");
const clinicNewsletterItem1 = document.querySelector("#clinicNewsletterItem1");
const clinicNewsletterItem2 = document.querySelector("#clinicNewsletterItem2");
const clinicNewsletterItem3 = document.querySelector("#clinicNewsletterItem3");

const supabaseUrl = "https://blkxiayxrjsjylmyvkvi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsa3hpYXl4cmpzanlsbXl2a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MDY2MDYsImV4cCI6MjA5ODk4MjYwNn0.QxRg1r5N8YNqGlphMwSrMqspAWYWitI4pLv_kvlCVRA";
const newsletterTable = "newsletter_subscribers";
const kakaoJavascriptKey = "3cf19f09aa012394d68342cbae1cd395";
const siteUrl = "https://www.pigjano.com";

const messages = {
  "1": "야 돼지야, 오늘 저녁은 가볍게 가자. 네 몸은 이미 충분히 일했다.",
  "2.5": "야 돼지야, 디저트 먹을 때냐? 네 몸은 지금 케이크가 아니라 관리가 필요하다.",
  "7.5": "야 돼지야, 네 몸은 갑자기 이렇게 된 게 아니다. 매일 네 선택이 만든 결과다.",
  "9": "야 돼지야, 네가 원하는 몸과 네가 하는 행동이 얼마나 다른지 보이냐?",
  "11": "야 돼지야, 네 목표는 높은데 네 행동은 바닥이다.",
  "13": "야 돼지야, 13mg에서는 변명이 통하지 않는다.",
  "15": "씹돼지야, 15mg까지 왔으면 변명은 끝이다. 이제 행동으로 증명해라.",
  "17": "야 돼지야, 17mg은 최후의 통첩이다. 핑계는 여기서 끝내라.",
  "19": "야 돼지야, 19mg까지 도달했으면 이제 변명의 유통기한은 0초다.",
  "20": "야 돼지야, 20mg이다. 마지막 경고다. 당장 움직여라."
};
const extraMessages = {
  "1": [
    "\uC624\uB298\uC740 \uBAB8\uC744 \uAE68\uC6B0\uB294 \uB0A0. \uC791\uAC8C \uC6C0\uC9C1\uC5EC\uB3C4 \uCDA9\uBD84\uD558\uB2E4.",
    "\uBB34\uB9AC\uD558\uC9C0 \uB9D0\uACE0 \uC2DC\uC791\uB9CC \uD574\uBCF4\uC790. \uC2DC\uC791\uC774 \uC81C\uC77C \uC138\uB2E4."
  ],
  "2.5": [
    "\uC785\uC774 \uC2EC\uC2EC\uD55C \uAC83\uACFC \uBC30\uACE0\uD508 \uAC83\uC740 \uB2E4\uB974\uB2E4.",
    "\uC624\uB298\uC758 \uC791\uC740 \uC808\uC81C\uAC00 \uB0B4\uC77C\uC758 \uAC00\uBCBC\uC6C0\uC774\uB2E4."
  ],
  "7.5": [
    "\uD55C \uC785\uC740 \uC27D\uACE0, \uB418\uB3CC\uB9AC\uAE30\uB294 \uADC0\uCC2E\uB2E4.",
    "\uB0C9\uC7A5\uACE0 \uBB38\uC744 \uC5F4\uAE30 \uC804\uC5D0 \uAC70\uC6B8\uBD80\uD130 \uBD10\uB77C."
  ],
  "9": [
    "\uACC4\uD68D\uC740 \uC9DC\uB294 \uAC8C \uC544\uB2C8\uB77C \uC9C0\uD0A4\uB294 \uAC83\uBD80\uD130 \uC2DC\uC791\uC774\uB2E4.",
    "\uC624\uB298 \uC548 \uC6C0\uC9C1\uC774\uBA74 \uB0B4\uC77C\uC740 \uB354 \uC6C0\uC9C1\uC774\uAE30 \uC2EB\uC5B4\uC9C4\uB2E4."
  ],
  "11": [
    "\uADF8 \uC720\uD639\uC740 \uC7A0\uAE50\uC774\uACE0, \uD6C4\uD68C\uB294 \uC0DD\uAC01\uBCF4\uB2E4 \uAE38\uB2E4.",
    "\uC2DD\uD0C1 \uC55E\uC5D0\uC11C \uACB0\uC2EC\uC774 \uAE68\uC9C0\uBA74 \uC6B4\uB3D9\uC774 \uB450 \uBC30\uB85C \uD798\uB4E4\uC5B4\uC9C4\uB2E4."
  ],
  "13": [
    "\uC624\uB298 \uD0C0\uD611\uD55C \uBD84\uB9CC\uD07C \uACB0\uACFC\uB3C4 \uC815\uD655\uD788 \uD0C0\uD611\uD55C\uB2E4.",
    "\uBA39\uACE0 \uC2F6\uC740 \uB9C8\uC74C\uC744 \uC774\uAE30\uB294 \uC21C\uAC04, \uB108\uB294 \uC870\uAE08 \uB354 \uAC15\uD574\uC9C4\uB2E4."
  ],
  "15": [
    "\uD3EC\uAE30\uD558\uAE30\uC5D0\uB294 \uC774\uBBF8 \uB108\uBB34 \uBA40\uB9AC \uC654\uB2E4. \uB05D\uAE4C\uC9C0 \uAC00\uC790.",
    "\uC9C0\uAE08 \uC5B4\uAE68\uB97C \uD3B4\uACE0 \uBB3C\uBD80\uD130 \uB9C8\uC154\uB77C. \uADF8\uAC8C \uBC18\uACA9\uC774\uB2E4."
  ],
  "17": [
    "\uC624\uB298\uC758 \uC0AC\uC18C\uD55C \uD0C0\uD611\uC774 \uB2E4\uC74C \uC8FC\uC758 \uD45C\uC815\uC744 \uBC14\uAFC0 \uAC70\uB2E4.",
    "\uACC4\uD68D\uC774 \uB108\uB97C \uAD6C\uD558\uB294 \uC911\uC774\uB2E4. \uB108\uB294 \uADF8\uAC78 \uBC84\uB9AC\uC9C0 \uB9C8\uB77C."
  ],
  "19": [
    "\uB2EC\uB77C\uC9C0\uACE0 \uC2F6\uB2E4\uACE0 \uD588\uC73C\uBA74 \uC774 \uC815\uB3C4 \uBD88\uD3B8\uD568\uC740 \uACAC\uB514\uC790.",
    "\uB108\uB294 \uC9C0\uAE08 \uBC84\uD2F0\uB294 \uC0AC\uB78C\uC774\uC9C0, \uB2E4\uC2DC \uB3CC\uC544\uAC00\uB294 \uC0AC\uB78C\uC774 \uC544\uB2C8\uB2E4."
  ],
  "20": [
    "\uC774\uBC88\uC5D0 \uBB3C\uB7EC\uB098\uBA74 \uB610 \uAC19\uC740 \uC790\uB9AC\uB85C \uC640\uC57C \uD55C\uB2E4. \uC624\uB298 \uB05D\uB0B4\uC790.",
    "\uC790\uADF9 \uCD5C\uB300\uCE58. \uC9C0\uAE08\uC740 \uC0DD\uAC01\uBCF4\uB2E4 \uC2E4\uD589\uC774 \uBA3C\uC800\uB2E4."
  ]
};

const userMessages = window.PIGJANO_MESSAGES || {};

const englishMessages = {
  "1": [
    "Easy start. Put the snack down and give tomorrow-you a small win.",
    "Open a bottle of water before you open the fridge.",
    "You are not starving. Your habit is just making noise."
  ],
  "2.5": [
    "That dessert can wait. Your goal cannot keep waiting forever.",
    "Ten minutes of sweetness is not worth hours of regret.",
    "Your cravings are loud, but your goal needs to be louder."
  ],
  "7.5": [
    "You know the method. The missing part is execution.",
    "Stop negotiating with the snack. Move first, decide later.",
    "Your body is the receipt for repeated choices. Start changing the receipt."
  ],
  "9": [
    "Excuses do not burn calories. Action does.",
    "You are not losing to food. You are losing to the pause before action.",
    "If you want a different body, stop repeating the same evening."
  ],
  "11": [
    "Your future body is watching this choice. Do not betray it again.",
    "The mirror is not attacking you. It is reporting your routine.",
    "You do not need another plan. You need one completed action."
  ],
  "13": [
    "At 13mg, excuses stop being cute. Prove it with movement.",
    "Comfort built the problem. Discomfort starts the repair.",
    "Your goal has waited long enough. Move like you mean it."
  ],
  "15": [
    "15mg means the debate is over. Put the food down and act.",
    "You have collected enough excuses. Start collecting wins.",
    "The medicine can open the door. Your legs still have to walk through it."
  ],
  "17": [
    "17mg is not a trophy. It is your last warning before the final wall.",
    "Do not waste the strongest help on the same weak habits.",
    "You came this far. Now make your discipline louder than your appetite."
  ],
  "19": [
    "19mg leaves no room for soft excuses. Choose the result or choose the regret.",
    "If you can fight the medicine to keep eating, you can fight your habit to stop.",
    "This is the edge. Turn the pressure into proof."
  ],
  "20": [
    "20mg is the final dose. No more hiding, no more bargaining, just action.",
    "This is the last line. Make the result impossible to ignore.",
    "The strongest dose means nothing without the strongest decision."
  ]
};

const uiText = {
  ko: {
    toggle: "English",
    title: "돼지자노",
    subtitle: "원하는 자극 용량을 고르고 주입하세요.",
    sign: "돼지클리닉",
    panel: "용량 선택",
    inject: "주입하기",
    placeholder: "용량을 고르고 주입하기를 누르면 결과 창이 열립니다.",
    resultTitle: "주입 완료",
    save: "사진저장하기",
    copy: "링크 복사해서 친구에게 공유하기",
    prescribe: "친구에게 이 용량 처방하기",
    prescribed: "처방 링크 복사완료",
    recordLabel: "오늘의 훈육 기록증",
    recordEmpty: "돼지자노 클리닉 처방 기록이 여기에 표시됩니다.",
    copied: "복사완료",
    copyPrompt: "링크를 복사해주세요."
  },
  en: {
    toggle: "한국어",
    title: "Pigjano",
    subtitle: "Choose your dose of discipline, then inject.",
    sign: "Pig Clinic",
    panel: "Dose Selection",
    inject: "Inject",
    placeholder: "Choose a dose and press Inject to open your result.",
    resultTitle: "Injection Complete",
    save: "Save Image",
    copy: "Copy Link and Share with a Friend",
    prescribe: "Prescribe This Dose to a Friend",
    prescribed: "Prescription Link Copied",
    recordLabel: "Today's Discipline Record",
    recordEmpty: "Your Pigjano clinic record will appear here.",
    copied: "Copied",
    copyPrompt: "Copy this link."
  }
};
const newsletterText = {
  ko: {
    placeholder: "\uC774\uBA54\uC77C \uC785\uB825",
    button: "\uD6C8\uC721\uBC1B\uAE30",
    sending: "\uC800\uC7A5 \uC911...",
    success: "\uD6C8\uC721 \uB4F1\uB85D \uC644\uB8CC. \uBA54\uC77C\uC744 \uAE30\uB2E4\uB824\uC8FC\uC138\uC694.",
    duplicate: "\uC774\uBBF8 \uD6C8\uC721 \uB4F1\uB85D\uB41C \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4.",
    invalid: "\uC774\uBA54\uC77C\uC744 \uC815\uD655\uD788 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    error: "\uC800\uC7A5 \uC2E4\uD328. Supabase \uD14C\uC774\uBE14/RLS \uC124\uC815\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."
  },
  en: {
    placeholder: "Email signup",
    button: "Join",
    sending: "Saving...",
    success: "Subscribed. Morning discipline is coming.",
    duplicate: "This email is already subscribed.",
    invalid: "Please enter a valid email.",
    error: "Save failed. Check the Supabase table/RLS settings."
  }
};

const clinicNewsletterText = {
  ko: {
    kicker: "Pigjano Clinic Letter",
    title: "돼지자노 클리닉에 오신 것을 환영합니다.",
    lead: '아직도 "내일부터 다이어트"를 외치고 계신가요?',
    body1: "걱정하지 마세요. 저희는 나태함과 합리화에 익숙한 여러분을 위해 훈육 시스템을 준비했습니다.",
    body2: '이메일을 입력하고 <strong>훈육받기</strong> 버튼을 눌러보세요.',
    body3: "그러면 정기적으로",
    item1: "다이어트 의지를 자극하는 한마디",
    item2: "정신이 번쩍 드는 현실 직시 이미지",
    item3: "다이어트에 도움이 되는 정보와 실천 팁",
    body4: "우리는 살을 빼주는 곳이 아닙니다. <strong>핑계를 빼주는 곳입니다.</strong>",
    body5: "오늘 등록하고, 내일의 나에게 핑계를 남기지 마세요.",
    body6: "당신의 의지는 약해도, 우리의 메일은 꾸준합니다.",
    body7: "지금 바로 이메일을 등록하고, 돼지자노의 훈육을 시작하세요."
  },
  en: {
    kicker: "Pigjano Clinic Letter",
    title: "Welcome to the Pigjano Clinic.",
    lead: 'Still saying "I will diet tomorrow"?',
    body1: "Do not worry. We built a discipline system for people who are very good at laziness and rationalizing one more bite.",
    body2: 'Enter your email and press <strong>Join Discipline</strong>.',
    body3: "We will regularly send you",
    item1: "short diet discipline lines that hit at the right time",
    item2: "reality-check images that wake you up",
    item3: "practical tips that help you stay on track",
    body4: "We are not here to remove your weight for you. <strong>We are here to remove your excuses.</strong>",
    body5: "Register today, and do not leave tomorrow-you another excuse.",
    body6: "Your willpower may be weak, but our emails are consistent.",
    body7: "Enter your email now and start Pigjano discipline."
  }
};

const updateText = {
  ko: {
    button: "\uC5C5\uB370\uC774\uD2B8",
    title: "\uC5C5\uB370\uC774\uD2B8 \uB0B4\uC5ED"
  },
  en: {
    button: "Updates",
    title: "Update History"
  }
};

const kakaoText = {
  ko: {
    button: "\uCE74\uCE74\uC624\uD1A1 \uCE5C\uAD6C\uC5D0\uAC8C \uACF5\uC720\uD558\uAE30",
    title: "\uB3FC\uC9C0\uD6C8\uC721\uC18C \uC8FC\uC785 \uC644\uB8CC",
    action: "\uB098\uB3C4 \uC8FC\uC785\uD558\uAE30",
    fallback: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4."
  },
  en: {
    button: "Share with KakaoTalk",
    title: "Pig Discipline Injection Complete",
    action: "Try Your Dose",
    fallback: "KakaoTalk sharing is unavailable, so the link was copied."
  }
};

let currentDose = "1";
let currentMessage = messages["1"];
let currentLang = localStorage.getItem("pigjanoLang") || "ko";
const messageDecks = new Map();
const recentMessageHistory = new Map();
const lastMessageKey = new Map();
const recentMessageLimit = 36;

function getMessageList(dose) {
  if (currentLang === "en") return englishMessages[dose] || englishMessages["1"];
  return [messages[dose], ...(extraMessages[dose] || []), ...(userMessages[dose] || [])].filter(Boolean);
}

function shuffleList(list) {
  const shuffled = [...list];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function getMessageKey(message) {
  return message.split(/[.!?。]/)[0].trim();
}

function getDeckKey(dose) {
  return `${currentLang}:${dose}`;
}

function rebuildMessageDeck(dose) {
  const deckKey = getDeckKey(dose);
  const recent = recentMessageHistory.get(deckKey) || [];
  const list = getMessageList(dose);
  const freshList = list.filter((message) => !recent.includes(message));
  const source = freshList.length >= Math.min(20, list.length) ? freshList : list;
  const deck = shuffleList(source);
  messageDecks.set(deckKey, deck);
  return deck;
}

function getRandomMessage(dose) {
  const deckKey = getDeckKey(dose);
  let deck = messageDecks.get(deckKey);

  if (!deck || deck.length === 0) {
    deck = rebuildMessageDeck(dose);
  }

  const previousKey = lastMessageKey.get(deckKey);

  if (previousKey && deck.length > 1) {
    const differentIndex = deck.findIndex((message) => getMessageKey(message) !== previousKey);

    if (differentIndex > 0) {
      [deck[0], deck[differentIndex]] = [deck[differentIndex], deck[0]];
    }
  }

  const message = deck.shift();
  const recent = recentMessageHistory.get(deckKey) || [];
  recent.unshift(message);
  recentMessageHistory.set(deckKey, recent.slice(0, recentMessageLimit));
  lastMessageKey.set(deckKey, getMessageKey(message));

  return message;
}

function getMood(dose) {
  const value = Number(dose);
  if (value >= 20) return "max";
  if (value >= 17) return "severe";
  if (value >= 13) return "hard";
  if (value >= 9) return "firm";
  return "soft";
}

function setNewsletterStatus(message, type = "", form = newsletterForm, status = newsletterStatus) {
  if (!form || !status) return;
  form.classList.toggle("is-success", type === "success");
  form.classList.toggle("is-error", type === "error");
  status.textContent = message;
}

function updateNewsletterLanguage() {
  const text = newsletterText[currentLang];
  newsletterEmail.placeholder = text.placeholder;
  newsletterButton.textContent = text.button;
  newsletterEmail.setAttribute("aria-label", text.placeholder);

  if (newsletterEmailSection && newsletterButtonSection) {
    newsletterEmailSection.placeholder = text.placeholder;
    newsletterButtonSection.textContent = text.button;
    newsletterEmailSection.setAttribute("aria-label", text.placeholder);
  }
}

function updateClinicNewsletterLanguage() {
  const text = clinicNewsletterText[currentLang];
  clinicNewsletterKicker.textContent = text.kicker;
  clinicNewsletterTitle.textContent = text.title;
  clinicNewsletterLead.textContent = text.lead;
  clinicNewsletterBody1.textContent = text.body1;
  clinicNewsletterBody2.innerHTML = text.body2;
  clinicNewsletterBody3.textContent = text.body3;
  clinicNewsletterItem1.textContent = text.item1;
  clinicNewsletterItem2.textContent = text.item2;
  clinicNewsletterItem3.textContent = text.item3;
  clinicNewsletterBody4.innerHTML = text.body4;
  clinicNewsletterBody5.textContent = text.body5;
  clinicNewsletterBody6.textContent = text.body6;
  clinicNewsletterBody7.textContent = text.body7;
}

function updateReleaseLanguage() {
  const text = updateText[currentLang];
  updateButton.textContent = text.button;
  updateTitle.textContent = text.title;
}

function updateKakaoLanguage() {
  kakaoShareButton.textContent = kakaoText[currentLang].button;
}

function initKakaoShare() {
  if (!window.Kakao || window.Kakao.isInitialized()) return;
  window.Kakao.init(kakaoJavascriptKey);
}

function getShareUrl() {
  return `${siteUrl}/`;
}

function getShareImageUrl() {
  return `${siteUrl}/share-${currentDose.replace(".", "-")}.png?v=20260708-5`;
}

function getTodayStamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function getRecordHistory() {
  try {
    return JSON.parse(localStorage.getItem("pigjanoRecords") || "[]");
  } catch {
    return [];
  }
}

function saveRecord(record) {
  const history = getRecordHistory();
  const nextHistory = [record, ...history].slice(0, 30);
  localStorage.setItem("pigjanoRecords", JSON.stringify(nextHistory));
  return nextHistory.length;
}

function makeRecordSerial(dose, historyLength) {
  const doseCode = String(dose).replace(".", "");
  const countCode = String(historyLength).padStart(3, "0");
  return `PIGJANO-${doseCode}-${countCode}`;
}

function updateRecordCard(message) {
  const text = uiText[currentLang];
  const date = getTodayStamp();
  const historyLength = getRecordHistory().length + 1;
  const serial = makeRecordSerial(currentDose, historyLength);

  recordLabel.textContent = text.recordLabel;
  recordDose.textContent = `${currentDose}mg`;
  recordMessage.textContent = message || text.recordEmpty;
  recordDate.textContent = date;
  recordSerial.textContent = serial;

  saveRecord({
    dose: currentDose,
    message,
    date,
    serial,
    language: currentLang
  });
}

function getPrescriptionLink() {
  const url = new URL(siteUrl);
  url.searchParams.set("dose", currentDose);
  url.searchParams.set("rx", "1");
  return url.toString();
}

function setDose(dose, updateUrl = false) {
  if (!messages[dose]) return;

  currentDose = dose;
  selectedDose.textContent = `${dose}mg`;
  document.documentElement.style.setProperty("--dose-power", Number(dose) / 20);

  doseButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.dose === dose);
  });

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("dose", dose);
    window.history.replaceState({}, "", url);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("pigjanoLang", lang);
  document.documentElement.lang = lang;

  const text = uiText[lang];
  document.title = text.title;
  languageToggle.textContent = text.toggle;
  appTitle.textContent = text.title;
  subtitle.textContent = text.subtitle;
  if (hospitalSign) hospitalSign.textContent = text.sign;
  panelLabel.textContent = text.panel;
  injectButton.lastChild.textContent = ` ${text.inject}`;
  resultTitle.textContent = text.resultTitle;
  saveImageButton.textContent = text.save;
  copyLinkButton.textContent = text.copy;
  prescribeButton.textContent = text.prescribe;
  recordLabel.textContent = text.recordLabel;
  if (!currentMessage) recordMessage.textContent = text.recordEmpty;
  updateNewsletterLanguage();
  updateClinicNewsletterLanguage();
  updateReleaseLanguage();
  updateKakaoLanguage();

  if (resultModal.hidden) {
    messageBox.textContent = text.placeholder;
  }
}

doseButtons.forEach((button) => {
  button.addEventListener("click", () => setDose(button.dataset.dose, true));
});

function openResult() {
  const message = getRandomMessage(currentDose);
  const mood = getMood(currentDose);
  currentMessage = message;

  resultDose.textContent = `${currentDose}mg`;
  resultMessage.textContent = message;
  messageBox.textContent = message;
  updateRecordCard(message);
  resultModal.dataset.mood = mood;
  resultScene.dataset.mood = mood;
  resultModal.hidden = false;
  resultScene.style.animation = "none";
  void resultScene.offsetWidth;
  resultScene.style.animation = "";

  const url = new URL(window.location.href);
  url.searchParams.set("dose", currentDose);
  window.history.replaceState({}, "", url);
}

function closeResult() {
  resultModal.hidden = true;
}

function openUpdateModal() {
  updateModal.hidden = false;
}

function closeUpdateLog() {
  updateModal.hidden = true;
}

async function copyResultLink() {
  const url = new URL(window.location.href);
  url.searchParams.set("dose", currentDose);
  const link = url.toString();

  try {
    await navigator.clipboard.writeText(link);
    copyLinkButton.textContent = uiText[currentLang].copied;
  } catch {
    window.prompt(uiText[currentLang].copyPrompt, link);
  }

  setTimeout(() => {
    copyLinkButton.textContent = uiText[currentLang].copy;
  }, 1400);
}

async function copyPrescriptionLink() {
  const link = getPrescriptionLink();
  const text = uiText[currentLang];

  try {
    await navigator.clipboard.writeText(link);
    prescribeButton.textContent = text.prescribed;
  } catch {
    window.prompt(text.copyPrompt, link);
  }

  setTimeout(() => {
    prescribeButton.textContent = text.prescribe;
  }, 1500);
}

async function shareToKakao() {
  const text = kakaoText[currentLang];
  const shareUrl = getShareUrl();
  const imageUrl = getShareImageUrl();
  const messagePreview =
    currentMessage.length > 110 ? `${currentMessage.slice(0, 110)}...` : currentMessage;
  const description = `${currentDose}mg - ${messagePreview}`;

  if (!window.Kakao || !window.Kakao.Share) {
    await navigator.clipboard.writeText(shareUrl).catch(() => {});
    copyLinkButton.textContent = text.fallback;
    setTimeout(() => {
      copyLinkButton.textContent = uiText[currentLang].copy;
    }, 1600);
    return;
  }

  initKakaoShare();
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: `${text.title} ${currentDose}mg`,
      description,
      imageUrl,
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl
      }
    },
    buttons: [
      {
        title: text.action,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl
        }
      }
    ]
  });
}

async function submitNewsletter(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const emailInput = form.querySelector("input[type='email']");
  const submitButton = form.querySelector("button[type='submit']");
  const status = form.querySelector("p[aria-live]");
  const text = newsletterText[currentLang];
  const email = emailInput.value.trim().toLowerCase();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    setNewsletterStatus(text.invalid, "error", form, status);
    emailInput.focus();
    return;
  }

  submitButton.disabled = true;
  setNewsletterStatus(text.sending, "", form, status);

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${newsletterTable}`, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        email,
        language: currentLang
      })
    });

    if (response.ok) {
      emailInput.value = "";
      setNewsletterStatus(text.success, "success", form, status);
      return;
    }

    if (response.status === 409) {
      setNewsletterStatus(text.duplicate, "success", form, status);
      return;
    }

    const errorBody = await response.json().catch(() => null);
    const detail = errorBody?.message || `HTTP ${response.status}`;
    setNewsletterStatus(`${text.error} (${detail})`, "error", form, status);
  } catch (error) {
    setNewsletterStatus(`${text.error} (${error.message})`, "error", form, status);
  } finally {
    submitButton.disabled = false;
  }
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
      return;
    }
    line = testLine;
  });

  ctx.fillText(line, x, currentY);
}

function drawPig(ctx, x, y, mood = "soft") {
  ctx.fillStyle = "#ff9db2";
  ctx.beginPath();
  ctx.arc(x, y, 46, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffb6c6";
  ctx.beginPath();
  ctx.ellipse(x - 26, y - 38, 13, 18, -0.7, 0, Math.PI * 2);
  ctx.ellipse(x + 26, y - 38, 13, 18, 0.7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#39212a";
  if (mood === "severe" || mood === "max") {
    ctx.strokeStyle = "#39212a";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x - 28, y - 19);
    ctx.lineTo(x - 7, y - 10);
    ctx.moveTo(x + 28, y - 19);
    ctx.lineTo(x + 7, y - 10);
    ctx.stroke();
  }

  ctx.fillStyle = "#39212a";
  ctx.beginPath();
  ctx.arc(x - 16, y - 8, 4, 0, Math.PI * 2);
  ctx.arc(x + 16, y - 8, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ff7f9a";
  ctx.beginPath();
  ctx.ellipse(x, y + 14, 18, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#8f4055";
  ctx.beginPath();
  ctx.arc(x - 6, y + 14, 3, 0, Math.PI * 2);
  ctx.arc(x + 6, y + 14, 3, 0, Math.PI * 2);
  ctx.fill();
}

function loadImageAsset(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function saveResultImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  const message = currentMessage || getRandomMessage(currentDose);
  const mood = getMood(currentDose);
  let mascotImage = null;

  try {
    mascotImage = await loadImageAsset("pigjano-character.png");
  } catch (error) {
    mascotImage = null;
  }

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  gradient.addColorStop(0, "#20242d");
  gradient.addColorStop(1, "#111317");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);

  ctx.fillStyle = "rgba(66, 212, 184, 0.18)";
  ctx.beginPath();
  ctx.arc(160, 150, 220, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 77, 94, 0.18)";
  ctx.beginPath();
  ctx.arc(910, 170, 230, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  drawRoundRect(ctx, 90, 90, 900, 900, 34);
  ctx.fill();

  ctx.fillStyle = "#f8f1ea";
  ctx.font = "800 92px Pretendard, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(currentLang === "en" ? "Pigjano" : "?쇱??먮끂", 540, 210);

  ctx.fillStyle = "#ff9db2";
  ctx.font = "800 54px Pretendard, Arial, sans-serif";
  ctx.fillText(`${currentDose}mg`, 540, 294);

  if (mascotImage) {
    ctx.drawImage(mascotImage, 250, 335, 250, 300);
  } else {
    drawPig(ctx, 340, 470, mood);
  }

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 16;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(455, 492);
  ctx.lineTo(650, 488);
  ctx.stroke();

  ctx.fillStyle = "#42d4b8";
  drawRoundRect(ctx, 430, 458, 164, 60, 18);
  ctx.fill();

  ctx.strokeStyle = "#b80a2c";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.ellipse(438, 505, 28, 18, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#fff0dc";
  ctx.beginPath();
  ctx.ellipse(720, 490, 96, 68, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffd1b4";
  ctx.beginPath();
  ctx.ellipse(724, 496, 54, 36, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f8f1ea";
  ctx.font = "800 46px Pretendard, Arial, sans-serif";
  wrapText(ctx, message, 540, 710, 760, 66);

  ctx.fillStyle = "#a9acb4";
  ctx.font = "500 28px Pretendard, Arial, sans-serif";
  ctx.fillText(window.location.origin || "pigjano", 540, 930);

  const link = document.createElement("a");
  link.download = `pigjano-${currentDose}mg.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

injectButton.addEventListener("click", openResult);
closeModal.addEventListener("click", closeResult);
copyLinkButton.addEventListener("click", copyResultLink);
saveImageButton.addEventListener("click", saveResultImage);
prescribeButton.addEventListener("click", copyPrescriptionLink);
kakaoShareButton.addEventListener("click", shareToKakao);
newsletterForm.addEventListener("submit", submitNewsletter);
if (newsletterFormSection) newsletterFormSection.addEventListener("submit", submitNewsletter);
updateButton.addEventListener("click", openUpdateModal);
closeUpdateModal.addEventListener("click", closeUpdateLog);
languageToggle.addEventListener("click", () => {
  setLanguage(currentLang === "ko" ? "en" : "ko");
});

resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) closeResult();
});

updateModal.addEventListener("click", (event) => {
  if (event.target === updateModal) closeUpdateLog();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeResult();
  if (event.key === "Escape") closeUpdateLog();
});

const params = new URLSearchParams(window.location.search);
const initialDose = params.get("dose");
const isPrescription = params.get("rx") === "1";
setDose(initialDose || "1");
setLanguage(currentLang);
if (isPrescription && messages[currentDose]) {
  messageBox.textContent =
    currentLang === "en"
      ? `${currentDose}mg was prescribed to you. Press Inject to receive it.`
      : `${currentDose}mg 처방이 도착했습니다. 주입하기를 눌러 확인하세요.`;
}
initKakaoShare();


