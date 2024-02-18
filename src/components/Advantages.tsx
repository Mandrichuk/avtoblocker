import React from 'react';

import {AdvantagesProps} from '../lib/interfaces';
import {advantagesText} from '../constants/index';

function Advantages({lang}: AdvantagesProps) {
  const advantages = advantagesText[lang];

  return (
    <div>Advantages</div>
  );
}

export default Advantages;