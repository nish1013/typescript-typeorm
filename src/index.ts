import { AppDataSource } from './data-source';
import { runPlayground } from './playground';

/**
 * Main application entry point.
 * Initializes the data source, performs operations, and closes the connection.
 */
async function initializeApp(): Promise<void> {
  try {
    // Initialize the data source
    await AppDataSource.initialize();
    console.log('Data source has been initialized!');

    // Run the playground for testing features
    await runPlayground();
  } catch (error) {
    console.error('Error during data source initialization:', error);
  } finally {
    // Ensure the data source is always closed
    await safelyCloseDataSource();
  }
}

/**
 * Safely closes the data source connection.
 */
async function safelyCloseDataSource(): Promise<void> {
  try {
    await AppDataSource.destroy();
    console.log('Data source connection closed.');
  } catch (error) {
    console.error('Error closing the data source:', error);
  }
}

// Start the application
initializeApp();
