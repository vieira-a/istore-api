import { mapperDtoToEntityArrays } from '../../../modules/shared/helpers';
import { CreateProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export const productDataMock: CreateProductDto = {
  name: 'Product 1',
  category: 'Category 1',
  quantity: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};
export const productEntityMock = new ProductEntity();

export const productsResolvedMock = mapperDtoToEntityArrays(
  [productDataMock],
  ProductEntity,
);
