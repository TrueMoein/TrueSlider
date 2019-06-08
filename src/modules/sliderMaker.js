import exceptions from '../utils/exceptions';

function sliderMaker() {
  const sliderElement = document.getElementById(window.True$lider.el);

  if (!sliderElement) throw exceptions('elementNotFound');
}

export default sliderMaker;
