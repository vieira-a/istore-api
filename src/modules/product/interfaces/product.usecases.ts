import { CreateProductDto, UpdateProductDto } from '../dtos';
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

export interface UpdateProductUsecase {
  update: (productId: number, productData: UpdateProductDto) => void;
}

export interface DeleteProductUsecase {
  delete: (productId: number) => void;
}
