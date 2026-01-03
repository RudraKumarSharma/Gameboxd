import app from "./app.js";

const PORT = 5000;

try {
  app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
  });
} catch (error) {
  console.log("Error: Express server not running");
}
