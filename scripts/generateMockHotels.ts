import { faker } from '@faker-js/faker';
import { BedSize } from '../src/types/hotelModels';
import { DateAvailability } from '../src/types/hotelModels';
import fs from 'fs/promises';
import path from 'path';

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
      images: [
        { url: faker.image.city(400, 250) },
        { url: faker.image.city(400, 250) },
        { url: faker.image.city(400, 250) },
      ],
      resortDetails: {
        wifi: faker.datatype.boolean(),
        fitnessCenterAccess: faker.datatype.boolean(),
        poolAccess: faker.datatype.boolean(),
      },
      rooms: generateRooms(25),
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
      images: generateImages(3),
      summary: faker.lorem.sentences(2),
      availability: [...generateAvailability(10)],
    });
    num--;
  }
  return rooms;
};

const generateAvailability = (num: number): DateAvailability[] => {
  const dates: DateAvailability[] = [];
  while (num >= 0) {
    const date: DateAvailability = {
      date: faker.date.between(
        '2022-01-01T00:00:00.000Z',
        '2023-01-01T00:00:00.000Z',
      ),
      isBookable: faker.datatype.boolean(),
    };
    dates.push(date);
    num--;
  }
  return dates;
};

const generateImages = (num: number) => {
  const images = [];
  while (num >= 0) {
    images.push({
      url: faker.image.nightlife(400, 250),
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
