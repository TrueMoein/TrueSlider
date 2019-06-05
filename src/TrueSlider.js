(function() {
  window.TrueSlider = function(options) {
    window.trueSliderOptions = options;
    const {el} = options;
    const sliderElement = document.querySelector(`#${el}`);

    validateElement(sliderElement)
  }

  function validateElement(sliderElement) {
    if(!sliderElement) throw `There is no element with ${trueSliderOptions.el} id!`

    sliderCreator(sliderElement)
  }

  function setSliderOptions(sliderElement) {
    sliderElement.classList.add('true--__--slider')
    sliderElement.style.width = trueSliderOptions.width;
    sliderElement.style.height = trueSliderOptions.height;
  }

  function fillImages(sliderElement) {
    let left = 0;
    trueSliderOptions.images.forEach(function(url) {
      const image = document.createElement('img');
      image.setAttribute('src', url);
      image.classList.add('true--__--slider__image');
      image.style.left = `${left}px`;
      left += 1000;
      sliderElement.appendChild(image);
    })

    slideImages(sliderElement);
  }

  function slideImages(sliderElement) {
    const images = sliderElement.getElementsByClassName('true--__--slider__image');

    setInterval(function() {
      for(const image of images) {
        const imageLeft = image.style.left.slice(0, -2);
        image.style.left = `${imageLeft - 1000}px`
      }
    }, trueSliderOptions.delay)
  }

  function sliderCreator(sliderElement) {
    setSliderOptions(sliderElement);
    fillImages(sliderElement)
  }
}())