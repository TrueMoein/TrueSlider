import exception from '../utils/exceptions';
import elementMaker from '../utils/elementMaker';
import { allSlidesLoaded } from './events';
import { playSlider } from './navigation';

function makeSlide(element) {
  let left = 0;
  const { images, width, autoplay } = window.True$lider;
  images.forEach((src, index) => {
    const slideElement = elementMaker('div', {
      class: 'ts-slide-item',
      id: `ts-slide-${index + 1}`
    });
    slideElement.style.backgroundImage = `url(${src})`;
    slideElement.style.left = `${left}px`;
    left += width;
    element.appendChild(slideElement);
  });
  document.dispatchEvent(allSlidesLoaded());
  if (autoplay) playSlider(element);
}

export default function slides(element) {
  const { images } = window.True$lider;

  if (!images) throw exception('imagesNotFound');

  makeSlide(element);
}
