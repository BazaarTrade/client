import React from 'react';

const OpenOrderRow = () => {
  return (
    <tr className='open-order-row'>
      <td className='cell'>2024-10-11 14:19:56</td>
      <td className='cell'>IVFUN /USDT</td>
      <td className='cell'>Limit</td>
      <td className='cell red'>Sell</td>
      <td className='cell'>0.038000</td>
      <td className='cell'>0.00000/15,085.67232</td>
      <td className='cell'>573.255548 USDT</td>
      <td className='cell'>Cancel</td>
    </tr>
  );
}

export default OpenOrderRow;
