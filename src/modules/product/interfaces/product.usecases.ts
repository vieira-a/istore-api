import { CreateProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export interface CreateProductUsecase {
  create: (productData: CreateProductDto) => Promise<ProductEntity>;
}
