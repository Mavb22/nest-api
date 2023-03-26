/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Pokemon extends Document {
    @Prop({
        unique:true,
        index: true,
        type: String,
        minlength: 1,
        required:true,
    })
    name: string;
    @Prop({
        unique:true,
        index:true,
        type:Number,
        min: 1,
        required: true,
    })
    no: number;
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);