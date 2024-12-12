import app from "./src/app.js";
import { PORT } from "./config.js";

app.get("/", (req, res) => {
  res.send("<h1>Hi pipollllllllllll</h1>");
});

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
