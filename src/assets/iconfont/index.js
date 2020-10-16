/* eslint-disable */

import React from 'react';

import Iconwodes from './Iconwodes';
import Iconmingpiannor from './Iconmingpiannor';
import Icongongzuotais from './Icongongzuotais';
import Iconfuliaonor from './Iconfuliaonor';
import Icongongzuotainor from './Icongongzuotainor';
import Iconwodenor from './Iconwodenor';
import Iconfuliaos from './Iconfuliaos';
import Iconmingpians from './Iconmingpians';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'wodes':
      return <Iconwodes key="1" {...rest} />;
    case 'mingpiannor':
      return <Iconmingpiannor key="2" {...rest} />;
    case 'gongzuotais':
      return <Icongongzuotais key="3" {...rest} />;
    case 'fuliaonor':
      return <Iconfuliaonor key="4" {...rest} />;
    case 'gongzuotainor':
      return <Icongongzuotainor key="5" {...rest} />;
    case 'wodenor':
      return <Iconwodenor key="6" {...rest} />;
    case 'fuliaos':
      return <Iconfuliaos key="7" {...rest} />;
    case 'mingpians':
      return <Iconmingpians key="8" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
