import {configureStore} from '@reduxjs/toolkit';
import SearchReducer from './reducers/SearchReducer';
import {hotelApi} from './services/hotelApi';
import {loungesApi} from './services/loungesApi';
import {taskApi} from './services/tasksApi';
export const store = configureStore({
  reducer: {
    SearchReducer: SearchReducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [loungesApi.reducerPath]: loungesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(taskApi.middleware)
      .concat(hotelApi.middleware)
      .concat(loungesApi.middleware),
});
