import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleRadioButton(props) {
  const WrappedRadioButton = ReactWrapper('scale-radio-button');

  return (
    <WrappedRadioButton {...props} id={id}>
    </WrappedRadioButton>
  );
}

ScaleRadioButton.defaultProps = {
  checked: false,
};

ScaleRadioButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string,
  inputId: PropTypes.string,
  styles: PropTypes.object,
};

export { ScaleRadioButton as default };
