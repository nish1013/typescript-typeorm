import { AppDataSource } from '../data-source';
import { NewUser, User } from '../domain/user';
import { UserMapper } from '../domain/user/user.mapper';
import { UserEntity } from '../entity/user.entity';

export class UserRepository {
  private readonly repo = AppDataSource.getRepository(UserEntity);
  private readonly mapper = new UserMapper();

  /**
   * Creates and saves a new user in the database.
   * @param newUser - The data for the new user.
   * @returns The created user as a domain object.
   */
  public async create(newUser: NewUser): Promise<User> {
    // Map the input data to an entity
    const userEntity = this.repo.create({
      firstName: newUser.firstName,
      lastName: newUser.lastName
    });

    // Save the entity to the database
    const savedEntity = await this.repo.save(userEntity);

    // Map the saved entity to the domain model
    return this.mapper.from(savedEntity);
  }
}
