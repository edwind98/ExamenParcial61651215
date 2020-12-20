import {DefaultCrudRepository} from '@loopback/repository';
import {InformarcionGeneral, InformarcionGeneralRelations} from '../models';
import {MercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InformarcionGeneralRepository extends DefaultCrudRepository<
  InformarcionGeneral,
  typeof InformarcionGeneral.prototype.informarcionGeneralId,
  InformarcionGeneralRelations
> {
  constructor(
    @inject('datasources.Mercado') dataSource: MercadoDataSource,
  ) {
    super(InformarcionGeneral, dataSource);
  }
}
