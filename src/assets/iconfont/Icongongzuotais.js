/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icongongzuotais = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1047 1024" width={size} height={size} {...rest}>
      <Path
        d="M162.909091 162.909091h768v535.272727a69.818182 69.818182 0 0 1-69.818182 69.818182H162.909091a69.818182 69.818182 0 0 1-69.818182-69.818182V232.727273a69.818182 69.818182 0 0 1 69.818182-69.818182z"
        fill={getIconColor(color, 0, '#1467FF')}
      />
      <Path
        d="M162.909091 837.818182m34.909091 0l628.363636 0q34.909091 0 34.909091 34.909091l0 0q0 34.909091-34.909091 34.909091l-628.363636 0q-34.909091 0-34.909091-34.909091l0 0q0-34.909091 34.909091-34.909091Z"
        fill={getIconColor(color, 1, '#1467FF')}
        opacity=".5"
      />
    </Svg>
  );
};

Icongongzuotais.defaultProps = {
  size: 18,
};

Icongongzuotais = React.memo ? React.memo(Icongongzuotais) : Icongongzuotais;

export default Icongongzuotais;
