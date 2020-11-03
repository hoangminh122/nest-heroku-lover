import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table } from "sequelize-typescript";
import { FileEntity } from "../file/Files";
import { Group } from "./Group";

@Table({
    tableName:'member',
    timestamps:false,
    indexes: [{
        unique: true,
        fields: ['code']
      }]
})
export class Member extends Model<Member> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id! :string;

    @Column({
        field:'avatar',
        allowNull:true,
        type:DataType.STRING(255)
    })
    avatar: string;
    
    @Column({allowNull:false,type:DataType.STRING(255)})
    fullName?:string

    @Column({
        field:'date_of_birth',
        allowNull:true,
        type:DataType.DATEONLY
      })
    dateOfBirth: Date;

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

    @ForeignKey(() => Group)
    @Column({ field: 'group_id', allowNull: true, type: DataType.UUID })
    groupId!:string
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