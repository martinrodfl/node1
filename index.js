import app from "./src/app.js";
import { PORT } from "./config.js";

console.log(PORT);

app.get("/", (req, res) => {
  res.send("<h1>Hi pipollllllllllll</h1>");
});

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
  console.log(process.env.PORT);
});
