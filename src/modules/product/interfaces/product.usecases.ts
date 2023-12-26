import { CreateProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export interface CreateProductUsecase {
  create: (productData: CreateProductDto) => Promise<ProductEntity>;
}

export interface ReadProductsUsecase {
  read: () => Promise<ProductEntity[]>;
}

export interface ReadProductByIdUsecase {
  read: (productId: number) => Promise<ProductEntity>;
}
