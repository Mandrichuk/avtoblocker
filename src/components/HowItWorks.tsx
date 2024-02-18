import React from 'react'

import { HowItWorksProps } from '../lib/interfaces';
import { howItWorksText } from '../constants';

function HowItWorks({lang}: HowItWorksProps) {
  const howItWorksTextData = howItWorksText[lang];

  return (
    <div>HowItWorks</div>
  )
}

export default HowItWorks