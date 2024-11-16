import { UserRepository } from './repository/user.repository';

/**
 * A playground for testing application features.
 */
export async function runPlayground(): Promise<void> {
  const userRepo = new UserRepository();

  // Create a new user
  const newUser = {
    firstName: 'John',
    lastName: 'Doe' // Optional, but included for clarity
  };

  const createdUser = await userRepo.create(newUser);
  console.log(
    `User ${createdUser.id} created with name ${createdUser.firstName} ${
      createdUser.lastName || ''
    }.`
  );
}
