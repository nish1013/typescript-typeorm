import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserEntity } from './entity/user.entity'; // Add other entities as needed
import { CustomNamingStrategy } from './utils/custom-naming-strategy';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1', // Use IPv4 address instead of 'localhost'
  port: 3306,
  username: 'root', // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'social', // Specify the 'social' database
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
  namingStrategy: new CustomNamingStrategy() // Use custom naming strategy
});
