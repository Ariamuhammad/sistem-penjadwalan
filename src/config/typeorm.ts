import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { $npmConfigName1695534220055 } from '../migrations/1695534220055-$npm_config_name';
import { $npmConfigName1695538110173 } from '../migrations/1695538110173-$npm_config_name';
import { $npmConfigName1695539691153 } from '../migrations/1695539691153-$npm_config_name';
import { $npmConfigName1695574521244 } from '../migrations/1695574521244-$npm_config_name';

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
  migrations: [$npmConfigName1695574521244]
});
