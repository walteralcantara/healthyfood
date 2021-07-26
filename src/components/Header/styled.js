import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: transparent;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 100;
  transition: background-color 0.5s ease;

  &.scrolling-active {
    background: #badc58;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    h1 {
      color: #fff !important;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1360px;

  .logo {
    color: #badc58;
    font-size: 3.2rem;
    @media (max-width: 768px) {
      color: #fff;
      font-size: 2rem;
      margin: 0 0 0 1rem;
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 1;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    transform-origin: 1px;
    transition: 0.3s ease;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  text-align: center;
  padding: 0.875rem;
  margin: 0px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;

  .register {
    background: #fff;
    border-radius: 0.3rem;
    padding: 1rem 2rem;
    a {
      color: #badc58 !important;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  li:first-child {
    @media (max-width: 768px) {
      margin-top: 6rem;
    }
  }

  li {
    text-transform: uppercase;
    margin: 0 2rem;

    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      transition: 0.7s ease;
      &:hover {
        filter: brightness(0.8);
      }
    }

    @media (max-width: 768px) {
      padding: 0rem;

      &:nth-child(1)::after,
      &:nth-child(2)::after,
      &:nth-child(3)::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var(--secondary);
        margin: 1rem 0 1rem 0;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #badc58;
    position: fixed;
    filter: brightness(0.95);

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
  }
`;
