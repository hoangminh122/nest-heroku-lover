import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { FileEntity } from '../file/Files';
import { UserEntity } from './User';
  
@Table({ tableName: 'user_file', timestamps: false })
export class UserFile extends Model<UserFile> {
    @Column({
      field: 'file_id',
      primaryKey: true,
      type: DataType.STRING,
    })
    @ForeignKey(() => FileEntity)
    fileId!: string;

    @Column({
      field: 'user_id',
      primaryKey: true,
      type: DataType.STRING,
    })
    @ForeignKey(() => UserEntity)
    userId!: string;
  
    @Column({ allowNull: true, type: DataType.STRING(255) })
    description?: string;

    // @BelongsTo(() => FileEntity, {
    //   constraints: false,
    //   foreignKey: 'file_id',
    // })
    // file: FileEntity;
  }
  