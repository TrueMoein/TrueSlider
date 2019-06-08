/* @flow */

type messageType =
  | 'noElement'
  | 'notFoundElement'

export default function message(type: messageType): string {
  switch (type) {
    case 'noElement': return 'Please add an element with specific id and set it to "el" trueSlider option';
    case 'notFoundElement': return `Can't find any element with ${window.$TSOptions.el.slice(1)} id.`;
    default: return 'no';
  }
}
