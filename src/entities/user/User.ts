import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
import { ContentEntity } from '../file/Content';
import { FileEntity } from '../file/Files';
import { UserFile } from './UserFile';

@Table({
  tableName: 'users',
  indexes: [{
    unique: true,
    fields: ['code']
  }] 
})
export class UserEntity extends Model<UserEntity> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:UUIDV4
    })
    id! :string;

    @Column({
        field:'avatar',
        allowNull:true,
        type:DataType.STRING(255)
    })
    avatar: string;

    @Column({
      field:'code',
      allowNull:false,
      type:DataType.STRING(20)
  })
  code: string;

    @Column({
        field:'full_name',
        allowNull:false,
        type:DataType.STRING(50)
    })
    fullName:string;

    @Column({
      field:'own_name',
      allowNull:true,
      type:DataType.STRING(50)
    })
    ownName: string;

    @Column({
      field:'gender',
      allowNull:true,
      type:DataType.STRING(50)
    })
    gender: string;

    @Column({
      field:'day_start',
      allowNull:true,
      type:DataType.STRING(255)
    })
    dayStart: string;
    
    @Column({
      field:'date_of_birth',
      allowNull:false,
      type:DataType.STRING
    })
    dateOfBirth: string;

    @Column({
      field: 'created_at',
      allowNull: true,
      type: DataType.DATE,
      defaultValue: new Date(),
    })
    @CreatedAt
    createdAt?: Date;

    @UpdatedAt
    @Column({
        field: 'updated_at',
        allowNull: true,
        type: DataType.DATE,
        defaultValue: new Date(),
    })
    updatedAt?: Date;

    @DeletedAt
    @Column({ field: 'deleted_at', allowNull: true, type: DataType.DATE })
    deletedAt?: Date;

    
    @BelongsToMany(() => FileEntity,() => UserFile)
    files?: FileEntity[];

    @HasMany(() => ContentEntity,'userId')
    contents: ContentEntity[];

}