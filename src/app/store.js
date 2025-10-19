import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/Products/reducers';

export default configureStore({
  reducer: {
    products: productReducers,
  },
});
