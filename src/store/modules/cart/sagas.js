import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { format } from 'date-fns';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Qualidade indisponível no estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Qualidade indisponível no estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

function* addToRequest({product, comments}) {

  try {
    const dateFormatted = format( new Date(), "dd/MM/yyyy")

    const newOrder = yield api.post('orders', {
      customerID: 1,
      total_order: product.length,
      created_at: dateFormatted,
      comments: comments
    })

    product.map( p => {
      const newOrderProduct = api.post('orderProduct', {
        orderID: newOrder.data.id,
        productID: p.id,
        quantity: p.amount,
        created_at: dateFormatted,
        unit_price: p.priceFormatted,
        total_price: p.subtotal
      })
    })
    if(product.length > 0) {
      history.push('/');
    }
    toast.success('Pedido finalizado com sucesso!')

  }catch(err) {

  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/ADD_REQUEST_SUCCESS', addToRequest),
]);
