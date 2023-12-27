import { PageDto, PageOptionsDto } from '../../../modules/shared/dtos';
import { ProductDto, ProductFilterDto, UpdateProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export interface CreateProductUsecase {
  create: (productData: ProductDto) => Promise<ProductEntity>;
}

export interface ReadProductsUsecase {
  read: (
    pageOptionsDto: PageOptionsDto,
    filters: ProductFilterDto,
  ) => Promise<PageDto<ProductDto>>;
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
