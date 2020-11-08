import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { Group } from '../user/Group';

@Table({
  tableName: 'contents',
  timestamps: false ,
  
})
export class Content extends Model<Content> {
    @PrimaryKey
    @Column({
        type:DataType.BIGINT,
        autoIncrement:true,
        // primaryKey:true
    })
    id?: string;

    @ForeignKey(() =>Group)
    @Column({
        type:DataType.UUID,
        defaultValue:UUIDV4
    })
    groupId!:string
    @Column({ allowNull: true, type: DataType.STRING(255) })
    title?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    content?: string;

    @Column({ allowNull: true, type: DataType.BIGINT })
    day?: number;

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