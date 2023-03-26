
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class User extends Document {
    //
    @Prop({
        index:true,
        type:String,
        minlength: 1,
        required:true,
    })
    name: string;
    //
    @Prop({
        index:true,
        type:String,
        minlength: 1,
        required:true,
    })
    surname:string;
    //
    @Prop({
        index:true,
        type:String,
        minlength: 8,
        maxlength:16,
        required:true,
        unique:true,
    })
    username:string;
    //
    @Prop({
        index:true,
        type:Date,
        required:true,
    })
    birthday:Date
    //
    @Prop({
        index:true,
        type:Number,
        min: 1,
        required:true,
    })
    age:number;
    //
    @Prop({
        index:true,
        type: String,
        minlength:10,
        required:true,
    })
    email:string;
    //
    @Prop({
        index:true,
        type: String,
        minlength:10,
        required:true,
    })
    password:string;
    //
    //
    @Prop({
        index:true,
        type: String,
    })
    img:string;
    //
    @Prop({
        index:true,
        type: Boolean,
        default:false
    })
    confirm:boolean;
    //
    @Prop({
        index:true,
        type: Boolean,
        default:false
    })
    removed:boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
