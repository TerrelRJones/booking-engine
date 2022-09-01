import {
  BedSize,
  CalanderAvailability,
  Hotels,
} from '../const/models/hotelModels';

const hotels: Hotels = {
  hotels: [
    {
      id: '1',
      hotelName: 'caesars',
      summary: 'awesome hotel',
      isBookable: true,
      checkIn: '4:00 PM',
      checkOut: '11:00 AM',
      url: 'https://www.caesars.com/ballys-las-vegas',
      address: {
        street: '3645 Las Vegas Boulevard South',
        city: 'Las Vegas',
        state: 'NV',
        zip: '89109',
      },
      phone: '877 603-1243',
      images: [
        {
          url: 'https://www.beachimg.com',
          title: 'beach',
        },
      ],
      resortDetails: {
        wifi: true,
        fitnessCenterAccess: true,
        poolAccess: true,
      },
      rooms: [
        {
          id: '25',
          priceNight: '$400',
          bedType: BedSize.KING,
          images: [{ url: '', title: '' }],
          summary: 'awesome room',
          availability: [{ date: '5/12/2020', isBookable: true }],
        },
      ],
    },
  ],
};

const calanderAvailability: CalanderAvailability = {
  rooms: [
    {
      id: '25',
      priceNight: '$400',
      bedType: BedSize.KING,
      images: [{ url: '', title: '' }],
      summary: 'awesome room',
      availability: [{ date: '5/12/2020', isBookable: true }],
    },
  ],
};
