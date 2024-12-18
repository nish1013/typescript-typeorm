import BigNumber from 'bignumber.js';
import { Product } from '../product';
import { User } from '../user';

export interface NewAccount {
  balance: BigNumber;
  product: Product;
  user: User;
}

export interface Account extends NewAccount {
  id: number;
}
