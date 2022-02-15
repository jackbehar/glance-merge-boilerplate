import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleSwitch(props) {
  const WrappedSwitch = ReactWrapper('scale-switch');

  return (
    <WrappedSwitch {...props} id={id} />
  );
}

ScaleSwitch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  inputId: PropTypes.string,
  name: PropTypes.string,
};

ScaleSwitch.defaultProps = {
  checked: false,
};

export { ScaleSwitch as default };
