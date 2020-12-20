import {DefaultCrudRepository} from '@loopback/repository';
import {PedidoDetalle, PedidoDetalleRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidoDetalleRepository extends DefaultCrudRepository<
  PedidoDetalle,
  typeof PedidoDetalle.prototype.pedidoDetalleId,
  PedidoDetalleRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(PedidoDetalle, dataSource);
  }
}
