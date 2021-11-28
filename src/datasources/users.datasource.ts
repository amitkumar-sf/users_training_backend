import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'users',
  connector: 'postgresql',
  url: 'postgres://Amit:Amit1397@postgresql-59425-0.cloudclusters.net:17904/users',
  host: 'postgresql-59425-0.cloudclusters.net',
  port: 17904,
  user: 'Amit',
  password: 'Amit1397',
  database: 'users'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'users';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.users', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
