import { AppDataSource } from '../data-source';
import { Product } from '../domain/product';
import { ProductMapper } from '../domain/product/product.mapper';
import { ProductEntity } from '../entity/product.entity';

export class ProductRepository {
  private readonly repo = AppDataSource.getRepository(ProductEntity);
  private readonly mapper = new ProductMapper();

  /**
   * Creates and saves a new product in the database.
   * @param product - The data for the new product.
   * @returns The created product as a domain object.
   */
  public async create(product: Product): Promise<Product> {
    // Map the input data to a ProductEntity
    const entity = this.repo.create({
      code: product.code,
      name: product.name,
      description: product.description
    });

    // Save the ProductEntity to the database
    const savedEntity = await this.repo.save(entity);

    // Map the saved ProductEntity back to the Product domain model
    return this.mapper.from(savedEntity);
  }
}
