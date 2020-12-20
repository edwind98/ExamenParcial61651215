import {DefaultCrudRepository} from '@loopback/repository';
import {Factura, FacturaRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.facturaId,
  FacturaRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(Factura, dataSource);
  }
}
