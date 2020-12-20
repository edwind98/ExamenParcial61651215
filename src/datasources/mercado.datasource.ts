import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Mercado',
  connector: 'mssql',
  url: 'mssql://Josue0619_SQLLogin_1:	ne3uintqq5@MercadoJosue.mssql.somee.com/MercadoJosue',
  host: 'MercadoJosue.mssql.somee.com',
  port: 1433,
  user: 'Josue0619_SQLLogin_1',
  password: '1ne3uintqq5',
  database: 'MercadoJosue'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MercadoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mercado';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mercado', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
