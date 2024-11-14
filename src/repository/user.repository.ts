import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UserRepository {
  // Create and save a new user
  async create(): Promise<User> {
    const user = new User();

    const repo = AppDataSource.getRepository(User);
    return repo.save(user);
  }
}