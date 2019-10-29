import React from 'react';
import PHeader from '../pieces/PHeader.jsx';
import PFooter from '../pieces/PFooter.jsx';
import FilterStatusOrder from '../pieces/statusOrderKitchen.jsx';

const ViewKitchen = () => (
  <div>
    <PHeader />
    <FilterStatusOrder />
    <PFooter />
  </div>
);
export default ViewKitchen;
