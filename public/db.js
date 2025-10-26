// db.js
import mysql from "mysql2/promise";

const dbConfig = {
  host: "jgomez139mysql.mysql.database.azure.com", // Ejemplo: mydbserver.mysql.database.azure.com
  user: "jgomez",              // Ejemplo: adminuser@mydbserver
  password: "310548JesusM",                   // Contraseña del usuario
  database: "jgomez139mysql",                 // Ejemplo: app_db
  port: 3306,
  ssl: {
    rejectUnauthorized: true                   // Azure requiere conexión SSL
  }
};

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("✅ Conectado a la base de datos MySQL en Azure");
    return connection;
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error.message);
    throw error;
  }
};
