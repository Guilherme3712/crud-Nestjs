import { Controller, Get, Param, Delete, Query, Body, Post } from '@nestjs/common';
import { CURSOS } from './cursos.entity';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/cursos.create.dto';
import { cursosProviders } from './cursos.providers';

@Controller('cursos')
export class CursosController {
    
    constructor(private readonly cursosService: CursosService) {}

    @Get('listar') //Método get puxa os dados do banco
    async getCursos(): Promise<CURSOS[]> {
        const cursos = await this.cursosService.getCursos();
        return cursos;
    }

    @Get('listar/:cursoId')
    async findOne(@Param('cursoId') cursoId) {  //está passando o parametro do curso que queremos
        const curso = await this.cursosService.findOne(cursoId);
        return curso;
    }
    
    @Post()
    async addCurso(@Body() createCursoDto: CreateCursoDto) {  //Body diz q precisa de um corpo //DTO é uma classe que descreve a estrutura dos nossos dados (id, nome,etc)
        const curso = await this.cursosService.addCurso(createCursoDto);
        return curso;
    }

    @Delete()
    async deleteCurso(@Query() query) {
        const cursos = await this.cursosService.deleteCurso(query.cursoId);
        return cursos;
    }

    



}