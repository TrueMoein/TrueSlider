// @flow

import exception from '../utils/exceptions';
import prevNextButtons from './navigation';

function makeSlider(element: HTMLAnchorElement) {
  const { width, height } = window.True$lider;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.classList.add('TrueSlider');
}

export default function sliderMaker() {
  const { el } = window.True$lider;

  if (!el.startsWith('.') && !el.startsWith('#')) throw exception('queryClassOrId');

  const sliderElement = document.querySelector(el);

  if (!sliderElement) throw exception('elementNotFound');

  makeSlider(sliderElement);
  prevNextButtons(sliderElement);
}
