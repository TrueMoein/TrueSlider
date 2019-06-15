import elementMaker from '../utils/elementMaker';
import sliderElement from '../utils/sliderElement';
import { navigationsCreated } from './events';

export function nextSlide() {
  const { width } = window.True$lider;
  const slides = [...sliderElement().getElementsByClassName('ts-slide-item')];
  if (Number(slides[slides.length - 1].style.left.slice(0, -2)) === width)
    return;
  slides.forEach(slide => {
    slide.style.left = `${Number(slide.style.left.slice(0, -2)) - width}px`;
  });
}

export function backSlide() {
  const { width } = window.True$lider;
  const slides = [...sliderElement().getElementsByClassName('ts-slide-item')];
  if (Number(slides[0].style.left.slice(0, -2)) === 0) return;
  slides.forEach(slide => {
    slide.style.left = `${Number(slide.style.left.slice(0, -2)) + width}px`;
  });
}

export function playSlider(element) {
  const { speed } = window.True$lider;
  const slides = [...element.getElementsByClassName('ts-slide-item')];
  let skip = 0;
  const playerInterval = setInterval(() => {
    nextSlide();
    skip += 1;
    if (skip === slides.length - 1) clearInterval(playerInterval);
  }, speed);
}

export default function navigation(element) {
  const slideRight = elementMaker('div', {
    class: 'icon-trueslider-right ts-navigation-icon ts-right-nav'
  });
  slideRight.addEventListener('click', nextSlide);
  const slideLeft = elementMaker('div', {
    class: 'icon-trueslider-left ts-navigation-icon ts-left-nav'
  });
  slideLeft.addEventListener('click', backSlide);

  element.appendChild(slideLeft);
  element.appendChild(slideRight);
  document.dispatchEvent(navigationsCreated());
}
