import {DefaultCrudRepository} from '@loopback/repository';
import {Pedidos, PedidosRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidosRepository extends DefaultCrudRepository<
  Pedidos,
  typeof Pedidos.prototype.pedidoId,
  PedidosRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(Pedidos, dataSource);
  }
}
