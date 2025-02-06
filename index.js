// config.mjs
import { loadEnvFile } from "node:process";
loadEnvFile();

console.log("PORT", process.env.PORT); // Verifica que la variable PORT se haya cargado

import app from "./src/app.js";

const PORT = process.env.PORT || 3000; // Valor por defecto en caso de que PORT no esté definido
console.log("PORT", PORT);

app.get("/", (req, res) => {
  res.send("<h1>Hi pipollllllllllll</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(PORT);
});
