function getAuthoredValues(block) {
  const rows = [...block.children];

  // DA can serialize a one-column block either as one row per value or as
  // one row containing separate paragraphs. Support both authoring formats.
  if (rows.length === 1) {
    const paragraphs = [...rows[0].querySelectorAll('p')]
      .map((paragraph) => paragraph.textContent.trim())
      .filter(Boolean);
    if (paragraphs.length > 1) return paragraphs;
  }

  return rows.map((row) => row.textContent.trim());
}

function formatCard(title, description, action, theme) {
  return `
    <a class="format-card ${theme}" href="#formats">
      <span class="format-card__glow"></span>
      <span class="format-card__content">
        <strong>${title}</strong>
        <span>${description}</span>
        <em>${action}</em>
      </span>
    </a>`;
}

export default function decorate(block) {
  const [
    brand,
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    decksLabel,
    cardsLabel,
    creatorsLabel,
    advancedLabel,
    searchPlaceholder,
    searchLabel,
    noteBadge,
    noteText,
    introEyebrow,
    introTitle,
    introAccent,
    introDescription,
    formatsEyebrow,
    formatsTitle,
    formatsDescription,
    commanderTitle,
    commanderDescription,
    commanderAction,
    modernTitle,
    modernDescription,
    modernAction,
    standardTitle,
    standardDescription,
    standardAction,
    limitedTitle,
    limitedDescription,
    limitedAction,
    ctaEyebrow,
    ctaTitle,
    ctaLabel,
    themeLabel,
    navSearchLabel,
    menuLabel,
    menuText,
  ] = getAuthoredValues(block);

  block.innerHTML = `
    <section class="atlas-hero" id="top">
      <nav class="atlas-nav" aria-label="Primary navigation">
        <a class="atlas-brand" href="/" aria-label="${brand}">
          <span class="atlas-brand__mark">✦</span> ${brand}
        </a>
        <div class="atlas-nav__actions">
          <button class="icon-button" type="button" aria-label="${themeLabel}">☾</button>
          <button class="icon-button" type="button" aria-label="${navSearchLabel}">⌕</button>
          <button class="menu-button" type="button" aria-label="${menuLabel}">☰ <span>${menuText}</span></button>
        </div>
      </nav>
      <div class="atlas-orb atlas-orb--one"></div>
      <div class="atlas-orb atlas-orb--two"></div>
      <div class="atlas-hero__content">
        <p class="eyebrow">${heroEyebrow}</p>
        <h1>${heroTitle}</h1>
        <p class="atlas-hero__subtitle">${heroSubtitle}</p>
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
        <p class="atlas-note"><b>${noteBadge}</b> ${noteText}</p>
      </div>
    </section>
    <section class="intro-section">
      <span class="crown">♛</span>
      <p class="eyebrow eyebrow--dark">${introEyebrow}</p>
      <h2>${introTitle}<br><span>${introAccent}</span></h2>
      <p>${introDescription}</p>
    </section>
    <section class="formats-section" id="formats">
      <div class="formats-section__heading">
        <p class="eyebrow eyebrow--dark">${formatsEyebrow}</p>
        <h2>${formatsTitle}</h2>
        <p>${formatsDescription}</p>
      </div>
      <div class="format-grid">
        ${formatCard(commanderTitle, commanderDescription, commanderAction, 'violet')}
        ${formatCard(modernTitle, modernDescription, modernAction, 'emerald')}
        ${formatCard(standardTitle, standardDescription, standardAction, 'crimson')}
        ${formatCard(limitedTitle, limitedDescription, limitedAction, 'gold')}
      </div>
    </section>
    <section class="cta-section">
      <p class="eyebrow">${ctaEyebrow}</p>
      <h2>${ctaTitle}</h2>
      <a href="#top">${ctaLabel}</a>
    </section>`;

  const tabs = block.querySelectorAll('[role="tab"]');
  const search = block.querySelector('.deck-search');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.toggle('active', item === tab);
        item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
      });
    });
  });

  search.addEventListener('submit', (event) => {
    event.preventDefault();
    search.querySelector('input').focus();
  });
}
