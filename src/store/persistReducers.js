import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'bellaface',
      storage,
      whiteist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
