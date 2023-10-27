import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CURSOS } from './cursos.entity';

@Injectable()

export class CursosService {
  
  constructor(
    @Inject('COURSES_REPOSITORY')
    private CursosRepository: Repository<CURSOS>,
  ) {}

  getCursos(): Promise<CURSOS[]> {  //Promise a grosso modo promete que irá chegar dados para retornar
    return this.CursosRepository.find();
}

  findOne(id: number): Promise<CURSOS | null> {
    return this.CursosRepository.findOneBy({ id });
  }

  addCurso(curso): Promise<any> {
    return new Promise(resolve => {
        this.CursosRepository.save(curso); //função save adiciona um item dentro de um array
        resolve(this.CursosRepository)
    })
}


  async deleteCurso(id: number): Promise<void> {
    await this.CursosRepository.delete(id);
  }
  



  
}