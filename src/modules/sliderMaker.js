import navigation from './navigation';
import slides from './slides';
import sliderElement from '../utils/sliderElement';

function makeSlider(element) {
  const { width, height } = window.True$lider;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.classList.add('TrueSlider');
}

export default function sliderMaker() {
  const element = sliderElement();
  // make slider
  makeSlider(element);
  // add slides
  slides(element);
  // add navigations
  navigation(element);
}
