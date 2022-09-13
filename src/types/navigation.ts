//add additional screens here
import { Room } from './hotelModels';

//replace undefined with params to send
export type AppParamList = {
  Home: undefined;
  HotelInfoScreen: {
    id: string;
  };
  RoomInfoScreen: { roomData: Room };
  DatesScreen: undefined;
};

//from react navigation docs
//declaration merging
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
