import styled, { css } from 'styled-components';

import Tooltip from '../../Components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px 0;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    color:  #0682FF;
    border-color: #0682FF;
  `}

  ${props => props.isFilled && css`
    color:  #0682FF;
  `}



  input {
    flex: 1;
    background: transparent;
    border: 1px solid transparent;
    color: #F4EDE8;
    margin-right: 16px;

    &:focus {
      outline: none !important;
    }

    &::placeholder {
      color: #666360;
    }

  }
  svg {
      margin: 0 16px;
    }

`;

export const Error = styled(Tooltip)`
  height: 15px;

  svg {
      margin-right: 16px;
    }

  span {
    background: #c53030;
    color: #fff;

    &::before {
    border-color: #c53030 transparent;

    }
  }


`;
