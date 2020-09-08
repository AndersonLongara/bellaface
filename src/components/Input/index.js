import React, { useRef, useEffect, useState, useCallback} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import {Container, Error} from './styles';

function Input({name,icon: Icon, ...rest}) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handlerInputFocus = useCallback(() => {
    setIsFocused(true);
  },[])

  const handlerInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!! inputRef.current.value);
  },[])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  },[fieldName, registerField ])

  return (
    <Container isErrored={!! error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handlerInputFocus}
        onBlur={handlerInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error &&
      <Error title={error}>
        <FiAlertCircle color="#c53030" size={20}/>
      </Error>}
    </Container>
  )
}

export default Input;
