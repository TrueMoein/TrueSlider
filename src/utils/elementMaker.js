// @flow

export default function elementMaker(type: string, attributes: {}): HTMLElement {
  const element = document.createElement(type, attributes);

  Object.entries(attributes).forEach((a) => {
    element.setAttribute(a[0], a[1]);
  });

  return element;
}
