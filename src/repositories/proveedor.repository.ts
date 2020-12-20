import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedor, ProveedorRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.proveedorId,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
