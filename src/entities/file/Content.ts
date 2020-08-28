import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { UserEntity } from '../user/User';

@Table({
  tableName: 'contents',
  timestamps: false ,
  
})
export class ContentEntity extends Model<ContentEntity> {
    @PrimaryKey
    @Column({
        type:DataType.BIGINT,
    })
    id?: string;

    @ForeignKey(() =>UserEntity)
    @Column({
        type:DataType.UUID,
        defaultValue:UUIDV4
    })
    userId!:string
    @Column({ allowNull: true, type: DataType.STRING(255) })
    title?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    content?: string;


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

    // @BelongsToMany(() => UserEntity,'userId')
    // public user:UserEntity
   

}