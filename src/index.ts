import { AppDataSource } from "./data-source";
import { UserRepository } from './repository/user.repository';

// Initialize the data source
async function initializeApp() {
  try {
    // Initialize
    await AppDataSource.initialize();
    console.log("Data source has been initialized!");

    await play();

     // Close the data source connection
     await AppDataSource.destroy();
  } catch (error) {
    console.error("Error during data source initialization:", error);
  }
}

// Start the application
initializeApp();


// Try CRUD
async function play() {
  const userRepo = new UserRepository();
  const created = await userRepo.create();
  console.log(`User ${created.id} created.`);
}
