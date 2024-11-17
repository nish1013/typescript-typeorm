import { ProductEntity } from '../../entity/product.entity';
import { Product } from './product';

export class ProductMapper {
  public from(entity: ProductEntity): Product {
    return {
      code: entity.code,
      name: entity.name,
      description: entity.description
    };
  }
}
