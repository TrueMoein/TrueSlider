import sliderMaker from './modules/sliderMaker';
import './assets/styles/main.scss';
import { ready } from './modules/events';

const defaultOptions = {
  el: '#true-slider',
  width: 500,
  height: 400,
  speed: 2000,
  autoplay: true,
  repeat: true
};

function trueSlider(options = defaultOptions) {
  window.True$lider = { ...defaultOptions, ...options };
  document.dispatchEvent(ready());

  sliderMaker();
}

window.TrueSlider = trueSlider;
