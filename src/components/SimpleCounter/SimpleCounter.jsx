import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

import '../web-components/simple-counter';

const id = uuidv4();

function SimpleCounter(props) {
  const WrappedTag = ReactWrapper('simple-counter');

  return (
    <WrappedTag {...props} id={id}>
      {props.children}
    </WrappedTag>
  );
}

SimpleCounter.propTypes = {
  /**
   * @uxpinpropname Label
   * */
  children: PropTypes.node,
  // disabled: PropTypes.bool,
  // dismissable: PropTypes.bool,
  // href: PropTypes.string,
  // target: PropTypes.string,
  // variant: PropTypes.oneOf(['secondary']),
  // size: PropTypes.oneOf(['small']),
  // styles: PropTypes.object,

};

export { SimpleCounter as default };
