/*
  I'm in a holiday. so i decide to write a slider plugin just for practice.
  @flow
*/

import sliderMaker from './modules/sliderMaker';
import './assets/styles/main.scss';

const defaultOptions = {
  el: '#true-slider',
  width: 500,
  height: 400,
  speed: 2000,
};

type optionsType = {
  el: string,
  width?: number,
  height?: number,
  speed?: number
}

function trueSlider(options: optionsType = defaultOptions) {
  window.True$lider = options;
  sliderMaker();
}

window.TrueSlider = trueSlider;
