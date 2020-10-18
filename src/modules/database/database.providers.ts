
import { Sequelize } from 'sequelize-typescript';
import { Content } from 'src/entities/file/Content';
import { FileEntity } from 'src/entities/file/Files';
import { Group } from 'src/entities/user/Group';
import { GroupFile } from 'src/entities/user/GroupFile';
import { Member } from 'src/entities/user/Member';
import { UserMember } from 'src/entities/user/UserMember';
import { databaseConfig } from '../../shared/config/database';


export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case 'prod':
      case 'production':
        config = databaseConfig.production;
        break;
      case 'dev':
      case 'development':
        config = databaseConfig.development;
        break;
      default:
        config = databaseConfig.development;
    }

    const sequelize = new Sequelize({...config });
    sequelize.addModels([Group,FileEntity,GroupFile,Content,Member,UserMember]);
    await sequelize.sync({ force: true });
    return sequelize;
  },
};
