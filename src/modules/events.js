export function ready() {
  return new Event('TrueSlider:ready');
}

export function navigationsCreated() {
  return new Event('TrueSlider:navigationsCreated');
}

export function allSlidesLoaded() {
  return new Event('TrueSlider:allSlidesLoaded');
}
