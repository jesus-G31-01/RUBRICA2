import express from "express";
import { connectDB } from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const db = await connectDB();
    const [rows] = await db.query("SELECT NOW() AS fecha;");
    res.send(`✅ Conexión exitosa a MySQL. Fecha del servidor: ${rows[0].fecha}`);
    await db.end();
  } catch (error) {
    console.error("❌ Error completo:", error);
    res.status(500).send("❌ Error conectando a la base de datos: " + error.message);
  }
});

app.listen(3000, () => console.log("Servidor ejecutándose en http://localhost:3000"));

