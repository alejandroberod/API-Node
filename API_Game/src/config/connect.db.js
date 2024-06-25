import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config({ path: '../../.env' });

const sequelize = new Sequelize(
    "api_node_game",
    "root",
    "",
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

async function testConnection() {
    try {
        await sequelize
            .authenticate()
            .then(() => {
                console.log("DATABASE CONNECTED...");
            })
            .catch((err) => {
                console.log(err);
            })
    } catch (error) {
        console.error(`Unable to connect to the database: ${error}`);
    }
}

testConnection();
export default sequelize;