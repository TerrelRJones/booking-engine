//add additional screens here
//replace undefined with params to send
export type AppParamList = {
  Home: undefined;
  HotelInfoScreen: {
    id: string;
  };
  DatesScreen: undefined;
};

//from react navigation docs
//declaration merging
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
