const chickenMenus = [
  ["\uad50\ucd0c\uce58\ud0a8", "\ubc18\ubc18\uc2a4\ud2f1 [\uac04\uc7a5+\ub808\ub4dc]", "\uc2a4\ud2f1", 275, 27, 354, "100g\ub2f9 \u00b7 \uc870\ub9ac \uc804 920g", "https://www.kyochon.com/menu/view.asp?cg=2&id=30086"],
  ["\uad50\ucd0c\uce58\ud0a8", "\ub9ac\uc5bc\ud6c4\ub77c\uc774\ub4dc\uc21c\uc0b4", "\uc21c\uc0b4", 310.19, 20.25, 445.91, "100g\ub2f9 \u00b7 \uc911\ub7c9 \ubbf8\ud45c\uae30", "https://www.kyochon.com/menu/view.asp?cg=2&id=38732"],
  ["\uad50\ucd0c\uce58\ud0a8", "\uc591\ub150\uce58\ud0a8\uc21c\uc0b4", "\uc21c\uc0b4", 310, 21, 570, "100g\ub2f9 \u00b7 \uc870\ub9ac \uc804 500g", "https://www.kyochon.com/menu/view.asp?cg=2&id=40962"],
  ["\uad50\ucd0c\uce58\ud0a8", "\uc591\ub150\uce58\ud0a8\uc2f1\uae00\uc719", "\uc719", 320, 19, 560, "100g\ub2f9 \u00b7 \uc719+\ubd09 6\uc870\uac01", "https://www.kyochon.com/menu/view.asp?cg=2&id=40915"],
  ["\uad50\ucd0c\uce58\ud0a8", "\ud5c8\ub2c8\uc21c\uc0b4[S]", "\uc21c\uc0b4", 345, 19, 420, "100g\ub2f9 \u00b7 \uc870\ub9ac \uc804 250g", "https://www.kyochon.com/menu/view.asp?cg=2&id=38055"],
  ["\uad50\ucd0c\uce58\ud0a8", "\ubc18\ubc18\uc21c\uc0b4 [\ub808\ub4dc+\ud5c8\ub2c8]", "\uc21c\uc0b4", 365, 24, 430, "100g\ub2f9 \u00b7 \uc870\ub9ac \uc804 600g", "https://www.kyochon.com/menu/view.asp?id=38414"],
  ["BBQ", "\uc790\uba54\uc774\uce74 \ud1b5\ub2e4\ub9ac\uad6c\uc774", "\uad6c\uc774", 201.48, 20.6, 423.3, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2253"],
  ["BBQ", "\ud669\uae08\uc62c\ub9ac\ube0c\uce58\ud0a8 (\ub2ed\ub2e4\ub9ac)", "\ud6c4\ub77c\uc774\ub4dc", 243.78, 20.78, 469.4, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2248"],
  ["BBQ", "\ud669\uae08\uc62c\ub9ac\ube0c\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", 253.72, 18.77, 408.19, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2247"],
  ["BBQ", "\uc624\ub9ac\uc9c0\ub0a0 \uc591\ub150\uce58\ud0a8", "\uc591\ub150", 270, 16.34, 528.4, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2256"],
  ["BBQ", "\uc624\ub9ac\uc9c0\ub0a0 \uc591\ub150\uce58\ud0a8 (\uc21c\uc0b4)", "\uc21c\uc0b4", 273.24, 16.63, 451.74, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2260"],
  ["BBQ", "\ud56b\ud669\uae08\uc62c\ub9ac\ube0c\uce58\ud0a8 \ud06c\ub9ac\uc2a4\ud53c", "\ud6c4\ub77c\uc774\ub4dc", 285.77, 20.3, 361.76, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2264"],
  ["BBQ", "\ud669\uae08\uc62c\ub9ac\ube0c\uce58\ud0a8 (\ucf64\ubcf4)", "\ucf64\ubcf4", 288.34, 20.94, 357.54, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2284"],
  ["BBQ", "\ud669\uae08\uc62c\ub9ac\ube0c\uce58\ud0a8 (\uc21c\uc0b4)", "\uc21c\uc0b4", 311.14, 21.39, 412.93, "100g\ub2f9 \u00b7 \uacf5\uc2dd \uc601\uc591\uc815\ubcf4", "https://mt.bbq.co.kr/menu/menuView.asp?midx=2259"],
  ["BHC", "\ub9db\ucd08\ud0b9", "\uc591\ub150", 275.6, 19.3, 345.7, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.diningcode.com/profile.php?rid=UZegemK2J7jU", true],
  ["BHC", "\uc3d8\ub9c8\uce58", "\uc591\ub150", 279.6, 19.1, 405, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://blogdaybook.tistory.com/1302", true],
  ["BHC", "\ucf70\uc0ad\ud0b9", "\ud6c4\ub77c\uc774\ub4dc", 341.7, 18.9, 349.7, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.diningcode.com/profile.php?rid=vyK0pbQfz7m9", true],
  ["BHC", "\ub9c8\ubc95\ud074 \ucf64\ubcf4", "\ucf64\ubcf4", 362.6, 18, 417.7, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.diningcode.com/profile.php?rid=PzjkxjfyEe1h", true],
  ["\ucc98\uac13\uc9d1", "\ud6c4\ub77c\uc774\ub4dc\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", 2100, null, null, "\ud55c \ub9c8\ub9ac \uae30\uc900 \u00b7 \ucc38\uace0\uce58", "https://myteatime.kr/food/?bmode=view&idx=166307032", true, true],
  ["\ucc98\uac13\uc9d1", "\uc288\ud504\ub9bc \uc591\ub150\uce58\ud0a8", "\uc591\ub150", 2700, null, null, "\ud55c \ub9c8\ub9ac 1,101g \uae30\uc900 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/%EC%B2%98%EA%B0%93%EC%A7%91/%EC%8A%88%ED%94%84%EB%A6%BC-%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8/1%EB%A7%88%EB%A6%AC", true, true],
  ["\uad7d\ub124", "\uace0\ucd94\ubc14\uc0ac\uc0ad", "\uc624\ube10\uad6c\uc774", 233.6, 23.7, 449, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.inout.team/search/food/detail/195605", true],
  ["\uad7d\ub124", "\uc624\ub9ac\uc9c0\ub0a0", "\uc624\ube10\uad6c\uc774", 960, 119, null, "1\uc778\ubd84 588g \uae30\uc900 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?frc=True&pg=1&q=%EA%B5%BD%EB%84%A4%EC%B9%98%ED%82%A8+%EA%B3%A0%EC%B6%94%EB%B0%94%EC%82%AC%EC%82%AD", true, true],
  ["\ub124\ub124\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", "\ud6c4\ub77c\uc774\ub4dc", 331, 25, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%EB%84%A4%EB%84%A4%EC%B9%98%ED%82%A8+%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C%EC%B9%98%ED%82%A8", true],
  ["\ub124\ub124\uce58\ud0a8", "\uc591\ub150\uce58\ud0a8", "\uc591\ub150", 1827, 171, null, "\ud55c \ub9c8\ub9ac 700g \uae30\uc900 \u00b7 \ucc38\uace0\uce58", "https://mobile.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%ED%8E%98%EB%A6%AC%EC%B9%B4%EB%82%98+%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8", true, true],
  ["\ud478\ub77c\ub2ed", "\uace0\ucd94\ub9c8\uc694\uce58\ud0a8", "\uc591\ub150", 233, 18, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://mobile.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%ED%91%B8%EB%9D%BC%EB%8B%AD+%EC%9D%BC%ED%92%88%EA%B9%90%ED%92%8D", true],
  ["\ud478\ub77c\ub2ed", "\uc77c\ud488\uae50\ud48d", "\uc591\ub150", 256, 10.3, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://mobile.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%ED%91%B8%EB%9D%BC%EB%8B%AD+%EC%9D%BC%ED%92%88%EA%B9%90%ED%92%8D", true],
  ["\ud478\ub77c\ub2ed", "\ud1b5 \ub2ed\ub2e4\ub9ac\uad6c\uc774", "\uad6c\uc774", 430, 32, null, "1\uc778\ubd84 250g \uae30\uc900 \u00b7 \ucc38\uace0\uce58", "https://mobile.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?pg=4&q=%ED%91%B8%EB%9D%BC%EB%8B%AD+%EC%9D%BC%ED%92%88%EA%B9%90%ED%92%8D", true, true],
  ["60\uacc4\uce58\ud0a8", "\ud06c\ud06c\ud06c\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", 289, 18, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/60%EA%B3%84%EC%B9%98%ED%82%A8/%ED%81%AC%ED%81%AC%ED%81%AC%EC%B9%98%ED%82%A8/100g?frc=True", true],
  ["60\uacc4\uce58\ud0a8", "\uac04\uc9c0\uce58\ud0a8", "\uc591\ub150", 244, 15.2, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=60%EA%B3%84%EC%B9%98%ED%82%A8", true],
  ["\ud398\ub9ac\uce74\ub098", "\ud6c4\ub77c\uc774\ub4dc\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", 328, 25, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/%ED%8E%98%EB%A6%AC%EC%B9%B4%EB%82%98", true],
  ["\ud398\ub9ac\uce74\ub098", "\uc591\ub150\uce58\ud0a8", "\uc591\ub150", 300, 18, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://mobile.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%ED%8E%98%EB%A6%AC%EC%B9%B4%EB%82%98+%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8", true],
  ["\uba55\uc2dc\uce74\ub098", "\ud6c4\ub77c\uc774\ub4dc\uce58\ud0a8", "\ud6c4\ub77c\uc774\ub4dc", 270, 24.67, null, "100g\ub2f9 \u00b7 \ucc38\uace0\uce58", "https://www.fatsecret.kr/%EC%B9%BC%EB%A1%9C%EB%A6%AC-%EC%98%81%EC%96%91%EC%86%8C/search?q=%EB%84%A4%EB%84%A4%EC%B9%98%ED%82%A8+%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C%EC%B9%98%ED%82%A8", true]
].map(([brand, name, type, kcal, protein, sodium, weight, source, reference = false, total = false]) => ({ brand, name, type, kcal, protein, sodium, weight, source, reference, total }));

const allLabel = "\uc804\uccb4";
const filters = [allLabel, "\uad50\ucd0c\uce58\ud0a8", "BBQ", "BHC", "\ucc98\uac13\uc9d1", "\uad7d\ub124", "\ub124\ub124\uce58\ud0a8", "\ud478\ub77c\ub2ed", "60\uacc4\uce58\ud0a8", "\ud398\ub9ac\uce74\ub098", "\uba55\uc2dc\uce74\ub098"];
const menuGrid = document.querySelector("#menuGrid");
const brandFilters = document.querySelector("#brandFilters");
const menuSearch = document.querySelector("#menuSearch");
const menuSort = document.querySelector("#menuSort");
const resultSummary = document.querySelector("#resultSummary");
const emptyState = document.querySelector("#emptyState");
const menuCount = document.querySelector("#menuCount");
let currentBrand = allLabel;
menuCount.textContent = chickenMenus.length;

function formatNumber(value) {
  if (value === null || value === undefined) return "\ubbf8\uacf5\uac1c";
  return Number.isInteger(value) ? value.toLocaleString("ko-KR") : value.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
}
function renderFilters() {
  brandFilters.innerHTML = filters.map((brand) => `<button class="brand-filter ${brand === currentBrand ? "is-active" : ""}" type="button" data-brand="${brand}">${brand}</button>`).join("");
}
function getFilteredMenus() {
  const query = menuSearch.value.trim().toLowerCase();
  const items = chickenMenus.filter((item) => (currentBrand === allLabel || item.brand === currentBrand) && (!query || `${item.brand} ${item.name} ${item.type}`.toLowerCase().includes(query)));
  if (menuSort.value === "low") items.sort((a, b) => a.kcal - b.kcal);
  if (menuSort.value === "high") items.sort((a, b) => b.kcal - a.kcal);
  if (menuSort.value === "protein") items.sort((a, b) => (b.protein ?? -1) - (a.protein ?? -1));
  return items;
}
function renderMenus() {
  const menus = getFilteredMenus();
  const prefix = currentBrand === allLabel ? "\uc804\uccb4 \ub4f1\ub85d \uba54\ub274" : currentBrand;
  resultSummary.textContent = `${prefix} ${menus.length}\uac1c\ub97c \ubcf4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uce74\ub4dc\ub9c8\ub2e4 100g\ub2f9 \ub610\ub294 \ud55c \ub9c8\ub9ac \uae30\uc900\uc744 \ud655\uc778\ud558\uc138\uc694.`;
  emptyState.hidden = menus.length !== 0;
  menuGrid.innerHTML = menus.map((item) => `<article class="menu-card"><div class="card-head"><span class="brand-tag">${item.brand}</span><span class="source-status ${item.reference ? "is-reference" : ""}">${item.reference ? "\ucc38\uace0\uce58" : "\uacf5\uc2dd \ud655\uc778"}</span></div><h2>${item.name}</h2><p class="weight">${item.type} \u00b7 ${item.weight}</p><div class="calorie-row"><strong>${formatNumber(item.kcal)}</strong><span>kcal / ${item.total ? "\ud55c \ub9c8\ub9ac" : "100g"}</span></div><dl class="nutrition"><div><dt>\ub2e8\ubc31\uc9c8</dt><dd>${formatNumber(item.protein)}${item.protein === null ? "" : "g"}</dd></div><div><dt>\ub098\ud2b8\ub968</dt><dd>${formatNumber(item.sodium)}${item.sodium === null ? "" : "mg"}</dd></div></dl><div class="card-links"><a class="source-link" href="${item.source}" target="_blank" rel="noopener noreferrer">${item.reference ? "\ucc38\uace0 \ucd9c\ucc98" : "\uacf5\uc2dd \uc601\uc591\uc815\ubcf4"}</a><a class="discipline-link" href="index.html#doseGrid">\ud6c8\uc721\ubc1b\uae30</a></div></article>`).join("");
}
brandFilters.addEventListener("click", (event) => { const button = event.target.closest("[data-brand]"); if (!button) return; currentBrand = button.dataset.brand; renderFilters(); renderMenus(); });
menuSearch.addEventListener("input", renderMenus);
menuSort.addEventListener("change", renderMenus);
renderFilters();
renderMenus();
