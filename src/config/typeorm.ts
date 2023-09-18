import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { $npmConfigName1693735177033 } from "../migrations/1693735177033-$npm_config_name"
import { $npmConfigName1693747672003 } from '../migrations/1693747672003-$npm_config_name';
import { $npmConfigName1694666007533 } from '../migrations/1694666007533-$npm_config_name';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [$npmConfigName1694666007533]
});
