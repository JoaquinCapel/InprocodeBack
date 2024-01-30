import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Almacén', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
  });

  export default sequelize;