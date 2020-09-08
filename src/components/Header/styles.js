import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1020px;
  margin: 0 auto;
  padding: 50px 20px 50px;

  > div {

    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-right: 30px;

    button {
      background: transparent;
      outline: none;
      border: 0;



      h1 {
        color: #FECB00;
        font-size: 50px;
      }

      &:hover {
        opacity: 0.7;
      }
    }

     h4 {
      color: #fff;
      font-weight: 100;
    }
  }

  span {
      color: #fff;
      margin-right: 30px;
    }
`;


export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: block;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
