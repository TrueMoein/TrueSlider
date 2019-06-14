export function ready(detail) {
  return new CustomEvent('TrueSlider->ready', {
    detail,
  });
}

export function loaded(detail) {
  return new CustomEvent('TrueSlider->loaded', {
    detail,
  });
}
