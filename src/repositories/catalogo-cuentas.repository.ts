import {DefaultCrudRepository} from '@loopback/repository';
import {CatalogoCuentas, CatalogoCuentasRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CatalogoCuentasRepository extends DefaultCrudRepository<
  CatalogoCuentas,
  typeof CatalogoCuentas.prototype.cuentaId,
  CatalogoCuentasRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(CatalogoCuentas, dataSource);
  }
}
