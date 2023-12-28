import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';

import { ProductSeeder } from './product.seeder';

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    await runSeeder(dataSource, ProductSeeder);
  }
}
