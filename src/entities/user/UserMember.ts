import { table } from "console";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { MemberEntity } from "./member";
import { UserEntity } from "./User";

@Table({
    tableName:'user_member',timestamps:false
})
export class UserMember extends Model<UserMember> {
    @Column({
        field:'member_id',
        primaryKey:true,
        type:DataType.STRING
    })
    @ForeignKey(()=>MemberEntity)
    memberId!:string;

    @Column({
        field:'user_id',
        primaryKey:true,
        type:DataType.STRING
    })
    @ForeignKey(()=>UserEntity)
    userId!:string

    @Column({ allowNull: true, type: DataType.STRING(255) })
    description?: string;
}