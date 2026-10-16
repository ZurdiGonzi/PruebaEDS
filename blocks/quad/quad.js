/**
 * Decorates a promotional quad block.
 *
 * The first authored row contains the heading and optional introductory text.
 * Each following row contains a product image and its discount text.
 *
 * @param {Element} block The Quad block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  const headingRow = rows.shift();
  if (!headingRow) return;

  const heading = document.createElement('div');
  heading.className = 'quad-heading';
  heading.append(...headingRow.childNodes);

  const grid = document.createElement('div');
  grid.className = 'quad-grid';
  grid.setAttribute('role', 'list');

  rows.forEach((row) => {
    const cells = [...row.children];
    const picture = row.querySelector('picture');
    if (!picture) return;

    const product = document.createElement('div');
    product.className = 'quad-product';
    product.setAttribute('role', 'listitem');

    const image = picture.querySelector('img');
    const imageWrapper = picture.closest('a') || picture;
    if (image) image.loading = 'lazy';

    const media = document.createElement('div');
    media.className = 'quad-product-media';
    media.append(imageWrapper);
    product.append(media);

    const discountText = cells
      .map((cell) => cell.textContent.trim())
      .find((text) => /-?\s?\d+\s?%/.test(text));

    if (discountText) {
      const discount = document.createElement('span');
      discount.className = 'quad-discount';
      discount.textContent = discountText.match(/-?\s?\d+\s?%/)[0].replace(/\s+/g, '');
      product.append(discount);
    }

    grid.append(product);
  });

  if (!grid.children.length) return;

  const content = document.createElement('div');
  content.className = 'quad-content';
  content.append(heading, grid);
  block.replaceChildren(content);
}
