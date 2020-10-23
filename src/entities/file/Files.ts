import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany, Sequelize } from 'sequelize-typescript';
import { Group } from '../user/Group';
import { GroupFile } from '../user/GroupFile';

@Table({
  tableName: 'files',
  timestamps: false ,
  
})
export class FileEntity extends Model<FileEntity> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
    })
    id?: string;

    @Column({ allowNull: false, type: DataType.STRING(255) })
    originalName?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    fileName?: string;

    @Column({ allowNull: true, type: DataType.BIGINT })
    day?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    size?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    url?: string;

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

    @BelongsToMany(() => Group,() => GroupFile)
    groups?: Group[];

}