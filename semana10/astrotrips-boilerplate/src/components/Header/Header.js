import React from 'react';

import { HeaderWrapper } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
      <HeaderWrapper>
        <img src={`${logo}`} />
    </HeaderWrapper>
  );
}
