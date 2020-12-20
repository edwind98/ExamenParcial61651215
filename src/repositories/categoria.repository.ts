import {DefaultCrudRepository} from '@loopback/repository';
import {Categoria, CategoriaRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.categoriaId,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
