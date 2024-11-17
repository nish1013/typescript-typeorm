import { UserRepository } from './repository/user.repository';
import { ProductRepository } from './repository/product.repository';

/**
 * A playground for testing application features.
 */
export async function runPlayground(): Promise<void> {
  await createUser();
  await createProduct();
}

/**
 * Creates a new user and logs the result.
 */
async function createUser(): Promise<void> {
  const userRepo = new UserRepository();

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

/**
 * Creates a new product and logs the result.
 */
async function createProduct(): Promise<void> {
  const productRepo = new ProductRepository();

  const newProduct = {
    code: 'RSAV',
    name: 'Regular Saving',
    description: 'A regular saving product' // Optional, but included for clarity
  };

  const createdProduct = await productRepo.create(newProduct);

  console.log(
    `Product ${createdProduct.code} created with name ${createdProduct.name} and description "${createdProduct.description}".`
  );
}
