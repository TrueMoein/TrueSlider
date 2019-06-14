export default function elementMaker(type, body, attributes) {
  const element = document.createElement(type);

  if (body) element.innerHTML = body;

  if (attributes) {
    Object.entries(attributes).forEach(attribute => {
      element.setAttribute(attribute[0], attribute[1]);
    });
  }

  return element;
}
