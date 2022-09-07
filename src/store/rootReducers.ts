import { hotelApi } from 'services/hotelService';

const reducers = {
  [hotelApi.reducerPath]: hotelApi.reducer,
};
export default reducers;
