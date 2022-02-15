import * as React from 'react';
import ScaleDropdown from '../ScaleDropdown';
import ScaleOption from '../../ScaleOption/ScaleOption';

export default (
  <ScaleDropdown
    uxpId="dropdown"
    label="scale">
    <ScaleOption uxpId="option-1" value="1">item 1</ScaleOption>
    <ScaleOption uxpId="option-2" value="2">item 2</ScaleOption>
    <ScaleOption uxpId="option-3" value="3">item 3</ScaleOption>
  </ScaleDropdown>
);
