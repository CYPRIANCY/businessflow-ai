import { userSchema } from '../schemas/user.schema.js';

const validUser = {
  name: ' ',
  email: 'CYPRIAN@EXAMPLE.COM',
  age: 31,
};

const result = userSchema.safeParse(validUser);

console.log(result);