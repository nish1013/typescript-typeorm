import { AppDataSource } from "../data-source";
import { UserEntity } from "../entity/user.entity";

export class UserRepository {
  // Create and save a new user
  async create(): Promise<UserEntity> {
    const user = new UserEntity();

    const repo = AppDataSource.getRepository(UserEntity);
    return repo.save(user);
  }
}