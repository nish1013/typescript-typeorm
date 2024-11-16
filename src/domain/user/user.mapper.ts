import { UserEntity } from '../../entity/user.entity';
import { NewUser, User } from './user';

export class UserMapper {
  public from(entity: UserEntity): User {
    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName
    };
  }
}
