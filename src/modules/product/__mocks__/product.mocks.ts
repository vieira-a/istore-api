import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../modules/shared/dtos';
import {
  mapperDtoToEntityArrays,
  mapperDtoToEntity,
} from '../../../modules/shared/helpers';
import { ProductDto, ProductFilterDto } from '../dtos';
import { ProductEntity } from '../entities';

export const productDataMock: ProductDto = {
  name: 'Product 1',
  category: 'Category 1',
  quantity: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export const productMock = {
  id: 1,
  name: 'Product 1',
  category: 'Category 1',
  status: 'active',
  quantity: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
};

export const updateProductMock = {
  name: 'Product 1',
  category: 'Category 1',
  status: 'active',
  quantity: 1,
};

export const productEntityMock = new ProductEntity();

export const productsResolvedMock = mapperDtoToEntityArrays(
  [productDataMock],
  ProductEntity,
);

export const productResolvedMock = mapperDtoToEntity(
  productMock,
  ProductEntity,
);

export const pageOptionDtoMock = new PageOptionsDto();

export const pageMetaParamsMock = {
  pageOptionsDto: pageOptionDtoMock,
  itemCount: 10,
};

export const pageMetaDtoMock = new PageMetaDto(pageMetaParamsMock);

export const pageDtoMock: PageDto<any> = {
  data: [productDataMock],
  meta: pageMetaDtoMock,
};

export const productFiltersDtoMock = new ProductFilterDto();
