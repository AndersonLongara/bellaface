import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../Utils/getValidationsErros';

import { signInRequest } from '../../store/modules/auth/actions';

import {Container, Content, Background} from './styles';

import Input from '../../components/Input';


const Entrar = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handlerSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const {email, password} =  data;

      //console.log(email, password);

      dispatch(signInRequest(email, password));

    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>BELLAFACE</h1>
        <h4>Distribuidora de cosméticos</h4>
        <Form ref={formRef} onSubmit={handlerSubmit}>
          <h3>Faça seu logon</h3>

          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>

        </Form>
        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Entrar;
