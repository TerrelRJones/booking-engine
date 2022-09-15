//add additional screens here
import { Room } from './hotelModels';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

//replace undefined with params to send
//navigate prop string and object to send
export type AppParamList = {
  Home: undefined;
  HotelInfoScreen: {
    id?: string;
    datesArr?: string[];
  };
  RoomInfoScreen: { roomData: Room };
  DatesScreen: undefined;
  PaymentScreen: {
    datesArr: string[];
    startDay: Date | null;
    endDay: Date | null;
  };
  HotelCategoryScreen: { navigationTitle: string };
  HomeTab: undefined;
  BookingsTab: undefined;
  ProfileTab: undefined;
};

//from react navigation docs
//declaration merging
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}

export type AppNavigationProps<RouteName extends keyof AppParamList> =
  NativeStackNavigationProp<AppParamList, RouteName>;

export interface ScreenProps<RouteName extends keyof AppParamList>
  extends NativeStackScreenProps<AppParamList, RouteName> {}
