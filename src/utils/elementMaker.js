export default function elementMaker(type, attributes) {
  const element = document.createElement(type);

  if (attributes) {
    Object.entries(attributes).forEach(attribute => {
      element.setAttribute(attribute[0], attribute[1]);
    });
  }

  return element;
}
