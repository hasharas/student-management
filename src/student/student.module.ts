import { Module } from "@nestjs/common";
//import { ConfigModule } from "@nestjs/config";
import { Dbconnection } from "./student.source";


@Module({
      providers: [...Dbconnection],
      exports:[...Dbconnection]
})

export class DbModule{}