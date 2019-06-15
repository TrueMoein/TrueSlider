import exception from '../utils/exceptions';
import navigation from './navigation';
import slides from './slides';

function makeSlider(element) {
  const { width, height } = window.True$lider;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.classList.add('TrueSlider');
}

export default function sliderMaker() {
  const { el } = window.True$lider;

  if (!el.startsWith('.') && !el.startsWith('#'))
    throw exception('queryClassOrId');

  const sliderElement = document.querySelector(el);

  if (!sliderElement) throw exception('elementNotFound');

  // make slider
  makeSlider(sliderElement);
  // add navigations
  navigation(sliderElement);
  // add slides
  slides(sliderElement);
}
