import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleTag(props) {
  const WrappedTag = ReactWrapper('scale-tag');

  return (
    <WrappedTag {...props} id={id}>
      {props.children}
    </WrappedTag>
  );
}

ScaleTag.propTypes = {
  /**
   * @uxpinpropname Label
   * */
  children: PropTypes.node,
  disabled: PropTypes.bool,
  dismissable: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  variant: PropTypes.oneOf(['secondary']),
  size: PropTypes.oneOf(['small']),
  styles: PropTypes.object,

};

export { ScaleTag as default };
