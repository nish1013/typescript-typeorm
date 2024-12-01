import { ProductEntity } from '../../entity/product.entity';
import { Product } from './product';

export class ProductMapper {
  public from(entity: ProductEntity): Product {
    return {
      id: entity.id,
      code: entity.code,
      name: entity.name,
      description: entity.description
    };
  }
}
