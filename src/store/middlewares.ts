import { hotelApi } from 'services/hotelService';

const middlewares = [hotelApi.middleware];
export default middlewares;
