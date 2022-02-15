import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleDropdown(props) {
  const WrapperDropdown = ReactWrapper('scale-dropdown');

  return (
    <WrapperDropdown {...props} id={id}>
      {props.children}
    </WrapperDropdown>
  );
}

ScaleDropdown.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  label: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  value: PropTypes.string,
  inputId: PropTypes.string,
  visibleSize: PropTypes.number,
  controlled: PropTypes.bool,
  styles: PropTypes.object,
};

export { ScaleDropdown as default };
