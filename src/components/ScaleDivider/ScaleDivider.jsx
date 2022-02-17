import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleDivider(props) {
  const WrappedDivider = ReactWrapper('scale-divider');

  return (
    <WrappedDivider {...props} id={id}>
    </WrappedDivider>
  );
}

ScaleDivider.propTypes = {
  vertical: PropTypes.bool,
  styles: PropTypes.string,
};

export { ScaleDivider as default };
