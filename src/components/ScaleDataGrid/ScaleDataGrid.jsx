import * as PropTypes from 'prop-types';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactWrapper from '../UXPinWrapper/react-wrapper';

const id = uuidv4();

function ScaleDataGrid(props) {
  const WrappedDataGrid = ReactWrapper('scale-data-grid');

  return (
    <WrappedDataGrid {...props} id={id} style={{'width':'100%'}} />
  );
}

ScaleDataGrid.propTypes = {
  heading: PropTypes.string,
  fields: PropTypes.array,
  rows: PropTypes.array,
};

ScaleDataGrid.defaultProps = {
  heading: 'Default Data Grid',
  fields: [
    { type: 'number', label: 'ID' },
    { type: 'text', label: 'Name', sortable: true },
    { type: 'date', label: 'Time', stretchWeight: 1 },
  ],
  rows: [
    [1, 'John', '12:30'],
    [2, 'Mary', '2:12'],
    [3, 'Patek', '16:01'],
    [4, 'Heidi', '3:15'],
    [5, 'Muhammad', '21:45'],
  ],
};

export { ScaleDataGrid as default };
