import React from 'react'

import { BenefitsProps } from '../lib/interfaces';
import { benefitsText } from '../constants';

function Benefits({lang}: BenefitsProps) {
  const benefitsTextData = benefitsText[lang];

  return (
    <div>Benefits</div>
  )
}

export default Benefits