import React from 'react';

import { OrderProps } from '../lib/interfaces';
import { orderText } from '../constants/index';

function Order({lang}: OrderProps) {
  const orderTextData = orderText[lang];

  return (
    <div>Order</div>
  );
}

export default Order;