function values(block) {
  return [...block.children].map((row) => row.textContent.trim());
}

export default function decorate(block) {
  const [
    brand,
    eyebrow,
    title,
    subtitle,
    decksLabel,
    cardsLabel,
    creatorsLabel,
    advancedLabel,
    searchPlaceholder,
    searchLabel,
  ] = values(block);

  block.innerHTML = `
    <section class="atlas-hero" id="top">
      <nav class="atlas-nav" aria-label="Primary navigation">
        <a class="atlas-brand" href="/" aria-label="${brand}">
          <span class="atlas-brand__mark">✦</span>${brand}
        </a>
        <div class="atlas-nav__actions">
          <button class="icon-button" type="button" aria-label="Toggle theme">☾</button>
          <button class="icon-button" type="button" aria-label="Search">⌕</button>
          <button class="menu-button" type="button" aria-label="Open menu">☰ <span>Menu</span></button>
        </div>
      </nav>
      <div class="atlas-orb atlas-orb--one"></div>
      <div class="atlas-orb atlas-orb--two"></div>
      <div class="atlas-hero__content">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="atlas-hero__subtitle">${subtitle}</p>
        <div class="search-tabs" role="tablist" aria-label="Search type">
          <button class="active" type="button" role="tab" aria-selected="true">${decksLabel}</button>
          <button type="button" role="tab" aria-selected="false">${cardsLabel}</button>
          <button type="button" role="tab" aria-selected="false">${creatorsLabel}</button>
          <a href="#formats">${advancedLabel}</a>
        </div>
        <form class="deck-search">
          <label class="sr-only" for="deck-search-input">${searchLabel}</label>
          <span aria-hidden="true">⌕</span>
          <input id="deck-search-input" type="search" placeholder="${searchPlaceholder}">
          <button type="submit">${searchLabel}</button>
        </form>
      </div>
    </section>`;

  const tabs = block.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.toggle('active', item === tab);
        item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
      });
    });
  });

  block.querySelector('.deck-search').addEventListener('submit', (event) => {
    event.preventDefault();
    block.querySelector('input').focus();
  });
}
