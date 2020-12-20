import {DefaultCrudRepository} from '@loopback/repository';
import {Pago, PagoRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagoRepository extends DefaultCrudRepository<
  Pago,
  typeof Pago.prototype.pagoId,
  PagoRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(Pago, dataSource);
  }
}
