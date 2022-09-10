import { generateHotels } from './generateMockHotels';
import { generateUser } from './generateMockUser';
import fs from 'fs/promises';
import path from 'path';

async function main() {
  const mockJSON = {
    user: generateUser(),
    hotels: generateHotels(10),
  };

  await fs.writeFile(
    path.join(__dirname, '..', 'db.json'),
    JSON.stringify(mockJSON, null, 2),
  );
}

main();

//ts-node ./scripts/generateMockData.ts
