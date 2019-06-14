import elementMaker from "../utils/elementMaker";

export default function navigation(el) {
  const slideRight = elementMaker("div", "salsan", {
    class: "tsNavigation slide-right"
  });
  const slideLeft = elementMaker("div", "salsan", {
    class: "tsNavigation slide-left"
  });

  el.appendChild(slideRight);
  el.appendChild(slideLeft);
}
