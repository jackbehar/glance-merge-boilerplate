import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleBreadcrumb(props) {
  const WrappedBreadcrumb = ReactWrapper('scale-breadcrumb');

  return (
    <WrappedBreadcrumb {...props} id={id}>
      {props.children}
    </WrappedBreadcrumb> 
  );
}

ScaleBreadcrumb.propTypes = {
  /**
   * @uxpinignoreprop
   * */
  children: PropTypes.node,
  separator: PropTypes.string,
  styles: PropTypes.string,
};

export { ScaleBreadcrumb as default };
