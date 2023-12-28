import { CityEntity } from '../entities';

export const mapCity = (data: any): any => {
  const cities = data.map((field: any) => {
    const city = new CityEntity();

    city.id = field.id;
    city.name = field.nome;

    return city;
  });
  return cities;
};
