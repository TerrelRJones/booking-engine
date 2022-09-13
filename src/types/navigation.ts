//add additional screens here
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

//replace undefined with params to send
export type AppParamList = {
  Home: undefined;
  HotelInfoScreen: {
    id?: string;
    datesArr: string[];
  };
  DatesScreen: undefined;
  StripeScreen: {
    datesArr: string[];
  };
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
