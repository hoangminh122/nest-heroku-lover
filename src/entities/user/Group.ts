import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
import { Content } from '../file/Content';
import { FileEntity } from '../file/Files';
import { GroupFile } from './GroupFile';
import { Member } from './Member';

@Table({
  tableName: 'group',
  indexes: [{
    unique: true,
    fields: ['code']
  }] 
})
export class Group extends Model<Group> {
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
      field:'own_name',
      allowNull:true,
      type:DataType.BIGINT
    })
    ownId: number;

    @Column({
      field:'day_start',
      allowNull:true,
      type:DataType.STRING(255)
    })
    dayStart: string;

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

    
    @BelongsToMany(() => FileEntity,() => GroupFile)
    files?: FileEntity[];

    @HasMany(() => Content,'userId')
    contents: Content[];

    // @HasMany(() => Member,'userId')
    // members:Member[]
    

}