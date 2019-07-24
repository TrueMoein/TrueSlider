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

const betterConfig = {
  el: '#slider',
  width: 200,
  height: 100,
  speed: 1000,
  autoplay: false,
  repeat: false
};

function trueSlider(options = betterConfig) {
  window.True$lider = { ...defaultOptions, ...options };
  document.dispatchEvent(ready());

  sliderMaker();
}

window.TrueSlider = trueSlider;
