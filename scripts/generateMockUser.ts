import { faker } from '@faker-js/faker';
import fs from 'fs/promises';
import path from 'path';

export const image =
  'https://media.architecturaldigest.com/photos/603fd63ce5e723e4f559fb16/16:9/w_2560%2Cc_limit/1300769954';

export const generateUser = () => {
  return {
    id: faker.database.mongodbObjectId(),
    name: 'Lebron James',
    image,
    hotelBooked: [],
    dates: [],
    totalDue: [],
  };
};

async function main() {
  const user = generateUser();
  await fs.writeFile(
    path.join(__dirname, '..', 'db.json'),
    JSON.stringify(user, null, 2),
  );
}

//ts-node ./scripts/generateMockUser.ts
main();
