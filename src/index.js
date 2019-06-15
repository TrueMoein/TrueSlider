import sliderMaker from './modules/sliderMaker';
import './assets/styles/main.scss';
import { ready } from './modules/events';

const defaultOptions = {
  el: '#true-slider',
  width: 500,
  height: 400,
  speed: 2000
};

function trueSlider(options = defaultOptions) {
  window.True$lider = { ...defaultOptions, ...options };
  document.dispatchEvent(ready(options));

  sliderMaker();
}

window.TrueSlider = trueSlider;
