/**
 * Decorates a simple promotional block with text over a full-bleed image.
 *
 * Supported authoring: the text and image may be in separate cells of the
 * first row, or in separate rows.
 *
 * @param {Element} block The Simple block element
 */
export default function decorate(block) {
  const image = block.querySelector('picture img');
  if (!image) return;

  const picture = image.closest('picture');
  const imageWrapper = picture.closest('a') || picture;
  const textNodes = [];

  [...block.children].forEach((row) => {
    [...row.children].forEach((cell) => {
      if (!cell.querySelector('picture')) {
        [...cell.childNodes].forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
          textNodes.push(node);
        });
      }
    });
  });

  const content = document.createElement('div');
  content.className = 'simple-content';
  textNodes.forEach((node) => content.append(node));

  const media = document.createElement('div');
  media.className = 'simple-media';
  image.loading = 'lazy';
  media.append(imageWrapper);

  block.replaceChildren(media, content);
}
