/**
 * Exception for using in project
 * @param {string} type - The title of the book.
 * @return {Error} an error to throw
 */
export default function exception(type) {
  const { el } = window.True$lider;
  switch (type) {
    case 'queryClassOrId':
      return Error(
        `"${el}" is not a valid selector for element, Please pass an id or class name to el property. example: ".true-slider" or "#slider"`
      );
    case 'elementNotFound':
      return Error(
        `Element with ${el.startsWith('.') ? 'class' : 'id'} "${el.slice(
          1
        )}" not found!`
      );
    case 'optionsNotProvided':
      return Error('The required options not provided');
    case 'imagesNotFound':
      return Error('Images array in trueslider options not found!');
    default:
      return Error('Error');
  }
}
