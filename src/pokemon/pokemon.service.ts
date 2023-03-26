import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { storage } from '../config/config.firebase';
import { uploadFile } from 'src/functions/uploadFiel';
@Injectable()
export class PokemonService {
  bucket = storage.bucket();
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}
  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
      // console.log(JSON.stringify(error.errors.no.message));
    }
  }
  private handleExceptions(error:any){
    if (JSON.stringify(error.errors.no)){
      console.log(JSON.stringify(error.errors.no.message))
    }
    switch (JSON.stringify(error.errors)) {
      case JSON.stringify(error.errors.no):
         console.log(JSON.stringify(error.errors.no.message))
        break;
    }
    // if(error.errors.no){
    //   console.log('El valor minimo del numero es de 0');
    // }
  }
  uploadFiles(files: {
    image?: Express.Multer.File[];
    file?: Express.Multer.File[];
  }) {
    if (files.image && files.file) {
      const response = {
        image: {
          originName: files.image[0].originalname,
          filename: files.image[0].fieldname,
        },
        file: {
          originName: files.file[0].originalname,
          filename: files.file[0].fieldname,
        },
      };
      const file = uploadFile(files.file[0], this.bucket);
      const image = uploadFile(files.image[0], this.bucket);
      // const file = File(files.file[0], this.bucket);
      // const image = File(files.image[0], this.bucket);
      // return {file,image};
    }

  }
  
}
