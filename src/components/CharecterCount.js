import React from 'react';
import { useRecoilValue } from 'recoil'

import { charCountState } from '../atom/text/selectors/charCount'

export default function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count} </>
}