import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CModule } from './cursos/cursos.module';

@Module({
  imports: [
    CModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
