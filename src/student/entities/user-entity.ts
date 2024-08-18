import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
      @PrimaryGeneratedColumn('uuid')
      id: string

      @Column({type: 'varchar', length:200})
      firstName: string

      @Column({type: 'varchar', length:200})
      middleName: string

      @Column({type: 'varchar', length:200})
      LastName: string

      @Column({type: 'varchar', length:100})
      age: string

      @Column({type: 'varchar', length:20})
      nic: string

      @Column({type: 'varchar', length:10})
      tel: string

}