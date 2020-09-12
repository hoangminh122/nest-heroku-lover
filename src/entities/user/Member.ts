import { Column, CreatedAt, DataType, DeletedAt, Model, PrimaryKey, Table } from "sequelize-typescript";
import { FileEntity } from "../file/Files";

@Table({
    tableName:'member',
    timestamps:false
})
export class MemberEntity extends Model<FileEntity> {
    @PrimaryKey
    @Column({
        type:DataType.INTEGER
    })
    id?: Number 

    @Column({allowNull:true,type:DataType.STRING(255)})
    fullName?:string

    @Column({
        field:'date_of_birth',
        allowNull:true,
        type:DataType.STRING
      })
    dateOfBirth: string;

    @Column({
        field:'code',
        allowNull:false,
        type:DataType.STRING
      })
    code: string;

    @Column({
        field:'gender',
        allowNull:true,
        type:DataType.STRING
    })
    gender?:string

    @Column({
        field:'created_at',
        allowNull:true,
        type:DataType.DATE,
        defaultValue: new Date(),
    })
    @CreatedAt
    createdAt?: Date;

    @Column({
        field:'deleted_at',
        allowNull:true,
        type:DataType.DATE,
        defaultValue: new Date(),
    })
    @DeletedAt
    deletedAt?: Date;
}