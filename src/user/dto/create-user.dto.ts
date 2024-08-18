//import { Transform } from "class-validator";

import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{

      @IsString()
      @IsNotEmpty()
      firstName: string;

      @IsString()
      @IsNotEmpty()
      middleName: string;

      @IsString()
      @IsNotEmpty()
      LastName: string;

      @IsString()
      @IsNotEmpty()
      age: string;

      @IsString()
      @IsNotEmpty()
      nic: string;

      @IsString()
      @IsNotEmpty()
      tel: string;

}