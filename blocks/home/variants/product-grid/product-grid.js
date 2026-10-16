/**
 * Builds the product-grid variant used by Home carousel cards.
 *
 * @param {HTMLPictureElement[]} pictures Authored product pictures
 * @returns {HTMLDivElement} Product grid element
 */
export function createProductGrid(pictures) {
  const grid = document.createElement('div');
  grid.className = 'home-product-grid';

  pictures.slice(0, 4).forEach((picture) => {
    const image = picture.querySelector('img');
    const imageWrapper = picture.closest('a') || picture;
    if (image) image.loading = 'lazy';

    const product = document.createElement('div');
    product.className = 'home-product';
    product.append(imageWrapper);
    grid.append(product);
  });

  return grid;
}
