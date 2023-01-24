import { Sequelize } from "sequelize";
import db from "../configdb/Database.js"

const {DataTypes}= Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    kasus: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    

},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();