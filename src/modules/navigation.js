import elementMaker from '../utils/elementMaker';

export default function navigation(el) {
  const slideRight = elementMaker('div', {
    class: 'tsNavigation slide-right',
  });
  const slideLeft = elementMaker('div', {
    class: 'tsNavigation slide-left',
  });

  el.appendChild(slideRight);
  el.appendChild(slideLeft);
}
