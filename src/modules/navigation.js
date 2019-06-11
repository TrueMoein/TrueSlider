// @flow

import elementMaker from '../utils/elementMaker';

export default function prevNextButtons(el: HTMLElement) {
  const element = elementMaker('div', {
    class: 'test',
    title: 'moein',
  });

  el.appendChild(element);
}
