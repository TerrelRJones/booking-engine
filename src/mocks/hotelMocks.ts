import { BedSize, CalanderAvailability, Hotels } from '../types/hotelModels';

export const hotels: Hotels = {
  hotels: [
    {
      id: '1',
      hotelName: 'caesars',
      summary: 'awesome hotel',
      isBookable: true,
      checkIn: '4:00 PM',
      checkOut: '11:00 AM',
      url: '#',
      address: {
        street: '3645 Las Vegas Boulevard South',
        city: 'Las Vegas',
        state: 'NV',
        zip: '89109',
      },
      phone: '877 603-1243',
      images: [
        {
          url: 'https://loremflickr.com/400/250/city',
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
          images: [{ url: '' }],
          summary: 'awesome room',
          availability: [
            { date: '5/12/2020', isBookable: true },
            { date: '5/12/2020', isBookable: true },
          ],
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
      images: [{ url: '' }],
      summary: 'awesome room',
      availability: [{ date: '5/12/2020', isBookable: true }],
    },
  ],
};
