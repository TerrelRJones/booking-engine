export interface Image {
  url: string;
  title: string;
}

export interface ResortFeatures {
  wifi: boolean;
  fitnessCenterAccess: boolean;
  poolAccess: boolean;
}

export interface DateAvailability {
  date: Date | string;
  isBookable: boolean;
}

export interface CalanderAvailability {
  rooms: Room[];
}

export interface Room {
  id: string;
  priceNight: string;
  images: Image[];
  summary: string;
  availability: DateAvailability[];
}

export interface Hotel {
  id: string;
  hotelName: string;
  summary: string;
  isBookable: boolean;
  checkIn: string;
  checkOut: string;
  url: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  images: Image[];
  resortDetails: ResortFeatures;
  rooms: Room[];
}

export interface Hotels {
  hotels: Hotel[];
}
