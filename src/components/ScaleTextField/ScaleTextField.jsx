import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleTextField(props) {
  const WrappedTextField = ReactWrapper('scale-text-field');

  return (
    <WrappedTextField {...props} id={id} /> 
  );
}

ScaleTextField.propTypes = {
  /**
   * @uxpinpropname Label
   * */
  children: PropTypes.node,
  type: PropTypes.oneOf(['email', 'hidden', 'number', 'password', 'tel', 'text']),
  name: PropTypes.string,
  helperText: PropTypes.string,
  /**
   * Works but Would need to add logic for 'invalid' changing value
   */
  invalid: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
    /**
   * WWorks but would need to add logic for 'required' chaning value
   */
  required: PropTypes.bool,
  counter: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  value: PropTypes.string,
  inputId: PropTypes.string,
  inputAutofocus: PropTypes.bool,
  styles: PropTypes.string,


};

export { ScaleTextField as default };
