import * as PropTypes from 'prop-types';
import * as React from 'react';

function ScaleOption(props) {
  return (
    <option {...props}>
      {props.children}
    </option>
  );
}

ScaleOption.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
  value: PropTypes.string,
};

export { ScaleOption as default };
