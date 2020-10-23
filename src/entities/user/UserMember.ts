import { table } from "console";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "./Group";
import { Member } from "./member";

@Table({
    tableName:'user_member',timestamps:false
})
export class UserMember extends Model<UserMember> {
    @Column({
        field:'member_id',
        primaryKey:true,
        type:DataType.STRING
    })
    @ForeignKey(()=>Member)
    memberId!:string;

    @Column({
        field:'user_id',
        primaryKey:true,
        type:DataType.STRING
    })
    @ForeignKey(()=>Group)
    userId!:string

    @Column({ allowNull: true, type: DataType.STRING(255) })
    description?: string;
}