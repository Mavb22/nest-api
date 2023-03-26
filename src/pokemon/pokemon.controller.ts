import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }
  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 },
    ]),
  )
  uploadFile(
    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
      file?: Express.Multer.File[];
    },
  ) {
    return this.pokemonService.uploadFiles(files);
  }
}
