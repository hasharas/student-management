import { Inject, Injectable } from '@nestjs/common';
import { DataSource,EntityManager } from 'typeorm';

@Injectable()
export class UserService {
      private manager: EntityManager
      constructor(
            @Inject('DataSource')
            private dataSource: DataSource
      ){
            this.manager = this.dataSource.manager;
      }

      //create user
      async createUser(){
            
      }

      //update user

      //delete user

      //getall user

      //get user by id
}
