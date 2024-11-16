import { AppDataSource } from "../data-source";
import { NewUser, User } from '../domain/user';
import { UserMapper } from '../domain/user/user.mapper';
import { UserEntity } from "../entity/user.entity";

export class UserRepository {
  // Create and save a new user
  async create(newUser: NewUser): Promise<User> {
    const user = new UserEntity();
    user.firstName = newUser.firstName;
    user.lastName = newUser.lastName;

    const repo = AppDataSource.getRepository(UserEntity);
    const created = await repo.save(user);

    const mapper = new UserMapper();

    return mapper.from(created);
  }
}