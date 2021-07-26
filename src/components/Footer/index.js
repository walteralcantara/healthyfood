import React from 'react';

import { FooterContainer } from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
        <div>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms and Conditions</a>
        </div>
      </div>
      <p style={{ display: 'block' }}>Made with ❤ by
        <a href="https://github.com/wmalcantara" target='_blank' rel="noreferrer" style={{ color: '#BADC58' }}>
          Walter
        </a>
      </p>
    </FooterContainer>
  );
}
