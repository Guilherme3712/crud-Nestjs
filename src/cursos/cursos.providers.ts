import { DataSource } from 'typeorm';
import { CURSOS } from './cursos.entity';

export const cursosProviders = [
  {
    provide: 'COURSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CURSOS),
    inject: ['DATA_SOURCE'],
  },
];