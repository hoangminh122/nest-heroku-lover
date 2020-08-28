
import { Sequelize } from 'sequelize-typescript';
import { ContentEntity } from 'src/entities/file/Content';
import { FileEntity } from 'src/entities/file/Files';
import { UserFile } from 'src/entities/user/UserFile';
import { UserEntity } from '../../entities/user/User';
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

    const sequelize = new Sequelize({ ...config });
    sequelize.addModels([UserEntity,FileEntity,UserFile,ContentEntity]);
    await sequelize.sync({ force: false });
    return sequelize;
  },
};
