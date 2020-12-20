import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaDetalle, FacturaDetalleRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaDetalleRepository extends DefaultCrudRepository<
  FacturaDetalle,
  typeof FacturaDetalle.prototype.facturaDetalleId,
  FacturaDetalleRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(FacturaDetalle, dataSource);
  }
}
