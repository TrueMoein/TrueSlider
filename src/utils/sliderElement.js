import exception from './exceptions';

function sliderElement() {
  const { el } = window.True$lider;

  if (!el.startsWith('.') && !el.startsWith('#'))
    throw exception('queryClassOrId');

  const element = document.querySelector(el);

  if (!element) throw exception('elementNotFound');

  return element;
}

export default sliderElement;
