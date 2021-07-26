import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: .5rem;
    font-size: 2rem;
    color: #000;
    outline: none;
    border: 1px solid #1D164D;
    border-radius: .3rem;

    &:focus {
      border: none;
      outline: 1px solid #BADC58;
    }
    &:focus + span,
    &:valid + span {
        top: -12px;
        left: 5px;
        font-size: 1.3rem;
        padding: 0 10px;
        background: #fff;
    }
    &[type="date"] {
      color: transparent;
      &:focus,
      &:valid {
        color: #000;
      }
    }

    ${({ error }) => error && css`
      color: #fc5050;
      border-color: #fc5050 !important;
    `}
  }

  span {
    position: absolute;
    top: 8px;
    left: 15px;
    font-size: 1.4rem;
    letter-spacing: .05em;
    pointer-events: none;
    font-weight: bold;
    transition: .4s;
    color: #1D164D;

    ${({ error }) => error && css`
      color: #fc5050;
    `}
  }
`
