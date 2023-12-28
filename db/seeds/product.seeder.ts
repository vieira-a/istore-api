import { ProductEntity } from 'src/modules/product/entities';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class ProductSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const productRepository = dataSource.getRepository(ProductEntity);

    const productData: ProductEntity[] = [
      {
        id: 1,
        name: 'Sabre de luz',
        category: 'Espadas',
        quantity: 10,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: 'Capa Jedi',
        category: 'Roupas',
        quantity: 50,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];

    const newProduct = productRepository.create(productData);
    await productRepository.save(newProduct);
  }
}
