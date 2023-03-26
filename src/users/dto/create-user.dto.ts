import { Equals, IsBoolean, IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, Min, MinLength, Validate} from 'class-validator';



export class CreateUserDto {
    // 
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(32)
    name: string;
    // 
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(64)
    surname: string;
    // 
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(16)
    username: string;
    // 
    @IsString()
    @IsNotEmpty()
    birthdate: String;
    //
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    age: number;
    //
    @IsEmail()
    @IsNotEmpty()
    @MinLength(8)
    email: string;
    // 
    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,16}$/,
    { message: 'The password must have between 8 and 16 characters and contain at least one uppercase letter, one lowercase letter, a number, and a special character'})
    password: string;
    // 
    @IsString()
    @IsNotEmpty() 
    confirm_password: string;
    
    @IsString()
    @IsOptional()
    img: string;
    //
    @IsBoolean()
    @IsOptional()
    confirm: boolean;
    //
    @IsBoolean()
    @IsOptional()
    removed: boolean;
}
