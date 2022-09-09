import { faker } from '@faker-js/faker';
import fs from 'fs/promises';
import path from 'path';
import { BedSize, DateAvailability } from 'types/hotelModels';

const generateHotels = (num: number) => {
  const hotels = [];
  while (num >= 0) {
    hotels.push({
      id: faker.database.mongodbObjectId(),
      hotelName: faker.company.name(),
      summary: faker.lorem.sentences(2),
      isBookable: true,
      checkIn: '4:00 PM',
      checkOut: '11:00 AM',
      url: '#',
      address: {
        street: faker.address.streetAddress(false),
        city: 'Las Vegas',
        state: 'NV',
        zip: faker.address.zipCodeByState('NV'),
      },
      phone: faker.phone.number('877 ###-####'),
      images: generateImages(5),
      resortDetails: {
        wifi: faker.datatype.boolean(),
        fitnessCenterAccess: faker.datatype.boolean(),
        poolAccess: faker.datatype.boolean(),
      },
      rooms: generateRooms(10),
    });
    num--;
  }
  const hotelsObj = {
    hotels,
  };
  return hotelsObj;
};

const generateRooms = (num: number) => {
  const rooms = [];
  while (num >= 0) {
    rooms.push({
      id: faker.database.mongodbObjectId(),
      priceNight: faker.commerce.price(100, 400, 2, '$'),
      bedType: Object.values(BedSize)[Math.floor(Math.random() * 3)],
      images: [
        {
          id: faker.database.mongodbObjectId(),
          url: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
          alt: 'casino',
        },
        {
          id: faker.database.mongodbObjectId(),
          url: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
          alt: 'room',
        },
        {
          id: faker.database.mongodbObjectId(),
          url: 'https://www.hospitalitynet.org/picture/xxl_153098435.jpg?t=1552639660',
          alt: 'bathroom',
        },
        {
          id: faker.database.mongodbObjectId(),
          url: 'https://sandinmysuitcase.com/wp-content/uploads/2021/09/Sybaris-Northbrook-Chicago-Majestic-Suite.jpg.webp',
          alt: 'pool',
        },
      ],
      summary: faker.lorem.sentences(2),
      availability: [...generateAvailability()],
    });
    num--;
  }
  return rooms;
};

const generateAvailability = (): DateAvailability[] => {
  let currentDate = new Date();

  const datesAvailability: DateAvailability[] = [];
  for (let i = 1; i <= 365; i++) {
    const dateCopy = new Date(currentDate.getTime());
    const newDate = dateCopy.setDate(dateCopy.getDate() + i);
    const dateObj = {
      date: new Date(newDate),
      isBookable: faker.datatype.boolean(),
    };
    datesAvailability.push(dateObj);
  }
  return datesAvailability;
};

const generateImages = (num: number) => {
  const images = [];
  while (num >= 0) {
    images.push({
      url: faker.image.city(400, 250),
    });
    num--;
  }
  return images;
};

async function main() {
  const hotels = generateHotels(10);
  await fs.writeFile(
    path.join(__dirname, '..', 'db.json'),
    JSON.stringify(hotels, null, 2),
  );
}

//to execute
//ts-node ./scripts/generateMockHotels.ts
main();
