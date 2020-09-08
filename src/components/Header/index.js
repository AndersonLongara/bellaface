import React from 'react';
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import history from '../../services/history';

import logo from '../../assets/img/logo.svg';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const dispatch = useDispatch();

  function HandlerHome() {
    history.push('/');
  }

  function HandlerSingOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <button onClick={() => HandlerHome()}>
          <div>
            <h1>BELLAFACE</h1>
            <h4>Distribuidora de cosméticos</h4>
          </div>
        </button>
        <button onClick={HandlerSingOut}>
          <h4>Sair</h4>
        </button>

      </div>

      <span>|</span>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

