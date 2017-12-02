import Algolia from 'algoliasearch';
import { config } from 'dotenv';
config();

const client = Algolia(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

client.deleteIndex('test_1'); //flush index

export const index = client.initIndex('test_1');
