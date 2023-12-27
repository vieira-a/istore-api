import { ProductDto } from '../dtos';
import { ProductEntity } from '../entities';

export const mapDtoProduct = (data: ProductEntity[]): ProductDto[] => {
  const products = data.map((field) => {
    const product = new ProductDto();

    product.name = field.name;
    product.category = field.category;
    product.quantity = field.quantity;

    return product;
  });
  return products;
};
