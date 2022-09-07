//add additional screens here
//replace undefined with params to send
export interface AppParamList {
  Home: undefined;
  HotelInfoScreen: undefined;
  DatesScreen: undefined;
}

//from react navigation docs
//declaration merging
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
