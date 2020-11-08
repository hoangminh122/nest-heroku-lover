import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { FileEntity } from '../file/Files';
import { Group } from './Group';
  
@Table({ tableName: 'group_file', timestamps: false })
export class GroupFile extends Model<GroupFile> {
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
    @ForeignKey(() => Group)
    userId!: string;
  
    @Column({ allowNull: true, type: DataType.STRING(255) })
    description?: string;

    // @BelongsTo(() => FileEntity, {
    //   constraints: false,
    //   foreignKey: 'file_id',
    // })
    // file: FileEntity;
  }
  