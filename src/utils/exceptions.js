// @flow

type exceptions =
  | 'elementNotFound'
  | 'optionsNotProvided'

export default function exception(type: exceptions) {
  switch (type) {
    case 'elementNotFound': return Error(`Element with id ${window.True$lider.el} not found!`);
    case 'optionsNotProvided': return Error('The required options not provided');
    default: return Error('Error');
  }
}
