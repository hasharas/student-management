import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource,EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/student/entities/user-entity';

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
      async createUser(data:CreateUserDto){
            try{
                  const user = await this.manager.findOneBy(UserEntity,{nic: data.nic})
                  if(user){
                        throw new Error('User is Already exists,go to login')
                  }
                  const createUser = await this.manager.create(UserEntity, {
                        nic: data.nic,
                        firstName: data.firstName,
                        middleName: data.middleName,
                        LastName: data.LastName,
                        age: data.age,
                        tel: data.tel
                  })

                  await this.manager.save(UserEntity, createUser)

                  return {message: 'user create successfullly',createUser}
            }catch(error){
                  throw new NotFoundException(`${error.message}`)
            };
            
      }

      //update user

      //delete user

      //getall user

      //get user by id
}
