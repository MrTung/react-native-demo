/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Iconmingpians = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1047 1024" width={size} height={size} {...rest}>
      <Path
        d="M162.909091 186.181818h768v581.818182a69.818182 69.818182 0 0 1-69.818182 69.818182H162.909091a69.818182 69.818182 0 0 1-69.818182-69.818182V256a69.818182 69.818182 0 0 1 69.818182-69.818182z"
        fill={getIconColor(color, 0, '#1467FF')}
      />
      <Path
        d="M209.454545 349.090909m93.09091 0l0 0q93.090909 0 93.090909 93.090909l0 0q0 93.090909-93.090909 93.090909l0 0q-93.090909 0-93.09091-93.090909l0 0q0-93.090909 93.09091-93.090909Z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M186.181818 581.818182m46.545455 0l139.636363 0q46.545455 0 46.545455 46.545454l0 0q0 46.545455-46.545455 46.545455l-139.636363 0q-46.545455 0-46.545455-46.545455l0 0q0-46.545455 46.545455-46.545454Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M512 372.363636m23.272727 0l186.181818 0q23.272727 0 23.272728 23.272728l0 0q0 23.272727-23.272728 23.272727l-186.181818 0q-23.272727 0-23.272727-23.272727l0 0q0-23.272727 23.272727-23.272728Z"
        fill={getIconColor(color, 3, '#FFFFFF')}
        opacity=".5"
      />
      <Path
        d="M512 488.727273m23.272727 0l279.272728 0q23.272727 0 23.272727 23.272727l0 0q0 23.272727-23.272727 23.272727l-279.272728 0q-23.272727 0-23.272727-23.272727l0 0q0-23.272727 23.272727-23.272727Z"
        fill={getIconColor(color, 4, '#FFFFFF')}
        opacity=".5"
      />
      <Path
        d="M512 605.090909m23.272727 0l279.272728 0q23.272727 0 23.272727 23.272727l0 0q0 23.272727-23.272727 23.272728l-279.272728 0q-23.272727 0-23.272727-23.272728l0 0q0-23.272727 23.272727-23.272727Z"
        fill={getIconColor(color, 5, '#FFFFFF')}
        opacity=".5"
      />
    </Svg>
  );
};

Iconmingpians.defaultProps = {
  size: 18,
};

Iconmingpians = React.memo ? React.memo(Iconmingpians) : Iconmingpians;

export default Iconmingpians;
