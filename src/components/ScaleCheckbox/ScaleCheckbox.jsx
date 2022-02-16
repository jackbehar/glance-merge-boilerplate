import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleCheckbox(props) {
  const WrappedCheckbox = ReactWrapper('scale-checkbox');

  return (
    <WrappedCheckbox {...props} id={id} /> 
  );
}

ScaleCheckbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  helperText: PropTypes.string,
  /**
   * Works but Would need to add logic for 'invalid' changing value
   */
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  inputId: PropTypes.string,
};

export { ScaleCheckbox as default };
