import elementMaker from "../utils/elementMaker";

export default function navigation(el) {
  const slideRight = elementMaker("div", null, {
    class: "icon-trueslider-right ts-navigation-icon ts-right-nav"
  });
  const slideLeft = elementMaker("div", null, {
    class: "icon-trueslider-left ts-navigation-icon ts-left-nav"
  });

  el.appendChild(slideLeft);
  el.appendChild(slideRight);
}
