import {DefaultCrudRepository} from '@loopback/repository';
import {CuentaContable, CuentaContableRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CuentaContableRepository extends DefaultCrudRepository<
  CuentaContable,
  typeof CuentaContable.prototype.cuentaContableId,
  CuentaContableRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(CuentaContable, dataSource);
  }
}
