import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.section`
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

export const Image = styled.div`
`;

export const ContentText = styled.div`
`;

export const Title = styled.h1`
  color: #1D164D;
  font-size: 3.2rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 1rem 0;
  }
`;

export const Subtitle = styled.h3`
  color: #9E9BAF;
  font-size: 1.6rem;
  font-family: 'Mulish', sans-serif;
  margin: 1rem 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 0 0 0;
  height: 5rem;
  max-width: 450px;
`;

export const Button = styled.button`
  background: #BADC58;
  border: 0;
  cursor: pointer;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: .3rem;
  height: 100%;
`;

export const Input = styled.input`
  margin: 0 .5rem 0 0;
  border: 1px solid #2D3561;
  height: 100%;
  padding: 1rem;
  width: 100%;
  border-radius: .5rem;

  &::placeholder {
    opacity: .5;
  }
`;
