import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleRatingStars(props) {
  const WrappedRatingStars = ReactWrapper('scale-rating-stars');

  return (
    <WrappedRatingStars {...props} id={id} /> 
  );
}

ScaleRatingStars.propTypes = {
  max: PropTypes.number,
  rating: PropTypes.number,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  value: PropTypes.string,
  inputId: PropTypes.string,
  inputAutofocus: PropTypes.bool,
  ariaLabelTranslation: PropTypes.string,
  label: PropTypes.string,
  infoText: PropTypes.string,
  hideLabel: PropTypes.bool,
};

export { ScaleRatingStars as default };
