import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { cursosProviders } from './cursos.providers';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CursosController],
  providers: [
    ...cursosProviders,
    CursosService,
  ],
})
export class CModule {}