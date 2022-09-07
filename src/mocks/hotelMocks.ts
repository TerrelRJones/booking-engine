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

export const hotel = {
  id: 'd47ce1ff5d24b74b29f0fdb5',
  hotelName: 'Nicolas, Auer and Davis',
  summary:
    'Libero sint in impedit provident debitis dignissimos. Et quidem numquam.',
  isBookable: true,
  checkIn: '4:00 PM',
  checkOut: '11:00 AM',
  url: '#',
  address: {
    street: '661 Garrison Hills',
    city: 'Las Vegas',
    state: 'NV',
    zip: '46554',
  },
  phone: '877 695-2455',
  images: [
    {
      url: 'https://loremflickr.com/400/250/city',
    },
    {
      url: 'https://loremflickr.com/400/250/city',
    },
    {
      url: 'https://loremflickr.com/400/250/city',
    },
  ],
  resortDetails: {
    wifi: true,
    fitnessCenterAccess: true,
    poolAccess: false,
  },
  rooms: [
    {
      id: 'bb9e5fd848b4bbdd2c4eeedc',
      priceNight: '$109.00',
      bedType: 'full',
      images: [
        {
          id: 'Room1',
          url: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
          alt: 'test',
        },
        {
          id: 'Room2',
          url: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
          alt: 'test',
        },
        {
          id: 'Room3',
          url: 'https://www.hospitalitynet.org/picture/xxl_153098435.jpg?t=1552639660',
          alt: 'test',
        },
        {
          id: 'Room4',
          url: 'https://sandinmysuitcase.com/wp-content/uploads/2021/09/Sybaris-Northbrook-Chicago-Majestic-Suite.jpg.webp',
          alt: 'test',
        },
      ],
    },
  ],
};
