import { UUIDV4 } from 'sequelize';
import { Column, Model, Table, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt, IsUUID, PrimaryKey, BelongsToMany } from 'sequelize-typescript';
import { UserEntity } from '../user/User';
import { UserFile } from '../user/UserFile';

@Table({
  tableName: 'files',
  timestamps: false ,
  
})
export class FileEntity extends Model<FileEntity> {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue: UUIDV4,
    })
    id?: string;

    @Column({ allowNull: false, type: DataType.STRING(255) })
    originalName?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    fileName?: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    size?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    url?: string;

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

    @BelongsToMany(() => UserEntity,() => UserFile)
    users?: UserEntity[];

}