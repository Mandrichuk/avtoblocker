import React from 'react';

import {FooterProps} from '../lib/interfaces';
import {footerText} from '../constants/index';

function Footer({lang}: FooterProps) {
  const footerTextData = footerText[lang]

  return (
    <div>Footer</div>
  );
}

export default Footer;