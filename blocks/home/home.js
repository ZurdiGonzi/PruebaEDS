function createFormatCard(title, description, theme) {
  return `
    <a class="format-card ${theme}" href="#formats">
      <span class="format-card__glow"></span>
      <span class="format-card__content">
        <strong>${title}</strong>
        <span>${description}</span>
        <em>Explore decks &rarr;</em>
      </span>
    </a>`;
}

export default function decorate(block) {
  block.innerHTML = `
    <section class="atlas-hero">
      <nav class="atlas-nav" aria-label="Primary navigation">
        <a class="atlas-brand" href="/" aria-label="Arcane Atlas home">
          <span class="atlas-brand__mark">✦</span> ARCANE ATLAS
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
        <p class="eyebrow">YOUR NEXT GREAT DECK</p>
        <h1>ARCANE ATLAS</h1>
        <p class="atlas-hero__subtitle">A modern home for every card game strategist.</p>
        <div class="search-tabs" role="tablist" aria-label="Search type">
          <button class="active" type="button" role="tab" aria-selected="true">Decks</button>
          <button type="button" role="tab" aria-selected="false">Cards</button>
          <button type="button" role="tab" aria-selected="false">Creators</button>
          <a href="#formats">Advanced &rarr;</a>
        </div>
        <form class="deck-search">
          <label class="sr-only" for="deck-search-input">Search decks</label>
          <span aria-hidden="true">⌕</span>
          <input id="deck-search-input" type="search" placeholder="Search decks, commanders or creators">
          <button type="submit">Search</button>
        </form>
        <p class="atlas-note"><b>NEW</b> Discover curated community collections</p>
      </div>
    </section>
    <section class="intro-section">
      <span class="crown">♛</span>
      <p class="eyebrow eyebrow--dark">PLAY YOUR WAY</p>
      <h2>Whatever your strategy,<br><span>we have a place for it.</span></h2>
      <p>Build, tune, and share decks with a thriving community of players. Explore the formats you love and find fresh inspiration for your next game night.</p>
    </section>
    <section class="formats-section" id="formats">
      <div class="formats-section__heading">
        <p class="eyebrow eyebrow--dark">DISCOVER FORMATS</p>
        <h2>Start your next brew</h2>
        <p>From casual tables to competitive play, there is a format waiting for you.</p>
      </div>
      <div class="format-grid">
        ${createFormatCard('Commander', 'Build around a legendary leader and bring your story to the table.', 'violet')}
        ${createFormatCard('Modern', 'Powerful strategies, iconic cards, and a constantly evolving metagame.', 'emerald')}
        ${createFormatCard('Standard', 'The newest cards and the most exciting ways to play them.', 'crimson')}
        ${createFormatCard('Limited', 'Draft, discover, and make every pick count.', 'gold')}
      </div>
    </section>
    <section class="cta-section">
      <p class="eyebrow">READY TO PLAY?</p>
      <h2>Your deck is waiting.</h2>
      <a href="#top">Create a deck &rarr;</a>
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
    const input = search.querySelector('input');
    input.focus();
    input.setAttribute('placeholder', input.value ? `No results for “${input.value}” yet` : 'Enter a deck name to begin');
  });
}
