export default function elementMaker(type, attributes) {
  const element = document.createElement(type);

  Object.entries(attributes).forEach((attribute) => {
    element.setAttribute(attribute[0], attribute[1]);
  });

  return element;
}
