import elementMaker from "../utils/elementMaker";

export default function navigation(el) {
  const slideRight = elementMaker("div", null, {
    class: "icon trueslider-right"
  });
  const slideLeft = elementMaker("div", null, {
    class: "icon trueslider-left"
  });

  el.appendChild(slideRight);
  el.appendChild(slideLeft);
}
