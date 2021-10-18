// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { todo } = initSchema(schema);

export {
  todo
};