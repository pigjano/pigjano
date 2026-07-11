const chickenMenus = [
  {
    brand: "교촌치킨", name: "반반스틱 [간장+레드]", type: "스틱", kcal: 275, protein: 27, sodium: 354,
    weight: "100g당 · 조리 전 920g", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=30086"
  },
  {
    brand: "교촌치킨", name: "리얼후라이드순살", type: "순살", kcal: 310.19, protein: 20.25, sodium: 445.91,
    weight: "100g당 · 중량 미표기", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=38732"
  },
  {
    brand: "교촌치킨", name: "양념치킨순살", type: "순살", kcal: 310, protein: 21, sodium: 570,
    weight: "100g당 · 조리 전 500g", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=40962"
  },
  {
    brand: "교촌치킨", name: "양념치킨싱글윙", type: "윙", kcal: 320, protein: 19, sodium: 560,
    weight: "100g당 · 윙+봉 6조각", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=40915"
  },
  {
    brand: "교촌치킨", name: "허니순살[S]", type: "순살", kcal: 345, protein: 19, sodium: 420,
    weight: "100g당 · 조리 전 250g", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=38055"
  },
  {
    brand: "교촌치킨", name: "반반윙박스20PCS [레드+마라레드]", type: "윙", kcal: 348, protein: 28, sodium: 400,
    weight: "100g당 · 윙+봉 20조각", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=41373"
  },
  {
    brand: "교촌치킨", name: "반반한마리 [레드+마라레드]", type: "한마리", kcal: 350, protein: 28, sodium: 340,
    weight: "100g당 · 조리 전 951~1,050g", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=41136"
  },
  {
    brand: "교촌치킨", name: "반반윙박스20PCS [레드+허니갈릭]", type: "윙", kcal: 355, protein: 27, sodium: 425,
    weight: "100g당 · 윙+봉 20조각", source: "https://www.kyochon.com/menu/view.asp?cg=2&id=41374"
  },
  {
    brand: "교촌치킨", name: "반반순살 [레드+허니]", type: "순살", kcal: 365, protein: 24, sodium: 430,
    weight: "100g당 · 조리 전 600g", source: "https://www.kyochon.com/menu/view.asp?id=38414"
  }
];

const filters = ["전체", "교촌치킨"];
const menuGrid = document.querySelector("#menuGrid");
const brandFilters = document.querySelector("#brandFilters");
const menuSearch = document.querySelector("#menuSearch");
const menuSort = document.querySelector("#menuSort");
const resultSummary = document.querySelector("#resultSummary");
const emptyState = document.querySelector("#emptyState");
const menuCount = document.querySelector("#menuCount");
let currentBrand = "전체";

menuCount.textContent = chickenMenus.length;

function formatNumber(value) {
  return Number.isInteger(value) ? value.toLocaleString("ko-KR") : value.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
}

function renderFilters() {
  brandFilters.innerHTML = filters.map((brand) => `
    <button class="brand-filter ${brand === currentBrand ? "is-active" : ""}" type="button" data-brand="${brand}">${brand}</button>
  `).join("");
}

function getFilteredMenus() {
  const query = menuSearch.value.trim().toLowerCase();
  const sort = menuSort.value;
  const filtered = chickenMenus.filter((item) => {
    const brandMatch = currentBrand === "전체" || item.brand === currentBrand;
    const queryMatch = !query || `${item.brand} ${item.name} ${item.type}`.toLowerCase().includes(query);
    return brandMatch && queryMatch;
  });

  if (sort === "low") filtered.sort((a, b) => a.kcal - b.kcal);
  if (sort === "high") filtered.sort((a, b) => b.kcal - a.kcal);
  if (sort === "protein") filtered.sort((a, b) => b.protein - a.protein);
  return filtered;
}

function renderMenus() {
  const menus = getFilteredMenus();
  resultSummary.textContent = `${currentBrand === "전체" ? "전체 공식 확인 메뉴" : currentBrand} ${menus.length}개를 보고 있습니다. 모든 수치는 100g당 기준입니다.`;
  emptyState.hidden = menus.length !== 0;
  menuGrid.innerHTML = menus.map((item) => `
    <article class="menu-card">
      <div class="card-head"><span class="brand-tag">${item.brand}</span><span class="type-tag">${item.type}</span></div>
      <h2>${item.name}</h2>
      <p class="weight">${item.weight}</p>
      <div class="calorie-row"><strong>${formatNumber(item.kcal)}</strong><span>kcal / 100g</span></div>
      <dl class="nutrition">
        <div><dt>단백질</dt><dd>${formatNumber(item.protein)}g</dd></div>
        <div><dt>나트륨</dt><dd>${formatNumber(item.sodium)}mg</dd></div>
      </dl>
      <div class="card-links">
        <a class="source-link" href="${item.source}" target="_blank" rel="noopener noreferrer">공식 영양정보</a>
        <a class="discipline-link" href="index.html#doseGrid">훈육받기</a>
      </div>
    </article>
  `).join("");
}

brandFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-brand]");
  if (!button) return;
  currentBrand = button.dataset.brand;
  renderFilters();
  renderMenus();
});

menuSearch.addEventListener("input", renderMenus);
menuSort.addEventListener("change", renderMenus);

renderFilters();
renderMenus();
