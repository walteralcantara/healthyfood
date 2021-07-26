import React, { useState, useEffect } from 'react';

import { HeaderContainer, HeaderContent, StyledBurger, Nav } from './styled';
import { setScrolling } from '../../utils/setScrolling';
import { useContextAPI } from '../../context/ContextAPI';

export default function Header() {
  const [open, setOpen] = useState(false);

  const { toggleModal } = useContextAPI();

  useEffect(() => {
    if (window !== undefined) {
      setScrolling('header');
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1 className='logo'>Healthy Food</h1>
        <Nav open={open}>
          <li>
            <a href='#recipes'>Healthy Recipes</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#join'>Join</a>
          </li>
          <li className='register'>
            <a href='#register' onClick={toggleModal}>
              Register
            </a>
          </li>
        </Nav>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </HeaderContent>
    </HeaderContainer>
  );
}
