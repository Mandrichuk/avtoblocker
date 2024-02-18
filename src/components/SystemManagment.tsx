import React from 'react'

import {SystemManagementProps} from "../lib/interfaces";
import {systemManagementText} from "../constants/index";

function SystemManagment({lang}: SystemManagementProps) {
  const systemManagementTextData = systemManagementText[lang];

  return (
    <div>SystemManagment</div>
  )
}

export default SystemManagment