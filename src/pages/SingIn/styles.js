import styled from 'styled-components';
import { shade } from 'polished';

import entrarBackground from '../../assets/entrar-background.jpg';



export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  h1 {
    color: #FECB00;
    font-size: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 500px;

  h4 {
    color: #F4EDE8;
    font-weight: 100;
  }

  form {
    margin: 60px 0;
    width: 340px;
    text-align: center;


  h3 {
    margin-bottom: 24px;
    color: #F4EDE8;

  }

  button {
    background: #2687E9;
    height: 56px;
    width: 100%;
    border-radius: 10px;
    border: 0;
    padding: 0px 0px;
    color: #312e38;
    font-weight: bold;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:focus {
      outline: none !important;
    }

    &:hover {
      background: ${shade(0.2, '#2687E9')}
    }
  }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }

  > a {
    color: #FECB00;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
        color: ${shade(0.2, '#FECB00')}
      }
    }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${entrarBackground}) no-repeat center;
  background-size: cover;
`;
