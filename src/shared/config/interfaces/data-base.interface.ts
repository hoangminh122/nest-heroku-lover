
export interface IDatabaseConfigAttributes {
    username: string;
    password: string;
    database: string;
    host :string;
    port :number;
    dialect :string;
    logging: boolean | Function;
    force :boolean;
    timezone:string;
    dialectOptions: {
        ssl: {
            require: boolean,
            rejectUnauthorized: boolean // <<<<<<< YOU NEED THIS
          }
    }
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
    production:IDatabaseConfigAttributes;
    test:IDatabaseConfigAttributes;
}