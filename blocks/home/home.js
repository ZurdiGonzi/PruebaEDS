import { createProductGrid } from './variants/product-grid/product-grid.js';

/**
 * Decorates the Home promotional carousel.
 *
 * Authoring model: each row is one card. The first cell is the card content
 * (heading, description and optional CTA); the remaining cells are images.
 * One image creates a feature card; two to four images create a product grid.
 *
 * @param {Element} block The Home block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  const carousel = document.createElement('div');
  carousel.className = 'home-carousel';
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-roledescription', 'carrusel');
  carousel.setAttribute('aria-label', 'Promociones destacadas');

  const viewport = document.createElement('div');
  viewport.className = 'home-viewport';

  const track = document.createElement('ul');
  track.className = 'home-track';
  track.setAttribute('role', 'list');

  rows.forEach((row, index) => {
    const cells = [...row.children];
    const content = cells.shift();
    const images = cells
      .map((cell) => cell.querySelector('picture'))
      .filter(Boolean);

    if (!content || !images.length) return;

    const card = document.createElement('li');
    card.className = 'home-card';
    card.setAttribute('role', 'group');
    card.setAttribute('aria-roledescription', 'diapositiva');
    card.setAttribute('aria-label', `${index + 1} de ${rows.length}`);

    const body = document.createElement('div');
    body.className = 'home-card-content';
    while (content.firstChild) body.append(content.firstChild);
    card.append(body);

    if (images.length === 1) {
      const media = document.createElement('div');
      media.className = 'home-card-media';

      const picture = images[0];
      const image = picture.querySelector('img');
      const imageWrapper = picture.closest('a') || picture;
      if (image) image.loading = 'lazy';

      media.append(imageWrapper);
      card.append(media);
    } else {
      card.append(createProductGrid(images));
    }
    track.append(card);
  });

  if (!track.children.length) return;

  viewport.append(track);
  carousel.append(viewport);

  const createButton = (direction, label) => {
    const button = document.createElement('button');
    button.className = `home-navigation home-navigation-${direction}`;
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.innerHTML = `<span aria-hidden="true">${direction === 'previous' ? '&#8249;' : '&#8250;'}</span>`;
    return button;
  };

  const previousButton = createButton('previous', 'Ver promoción anterior');
  const nextButton = createButton('next', 'Ver promoción siguiente');
  carousel.append(previousButton, nextButton);

  const getStep = () => {
    const card = track.querySelector('.home-card');
    if (!card) return 0;
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateNavigation = () => {
    const maxScroll = track.scrollWidth - viewport.clientWidth;
    previousButton.disabled = viewport.scrollLeft <= 1;
    nextButton.disabled = viewport.scrollLeft >= maxScroll - 1;
  };

  const move = (direction) => {
    viewport.scrollBy({
      left: getStep() * direction,
      behavior: 'smooth',
    });
  };

  previousButton.addEventListener('click', () => move(-1));
  nextButton.addEventListener('click', () => move(1));
  viewport.addEventListener('scroll', updateNavigation, { passive: true });
  window.addEventListener('resize', updateNavigation);

  block.replaceChildren(carousel);
  updateNavigation();
}
