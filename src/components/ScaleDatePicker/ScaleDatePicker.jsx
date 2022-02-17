import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleDatePicker(props) {
  const WrappedDatePicker = ReactWrapper('scale-date-picker');

  return (
    <WrappedDatePicker {...props} id={id}></WrappedDatePicker>
  );
}

ScaleDatePicker.propTypes = {
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  identifier: PropTypes.string,
  role: PropTypes.string,
  direction: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  firstDayOfWeek: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.string,
  popupTitle: PropTypes.string,
  localization: PropTypes.object,
  dateAdapter: PropTypes.object,
};

export { ScaleDatePicker as default };
